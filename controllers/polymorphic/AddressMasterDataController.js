const { AddressMasterData  , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    const whereCondition = { };
    
    
    const includeOptions = [
      {
          model: AddressMasterData,
          as: "parentAddress"
      },
    ];
    const paginatedResult = await paginationHelper(AddressMasterData , req, whereCondition, includeOptions);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  const includeOptions = [
    {
        model: AddressMasterData,
        as: "parentAddress"
    },
  ];
  getRecordById(AddressMasterData , req, res, includeOptions);
};

self.save = async (req, res) => {
  saveRecord(AddressMasterData , req, res);
};

self.update = async (req, res) => {
  updateRecord(AddressMasterData , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(AddressMasterData , req, res);
};

self.getAddresses = async (req, res) => {
  try {
    const id = req.params.id;
    let addresses = [];

      if (id) {
        const parent = await AddressMasterData.findOne({
          attributes: {
            exclude: ["parent_id", "description", "created_at", "updated_at"],
          },
          where: { id } });
        
        if (!parent) {
          return res.status(404).json({ error: "Parent address not found" });
        }

        const children = await AddressMasterData.findAll({
          attributes: {
            exclude: ["parent_id", "description", "created_at", "updated_at"],
          },
          where: { parent_address_id: id } });


        addresses = [parent, ...children];
    } else {
        addresses = await AddressMasterData.findAll({
          attributes: {
            exclude: ["parent_id", "description", "created_at", "updated_at"],
          }
        });
    }

    return res.apiSuccess({
      data: addresses
    });

  } catch (error) {
    res.apiError(error);
  }
};

self.getDepartments = async (req, res) => {
  try {
    

    const arr = await Promise.all(
      addresses.map(async (dept) => {
        const userpos = await UserPosition.findAll({
          attributes: ["user_id"],
          where: { department_id: dept.id },
        });
        const userId = [...new Set(userpos.map((item) => item.user_id))].filter((n) => n);

        const staffs = await User.findAndCountAll({
          where: { id: { [Op.in]: userId } },
        });

        const pos = await Position.findOne({
          where: { department_id: dept.id, is_head: true },
        });

        const uspos = pos ? await UserPosition.findOne({ where: { position_id: pos.id } }) : null;
        const head = uspos ? await User.findOne({ where: { user_id: uspos.user_id } }) : null;

        return {
          id: dept.id,
          parent_node_id: dept.parent_department_id,
          name: dept.name,
          head: head || null,
          staff_no: staffs.count,
        };
      })
    );

    const result = id ? arr.map((dept) =>
      dept.id === id ? { ...dept, parent_node_id: null } : dept
    ) : arr;

    return res.apiSuccess({
      data: result
    });

  } catch (error) {
    res.apiError(error);
  }
};

module.exports = self;
