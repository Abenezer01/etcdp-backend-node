const { ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let master = require("../../config/master");
const actionHelper = require("../utils/action-helper");
const usrData = require("../../utils/userDataFromToken");

let self = {};

self.getAll = async (req, res) => {
  try {

    const paginatedResult = await paginationHelper(ProjectMasterData , req);

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
  getRecordById(ProjectMasterData , req, res);
};

self.save = async (req, res) => {
  try {
    const body = req.body;
    // check for unique attribute values

    const data = await ProjectMasterData.create(body);
    
    if (data) {
      const usr = await usrData.userData(req, res);
      await actionHelper.saveActionState(
        data.id,
        "ProjectMasterData",
        "DEFAULT",
        usr.usrID,
        req,
        res
      );
  
      await actionHelper.saveActivityLog(
        usr.usrID, "create", "module", data.id, "ProjectMasterData", req, res
      )
    }
    return res.apiSuccess({
      data: data
    });
  } catch (error) {
    res.apiError(error);
  }
};

self.update = async (req, res) => {
  updateRecord(ProjectMasterData , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProjectMasterData , req, res);
};

self.getMasterData = async (req, res) => {
  try {

    let data = ProjectMasterData .findAll()
    return res.json(data)

  } catch (error) {
    res.apiError(error);
  }
};


module.exports = self;
