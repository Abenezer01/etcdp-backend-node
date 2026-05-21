const { ProfessionalEducation, StakeholderMasterData , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    let whereCondition = {};
    let includeCondition = [
      {
        model: StakeholderMasterData,
        as: "studyField"
      },
      {
        model: StakeholderMasterData,
        as: "programType",
      },
    ];
    const paginatedResult = await paginationHelper(ProfessionalEducation, req, whereCondition, includeCondition);

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
  getRecordById(ProfessionalEducation, req, res);
};

self.save = async (req, res) => {
  saveRecord(ProfessionalEducation, req, res);
};

self.update = async (req, res) => {
  updateRecord(ProfessionalEducation, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProfessionalEducation, req, res);
};

module.exports = self;
