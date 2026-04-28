const { SafetyAndHealth, ProjectMasterData, Sequelize } = require("../../models");
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
        as: 'hazardType',
        attributes: ['id', 'title']
      },
      {
        model: ProjectMasterData,
        as: 'potentialImpact',
        attributes: ['id', 'title']
      },
      {
        model: ProjectMasterData,
        as: 'riskLevel',
        attributes: ['id', 'title']
      },
      {
        model: ProjectMasterData,
        as: 'incidentType',
        attributes: ['id', 'title']
      },
      {
        model: ProjectMasterData,
        as: 'personalProtectiveEquipmentType',
        attributes: ['id', 'title']
      },
      {
        model: ProjectMasterData,
        as: 'personalProtectiveEquipmentCondition',
        attributes: ['id', 'title']
      },
      {
        model: ProjectMasterData,
        as: 'weatherConditionDuringIncident',
        attributes: ['id', 'title']
      },
      {
        model: ProjectMasterData,
        as: 'injurySeverity',
        attributes: ['id', 'title']
      }
    ]

    const paginatedResult = await paginationHelper(SafetyAndHealth, req, [], includeOptions);

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
  getRecordById(SafetyAndHealth  , req, res);
};

self.save = async (req, res) => {
  saveRecord(SafetyAndHealth  , req, res);
};

self.update = async (req, res) => {
  updateRecord(SafetyAndHealth  , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(SafetyAndHealth  , req, res);
};

module.exports = self;
