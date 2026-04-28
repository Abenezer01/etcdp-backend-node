const { SatelliteNetworkCapacity,ProjectMasterData, SatelliteNetwork, Sequelize } = require("../../models");
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
            model: SatelliteNetwork,
            as: 'satelliteNetwork'
        },
        {
            model: ProjectMasterData,
            as: 'networkType'
        }
    ];  

    const paginatedResult = await paginationHelper(SatelliteNetworkCapacity, req, [], includeOptions);

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
  getRecordById(SatelliteNetworkCapacity, req, res);
};

self.save = async (req, res) => {
  saveRecord(SatelliteNetworkCapacity, req, res);
};

self.update = async (req, res) => {
  updateRecord(SatelliteNetworkCapacity, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(SatelliteNetworkCapacity, req, res);
};

module.exports = self;
