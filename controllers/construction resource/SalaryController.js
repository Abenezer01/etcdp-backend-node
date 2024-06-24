const { Salary } = require("../../models");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const paginationHelper = require("../utils/pagination-helper");
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Salary, req);

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
  getRecordById(Salary, req, res);
};

self.save = async (req, res) => {
  saveRecord(Salary, req, res);
};

self.update = async (req, res) => {
  updateRecord(Salary, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Salary, req, res);
};


self.getByResourceId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { resource_id: id };
    const paginatedResult = await paginationHelper(Salary, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }

};


module.exports = self;
