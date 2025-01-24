const { ProjectFinance45C1 , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  
  const modelNames = Object.keys(sequelize.models);
  return res.json(modelNames);
  try {
    const paginatedResult = await paginationHelper(ProjectFinance45C1, req);

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
  getRecordById(ProjectFinance45C1, req, res);
};

self.save = async (req, res) => {
  saveRecord(ProjectFinance45C1, req, res);
};

self.update = async (req, res) => {
  updateRecord(ProjectFinance45C1, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProjectFinance45C1, req, res);
};

module.exports = self;
