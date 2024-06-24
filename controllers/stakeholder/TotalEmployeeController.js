const { TotalEmployee, Sequelize } = require("./../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(TotalEmployee, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};
self.getTotalEmployeeAllYears = async (req, res) => {
  try {
    let data = await TotalEmployee.findAll({
      attributes: ["id", "nationality", "year"],
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.get = async (req, res) => {
  getRecordById(TotalEmployee, req, res);
};

self.getTotalEmployeeWithStakeholderId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { stakeholder_id: id };
    const paginatedResult = await paginationHelper(TotalEmployee, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await TotalEmployee.findAll({
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
    let stakeHolderId = body.stakeholder_id;
    let totalEmployee = await TotalEmployee.findAll({
      where: {
        stakeholder_id: stakeHolderId,
      },
    });
    let totalEmployeeData = totalEmployee;
    let tED = [];
    for (let i = 0; i < totalEmployeeData.length; i++) {
      var date = new Date(totalEmployeeData[i].year);
      let yy = date.getFullYear();
      let male = totalEmployeeData[i].male;
      let female = totalEmployeeData[i].female;
      let nationality = totalEmployeeData[i].nationality;
      let stakeholder_id = totalEmployeeData[i].stakeholder_id;
      tED.push({
        year: yy,
        female: female,
        male: male,
        nationality: nationality,
        stakeholder_id: stakeholder_id,
      });
    }

    var bodDate = new Date(req.body.year);
    let newArr = [];
    for (let i = 0; i < tED.length; i++) {
      if (
        body.nationality === tED[i].nationality &&
        bodDate.getFullYear() === tED[i].year &&
        stakeHolderId === tED[i].stakeholder_id
      ) {
        newArr.push(tED[i]);
      }
    }
    if (newArr.length) {
      return res
        .status(400)
        .json({
          message: "There is duplicate data here, Please check your inputs!",
        });
    }
    if (usr) {
      let data = await TotalEmployee.create(body);
      if (data) {
        let us = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "TotalEmployee",
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
  updateRecord(TotalEmployee, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(TotalEmployee, req, res);
};

module.exports = self;
