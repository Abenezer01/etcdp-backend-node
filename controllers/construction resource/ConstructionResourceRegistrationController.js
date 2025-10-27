const { Resource, sequelize, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const dotenv = require("dotenv");
dotenv.config();
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Resource, req);

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
  getRecordById(Resource, req, res);
};

self.filter = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
    typeId,
    categoryId,
    subcategoryId,
  } = req.query;
  const filter = [{ resourcetype_id: typeId }];
  if (categoryId) {
    filter.push({ resourcecategory_id: categoryId });
  }
  if (subcategoryId) {
    filter.push({ resourcesubcategory_id: subcategoryId });
  }
  const { limit, offset } = paginate.getPagination(page, size);
  let limiter = { limit, offset };
  page === -1 ? (limiter = {}) : limiter;
  try {
    const { rows, count } = await Resource.findAndCountAll({
      limit: limiter.limit,
      offset: limiter.offset,
      order: [["created_at", order]],
      where: {
        [Op.and]: filter,
      },
    });
    let newData = await Promise.all(
      rows.map(async (item) => {
        //console.log("The item id", item.dataValues);
        return {
          ...item.dataValues,
          status: await actionHelper.getAction(item.dataValues.id),
        };
      })
    );

    const pagingData = paginate.getPagingData(
      { rows: newData, count },
      page,
      limit
    );
    res.send(pagingData);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Resource.findAll({
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
  try {
    let usr = await usrData.userData(req, res);
    req.body.department_id = usr.department_id;

    saveRecord(Resource, req, res);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.update = async (req, res) => {
  updateRecord(Resource, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Resource, req, res);
};

module.exports = self;
