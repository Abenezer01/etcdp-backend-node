const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const {
  StakeholderCategory,
  StakeholderSubCategory,
  StakeholderType,
  Sequelize,
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderCategory, req);

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


self.getAllCatByTypeId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { stakeholdertype_id: id }

    const includeOptions = [
      {
        model: StakeholderSubCategory,
        as: "stakeholdersubcategories",
        required: false,
      },
    ];
   

    const paginatedResult = await paginationHelper(StakeholderCategory, req, whereCondition, includeOptions);

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
  getRecordById(StakeholderCategory, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StakeholderCategory.findAll({
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
  saveRecord(StakeholderCategory, req, res);
};

self.update = async (req, res) => {
  updateRecord(StakeholderCategory, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StakeholderCategory, req, res);
};

module.exports = self;
