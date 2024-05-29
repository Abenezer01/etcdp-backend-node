const actionHelper = require("../utils/action-helper");
const {
  ProjectExtensionTime,
  ProjectVariation,
  Sequelize,
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const paginate = require("../../utils/pagination");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  let { page, size, order } = req.query;
  //console.log("The page", page, size)
  if (page == null && size == null) {
    (page = process.env.page), (size = process.env.size);
  }
  if (order == null) {
    order = process.env.order;
  }
  const { limit, offset } = paginate.getPagination(page, size);
  ProjectExtensionTime
    .findAndCountAll({
      limit,
      offset,
      order: [["createdAt", order]],
    })
    .then((data) => {
      const response = paginate.getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ProjectExtensionTime.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.getByProjectId = async (req, res) => {
  try {
    let id = req.params.id;
    let { page, size, order } = req.query;
    //console.log("The page", page, size)
    if (page == null && size == null) {
      (page = process.env.page), (size = process.env.size);
    }
    if (order == null) {
      order = process.env.order;
    }
    const { limit, offset } = paginate.getPagination(page, size);

    let data = await ProjectExtensionTime.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "ASC"]],
      where: {
        project_id: id,
      },
    });

    let withVariation = await Promise.all(
      data.rows.map(async (item) => {
        let variation = await ProjectVariation.findOne({
          where: {
            extension_time_id: item.id,
          },
        });

        let temp = item.toJSON();
        temp.variation_id = variation ? variation.id : null;
        temp.type = variation ? variation.type : null;
        return temp;
      })
    );

    data.rows = withVariation;
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
    let data = await ProjectExtensionTime.findAll({
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
      let data = await ProjectExtensionTime.create(body);
      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "projectextensiontime",
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
    let data = await ProjectExtensionTime.update(body, {
      where: {
        id: id,
      },
    });

    if (data) {
      let extension = await ProjectExtensionTime.findOne({
        where: {
          id: id,
        },
      });
      if (extension) {
        await ProjectVariation.update(
          { extension_time: extension.number_of_days },
          {
            where: {
              extension_time_id: extension.id,
            },
          }
        );
      }
    }
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
    let data = await ProjectExtensionTime.destroy({
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
