const {
    Stakeholder,
    StakeholderEmail,
    StakeholderPhone,
    StakeholderType,
    StakeholderCategory,
    StakeholderSubCategory,
    StakeholderDepartment,
    Ownership,
    BusinessField,
    OperationLocation,
    Project,
    ProjectStakeholder,
    Department,
    sequelize,
    Sequelize,
} = require("./../../models");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
const dotenv = require("dotenv");
dotenv.config();
const paginationHelper = require("../utils/pagination-helper");

const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");


const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {

  try {

    let usr = await usrData.userData(req, res);

    let children = await Department.findAll({
            where: {
                parent_department_id: usr.departmentID
            }
        });
        
        let childrenIDs = children.map(child => child.id);


    const whereCondition = { 
      department_id: { [Op.in]: [usr.departmentID, ...childrenIDs] },
    };
    
    const includeOptions = [
      { model: StakeholderType, as: "stakeholdertype" },
      { model: StakeholderCategory, as: "stakeholdercategory" },
      { model: StakeholderSubCategory, as: "stakeholdersubcategory" }
    ];
  
    const paginatedResult = await paginationHelper(Stakeholder, req, whereCondition, includeOptions);

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
    { model: StakeholderType, as: "stakeholdertype" }, // Example association
    { model: StakeholderCategory, as: "stakeholdercategory" },
    { model: StakeholderSubCategory, as: "stakeholdersubcategory" },
    { model: Ownership, as: "ownership" },
    { model: BusinessField, as: "businessfield" }

  ];
  getRecordById(Stakeholder, req, res, includeOptions);
};

self.getStakeHolderByTypeId = async (req, res) => {

  const { typeId, categoryId, subcategoryId } = req.body;

  try {

    const filter = subcategoryId
    ? [
        { stakeholdertype_id: typeId },
        { stakeholdercategory_id: categoryId },
        { stakesubcategory_id: subcategoryId },
      ]
    : categoryId
    ? [{ stakeholdertype_id: typeId }, { stakeholdercategory_id: categoryId }]
    : [{ stakeholdertype_id: typeId }];


    const whereCondition = {[Op.and]: filter, };
    const paginatedResult = await paginationHelper(Stakeholder, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
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
  try {
    let body = req.body;

    let data = await Stakeholder.create(body);
    let usr = await usrData.userData(req, res);

    if(data){

      data.department_id = usr.departmentID;
      await data.save();
      
      let stakeholderDepartment = await StakeholderDepartment.create({
        stakeholder_id: data.id,
        name: "Main Office",
        description: "Main office description",
      });

      await actionHelper.saveActionState(
        data.id,
        "Stakeholder",
        "REGISTER",
        usr.usrID,
        req,
        res
      );

      await actionHelper.saveActivityLog(
        usr.usrID, "create", "module", data.id, "Stakeholder", req, res
      )

      if(stakeholderDepartment){  
        await actionHelper.saveActionState(
          stakeholderDepartment.id,
          "StakeholderDepartment",
          "REGISTER",
          usr.usrID,
          req,
          res
        );
  
        await actionHelper.saveActivityLog(
          usr.usrID, "create", "module", stakeholderDepartment.id, "StakeholderDepartment", req, res
        )
  
      }

    }

    return res.apiSuccess({data});

  } catch (error) {
    res.apiError(error);P
  }
  // saveRecord(Stakeholder, req, res);
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
      "SELECT stakecategories.title AS category,stakecategories.stakeholdertype_Id AS typeID,stakecategories.id AS category_id, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakecategories LEFT JOIN stakeholders ON stakecategories.id = stakeholders.stakeholdercategory_id GROUP BY stakecategories.title,typeID,category_id;";
    let stakeholderCategoryData = await sequelize.query(queryCategoryString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let querySubCategoryString =
      "SELECT stakesubcategories.title AS subcategory,stakesubcategories.stakeholdercategory_id AS category_id, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakesubcategories LEFT JOIN stakeholders ON stakesubcategories.id = stakeholders.stakesubcategory_id GROUP BY stakesubcategories.title,category_id;";
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
    return res.apiSuccess({
      data: Result
    });
    
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
      "SELECT stakecategories.title AS name,stakecategories.stakeholdertype_Id AS typeID,stakecategories.id AS id, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakecategories LEFT JOIN stakeholders ON stakecategories.id = stakeholders.stakeholdercategory_id GROUP BY stakecategories.title,typeID,id;";
    let stakeholderCategoryData = await sequelize.query(queryCategoryString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let querySubCategoryString =
      "SELECT stakesubcategories.id AS id,stakesubcategories.title AS name,stakesubcategories.stakeholdercategory_id AS category_id, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakesubcategories LEFT JOIN stakeholders ON stakesubcategories.id = stakeholders.stakeholdersubcategory_id GROUP BY stakesubcategories.title,category_id,id;";
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

    return res.apiSuccess({
      data: Result
    });
    
  } catch (error) {
    return res.apiError(error);
  }
};

self.getStakeholderData = async(req, res) => {

    let {id} = req.params;

    try {
        

        let data = await Stakeholder.findOne({
            where: {
                id: id
            },
            include: [
              {
                model: OperationLocation,
                as: "operationlocations"
              },
              {
                model: StakeholderEmail,
                as: "stakeholderemails"
              },
              {
                model: StakeholderPhone,
                as: "stakeholderphones"
              },
              {
                model: Ownership,
                as: "ownership"
              }
            ]
        });

        if(data){

            let obj = {
                name: data.trade_name,
                license_date: data.license_issued_date,
                locations: data.operationlocations,
                emails: data.stakeholderemails,
                phones: data.stakeholderphones,
                origin: data.origin,
                tin: data.tin,
                ownership_type: data.ownership.title
            };

            res.apiSuccess({
              data: obj
            });
        }

  } catch (error) {
    res.apiError(error);
  }
};

self.getStakeholderProjects = async(req, res) => {

    let {id} = req.params;

    try {
        let data = await Project.findAll({
            include: [{
                model: ProjectStakeholder,
                as: 'projectstakeholders',
                where: { stakeholder_id: id },
                attributes: [] // We don't need attributes from the join table itself
            }],
            // If you only want projects directly associated with the stakeholder,
            // and not projects that might have other stakeholderprojects entries,
            // you might need to adjust the include or add a distinct clause.
            // For a simple join, this should work.
        });


        res.apiSuccess({
          data: data
        });

  } catch (error) {
    res.apiError(error);
  }
}
      
module.exports = self;
