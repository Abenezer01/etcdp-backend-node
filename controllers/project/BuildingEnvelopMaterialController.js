const { BuildingEnvelopMaterial, Sequelize } = require("../../models");
const paginationHelper = require("../utils/pagination-helper");
const Op = Sequelize.Op;
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const dotenv = require("dotenv");
dotenv.config();
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(BuildingEnvelopMaterial, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};
self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id };
    const paginatedResult = await paginationHelper(BuildingEnvelopMaterial, req, whereCondition);

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
  getRecordById(BuildingEnvelopMaterial, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await BuildingEnvelopMaterial.findAll({
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
  saveRecord(BuildingEnvelopMaterial, req, res);
};

self.update = async (req, res) => {
  updateRecord(BuildingEnvelopMaterial, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(BuildingEnvelopMaterial, req, res);
};

module.exports = self;
