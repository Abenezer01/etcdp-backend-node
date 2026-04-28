const { RoadSafetyFeature, RoadSegment, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    //include
    const include = [
      {
        model: RoadSegment,
        as: 'roadSegment'
      },
      {
        model: ProjectMasterData,
        as: 'roadSafetyFeature'
      }
    ]
    const paginatedResult = await paginationHelper(RoadSafetyFeature , req, [], include);

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
  getRecordById(RoadSafetyFeature , req, res);
};

self.save = async (req, res) => {
  saveRecord(RoadSafetyFeature , req, res);
};

self.update = async (req, res) => {
  updateRecord(RoadSafetyFeature , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(RoadSafetyFeature , req, res);
};

module.exports = self;
