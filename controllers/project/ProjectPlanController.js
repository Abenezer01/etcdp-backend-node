const { ProjectPlan, File, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ProjectPlan, req);

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

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id }
    const paginatedResult = await paginationHelper(ProjectPlan, req, whereCondition);

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
  getRecordById(ProjectPlan, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ProjectPlan.findAll({
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
    let found  = await ProjectPlan.findOne({
      where: {
        project_id: body.project_id,
        year: body.year,
        quarter: body.quarter
      }
    })


    if(found) {
      return res.status(422).json({
        message: "Plan aready exist!"
      })
    }

    var date = new Date(body.start);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    body.end = lastDay;
    

    if (usr) {
     
      let data = await ProjectPlan.create(body);

      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "ProjectPlan",
          "REGISTER",
          usrID,
          req,
          res
        );
      }
      let fle = await File.findAll({
        where: {
          id: {
            [Sequelize.Op.in]: body.file_ids,
          },
        },
        raw: true,
      });
      console.log("The fle", body.file_type);
      const fileData = fle.map((f) => ({
        reference_id: data.id,
        title: f.title,
        url: f.url,
        type: body.file_type,
        description: f.description,
        extension: f.extension,
        size: f.size,
      }));
      //return res.send(fileData);
      for (const dataa of fileData) {
        let f = await File.create(dataa);
        await actionHelper.saveActionState(
          f.id,
          "File",
          "REGISTER",
          usrID,
          req,
          res
        );
      }

      //console.log("The ll", ll);
      return res.json(data);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.update = async (req, res) => {
  updateRecord(ProjectPlan, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProjectPlan, req, res);
};

self.getProjectYearlyPlans = async (req, res) => {
  const { id, year } = req.params;
  try {
    let plans = await ProjectPlan.findAll({
      where: {
        project_id: id,
        year: year,
      },
      include: {
        model: File,
        as: "File",
      },
    });

    return res.json(plans);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = self;
