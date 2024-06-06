const { Payment, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {

    const paginatedResult = await paginationHelper(Payment, req);

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
    const paginatedResult = await paginationHelper(Payment, req, whereCondition);

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

self.getByProjectIdAndType = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
    project_id,
    type,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { rows, count } = await Payment.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", order]],
      where: {
        [Op.and]: [{ project_id: project_id }, { type: type }],
      },
    });

    const response = paginate.getPagingData(
      { rows, count },
      page,
      limit,
      count
    );

    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message || "An error occurred while retrieving data.",
    });
  }
};
self.get = async (req, res) => {
  getRecordById(Payment, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Payment.findAll({
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
  saveRecord(Payment, req, res);
};

self.update = async (req, res) => {
  updateRecord(Payment, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Payment, req, res);
};

module.exports = self;
