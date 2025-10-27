const {
  RailwayPowerSupplySafetyAndCompliance,
  Sequelize
} = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const {
  getRecordById,
  saveRecord,
  updateRecord,
  deleteRecord
} = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(RailwayPowerSupplySafetyAndCompliance, req);

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
  getRecordById(RailwayPowerSupplySafetyAndCompliance, req, res);
};

self.save = async (req, res) => {
  saveRecord(RailwayPowerSupplySafetyAndCompliance, req, res);
};

self.update = async (req, res) => {
  updateRecord(RailwayPowerSupplySafetyAndCompliance, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(RailwayPowerSupplySafetyAndCompliance, req, res);
};

module.exports = self;
