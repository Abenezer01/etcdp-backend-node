const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const {
  ProjectTime,
  ProjectExtensionTime,
  Sequelize,
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
const moment = require("moment");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ProjectTime, req);

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
    let data = await ProjectTime.findOne({
      where: { project_id: id }
    });
    const extensions = await ProjectExtensionTime.findAll({
      where: {
        project_id: data.project_id,
      },
    });

    let extensiondays = extensions.reduce(
      (total, item) => total + item.number_of_days,
      0
    );
    let commencement_date = data ? data.commencement_date : null;
    let contract_duration = data ? data.original_contract_duration : null;

    let revised_completion_date = moment(commencement_date).add(
      contract_duration + extensiondays,
      "days"
    );

    data = data.toJSON();
    data.revised_completion_date = revised_completion_date;


    res.apiSuccess({
      data: data,
      total: 1 // Assuming a single user is being returned
    }, {
      pageSize: 1,
      page: 1
    });
  } catch (error) {
    console.error("Error:", error);
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(ProjectTime, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ProjectTime.findAll({
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
  saveRecord(ProjectTime, req, res);
};

self.update = async (req, res) => {
  updateRecord(ProjectTime, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProjectTime, req, res);
};

module.exports = self;
