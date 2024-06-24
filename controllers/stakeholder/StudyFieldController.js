const { StudyField, StudyLevel, StudyProgram, Sequelize } = require("../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StudyField, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.getStudyFieldById = async (req, res) => {

    let includeOptions = [
      {model: StudyLevel, as : "studylevel"},
      {model: StudyProgram, as : "studyprogram"}
    ];

    getRecordById(StudyField, req, res, includeOptions);

};

self.get = async (req, res) => {
  getRecordById(StudyField, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StudyField.findAll({
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
  saveRecord(StudyField, req, res);
};

self.update = async (req, res) => {
  updateRecord(StudyField, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StudyField, req, res);
};

module.exports = self;
