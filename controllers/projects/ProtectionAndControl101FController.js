const { ProtectionAndControl101F , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ProtectionAndControl101F, req);

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
  getRecordById(ProtectionAndControl101F, req, res);
};

self.save = async (req, res) => {
  saveRecord(ProtectionAndControl101F, req, res);
};

self.update = async (req, res) => {
  updateRecord(ProtectionAndControl101F, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProtectionAndControl101F, req, res);
};

module.exports = self;
