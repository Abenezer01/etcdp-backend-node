const { Certificate, Sequelize } = require("../../models");

const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const paginate = require("../../utils/pagination");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require("../../utils/helper");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Certificate, req);

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
  getRecordById(Certificate, req, res);
};
self.getCertificateWithStakeholderId = async (req, res) => {
  const { id } = req.params;
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);
  try {
    const data = await Certificate.findAndCountAll({
      limit,
      offset,
      where: { stakeholder_id: id },
      order: [["created_at", order]],
    });

    const response = paginate.getPagingData(data, page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Certificate.findAll({
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
  saveRecord(Certificate, req, res);
};

self.update = async (req, res) => {
  updateRecord(Certificate, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Certificate, req, res);
};

module.exports = self;
