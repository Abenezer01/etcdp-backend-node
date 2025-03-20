const { DataCenter, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    const whereCondition = { };


    const includeOptions = [
      {
          model: ProjectMasterData,
          as: "datacentertype"
      },
    ];
    const paginatedResult = await paginationHelper(DataCenter , req, whereCondition, includeOptions);

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
  getRecordById(DataCenter , req, res);
};

self.save = async (req, res) => {
  saveRecord(DataCenter , req, res);
};

self.update = async (req, res) => {
  updateRecord(DataCenter , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(DataCenter , req, res);
};

module.exports = self;
