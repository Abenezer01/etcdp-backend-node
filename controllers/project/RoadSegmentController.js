const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const { RoadSegment, Sequelize } = require("./../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
let self = {};


self.getAll = async (req, res) => {
  try {

    const paginatedResult = await paginationHelper(RoadSegment, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id };
    const paginatedResult = await paginationHelper(RoadSegment, req, whereCondition);

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
  getRecordById(RoadSegment, req, res);
};


self.save = async (req, res) => {
  saveRecord(RoadSegment, req, res);
};

self.update = async (req, res) => {
  updateRecord(RoadSegment, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(RoadSegment, req, res);
};

module.exports = self;
