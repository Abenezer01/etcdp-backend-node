const { DataCenterFacilityCapacity, DataCenter  , Sequelize } = require("../../models");
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
          model: DataCenter,
          as: "datacenter"
      },
    ];
    const paginatedResult = await paginationHelper(DataCenterFacilityCapacity , req, whereCondition, includeOptions);

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
  getRecordById(DataCenterFacilityCapacity , req, res);
};

self.save = async (req, res) => {
  saveRecord(DataCenterFacilityCapacity , req, res);
};

self.update = async (req, res) => {
  updateRecord(DataCenterFacilityCapacity , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(DataCenterFacilityCapacity , req, res);
};

module.exports = self;
