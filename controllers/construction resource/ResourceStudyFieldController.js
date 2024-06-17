const { ResourceStudyField, Image, StudyField, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const paginationHelper = require("../utils/pagination-helper")
const dotenv = require("dotenv");
dotenv.config();
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ResourceStudyField, req);

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
  getRecordById(ResourceStudyField, req, res);
};


self.getByResourceId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { resource_id: id }

    const includeOptions = [
      { model: StudyField, as: 'Resource' } // Example association
    ];
   

    const paginatedResult = await paginationHelper(ResourceStudyField, req, whereCondition, includeOptions);

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
    let data = await ResourceStudyField.findAll({
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
  saveRecord(ResourceStudyField, req, res);
};

self.update = async (req, res) => {
  updateRecord(ResourceStudyField, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ResourceStudyField, req, res);
};

module.exports = self;
