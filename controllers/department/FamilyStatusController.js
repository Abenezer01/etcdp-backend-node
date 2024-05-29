const { FamilyStatus, Sequelize } = require("../../models");
const actionHelper = require("../utils/action-helper");
const usrData = require("../../utils/userDataFromToken");

const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    let data = await FamilyStatus.findAll();
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await FamilyStatus.findOne({
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
    let data = await FamilyStatus.findAll({
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
    let data = await FamilyStatus.create(body);

    if (data) {
      let usr = await usrData.userData(req, res);
      await actionHelper.saveActionState(
        data.id,
        "FamilyStatus",
        "REGISTER",
        usr.usrID,
        req,
        res
      );
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
    let data = await FamilyStatus.update(body, {
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
    let data = await FamilyStatus.destroy({
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
    let data = await FamilyStatus.findAll({
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
