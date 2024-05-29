const actionHelper = require("../utils/action-helper");
const {
  ProjectTime,
  ProjectExtensionTime,
  Sequelize,
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
const paginate = require("../../utils/pagination");
const moment = require("moment");
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
    const { rows, count } = await ProjectTime.findAndCountAll({
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
      message: err.message || "An error occurred while retrieving data.",
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
    let data = await ProjectTime.findOne({
      limit,
      offset,
      where: { project_id: id },
      order: [["createdAt", order]],
    });
    const extensions = await ProjectExtensionTime.findAll({
      where: {
        project_id: data.project_id,
      },
    });

    let extensiondays = extensions.reduce(
      (total, item) => total + item.number_of_days,
      0
    );
    let commencement_date = data ? data.commencement_date : null;
    let contract_duration = data ? data.original_contract_duration : null;

    let revised_completion_date = moment(commencement_date).add(
      contract_duration + extensiondays,
      "days"
    );

    data = data.toJSON();
    data.revised_completion_date = revised_completion_date;

    return res.json(data);

    const response = paginate.getPagingData(data, page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  }
};
self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ProjectTime.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: data,
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
    let data = await ProjectTime.findAll({
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
      let data = await ProjectTime.create(body);
      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "ProjectTime",
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
    let data = await ProjectTime.update(body, {
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

self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ProjectTime.destroy({
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
