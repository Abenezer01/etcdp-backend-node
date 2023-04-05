const { role, rolepermission, permission, Sequelize } = require("../../models");
const { saveActionState } = require("../../utils/helper");
const usrData = require("../../utils/userDataFromToken");

const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    let data = await role.findAll();
    return res.json(data);
  } catch (error) {
    // if (err.message === 'Error') {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
    res.status(500).json({
      message: error.message,
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await role.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: data,
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
    let data = await role.findAll({
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
    let body = req.body;
    let data = await role.create(body);
    if (data) {
      let usr = await usrData.userData(req, res);
      await actionHelper.saveActionState(
        data.id,
        "role",
        "REGISTER",
        usr.usrID,
        req,
        res
      );
    }
    return res.json(data);
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
    let data = await role.update(body, {
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

self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await role.destroy({
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
self.givePermission = async (req, res) => {
  let id = req.params.id;

  try {
    let body = req.body;
    let permissions = body.permissions;
    let rol = await role.findOne({
      where: {
        id: id,
      },
    });

    for (let per of permissions) {
      if (per.is_selected) {
        await rolepermission.findOrCreate({
          where: {
            permission_id: per.id,
            role_id: rol.id,
          },
        });
      } else {
        await rolepermission.destroy({
          where: {
            permission_id: per.id,
          },
        });
      }
    }

    return res.json({
      message: "permissions are given to a role ",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = self;
