const {
  StakeholderStudyField,
  StudyField,
  StudyProgram,
  StudyLevel,
  Sequelize,
} = require("../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");

let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderStudyField, req);

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
  getRecordById(StakeholderStudyField, req, res);
};

self.getStakeholderStudyFieldByStakeholderId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = {stakeholder_id: id };

    const includeOptions = [
      { model: StudyField, as: "studyfield" },
      { model: StudyProgram, as: "studyprogram" },
      { model: StudyLevel, as: "studylevel" }
    ];

    const paginatedResult = await paginationHelper(StakeholderStudyField, req, whereCondition, includeOptions);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StakeholderStudyField.findAll({
      where: {
        name: {
          [Op.like]: "%" + text + "%",
        },
      },
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


self.save = async (req, res) => {
  saveRecord(StakeholderStudyField, req, res);
};

self.update = async (req, res) => {
  updateRecord(StakeholderStudyField, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StakeholderStudyField, req, res);
};

module.exports = self;
