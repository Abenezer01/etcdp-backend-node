const { BusinessField, Sequelize } = require("../../models");

const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');

const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(BusinessField, req);

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
  getRecordById(BusinessField, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await BusinessField.findAll({
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
  saveRecord(BusinessField, req, res);
};

self.update = async (req, res) => {
  updateRecord(BusinessField, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(BusinessField, req, res);
};

module.exports = self;
