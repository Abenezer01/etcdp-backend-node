const { MobileNetworkCoverage, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    let includeOptions = [
      {
        model: ProjectMasterData,
        as: 'networkInfrastructureType'
      }
    ];
    const paginatedResult = await paginationHelper(MobileNetworkCoverage , req, [], includeOptions );

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
  getRecordById(MobileNetworkCoverage , req, res);
};

self.save = async (req, res) => {
  saveRecord(MobileNetworkCoverage , req, res);
};

self.update = async (req, res) => {
  updateRecord(MobileNetworkCoverage , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(MobileNetworkCoverage , req, res);
};

module.exports = self;
