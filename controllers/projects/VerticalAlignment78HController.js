const { VerticalAlignment78H , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(VerticalAlignment78H, req);

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
  getRecordById(VerticalAlignment78H, req, res);
};

self.save = async (req, res) => {
  saveRecord(VerticalAlignment78H, req, res);
};

self.update = async (req, res) => {
  updateRecord(VerticalAlignment78H, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(VerticalAlignment78H, req, res);
};

module.exports = self;
