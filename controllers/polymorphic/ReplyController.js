const {Reply, User, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');

const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {

  
  try {
    const paginatedResult = await paginationHelper(Reply, req);

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
  getRecordById(Reply, req, res);
};

self.save = async (req, res) => {
  let usr = await usrData.userData(req, res);
  req.body.creator_id = usr.usrID

  saveRecord(Reply, req, res);
};

self.update = async (req, res) => {
  updateRecord(Reply, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Reply, req, res);
};

self.getActionReplies = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { actionstate_id: id, }
    const includeOptions = [
      { model: User, as: 'user' } // Example association
    ];
    const paginatedResult = await paginationHelper(Reply, req, whereCondition, includeOptions);

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
