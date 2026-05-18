const { RailwayTrackConditionAssessment, ProjectMasterData, Sequelize, RailwayTrackData } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    let whereCondition = {};
    let includeOptions = [
      {
        model: RailwayTrackData,
        as: 'railwayTrackData'
      },
      {
        model: ProjectMasterData,
        as: 'trackConditionRating'
      },
      {
        model: ProjectMasterData,
        as: 'observedDefects'
      }
    ];

    const paginatedResult = await paginationHelper(RailwayTrackConditionAssessment , req, whereCondition, includeOptions);

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
  getRecordById(RailwayTrackConditionAssessment , req, res);
};

self.save = async (req, res) => {
  saveRecord(RailwayTrackConditionAssessment , req, res);
};

self.update = async (req, res) => {
  updateRecord(RailwayTrackConditionAssessment , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(RailwayTrackConditionAssessment , req, res);
};

module.exports = self;
