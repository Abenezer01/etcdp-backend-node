const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const { ElectricTower, TransmissionLine, Sequelize } = require("../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ElectricTower, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id };

    const includeOptions = [
      { 
        model: TransmissionLine, 
        as: "TransmissionLine",
        attributes: ["id", "name"]
      } // Example association
    ];
   

    const paginatedResult = await paginationHelper(ElectricTower, req, whereCondition, includeOptions);

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
  getRecordById(ElectricTower, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ElectricTower.findAll({
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
  saveRecord(ElectricTower, req, res);
};

self.update = async (req, res) => {
  updateRecord(ElectricTower, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ElectricTower, req, res);
};

module.exports = self;
