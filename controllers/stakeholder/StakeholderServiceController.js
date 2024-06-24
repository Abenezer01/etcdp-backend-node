const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const { StakeholderService, ConstructionRelatedService, Sequelize } = require("./../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderService, req);

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
  getRecordById(StakeholderService, req, res);
};

self.getStakeholderServiceByStakeholderId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { stakeholder_id: id };

    const includeOptions = [
      { model: ConstructionRelatedService, as: "constructionrelatedservice" } // Example association
    ];
   
    const paginatedResult = await paginationHelper(StakeholderService, req, whereCondition, includeOptions);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};


self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StakeholderService.findAll({
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
  saveRecord(StakeholderService, req, res);
};

self.update = async (req, res) => {
  updateRecord(StakeholderService, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StakeholderService, req, res);
};

module.exports = self;
