const { DrainageMaintenance, ProjectMasterData, RoadSegment, Sequelize } = require("../../models");
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
        model: RoadSegment,
        as: 'roadSegment'
      },
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
      }
    ];

    const paginatedResult = await paginationHelper(DrainageMaintenance, req, [], includeOptions);

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
  getRecordById(DrainageMaintenance, req, res);
};

self.save = async (req, res) => {
  saveRecord(DrainageMaintenance, req, res);
};

self.update = async (req, res) => {
  updateRecord(DrainageMaintenance, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(DrainageMaintenance, req, res);
};

module.exports = self;
