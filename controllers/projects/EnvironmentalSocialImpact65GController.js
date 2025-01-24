const { EnvironmentalSocialImpact65G , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(EnvironmentalSocialImpact65G, req);

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
  getRecordById(EnvironmentalSocialImpact65G, req, res);
};

self.save = async (req, res) => {
  saveRecord(EnvironmentalSocialImpact65G, req, res);
};

self.update = async (req, res) => {
  updateRecord(EnvironmentalSocialImpact65G, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(EnvironmentalSocialImpact65G, req, res);
};

module.exports = self;
