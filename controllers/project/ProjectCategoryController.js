const {
  ProjectCategory,
  Sequelize,
} = require("../../models");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const Op = Sequelize.Op;

let self = {};

const dotenv = require("dotenv");
dotenv.config();



self.getAll = async (req, res) => {

 
  try {

    const paginatedResult = await paginationHelper(ProjectCategory, req);

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
  getRecordById(ProjectCategory, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ProjectCategory.findAll({
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
  saveRecord(ProjectCategory, req, res);
};

self.update = async (req, res) => {
  updateRecord(ProjectCategory, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProjectCategory, req, res);
};

module.exports = self;
