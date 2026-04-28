const { GeotechnicalInformation, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    //includes

    let includeOptions = [
      {
        model: ProjectMasterData,
        as: 'soilType'
      },
      {
        model: ProjectMasterData,
        as: 'groundWaterImpact'
      },
      {
        model: ProjectMasterData,
        as: 'slopeStability'
      },
    ];
    const paginatedResult = await paginationHelper(GeotechnicalInformation , req, [], includeOptions);

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
  getRecordById(GeotechnicalInformation , req, res);
};

self.save = async (req, res) => {
  saveRecord(GeotechnicalInformation , req, res);
};

self.update = async (req, res) => {
  updateRecord(GeotechnicalInformation , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(GeotechnicalInformation , req, res);
};

module.exports = self;
