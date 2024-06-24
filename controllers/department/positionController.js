const { Position, Department, Permission, PositionPermission, Sequelize } = require("../../models");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");

const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Position, req);

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
  getRecordById(Position, req, res);
};

self.save = async (req, res) => {
  saveRecord(Position, req, res);
};

self.update = async (req, res) => {
  updateRecord(Position, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Position, req, res);
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

self.getParentDepartment = async (req, res) => {
  try {
    const whereCondition = {  parent_department_id: null };
    const paginatedResult = await paginationHelper(Department, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.getDepartmentPositions = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { department_id: id};
    const paginatedResult = await paginationHelper(Position, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.givePositionPermissions = async(req, res) => {
  
  try {
     let permissions = await Permission.findAll();
     
      for(let per of permissions) {
        await PositionPermission.create({
          permission_id: per.id,
          position_id: "8a0a21ce-45a8-462b-a07d-3d55ed3ab089"
        });
      }
      return res.json("All permissions are granted to Admin");

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
module.exports = self;
