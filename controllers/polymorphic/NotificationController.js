const { Notification } = require("./../../models");
const moment = require("moment");
const paginationHelper = require("../utils/pagination-helper");
const { updateRecord, deleteRecord } = require("../utils/format-helper");
const usrData = require("../../utils/userDataFromToken");

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
    res.apiError(error);
  }
};


self.unreadNotification = async (req, res) => {
  try {
    const usr = await usrData.userData(req, res);
    const whereCondition = { 
      notifiable_id: usr.usrID,
      read_at: null
    };

    const paginatedResult = await paginationHelper(Notification, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
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
    });
  } catch (error) {
    res.apiError(error);
  }
};

self.update = async (req, res) => {
  updateRecord(Notification, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Notification, req, res);
};

module.exports = self;
