const { Address, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, updateRecord, deleteRecord } = require('../utils/format-helper');

const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Address, req);

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
  getRecordById(Address, req, res);
};
self.getAddressByModelId = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Address.findAll({
      where: {
        model_id: id,
      },
      order: [["hq", "DESC"]],
    });
    let arr = [];
    for (i = 0; i < data.length; i++) {
      if (data[i].hq == true) {
        data[0] = data[i];
      }
    }
    
    res.apiSuccess({
      data
    })
    
  } catch (error) {
    res.apiError(error)
  }
};
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Address.findAll({
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
    let model_id = body.model_id;
    if (usr) {
      let usrID = usr.usrID;
      let hqData = await Address.findAll({
        where: {
          model_id: model_id,
          hq: true,
        },
      });
      console.log("The hq data", hqData);
      if (!hqData.length) {
        body.hq = true;
        let hqBod = await Address.create(body);
        if (hqBod) {
          await actionHelper.saveActionState(
            hqBod.id,
            "Address",
            "REGISTER",
            usrID,
            req,
            res
          );
          return res.status(200).json({
            data: hqBod,
          });
        }
      }
      body.hq = false;
      let data = await Address.create(body);
      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "Address",
          "REGISTER",
          usrID,
          req,
          res
        );

        res.apiSuccess({
          data: data
        })
      }
    }
  } catch (error) {
    res.apiError(error)
  }
};

self.update = async (req, res) => {
  updateRecord(Address, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Address, req, res);

};

module.exports = self;
