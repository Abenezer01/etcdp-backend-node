const { BridgeStructureInformation, BridgeBasicData, ProjectMasterData, Sequelize } = require("../../models");
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
        model: BridgeBasicData,
        as: 'bridge'
      },
      {
        model: ProjectMasterData,
        as: 'bridgeStructureType'
      }
    ];
    const paginatedResult = await paginationHelper(BridgeStructureInformation , req, whereCondition, includeOptions);

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
  getRecordById(BridgeStructureInformation , req, res);
};

self.save = async (req, res) => {
  saveRecord(BridgeStructureInformation , req, res);
};

self.update = async (req, res) => {
  updateRecord(BridgeStructureInformation , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(BridgeStructureInformation , req, res);
};

module.exports = self;
