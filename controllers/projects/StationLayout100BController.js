const { StationLayout100B , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StationLayout100B, req);

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
  getRecordById(StationLayout100B, req, res);
};

self.save = async (req, res) => {
  saveRecord(StationLayout100B, req, res);
};

self.update = async (req, res) => {
  updateRecord(StationLayout100B, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StationLayout100B, req, res);
};

module.exports = self;
