const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const {
  ProjectVariation,
  ProjectExtensionTime,
  Sequelize,
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ProjectVariation, req);

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
    const paginatedResult = await paginationHelper(ProjectVariation, req, whereCondition);

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
  getRecordById(ProjectVariation, req, res);
};

self.getByProjectType = async (req, res) => {
  try {
    const { order = process.env.order } = req.query;
    let { type, project_id } = req.query;
    if (!project_id) {
      return res.status(400).json({ message: "Can't get project_id at param" });
    }
    if (!type) {
      return res.status(400).json({ message: "Can't get type value at param" });
    }
    await ProjectVariation
      .findAll({
        where: {
          type: type,
          project_id: project_id,
        },
        order: [["createdAt", order]],
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
    let data = await ProjectVariation.findAll({
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
      let data = await ProjectVariation.create(body);
      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "ProjectVariation",
          "REGISTER",
          usrID,
          req,
          res
        );

        let extension_days = data.extension_time;
        if (extension_days > 0) {
          let extension = await ProjectExtensionTime.create({
            title: `${data.type} extension`,
            project_id: data.project_id,
            number_of_days: extension_days,
            reason: data.type,
          });
          if (extension) {
            data.extension_time_id = extension.id;
            await data.save();
            await actionHelper.saveActionState(
              extension.id,
              "ProjectExtensionTime",
              "REGISTER",
              usrID,
              req,
              res
            );
          }
        }
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
    let data = await ProjectVariation.update(body, {
      where: {
        id: id,
      },
    });

    if (data) {
      let variation = await ProjectVariation.findOne({
        where: {
          id: id,
        },
      });
      if (variation) {
        await ProjectExtensionTime.update(
          { number_of_days: variation.extension_time },
          {
            where: {
              id: variation.extension_time_id,
            },
          }
        );
      }
    }

    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.delete = async (req, res) => {
  deleteRecord(ProjectVariation, req, res);
};

module.exports = self;
