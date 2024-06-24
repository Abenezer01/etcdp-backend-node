const { ModelMenu, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const master = require("../../config/master");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
const { getRecordById, updateRecord, deleteRecord } = require("../utils/format-helper");

dotenv.config();

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ModelMenu, req);

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
  getRecordById(ModelMenu, req, res);
};


self.update = async (req, res) => {
  updateRecord(ModelMenu, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ModelMenu, req, res);
};

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id };

    const paginatedResult = await paginationHelper(ModelMenu, req, whereCondition);

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
    let data = await ModelMenu.findAll({
      where: {
        name: {
          [Op.like]: "%" + text + "%",
        },
      },
    });
    return res.json(data);
  } catch (error) {
    res.apiError(error);
  }
};

self.save = async (req, res) => {
  try {
    let usr = await usrData.userData(req, res);
    let body = req.body;

    let models = body.models;

    if (models.length > 0) {
      let arr = [];
      for (let model of models) {
        let existing = await ModelMenu.findOne({
          where: {
            module_type_id: body.module_type_id,
            module: body.module,
            model: model,
          },
        });

        if (!existing) {
          let data = await ModelMenu.create({
            module_type_id: body.module_type_id,
            module: body.module,
            model: model,
          });
          if (data) {
            arr.push(data);
            let usrID = usr.usrID;
            await actionHelper.saveActionState(
              data.id,
              "ModelMenu",
              "REGISTER",
              usrID,
              req,
              res
            );
          }
        }
      }
      
      res.apiSuccess({
        data: arr
      });

    } else {
      return res.status(404).json({
        message: "Empty Models!",
      });
    }
  } catch (error) {
    res.apiError(error);
  }
};

self.editModuleTypeModels = async (req, res) => {
  try {
    const id = req.params.id;
    const { models, module } = req.body;

    if (models.length > 0) {
      const usr = await usrData.userData(req, res);

      for (const model of models) {
        const { status } = model;

        const where = {
          module_type_id: id,
          model: model.model,
          module,
        };

        if (status) {
          const [data, created] = await ModelMenu.findOrCreate({
            where,
            defaults: {
              module_type_id: id,
              model: model.model,
              module,
            },
          });

          if (created) {
            await actionHelper.saveActionState(
              data.id,
              "ModelMenu",
              "REGISTER",
              usr.usrID,
              "req, res"
            );
          }
        } else {
          const exist = await ModelMenu.findOne({ where });

          if (exist) {
            await ModelMenu.destroy({ where: { id: exist.id } });
          }
        }
      }
    }

    return res.status(200).json({
      message: "Successfully updated",
    });
  } catch (error) {
    res.apiError(error);
  }
};


self.getModelMenuByModule = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { module_type_id: id };

    const paginatedResult = await paginationHelper(ModelMenu, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};


self.getModuleExtraModels = async (req, res) => {
  let module = req.params.module;
  try {
    let models = master.modulemodels[module];

    res.apiSuccess({
      data: model
    });

    return res.json(models);
  } catch (error) {
    res.apiError(error);
  }
};

module.exports = self;
