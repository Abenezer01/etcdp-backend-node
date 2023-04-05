const { operationlocation, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");

self.getAll = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { rows, count } = await operationlocation.findAndCountAll({
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
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};
self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await operationlocation.findOne({
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
self.getByStakeholderId = async (req, res) => {
  const { id } = req.params;
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);
  try {
    const data = await operationlocation.findAndCountAll({
      limit,
      offset,
      where: { stakeholder_id: id, status: true },
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
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await operationlocation.findAll({
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
    const usr = await usrData.userData(req, res);
    const body = req.body.opLocation;

    if (!usr) {
      return;
    }

    const us = usr.usrID;
    const arr = [];

    for (const location of body) {
      location.status = true;
      const data = await operationlocation.create(location);
      await actionHelper.saveActionState(
        data.id,
        "operationlocation",
        "REGISTER",
        us,
        req,
        res
      );
      arr.push(data);
    }

    res.json(arr);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// self.save = async(req, res) => {
//     try {
//         let usr = await usrData.userData(req, res);
//         let body = req.body.opLocation;
//         if (usr) {
//             let us = usr.usrID;
//             let arr = [];
//             for (i = 0; i < body.length; i++) {
//                 let data = await operationlocation.create(body[i]);
//                 await actionHelper.saveActionState(data.id, "operationlocation", "REGISTER", us, req, res);
//                 arr.push(data);
//             }
//             return res.json(arr);
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: error.message,
//         });
//     }
// };
self.update = async (req, res) => {
  try {
    const usr = await usrData.userData(req, res);
    const body = req.body.opLocation;

    if (!usr) {
      return;
    }
    for (const location of body) {
      if (!location.id && location.status == true) {
        await operationlocation.create(location);
      } else if (location.id && location.status == false) {
        await operationlocation.update(location, {
          where: {
            id: location.id,
          },
        });
      }
    }

    res.json({
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
    let data = await operationlocation.destroy({
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
