const { Note, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, updateRecord, deleteRecord } = require('../utils/format-helper');

const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Note, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(Note, req, res);
};

self.save = async (req, res) => {

  let usr = await usrData.userData(req, res);
  req.body.user_id = usr.usrID
  saveRecord(Note, req, res);
};

self.update = async (req, res) => {
  updateRecord(Note, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Note, req, res);
};

self.getNoteByModelId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { model_id: id }
    const paginatedResult = await paginationHelper(Note, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};

module.exports = self;
