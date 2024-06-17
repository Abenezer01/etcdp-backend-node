const {
  ResourceQuantityAndPrice,
  DetailResourceType,
  ResourceBrand,
  Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const paginationHelper = require("../utils/pagination-helper")

const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ResourceQuantityAndPrice, req);

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

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id }

    const includeOptions = [
      {
        model: ResourceBrand,
        as: "ResourceBrand",
        attributes: ["id", "title"],
      },
      {
        model: DetailResourceType,
        as: "DetailResourceType",
        attributes: ["id", "title"],
      },
    ];
   

    const paginatedResult = await paginationHelper(ResourceQuantityAndPrice, req, whereCondition, includeOptions);

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
  getRecordById(ResourceQuantityAndPrice, req, res);
};


self.getByResourceId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { resource_id: id }

    const includeOptions = [
      { model: ResourceBrand, as: "ResourceBrand" },
      { model: DetailResourceType, as: "DetailResourceType" }
    ];
   
    const paginatedResult = await paginationHelper(ResourceQuantityAndPrice, req, whereCondition, includeOptions);

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
    let data = await ResourceQuantityAndPrice.findAll({
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
  saveRecord(ResourceQuantityAndPrice, req, res);
};

self.update = async (req, res) => {
  updateRecord(ResourceQuantityAndPrice, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ResourceQuantityAndPrice, req, res);
};

module.exports = self;
