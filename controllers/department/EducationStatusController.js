const { EducationStatus, ActionState, Sequelize } = require("../../models");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const usrData = require("../../utils/userDataFromToken");

const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(EducationStatus, req);

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
    let data = await EducationStatus.findOne({
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
    let data = await EducationStatus.findAll({
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
    let body = req.body;
    let data = await EducationStatus.create(body);

    if (data) {
      if (data) {
        let usr = await usrData.userData(req, res);
        await actionHelper.saveActionState(
          data.id,
          "EducationStatus",
          "REGISTER",
          usr.usrID,
          req,
          res
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

self.update = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await EducationStatus.update(body, {
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
    let data = await EducationStatus.destroy({
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
self.getByUserId = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await EducationStatus.findAll({
      where: {
        user_id: id,
      },
    });

    return res.json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = self;
