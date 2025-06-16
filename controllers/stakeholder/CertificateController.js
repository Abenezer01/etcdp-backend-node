const { Certificate, Sequelize } = require("../../models");

const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Certificate, req);

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
  getRecordById(Certificate, req, res);
};

self.save = async (req, res) => {
  saveRecord(Certificate, req, res);
};

self.update = async (req, res) => {
  updateRecord(Certificate, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Certificate, req, res);
};

module.exports = self;
