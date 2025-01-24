const { HydropowerScheme91D , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(HydropowerScheme91D, req);

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
  getRecordById(HydropowerScheme91D, req, res);
};

self.save = async (req, res) => {
  saveRecord(HydropowerScheme91D, req, res);
};

self.update = async (req, res) => {
  updateRecord(HydropowerScheme91D, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(HydropowerScheme91D, req, res);
};

module.exports = self;
