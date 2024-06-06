const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const { ProjectFinance, Sequelize } = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ProjectFinance, req);

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

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id }
    const paginatedResult = await paginationHelper(ProjectFinance, req, whereCondition);

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
  getRecordById(ProjectFinance, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ProjectFinance.findAll({
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
  saveRecord(ProjectFinance, req, res);
};

self.update = async (req, res) => {
  updateRecord(ProjectFinance, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProjectFinance, req, res);
};

module.exports = self;
