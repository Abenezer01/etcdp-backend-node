const { JobExperience, Sequelize } = require("../../models");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');

const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(JobExperience, req);

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
  getRecordById(JobExperience, req, res);
};

self.save = async (req, res) => {
  saveRecord(JobExperience, req, res);
};

self.update = async (req, res) => {
  updateRecord(JobExperience, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(JobExperience, req, res);
};


self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await JobExperience.findAll({
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

self.getByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { user_id: id, }
    const paginatedResult = await paginationHelper(JobExperience, req, whereCondition);

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
module.exports = self;
