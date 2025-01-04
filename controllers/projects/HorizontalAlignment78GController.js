const { HorizontalAlignment78G , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(HorizontalAlignment78G, req);

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
  getRecordById(HorizontalAlignment78G, req, res);
};

self.save = async (req, res) => {
  saveRecord(HorizontalAlignment78G, req, res);
};

self.update = async (req, res) => {
  updateRecord(HorizontalAlignment78G, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(HorizontalAlignment78G, req, res);
};

module.exports = self;
