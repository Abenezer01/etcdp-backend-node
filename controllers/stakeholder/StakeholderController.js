const {
    Stakeholder,
    StakeholderEmail,
    StakeholderPhone,
    Ownership,
    OperationLocation,
    ActionState,
    Department,
    sequelize,
    Sequelize,
} = require("./../../models");
const jwt = require("jsonwebtoken");
const paginate = require("../../utils/pagination");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const usrData = require("../../utils/userDataFromToken");
const dotenv = require("dotenv");
dotenv.config();

const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");

const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Stakeholder, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};
self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Stakeholder.findOne({
      where: {
        id: id,
      },
      include: [
        "StakeholderType",
        "StakeholderCategory",
        "StakeholderSubCategory",
        "Ownership",
        "BusinessField",
      ],
    });
    return res.status(200).json({
      data: data ? data : {},
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.getStakeHolderByTypeId = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;
  const { typeId, categoryId, subcategoryId } = req.body;

  const filter = subcategoryId
    ? [
        { stakeholdertype_id: typeId },
        { stakecategory_id: categoryId },
        { stakesubcategory_id: subcategoryId },
      ]
    : categoryId
    ? [{ stakeholdertype_id: typeId }, { stakecategory_id: categoryId }]
    : [{ stakeholdertype_id: typeId }];

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const data = await Stakeholder.findAndCountAll({
      limit,
      offset,
      order: [["created_at", order]],
      where: {
        [Op.and]: filter,
      },
    });

    const response = paginate.getPagingData(data, page, limit);
    res.send(response);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Stakeholder.findAll({
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
  saveRecord(Stakeholder, req, res);
};

self.update = async (req, res) => {
  updateRecord(Stakeholder, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Stakeholder, req, res);
};
self.countAllStakeholderWithStakeTypee = async (req, res) => {
  try {
    let queryTypeString =
      "SELECT stakeholdertypes.title AS type,stakeholdertypes.id AS typeID, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakeholdertypes LEFT JOIN stakeholders ON stakeholdertypes.id = stakeholders.stakeholdertype_id GROUP BY stakeholdertypes.title;";
    let stakeholderTypeData = await sequelize.query(queryTypeString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let queryCategoryString =
      "SELECT stakecategories.title AS category,stakecategories.stakeholdertype_Id AS typeID,stakecategories.id AS category_id, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakecategories LEFT JOIN stakeholders ON stakecategories.id = stakeholders.stakecategory_id GROUP BY stakecategories.title,typeID,category_id;";
    let stakeholderCategoryData = await sequelize.query(queryCategoryString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let querySubCategoryString =
      "SELECT stakesubcategories.title AS subcategory,stakesubcategories.stakecategory_id AS category_id, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakesubcategories LEFT JOIN stakeholders ON stakesubcategories.id = stakeholders.stakesubcategory_id GROUP BY stakesubcategories.title,category_id;";
    let stakeholderSubCategoryData = await sequelize.query(
      querySubCategoryString,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );

    const Result = [];

    for (let i = 0; i < stakeholderTypeData.length; i++) {
      const objA = stakeholderTypeData[i];
      const categories = [];

      // loop through stakeholderCategoryData to find matching typeIDs
      for (let j = 0; j < stakeholderCategoryData.length; j++) {
        const objB = stakeholderCategoryData[j];

        if (objA.typeID === objB.typeID) {
          const category = {
            category: objB.category,
            total: objB.total,
            subcategories: [], // add empty array to hold subcategories
          };

          // loop through stakeholderSubCategoryData to find matching category ids
          for (let k = 0; k < stakeholderSubCategoryData.length; k++) {
            const objC = stakeholderSubCategoryData[k];

            if (objB.category_id === objC.category_id) {
              category.subcategories.push({
                subcategory: objC.subcategory,
                total: objC.total,
              });
            }
          }

          categories.push(category);
        }
      }

      const newObj = {
        type: objA.type,
        total: objA.total,
        categories: categories,
      };

      Result.push(newObj);
    }

    res.send(Result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.countAllStakeholderWithStakeType = async (req, res) => {
  try {
    let queryTypeString =
      "SELECT stakeholdertypes.title AS name,stakeholdertypes.id AS id, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakeholdertypes LEFT JOIN stakeholders ON stakeholdertypes.id = stakeholders.stakeholdertype_id GROUP BY stakeholdertypes.title;";
    let stakeholderTypeData = await sequelize.query(queryTypeString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let queryCategoryString =
      "SELECT stakecategories.title AS name,stakecategories.stakeholdertype_Id AS typeID,stakecategories.id AS id, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakecategories LEFT JOIN stakeholders ON stakecategories.id = stakeholders.stakecategory_id GROUP BY stakecategories.title,typeID,id;";
    let stakeholderCategoryData = await sequelize.query(queryCategoryString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let querySubCategoryString =
      "SELECT stakesubcategories.id AS id,stakesubcategories.title AS name,stakesubcategories.stakecategory_id AS category_id, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakesubcategories LEFT JOIN stakeholders ON stakesubcategories.id = stakeholders.stakesubcategory_id GROUP BY stakesubcategories.title,category_id,id;";
    let stakeholderSubCategoryData = await sequelize.query(
      querySubCategoryString,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    const { count } = await Stakeholder.findAndCountAll();
    const Result = [];
    //let Result = {};
    const parent = {
      name: "Stakeholder",
      id: "382d79ee-2b9d-4919-a7ad-1ada61c1ab28",
      parentNodeId: null,
      total: count,
    };
    Result.push(parent);
    for (let i = 0; i < stakeholderTypeData.length; i++) {
      const objA = stakeholderTypeData[i];
      //const categories = [];

      // loop through stakeholderCategoryData to find matching typeIDs
      for (let j = 0; j < stakeholderCategoryData.length; j++) {
        const objB = stakeholderCategoryData[j];

        if (objA.id === objB.typeID) {
          const category = {
            parentNodeId: objA.id,
            id: objB.id,
            name: objB.name,
            total: objB.total,
          };
          Result.push(category);
          // loop through stakeholderSubCategoryData to find matching category ids
          for (let k = 0; k < stakeholderSubCategoryData.length; k++) {
            const objC = stakeholderSubCategoryData[k];

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
    res.status(500).json({
      message: error.message,
    });
  }
};

self.getStakeholderData = async(req, res) => {
    try {
        let {id} = req.params
        let data = await Stakeholder.findOne({
            where: {
                id: id
            }
        })

        if(data){
            let stakeAddress = await OperationLocation.findAll({
                where: {
                    stakeholder_id: id
                }
            })

            let emails = await StakeholderEmail.findOne({
                where: {
                    stakeholder_id: id,
                    is_primary: true
                }
            })
            let phones = await StakeholderPhone.findOne({
                where: {
                    stakeholder_id: id,
                    is_primary: true
                }
            })

            let stakeOwnership = await Ownership.findOne({
                where: {
                    id: data.ownership_id
                }
            })

            return res.json({
                name: data.trade_name,
                license_date: data.license_issued_date,
                locations: stakeAddress,
                emails,
                phones,
                origin: data.origin,
                tin: data.tin,
                ownership_type: stakeOwnership.title
            })
        }

        
    } catch (error) {
        
    }
}
module.exports = self;
