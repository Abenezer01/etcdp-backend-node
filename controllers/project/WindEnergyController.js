const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const { WindEnergy, Sequelize } = require("./../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
let self = {};



self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(WindEnergy, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id };
    const paginatedResult = await paginationHelper(WindEnergy, req, whereCondition);

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
  getRecordById(WindEnergy, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await WindEnergy.findAll({
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
  saveRecord(WindEnergy, req, res);
};

self.update = async (req, res) => {
  updateRecord(WindEnergy, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(WindEnergy, req, res);
};

module.exports = self;
