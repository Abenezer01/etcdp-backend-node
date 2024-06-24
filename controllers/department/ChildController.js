const { Child, Sequelize } = require("../../models");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");

const Op = Sequelize.Op;
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Child, req);

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
  getRecordById(Child, req, res);
};

self.save = async (req, res) => {
  saveRecord(Child, req, res);
};

self.update = async (req, res) => {
  updateRecord(Child, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Child, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Child.findAll({
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



module.exports = self;
