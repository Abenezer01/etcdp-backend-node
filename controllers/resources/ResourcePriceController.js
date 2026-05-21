const { ResourcePrice, ResourceMasterData, ResourceSpecification, ResourceBrand, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");

let self = {};

self.getAll = async (req, res) => {
  try {
    let whereCondition = {};

    let includeOption = [
      {
        model: ResourceBrand,
        as: "resourceBrand"
      },
      {
        model: ResourceSpecification,
        as: "resourceSpecification"
      },
      {
        model: ResourceMasterData,
        as: "supplierName"
      },
      {
        model: ResourceMasterData,
        as: "supplierAddress"
      },
      {
        model: ResourceMasterData,
        as: "quality"
      },
    ];

    const paginatedResult = await paginationHelper(ResourcePrice , req, whereCondition, includeOption);

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
  getRecordById(ResourcePrice , req, res);
};

self.save = async (req, res) => {
  // saveRecord(ResourcePrice , req, res);

   try {
      let body = req.body;

      let usr = await usrData.userData(req, res);
      
      body.department_id = usr.departmentID;  
      let data = await ResourcePrice.create(body);
  
      if(data){

        await actionHelper.saveActionState(
          data.id,
          "ResourcePrice",
          "REGISTER",
          usr.usrID,
          req,
          res
        );
  
        await actionHelper.saveActivityLog(
          usr.usrID, "create", "module", data.id, "ResourcePrice", req, res
        )
        res.apiSuccess({
            data: data
          });
      }
      
  
    } catch (error) {
      res.apiError(error);
    }
};

self.update = async (req, res) => {
  updateRecord(ResourcePrice , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ResourcePrice , req, res);
};

module.exports = self;
