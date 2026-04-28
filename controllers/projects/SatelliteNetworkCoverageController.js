const { SatelliteNetworkCoverage, ProjectMasterData, SatelliteNetwork, Sequelize } = require("../../models");
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
            model: SatelliteNetwork,
            as: 'satelliteNetwork'
        }
    ];

    const paginatedResult = await paginationHelper(SatelliteNetworkCoverage, req, [], includeOptions);

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
  getRecordById(SatelliteNetworkCoverage, req, res);
};

self.save = async (req, res) => {
  saveRecord(SatelliteNetworkCoverage, req, res);
};

self.update = async (req, res) => {
  updateRecord(SatelliteNetworkCoverage, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(SatelliteNetworkCoverage, req, res);
};

module.exports = self;
