const { InfrastructureSubCategory  , Sequelize, sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    // return res.json(Object.keys(sequelize.models));
    const paginatedResult = await paginationHelper(InfrastructureSubCategory , req);

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
  getRecordById(InfrastructureSubCategory , req, res);
};

self.save = async (req, res) => {
  saveRecord(InfrastructureSubCategory , req, res);
};

self.update = async (req, res) => {
  updateRecord(InfrastructureSubCategory , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(InfrastructureSubCategory , req, res);
};

module.exports = self;
