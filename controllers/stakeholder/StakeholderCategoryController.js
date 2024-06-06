const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const {
  StakeholderCategory,
  StakeholderSubCategory,
  StakeholderType,
  Sequelize,
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderCategory, req);

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

self.getAllCatByTypeId = async (req, res) => {
  const {
    page = process.env.cust_page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;
  const { id } = req.params;
  const { limit, offset } = paginate.getPagination(page, size);
  let limiter = { limit, offset };
  page == -1 ? (limiter = {}) : limiter;

  try {
    const { rows, count } = await StakeholderCategory.findAndCountAll({
      limit: limiter.limit,
      offset: limiter.offset,

      include: [
        {
          model: StakeholderSubCategory,
          as: "stakesubcategories",
          required: false,
        },
      ],
      where: {
        stakeholdertype_id: id,
      },
      order: [["createdAt", order]],
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
  getRecordById(StakeholderCategory, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StakeholderCategory.findAll({
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
  saveRecord(StakeholderCategory, req, res);
};

self.update = async (req, res) => {
  updateRecord(StakeholderCategory, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StakeholderCategory, req, res);
};

module.exports = self;
