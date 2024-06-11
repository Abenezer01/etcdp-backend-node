const { DocumentType, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const Op = Sequelize.Op;
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const dotenv = require("dotenv");
dotenv.config();
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(DocumentType, req);

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
  getRecordById(DocumentType, req, res);
};

self.save = async (req, res) => {
  saveRecord(DocumentType, req, res);
};

self.update = async (req, res) => {
  updateRecord(DocumentType, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(DocumentType, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await DocumentType.findAll({
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

module.exports = self;
