const {
  StakeholderStudyField,
  ActionState,
  Sequelize,
} = require("../../models");
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require("../../utils/helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const actionHelper = require("../utils/action-helper");
const { getModelAction } = require("../polymorphic/ActionStateController");
//const getModelAction = require("../polymorphic/ActionStateController");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderStudyField, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};
self.get = async (req, res) => {
  getRecordById(StakeholderStudyField, req, res);
};

self.getStakeholderStudyFieldByStakeholderId = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;
  const { id } = req.params;
  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { rows, count } = await StakeholderStudyField.findAndCountAll({
      limit,
      offset,
      where: {
        stakeholder_id: id,
      },
      include: ["studyfield", "studyprogram", "studylevel"],
      order: [["createdAt", order]],
    });

    // console.log("The status", rows[0].id);
    let newData = await Promise.all(
      rows.map(async (item) => {
        //console.log("The item id", item.dataValues);
        return {
          ...item.dataValues,
          status: await actionHelper.getAction(item.dataValues.id),
        };
      })
    );
    const response = paginate.getPagingData(
      { rows: newData, count },
      page,
      limit,
      count
    );

    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StakeholderStudyField.findAll({
      where: {
        name: {
          [Op.like]: "%" + text + "%",
        },
      },
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


self.save = async (req, res) => {
  saveRecord(StakeholderStudyField, req, res);
};

self.update = async (req, res) => {
  updateRecord(StakeholderStudyField, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StakeholderStudyField, req, res);
};

module.exports = self;
