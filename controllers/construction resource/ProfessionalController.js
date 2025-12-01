const { Professional , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");

const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    let usr = await usrData.userData(req, res);

    const whereCondition = { 
      department_id: usr.departmentID
    };
    const paginatedResult = await paginationHelper(Professional, req, whereCondition);

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
  getRecordById(Professional, req, res);
};

self.save = async (req, res) => {
  try {
    let body = req.body;

    let data = await Professional.create(body);
    let usr = await usrData.userData(req, res);

    if(data){

      data.department_id = usr.departmentID;
      await data.save();

      await actionHelper.saveActionState(
        data.id,
        "Professional",
        "REGISTER",
        usr.usrID,
        req,
        res
      );

      await actionHelper.saveActivityLog(
        usr.usrID, "create", "module", data.id, "Professional", req, res
      )

    }

  } catch (error) {
    res.apiError(error);
  }
};

self.update = async (req, res) => {
  updateRecord(Professional, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Professional, req, res);
};

module.exports = self;
