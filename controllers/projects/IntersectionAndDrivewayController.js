const { IntersectionAndDriveway, RoadSegment, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try { 

    //includes  
    const includeOptions = [
      {
        model: ProjectMasterData,
        as: 'intersectionType'
      },
      {
        model: ProjectMasterData,
        as: 'drivewayAccessPoint'
      },
      {
        model: RoadSegment,
        as: 'roadSegment'
      }
    ]
    const paginatedResult = await paginationHelper(IntersectionAndDriveway , req, [], includeOptions);

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
  getRecordById(IntersectionAndDriveway , req, res);
};

self.save = async (req, res) => {
  saveRecord(IntersectionAndDriveway , req, res);
};

self.update = async (req, res) => {
  updateRecord(IntersectionAndDriveway , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(IntersectionAndDriveway , req, res);
};

module.exports = self;
