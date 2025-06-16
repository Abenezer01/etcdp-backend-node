const { AddressMasterData  , Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    const whereCondition = { };
    
    
    const includeOptions = [
      {
          model: AddressMasterData,
          as: "parentAddress"
      },
    ];
    const paginatedResult = await paginationHelper(AddressMasterData , req, whereCondition, includeOptions);

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
  const includeOptions = [
    {
        model: AddressMasterData,
        as: "parentAddress"
    },
  ];
  getRecordById(AddressMasterData , req, res, includeOptions);
};

self.save = async (req, res) => {
  saveRecord(AddressMasterData , req, res);
};

self.update = async (req, res) => {
  updateRecord(AddressMasterData , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(AddressMasterData , req, res);
};

module.exports = self;
