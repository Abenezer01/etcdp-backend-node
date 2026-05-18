const { BroadcastingNetworkCapacity, BroadcastingInfrastructure, ProjectMasterData, Sequelize } = require("../../models");
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
            as: 'networkType'
        },
        {
            model: BroadcastingInfrastructure,
            as: 'broadcastingInfrastructure'
        }
    ];

    const paginatedResult = await paginationHelper(BroadcastingNetworkCapacity, req, [], includeOptions);

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
  getRecordById(BroadcastingNetworkCapacity, req, res);
};

self.save = async (req, res) => {
  saveRecord(BroadcastingNetworkCapacity, req, res);
};

self.update = async (req, res) => {
  updateRecord(BroadcastingNetworkCapacity, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(BroadcastingNetworkCapacity, req, res);
};

module.exports = self;
