const { NetworkCoverage  , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(NetworkCoverage , req);

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
  getRecordById(NetworkCoverage , req, res);
};

self.save = async (req, res) => {
  saveRecord(NetworkCoverage , req, res);
};

self.update = async (req, res) => {
  updateRecord(NetworkCoverage , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(NetworkCoverage , req, res);
};

module.exports = self;
