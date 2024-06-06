const { ExperienceLevel, Sequelize } = require("../../models");
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ExperienceLevel, req);

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
  getRecordById(ExperienceLevel, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ExperienceLevel.findAll({
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
  saveRecord(ExperienceLevel, req, res);
};

self.update = async (req, res) => {
  updateRecord(ExperienceLevel, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ExperienceLevel, req, res);
};

module.exports = self;
