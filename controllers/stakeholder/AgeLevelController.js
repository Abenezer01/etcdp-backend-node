const { agelevel, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
self.getAll = async (req, res) => {
  const {
    page = process.env.cust_page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);
  let limiter = { limit, offset };
  page == -1 ? (limiter = {}) : limiter;

  try {
    const { rows, count } = await agelevel.findAndCountAll({
      limit: limiter.limit,
      offset: limiter.offset,
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
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await agelevel.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: data ? data : {},
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await agelevel.findAll({
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
    let body = req.body;
    if (usr) {
      let data = await agelevel.create(body);
      if (data) {
        let us = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "agelevel",
          "REGISTER",
          us,
          req,
          res
        );
      }
      return res.json(data);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.update = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await agelevel.update(body, {
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await agelevel.destroy({
      where: {
        id: id,
      },
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = self;
