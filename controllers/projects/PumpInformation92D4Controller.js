const { PumpInformation92D4 , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(PumpInformation92D4, req);

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
  getRecordById(PumpInformation92D4, req, res);
};

self.save = async (req, res) => {
  saveRecord(PumpInformation92D4, req, res);
};

self.update = async (req, res) => {
  updateRecord(PumpInformation92D4, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(PumpInformation92D4, req, res);
};

module.exports = self;
