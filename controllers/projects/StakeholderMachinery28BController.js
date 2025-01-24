const { StakeholderMachinery28B , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderMachinery28B, req);

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
  getRecordById(StakeholderMachinery28B, req, res);
};

self.save = async (req, res) => {
  saveRecord(StakeholderMachinery28B, req, res);
};

self.update = async (req, res) => {
  updateRecord(StakeholderMachinery28B, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StakeholderMachinery28B, req, res);
};

module.exports = self;
