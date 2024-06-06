const { StakeholderContactPerson, Sequelize } = require("../../models");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const usrData = require("../../utils/userDataFromToken");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');

const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderContactPerson, req);

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
  getRecordById(StakeholderContactPerson, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StakeholderContactPerson.findAll({
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
  saveRecord(StakeholderContactPerson, req, res);
};

self.update = async (req, res) => {
  updateRecord(StakeholderContactPerson, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StakeholderContactPerson, req, res);
};
self.getByStakeholderId = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await StakeholderContactPerson.findAll({
      where: {
        stakeholder_id: id,
      },
    });

    return res.json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = self;
