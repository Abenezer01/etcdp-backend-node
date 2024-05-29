const actionHelper = require("../utils/action-helper");
const { Position, Permission, PositionPermission, Sequelize } = require("./../../models");
const usrData = require("../../utils/userDataFromToken");


const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    let data = await Position.findAll();
    return res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Position.findOne({
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
    let data = await Position.findAll({
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
    let data = await Position.create(body);
    if (data) {
      let usr = await usrData.userData(req, res);
      await actionHelper.saveActionState(
        data.id,
        "Position",
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
    let data = await Position.update(body, {
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
    let data = await Position.destroy({
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

self.getParentDepartment = async (req, res) => {
  try {
    let data = await department.findOne({
      where: {
        parent_department_id: null,
      },
    });

    if (data) {
      return res.json(data);
    }
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

self.getDepartmentPositions = async (req, res) => {
  try {
    let id = req.params.id;

    let positions = await Position.findAll({
      where: {
        department_id: id,
      },
    });
    return res.json(positions);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.givePositionPermissions = async(req, res) => {
  
  try {
     let permissions = await Permission.findAll();
     
      for(let per of permissions) {
        let data = await PositionPermission.create({
          permission_id: per.id,
          position_id: "8a0a21ce-45a8-462b-a07d-3d55ed3ab089"
        })
      }
      return res.json("All permissions are granted to Admin");

  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
module.exports = self;
