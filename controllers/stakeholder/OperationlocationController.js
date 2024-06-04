const { OperationLocation, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(OperationLocation, req);

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
  try {
    let id = req.params.id;
    let data = await OperationLocation.findOne({
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
    const data = await OperationLocation.findAndCountAll({
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
    let data = await OperationLocation.findAll({
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
      const data = await OperationLocation.create(location);
      await actionHelper.saveActionState(
        data.id,
        "OperationLocation",
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
//                 let data = await OperationLocation.create(body[i]);
//                 await actionHelper.saveActionState(data.id, "OperationLocation", "REGISTER", us, req, res);
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
        await OperationLocation.create(location);
      } else if (location.id && location.status == false) {
        await OperationLocation.update(location, {
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
    let data = await OperationLocation.destroy({
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
