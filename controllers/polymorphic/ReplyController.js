const {Reply, User } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");

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
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(Reply, req, res);
};

self.save = async (req, res) => {
  let usr = await usrData.userData(req, res);
  req.body.creator_id = usr.usrID;

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
    const whereCondition = { actionstate_id: id, };
    const includeOptions = [
      { model: User, as: "user" } // Example association
    ];
    const paginatedResult = await paginationHelper(Reply, req, whereCondition, includeOptions);

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
