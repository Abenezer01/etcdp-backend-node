const { StudyLevel, Sequelize } = require("../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
let self = {};

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StudyLevel, req);

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
  getRecordById(StudyLevel, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StudyLevel.findAll({
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
  saveRecord(StudyLevel, req, res);
};

self.update = async (req, res) => {
  updateRecord(StudyLevel, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StudyLevel, req, res);
};

module.exports = self;
