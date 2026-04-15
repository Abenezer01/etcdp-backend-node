const { StakeholderType, Sequelize } = require("./../../models");
const dotenv = require("dotenv");
dotenv.config();
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const Op = Sequelize.Op;
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderType, req);

    // Use the response formatter to send the success response
    // order the data alphabetically 
    let data = paginatedResult.data.sort((a, b) => a.title.localeCompare(b.title));
    res.apiSuccess({
      data: data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(StakeholderType, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StakeholderType.findAll({
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
  saveRecord(StakeholderType, req, res);
};

self.update = async (req, res) => {
  updateRecord(StakeholderType, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StakeholderType, req, res);
};
self.savefile = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await StakeholderType.update(
      {
        file_id: body.file_id,
      },
      {
        where: { id: id },
      }
    );
    return res.status(200).json({
      message: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = self;
