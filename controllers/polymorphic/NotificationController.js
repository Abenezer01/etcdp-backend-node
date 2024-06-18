const { Notification, Sequelize } = require("./../../models");
const moment = require("moment");
const usrData = require("../../utils/userDataFromToken");
const paginationHelper = require("../utils/pagination-helper")
const { updateRecord, deleteRecord } = require('../utils/format-helper');
const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Notification, req);

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


self.unreadNotification = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { 
      notifiable_id: us.usrID,
      read_at: null
    }

    const paginatedResult = await paginationHelper(Notification, req, whereCondition);

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


    res.apiSuccess({
      data
    })
  } catch (error) {
    res.apiError(error)
  }
};

self.update = async (req, res) => {
  updateRecord(Notification, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Notification, req, res);
}

module.exports = self;
