const { BridgeFoundation, BridgeBasicData, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    const whereCondition = {};
    const includeOptions = [
      {
        model: BridgeBasicData,
        as: 'bridge'
      },
      {
        model: ProjectMasterData,
        as: 'abutmentType'
      },
      {
        model: ProjectMasterData,
        as: 'pierType'
      },
      {
        model: ProjectMasterData,
        as: 'soilType'
      }

    ];
    const paginatedResult = await paginationHelper(BridgeFoundation , req, whereCondition, includeOptions);

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
  getRecordById(BridgeFoundation , req, res);
};

self.save = async (req, res) => {
  saveRecord(BridgeFoundation , req, res);
};

self.update = async (req, res) => {
  updateRecord(BridgeFoundation , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(BridgeFoundation , req, res);
};

module.exports = self;
