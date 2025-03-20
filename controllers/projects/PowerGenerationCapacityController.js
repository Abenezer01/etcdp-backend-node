const { PowerGenerationCapacity, ProjectMasterData, Sequelize } = require("../../models");
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
          model: ProjectMasterData,
          as: "owner"
      },
    ];
    const paginatedResult = await paginationHelper(PowerGenerationCapacity , req, whereCondition, includeOptions);

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
  getRecordById(PowerGenerationCapacity , req, res);
};

self.save = async (req, res) => {
  saveRecord(PowerGenerationCapacity , req, res);
};

self.update = async (req, res) => {
  updateRecord(PowerGenerationCapacity , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(PowerGenerationCapacity , req, res);
};

module.exports = self;
