const { Graduate, StakeholderStudyField, Sequelize } = require("../../models");

const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require("../../utils/helper");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Graduate, req);

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
  getRecordById(Graduate, req, res);
};

self.getByHigherInstituteId = async (req, res) => {
  const { id } = req.params;
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);
  try {
    const { rows, count } = await Graduate.findAndCountAll({
      limit,
      offset,
      where: { higher_institute_id: id },
      order: [["createdAt", order]],
      include: [
        "studyfield",
        "studyprogram",
        "studylevel",
        "studyperiod",
        "agelevel",
      ],
    });
    // if (!data) {
    //     return res.status(200).send("No data found")
    // }
    let newData = await Promise.all(
      rows.map(async (item) => {
        //console.log("The item id", item.dataValues);
        return {
          ...item.dataValues,
          status: await actionHelper.getAction(item.dataValues.id),
        };
      })
    );
    const response = paginate.getPagingData(
      { rows: newData, count },
      page,
      limit
    );
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
    let data = await Graduate.findAll({
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
    let studyFieldId = body.stake_study_field_id;
    let studyData = await StakeholderStudyField.findOne({
      where: {
        id: studyFieldId,
      },
      include: ["studyfield"],
    });
    console.log("Study data", studyData.studyfield_id);
    let ii = studyData.studyfield_id;
    //body.study_field_id = studyData.studyfield_id
    let da = {
      higher_institute_id: body.higher_institute_id,
      stake_study_field_id: body.stake_study_field_id,
      description: body.description,
      study_program_id: body.study_program_id,
      studylevel_id: body.studylevel_id,
      studyfield_id: ii,
      study_period_id: body.study_period_id,
      male: body.male,
      female: body.female,
      year: body.year,
      nationality: body.nationality,
      agelevel_id: body.agelevel_id,
    };
    //console.log("The final data", da)

    if (usr) {
      let data = await Graduate.create(da);
      if (data) {
        let us = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "Graduate",
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
  updateRecord(Graduate, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Graduate, req, res);
};

module.exports = self;
