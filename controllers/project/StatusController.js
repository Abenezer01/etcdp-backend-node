const { Status, Sequelize } = require("../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Status, req);

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
  getRecordById(Status, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Status.findAll({
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
  saveRecord(Status, req, res);
};

self.update = async (req, res) => {
  updateRecord(Status, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Status, req, res);
};

module.exports = self;
