const { RoadMaintenanceActivity, ProjectMasterData, RoadSegment , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    let whereCondition = {}
    const includeOptions = [
      {
        model: ProjectMasterData,
        as: 'maintenanceFrequency'
      },
      {
        model: ProjectMasterData,
        as: 'maintenanceType'
      },
      {
        model: RoadSegment,
        as: 'roadSegment'
      }
    ]
    const paginatedResult = await paginationHelper(RoadMaintenanceActivity , req, whereCondition, includeOptions);

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
  getRecordById(RoadMaintenanceActivity , req, res);
};

self.save = async (req, res) => {
  saveRecord(RoadMaintenanceActivity , req, res);
};

self.update = async (req, res) => {
  updateRecord(RoadMaintenanceActivity , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(RoadMaintenanceActivity , req, res);
};

module.exports = self;
