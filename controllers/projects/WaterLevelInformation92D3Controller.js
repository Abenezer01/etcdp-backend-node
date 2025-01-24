const { WaterLevelInformation92D3 , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(WaterLevelInformation92D3, req);

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
  getRecordById(WaterLevelInformation92D3, req, res);
};

self.save = async (req, res) => {
  saveRecord(WaterLevelInformation92D3, req, res);
};

self.update = async (req, res) => {
  updateRecord(WaterLevelInformation92D3, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(WaterLevelInformation92D3, req, res);
};

module.exports = self;
