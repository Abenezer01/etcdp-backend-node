const { BroadcastingInfrastructure, Project, ProjectMasterData , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    const whereCondition = { };

    const includeOptions = [
      {
        model: Project,
        as: 'project',
        attributes: ['id', 'name']
      },
      {
        model: ProjectMasterData,
        as: 'infrastructureType',
        attributes: ['id', 'title']
      }
    ];
    const paginatedResult = await paginationHelper(BroadcastingInfrastructure , req, whereCondition, includeOptions);

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
  getRecordById(BroadcastingInfrastructure , req, res);
};

self.save = async (req, res) => {
  saveRecord(BroadcastingInfrastructure , req, res);
};

self.update = async (req, res) => {
  updateRecord(BroadcastingInfrastructure , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(BroadcastingInfrastructure , req, res);
};

module.exports = self;
