const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const { ProjectBond, Sequelize } = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ProjectBond, req);

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
    const paginatedResult = await paginationHelper(ProjectBond, req, whereCondition);

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
  getRecordById(ProjectBond, req, res);
};

self.getByProjectType = async (req, res) => {
  try {
    let { type, project_id } = req.query;
    if (!project_id) {
      res.status(400).json({ message: "Can't get project_id at param" });
    }
    if (!type) {
      res.status(400).json({ message: "Can't get type value at param" });
    }
    await ProjectBond
      .findAll({
        where: {
          type: type,
          project_id: project_id,
        },
      })
      .then(function (datas) {
        return res.json({
          data: datas,
        });
      })
      .catch(function (error) {
        console.log(error);
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
    let data = await ProjectBond.findAll({
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
  saveRecord(ProjectBond, req, res);
};

self.update = async (req, res) => {
  updateRecord(ProjectBond, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProjectBond, req, res);
};

module.exports = self;
