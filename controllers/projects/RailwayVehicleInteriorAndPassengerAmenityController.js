const { RailwayVehicleInteriorAndPassengerAmenity, ProjectMasterData, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const whereCondition = {};
    const includeOptions = [
      {
        model: ProjectMasterData,
        as: 'railwayVehicleIdentification'
      }
    ];
    const paginatedResult = await paginationHelper(RailwayVehicleInteriorAndPassengerAmenity, req, whereCondition, includeOptions);

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
  getRecordById(RailwayVehicleInteriorAndPassengerAmenity , req, res);
};

self.save = async (req, res) => {
  saveRecord(RailwayVehicleInteriorAndPassengerAmenity , req, res);
};

self.update = async (req, res) => {
  updateRecord(RailwayVehicleInteriorAndPassengerAmenity , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(RailwayVehicleInteriorAndPassengerAmenity , req, res);
};

module.exports = self;
