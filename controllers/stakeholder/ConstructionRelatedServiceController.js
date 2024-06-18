const { ConstructionRelatedService, Sequelize } = require("./../../models");
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
let self = {};
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require("../../utils/helper");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ConstructionRelatedService, req);

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
  getRecordById(ConstructionRelatedService, req, res);
};

self.getConstructionRelatedServiceByStakeholderId = async (req, res) => {

  const { id } = req.params;
  try {
    const whereCondition = { stakeholder_id: id }
    const paginatedResult = await paginationHelper(ConstructionRelatedService, req, whereCondition);

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
    let data = await ConstructionRelatedService.findAll({
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
  saveRecord(ConstructionRelatedService, req, res);
};

self.update = async (req, res) => {
  updateRecord(ConstructionRelatedService, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ConstructionRelatedService, req, res);
};

module.exports = self;
