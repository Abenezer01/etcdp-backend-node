const { CulvertStructuralInformation, CulvertBasicData  , Sequelize } = require("../../models");
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
        model: CulvertBasicData,
        as: "culvert",
      }
    ];
    const paginatedResult = await paginationHelper(CulvertStructuralInformation , req, whereCondition, includeOptions);

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
  getRecordById(CulvertStructuralInformation , req, res);
};

self.save = async (req, res) => {
  saveRecord(CulvertStructuralInformation , req, res);
};

self.update = async (req, res) => {
  updateRecord(CulvertStructuralInformation , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(CulvertStructuralInformation , req, res);
};

module.exports = self;
