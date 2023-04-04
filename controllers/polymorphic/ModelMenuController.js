const { modelmenu, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
const master = require("../../config/master");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

let self = {};

self.getAll = async (req, res) => {
  try {
    let data = await modelmenu.findAll();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await modelmenu.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.getByProjectId = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await modelmenu.findOne({
      where: {
        project_id: id,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await modelmenu.findAll({
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

    let models = body.models;

    if (models.length > 0) {
      let arr = [];
      for (let model of models) {
        let existing = await modelmenu.findOne({
          where: {
            module_type_id: body.module_type_id,
            module: body.module,
            model: model,
          },
        });

        if (!existing) {
          let data = await modelmenu.create({
            module_type_id: body.module_type_id,
            module: body.module,
            model: model,
          });
          if (data) {
            arr.push(data);
            let usrID = usr.usrID;
            await actionHelper.saveActionState(
              data.id,
              "modelmenu",
              "REGISTER",
              usrID,
              req,
              res
            );
          }
        }
      }
      return res.json(arr);
    } else {
      return res.status(404).json({
        message: "Empty Models!",
      });
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

    await modelmenu.update(body, {
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      message: "Successfully Updated!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
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
          const [data, created] = await modelmenu.findOrCreate({
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
              "modelmenu",
              "REGISTER",
              usr.usrID,
              "req, res"
            );
          }
        } else {
          const exist = await modelmenu.findOne({ where });

          if (exist) {
            await modelmenu.destroy({ where: { id: exist.id } });
          }
        }
      }
    }

    return res.status(200).json({
      message: "Successfully updated",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await modelmenu.destroy({
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

self.getModelMenuByModule = async (req, res) => {
  let id = req.params.id;
  try {
    let data = await modelmenu.findAll({
      where: {
        module_type_id: id,
      },
    });

    return res.json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.getModuleExtraModels = async (req, res) => {
  let module = req.params.module;
  try {
    let models = master.modulemodels[module];

    return res.json(models);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = self;
