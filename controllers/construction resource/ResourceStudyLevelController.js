const { ResourceStudyLevel, Image, StudyField, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');

const paginationHelper = require("../utils/pagination-helper")

const dotenv = require("dotenv");
dotenv.config();
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ResourceStudyLevel, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(ResourceStudyLevel, req, res);
};


self.getByResourceId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { resource_id: id }

    const includeOptions = [
      { model: StudyField} // Example association
    ];
   

    const paginatedResult = await paginationHelper(ResourceStudyLevel, req, whereCondition, includeOptions);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};


self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ResourceStudyLevel.findAll({
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
  saveRecord(ResourceStudyLevel, req, res);
};

self.update = async (req, res) => {
  updateRecord(ResourceStudyLevel, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ResourceStudyLevel, req, res);
};

module.exports = self;
