const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const { StakeholderInfo, Sequelize } = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderInfo, req);

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
  getRecordById(StakeholderInfo, req, res);
};
self.getStakeInfoByStakeHolderId = async (req, res) => {

  try {
    let id = req.params.id;
    let data = await StakeholderInfo.findOne({
      where: {
        stakeholder_id: id,
      },
    });
    return res.status(200).json({
      data: data ? data : {},
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StakeholderInfo.findAll({
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
  saveRecord(StakeholderInfo, req, res);
};

self.update = async (req, res) => {
  updateRecord(StakeholderInfo, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StakeholderInfo, req, res);
};

module.exports = self;
