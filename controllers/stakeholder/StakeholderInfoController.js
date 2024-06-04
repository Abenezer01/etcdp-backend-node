const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { StakeholderInfo, Sequelize } = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderInfo, req);

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
    let data = await StakeholderInfo.findOne({
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
self.getStakeInfoByStakeHolderId = async (req, res) => {
  // let { page, size, order } = req.query;
  // let id = req.params.id;
  // //console.log("The page", page, size)
  // if (page == null && size == null) {
  //     page = process.env.page,
  //         size = process.env.size
  // }
  // if (order == null) {
  //     order = process.env.order
  // }
  // const { limit, offset } = paginate.getPagination(page, size);
  // StakeholderInfo.findAndCountAll({
  //         limit,
  //         offset,
  //         order: [
  //             ['createdAt', order]
  //         ],
  //         where: {
  //             stakeholder_id: id
  //         }
  //     })
  //     .then(data => {
  //         const response = paginate.getPagingData(data, page, limit);
  //         res.send(response);
  //     })
  //     .catch(err => {
  //         res.status(500).send({
  //             message: err.message || "Some error occurred while retrieving data."
  //         });
  //     });
  try {
    let id = req.params.id;
    let data = await StakeholderInfo.findOne({
      where: {
        stakeholder_id: id,
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
    let data = await StakeholderInfo.findAll({
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
      let data = await StakeholderInfo.create(body);
      if (data) {
        let us = usr.usrID;
        actionHelper.saveActionState(
          data.id,
          "StakeholderInfo",
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
    let data = await StakeholderInfo.update(body, {
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
    let data = await StakeholderInfo.destroy({
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
