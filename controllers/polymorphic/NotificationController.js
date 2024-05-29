const { Notification, Sequelize } = require("./../../models");
const moment = require("moment");
const usrData = require("../../utils/userDataFromToken");
const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    //pagination
    let limit = req.params.limit;
    let page_no = req.params.page_no;
    let us = await usrData.userData(req, res);
    let data = await Notification.findAndCountAll({
      order: [["createdAt", "DESC"]],
      where: {
        notifiable_id: us.usrID,
      },
      limit: Number(limit),
      offset: Number(--page_no),
    });

    return res.json({
      count: data.count,
      data: data.rows,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.unreadNotification = async (req, res) => {
  try {
    let count = req.params.count;
    let us = await usrData.userData(req, res);
    let data = await Notification.findAll({
      limit: Number(count),
      where: {
        notifiable_id: us.usrID,
        read_at: null,
      },
      order: [["createdAt", "DESC"]],
    });
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
    let data = await Notification.findOne({
      where: {
        id: id,
      },
    });

    if (!data.read_at) {
      await Notification.update(
        { read_at: moment() },
        {
          where: {
            id: data.id,
          },
        }
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
    let data = await Notification.update(body, {
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
    let data = await Notification.destroy({
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
