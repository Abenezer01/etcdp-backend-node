const {
  resourcequantityandprice,
  detailresourcetype,
  resourcebrand,
  Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { rows, count } = await resourcequantityandprice.findAndCountAll({
      limit,
      offset,
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
      message: "An error occurred while retrieving data.",
    });
  }
};
self.getByProjectId = async (req, res) => {
  const id = req.params.id;
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);

  resourcequantityandprice
    .findAndCountAll({
      limit,
      offset,
      where: {
        project_id: id,
      },
      order: [["createdAt", order]],
      include: [
        {
          model: resourcebrand,
          as: "resourcebrand",
          attributes: ["id", "title"],
        },
        {
          model: detailresourcetype,
          as: "detailresourcetype",
          attributes: ["id", "title"],
        },
      ],
    })
    .then((data) => res.send(paginate.getPagingData(data, page, limit)))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      })
    );
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await resourcequantityandprice.findOne({
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

self.getByResourceId = async (req, res) => {
  try {
    const {
      page = process.env.page,
      size = process.env.size,
      order = process.env.order,
    } = req.query;
    const id = req.params.id;
    const { limit, offset } = paginate.getPagination(page, size);

    const data = await resourcequantityandprice.findAndCountAll({
      limit,
      offset,
      where: {
        resource_id: id,
      },
      include: [
        { model: resourcebrand, as: "resourcebrand" },
        { model: detailresourcetype, as: "detailresourcetype" },
      ],
    });
    const response = paginate.getPagingData(data, page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await resourcequantityandprice.findAll({
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
      let data = await resourcequantityandprice.create(body);
      if (data) {
        let us = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "resourcequantityandprice",
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
    let data = await resourcequantityandprice.update(body, {
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
    let data = await resourcequantityandprice.destroy({
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
