const { MaintenanceHistory, RoadSegment, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    let whereCondition = {};

    let includeCondition = [
      {
        model: RoadSegment,
        as: "roadSegment"
      },
      {
        model: ProjectMasterData,
        as: "maintenanceType"
      },
      {
        model: ProjectMasterData,
        as: "severityLevel"
      },
      {
        model: ProjectMasterData,
        as: "suggestedRepair"
      },
      {
        model: ProjectMasterData,
        as: "recommendedActionUrgency"
      }
    ];
    const paginatedResult = await paginationHelper(MaintenanceHistory , req, whereCondition, includeCondition);

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
  getRecordById(MaintenanceHistory , req, res);
};

self.save = async (req, res) => {
  saveRecord(MaintenanceHistory , req, res);
};

self.update = async (req, res) => {
  updateRecord(MaintenanceHistory , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(MaintenanceHistory , req, res);
};

module.exports = self;
