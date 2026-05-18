const { BroadcastingNetworkCoverage, BroadcastingInfrastructure, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    //include
    const includeOptions = [
        {
            model: ProjectMasterData,
            as: 'networkInfrastructureType'
        },
        {
            model: BroadcastingInfrastructure,
            as: 'broadcastingInfrastructure'
        }
    ];

    const paginatedResult = await paginationHelper(BroadcastingNetworkCoverage, req, [], includeOptions);

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
  getRecordById(BroadcastingNetworkCoverage, req, res);
};

self.save = async (req, res) => {
  saveRecord(BroadcastingNetworkCoverage, req, res);
};

self.update = async (req, res) => {
  updateRecord(BroadcastingNetworkCoverage, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(BroadcastingNetworkCoverage, req, res);
};

module.exports = self;
