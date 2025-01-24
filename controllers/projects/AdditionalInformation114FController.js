const { AdditionalInformation114F , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(AdditionalInformation114F, req);

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
  getRecordById(AdditionalInformation114F, req, res);
};

self.save = async (req, res) => {
  saveRecord(AdditionalInformation114F, req, res);
};

self.update = async (req, res) => {
  updateRecord(AdditionalInformation114F, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(AdditionalInformation114F, req, res);
};

module.exports = self;
