const { ResourceType, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const paginationHelper = require("../utils/pagination-helper");
const dotenv = require("dotenv");
dotenv.config();
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ResourceType, req);

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
  getRecordById(ResourceType, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ResourceType.findAll({
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
  saveRecord(ResourceType, req, res);
};

self.update = async (req, res) => {
  updateRecord(ResourceType, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ResourceType, req, res);
};

module.exports = self;
