const { Resource, Department, ResourceType, ResourceCategory, ResourceSubCategory , Sequelize } = require("../../models");
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
            model: ResourceType,
            as: "resourceType"
        },
        {
            model: ResourceCategory,
            as: "resourceCategory"
        },
        {
            model: ResourceSubCategory,
            as: "resourceSubCategory"
        },
    ];
    const paginatedResult = await paginationHelper(Resource , req, whereCondition, includeOptions);

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
  getRecordById(Resource , req, res);
};

self.save = async (req, res) => {
  saveRecord(Resource , req, res);
};

self.update = async (req, res) => {
  updateRecord(Resource , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Resource , req, res);
};

module.exports = self;
