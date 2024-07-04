const { ResourceCategory, ResourceSubCategory, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ResourceCategory, req);

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
  getRecordById(ResourceCategory, req, res);
};

self.save = async (req, res) => {
  saveRecord(ResourceCategory, req, res);
};

self.update = async (req, res) => {
  updateRecord(ResourceCategory, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ResourceCategory, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ResourceCategory.findAll({
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


self.getCRCByResourceTypeId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { resourcetype_id: id };

    const includeOptions = [
      { model: ResourceSubCategory, as: "resourcesubcategories" } // Example association
    ];
   

    const paginatedResult = await paginationHelper(ResourceCategory, req, whereCondition, includeOptions);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    return res.apiError(error);
  }
};


module.exports = self;
