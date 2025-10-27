const { Resource, Department, ResourceType, ResourceCategory, ResourceSubCategory , Sequelize, sequelize } = require("../../models");
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
            model: ResourceType,
            as: "resourceType"
        },
        {
            model: ResourceCategory,
            as: "resourceCategory"
        },
        {
            model: ResourceSubCategory,
            as: "resourceSubCategory"
        },
    ];
    const paginatedResult = await paginationHelper(Resource , req, whereCondition, includeOptions);

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
  getRecordById(Resource , req, res);
};

self.save = async (req, res) => {
  saveRecord(Resource , req, res);
};

self.update = async (req, res) => {
  updateRecord(Resource , req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Resource , req, res);
};


self.countAllResourceWithResourceType = async (req, res) => {
  try {
    let queryTypeString =
      "SELECT resourcetypes.title AS name,resourcetypes.id AS id, COALESCE(COUNT(Resources.id), 0) AS total FROM resourcetypes LEFT JOIN Resources ON resourcetypes.id = Resources.resourcetype_id GROUP BY resourcetypes.title;";
    let resourceTypeData = await sequelize.query(queryTypeString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let queryCategoryString =
      "SELECT resourcecategories.title AS name,resourcecategories.resourcetype_Id AS typeID,resourcecategories.id AS id, COALESCE(COUNT(Resources.id), 0) AS total FROM resourcecategories LEFT JOIN Resources ON resourcecategories.id = Resources.resourcecategory_id GROUP BY resourcecategories.title,typeID,id;";
    let resourceCategoryData = await sequelize.query(queryCategoryString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let querySubCategoryString =
      "SELECT resourcesubcategories.id AS id,resourcesubcategories.title AS name,resourcesubcategories.resourcecategory_id AS category_id, COALESCE(COUNT(Resources.id), 0) AS total FROM resourcesubcategories LEFT JOIN Resources ON resourcesubcategories.id = Resources.resourcesubcategory_id GROUP BY resourcesubcategories.title,category_id,id;";
    let resourceSubCategoryData = await sequelize.query(
      querySubCategoryString,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    const { count } = await Resource.findAndCountAll();
    const Result = [];
    //let Result = {};
    const parent = {
      name: "Resource",
      id: "382d79ee-2b9d-4919-a7ad-1ada61c1ab28",
      parentNodeId: null,
      total: count,
    };
    Result.push(parent);
    for (let i = 0; i < resourceTypeData.length; i++) {
      const objA = resourceTypeData[i];
      //const categories = [];

      // loop through resourceCategoryData to find matching typeIDs
      for (let j = 0; j < resourceCategoryData.length; j++) {
        const objB = resourceCategoryData[j];

        if (objA.id === objB.typeID) {
          const category = {
            parentNodeId: objA.id,
            id: objB.id,
            name: objB.name,
            total: objB.total,
          };
          Result.push(category);
          // loop through resourceSubCategoryData to find matching category ids
          for (let k = 0; k < resourceSubCategoryData.length; k++) {
            const objC = resourceSubCategoryData[k];

            if (objB.id === objC.category_id) {
              Result.push({
                parentNodeId: objB.id,
                id: objC.id,
                name: objC.name,
                total: objC.total,
              });
            }
          }

          //categories.push(category);
        }
      }

      const typeNewObj = {
        parentNodeId: parent.id,
        id: objA.id,
        name: objA.name,
        total: objA.total,
      };
      Result.push(typeNewObj);
      //Result.push(allResult);
    }

    res.send(Result);
  } catch (error) {
    return res.apiError(error);
  }
};
module.exports = self;
