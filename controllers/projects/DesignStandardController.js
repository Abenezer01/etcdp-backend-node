const { DesignStandard, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
  
    //includes 
    const includeOptions = [
      {
        model: ProjectMasterData,
        as: 'functionalClassification'
      },
      {
        model: ProjectMasterData,
        as: 'designClassification'
      },
      {
        model: ProjectMasterData,
        as: 'designStandard'
      },
      {
        model: ProjectMasterData,
        as: 'designTrafficFlow'
      }
    ]
    const paginatedResult = await paginationHelper(DesignStandard , req, [], includeOptions);

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
  getRecordById(DesignStandard , req, res);
};

self.save = async (req, res) => {
  saveRecord(DesignStandard , req, res);
};

self.update = async (req, res) => {
  updateRecord(DesignStandard , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(DesignStandard , req, res);
};

module.exports = self;
