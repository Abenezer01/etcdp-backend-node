const { DocumentCategory, DocumentSubCategory, Sequelize } = require("../../models");
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
    const paginatedResult = await paginationHelper(DocumentCategory, req);

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
  getRecordById(DocumentCategory, req, res);
};

self.save = async (req, res) => {
  saveRecord(DocumentCategory, req, res);
};

self.update = async (req, res) => {
  updateRecord(DocumentCategory, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(DocumentCategory, req, res);
};


self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await DocumentCategory.findAll({
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

self.getCRCBydocumentTypeId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { documenttype_id: id }

    const includeOptions = [
      { model: DocumentSubCategory, as: 'documentsubcategories' } // Example association
    ];

    const paginatedResult = await paginationHelper(DocumentCategory, req, whereCondition, includeOptions);

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
