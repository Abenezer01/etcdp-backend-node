const {
  ProjectCategory,
  ProjectSubCategory,
  Sequelize,
} = require("../../models");
//const ProjectType = require("../../models/ProjectType");

const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const Op = Sequelize.Op;

let self = {};

const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();



self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ProjectCategory, req);

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



self.getAllProCatByTypeId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { projecttype_id: id }

    const includeOptions = [
      { model: ProjectSubCategory, as: 'projectsubcategories' } // Example association
    ];
   

    const paginatedResult = await paginationHelper(ProjectCategory, req, whereCondition, includeOptions);

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
  getRecordById(ProjectCategory, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ProjectCategory.findAll({
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
    if (usr) {
      let data = await ProjectCategory.create(body);
      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "ProjectCategory",
          "REGISTER",
          usrID,
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
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await ProjectCategory.update(body, {
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ProjectCategory.destroy({
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
