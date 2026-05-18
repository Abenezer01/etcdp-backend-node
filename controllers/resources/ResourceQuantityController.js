const { ResourceQuantity, ResourceMasterData,Resource , ResourceBrand, ResourceSpecification,  Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    let whereCondition = {};

    let includeCondition = [
      {
        model: ResourceBrand,
        as: "resourceBrand"
      },
      {
        model: ResourceSpecification,
        as: "resourceSpecification"
      },
      {
        model: ResourceMasterData,
        as: "unitPrice"
      },
      {
        model: ResourceMasterData,
        as: "supplierName"
      },
      {
        model: ResourceMasterData,
        as: "supplierAddress"
      },
      {
        model: ResourceMasterData,
        as: "quality"
      }
    ];

    const paginatedResult = await paginationHelper(ResourceQuantity , req, whereCondition, includeCondition);

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
  getRecordById(ResourceQuantity , req, res);
};

self.save = async (req, res) => {
  saveRecord(ResourceQuantity , req, res);
};

self.update = async (req, res) => {
  updateRecord(ResourceQuantity , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ResourceQuantity , req, res);
};

module.exports = self;
