const { CulvertRoadOverInformation, CulvertBasicData, ProjectMasterData, RoadSegment, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    // let data = await CulvertRoadOverInformation.findAll();
    // return res.json(data)
    const whereCondition = {};

    const includeOptions = [
      {
        model: CulvertBasicData,
        as: "culvert"
      },
      {
        model: RoadSegment,
        as: 'roadSegment'
      },
      {
        model: ProjectMasterData,
        as: "guardRailType"
      }
    ];
    
    const paginatedResult = await paginationHelper(CulvertRoadOverInformation , req, whereCondition, includeOptions);

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
  getRecordById(CulvertRoadOverInformation , req, res);
};

self.save = async (req, res) => {
  saveRecord(CulvertRoadOverInformation , req, res);
};

self.update = async (req, res) => {
  updateRecord(CulvertRoadOverInformation , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(CulvertRoadOverInformation , req, res);
};

module.exports = self;
