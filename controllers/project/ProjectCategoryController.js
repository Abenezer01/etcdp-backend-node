const {
  projectcategory,
  projectsubcategory,
  projecttype,
  Sequelize,
} = require("../../models");
//const projecttype = require("../../models/projecttype");

const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");

const Op = Sequelize.Op;

let self = {};

const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
self.getAll = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { rows, count } = await projectcategory.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", order]],
      include: ["Projectsubcategories"],
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
  const { id } = req.params;
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);
  try {
    const data = await projectcategory.findAndCountAll({
      limit,
      offset,
      where: { project_id: id },

      order: [["createdAt", order]],
    });

    const response = paginate.getPagingData(data, page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  }
};

self.getAllProCatByTypeId = async (req, res) => {
  const { id } = req.params;
  let { page, size } = req.query;

  if (!page && !size) {
    page = process.env.page;
    size = process.env.size;
  }

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { count, rows } = await projectcategory.findAndCountAll({
      limit,
      offset,
      include: "Projectsubcategories",
      where: {
        projecttype_id: id,
      },
    });

    const response = paginate.getPagingData({ count, rows }, page, limit);

    res.send(response);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await projectcategory.findOne({
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
    let data = await projectcategory.findAll({
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
      let data = await projectcategory.create(body);
      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "projectcategory",
          "REGISTER",
          usrID,
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
    let data = await projectcategory.update(body, {
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
    let data = await projectcategory.destroy({
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
