const { CulvertConditionAssessment, RoadSegment, ProjectMasterData, CulvertBasicData, Sequelize } = require("../../models");
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
        model: CulvertBasicData,
        as: 'culvertBasicData'
      },
      {
        model: RoadSegment,
        as: 'roadSegment'
      },
      {
        model: ProjectMasterData,
        as: 'structureType'
      },
      {
        model: ProjectMasterData,
        as: 'north'
      },
      {
        model: ProjectMasterData,
        as: 'east'
      },
      {
        model: ProjectMasterData,
        as: 'west'
      },
      {
        model: ProjectMasterData,
        as: 'south'
      },
      {
        model: ProjectMasterData,
        as: 'central'
      }
    ];

    const paginatedResult = await paginationHelper(CulvertConditionAssessment, req, [], includeOptions);

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
  getRecordById(CulvertConditionAssessment, req, res);
};

self.save = async (req, res) => {
  saveRecord(CulvertConditionAssessment, req, res);
};

self.update = async (req, res) => {
  updateRecord(CulvertConditionAssessment, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(CulvertConditionAssessment, req, res);
};

module.exports = self;
