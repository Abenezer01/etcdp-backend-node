const {
  stakeholder,
  actionstate,
  department,
  sequelize,
  Sequelize,
} = require("./../../models");
const jwt = require("jsonwebtoken");
const paginate = require("../../utils/pagination");
const usrData = require("../../utils/userDataFromToken");
const dotenv = require("dotenv");
dotenv.config();

const actionHelper = require("../utils/action-helper");

const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  let { page, size, order } = req.query;
  //console.log("The page", page, size)
  if (page == null && size == null) {
    (page = process.env.page), (size = process.env.size);
  }
  if (order == null) {
    order = process.env.order;
  }
  const { limit, offset } = paginate.getPagination(Number(page), Number(size));
  try {
    //     let usr = await usrData.userData(req, res);
    //     // let us = req.decoded
    //     let us = {
    //         id: "e1594d67-3aa2-429b-bb77-2e4ecc2124f8",
    //         department_id: usr.departmentID,
    //     };
    //     let department_id = us.department_id;
    //     let exist = await getChildren(department_id);
    //     console.log("The exist", exist);
    //     let other = await stakeholder.findAll({
    //         order: [
    //             ["createdAt", "DESC"]
    //         ],
    //         where: {
    //             department_id: {
    //                 [Op.in]: exist,
    //             },
    //         },
    //     });
    //     let mine = await stakeholder.findAll({
    //         limit,
    //         offset,
    //         order: [
    //             ["createdAt", order]
    //         ],
    //         where: {
    //             department_id,
    //         },
    //     });
    //     let otherArr = [];
    //     console.log("The other is", other);
    //     for (let da of other) {
    //         let action = await actionstate.findOne({
    //             where: {
    //                 model_id: da.id,
    //                 action: "APPROVE",
    //             },
    //         });
    //         if (action) {
    //             otherArr.push(da);
    //             console.log("Other array", otherArr);
    //         }
    //     }
    //     let data = mine.concat(otherArr);
    //     paginate.getPagingData(data, page, limit);
    //     return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  // if (order == null) {
  //     order = process.env.order
  // }
  // const { limit, offset } = paginate.getPagination(page, size);
  // stakeholder.findAndCountAll({
  //         limit,
  //         offset,
  //         order: [
  //             ['createdAt', order]
  //         ],
  //     })
  //     .then(data => {
  //         const response = paginate.getPagingData(data, page, limit);
  //         res.send(response);
  //     })
  //     .catch(err => {
  //         res.status(500).send({
  //             message: err.message || "Some error occurred while retrieving data."
  //         });
  //     });
};
self.getStakeholders = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  let { limit, offset } = paginate.getPagination(page, size);
  let limiter = { limit, offset };
  page == -1 ? (limiter = {}) : limiter;
  //return res.json(limiter.limit)
  try {
    const { rows, count } = await stakeholder.findAndCountAll({
      limit: limiter.limit,
      offset: limiter.offset,
      //include: ["staketype", "stakecategory"],
      attributes: ["id", "trade_name"],
      order: [["createdAt", order]],
    });

    const response = paginate.getPagingData(
      { rows, count },
      page,
      limit,
      count
    );

    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};
self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await stakeholder.findOne({
      where: {
        id: id,
      },
      include: [
        "staketype",
        "stakecategory",
        "stakesubcategory",
        "ownership",
        "businessfield",
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
    const data = await stakeholder.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", order]],
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
    let data = await stakeholder.findAll({
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
    let usr = await usrData.userData(req, res);
    let body = req.body;
    if (usr) {
      req.body.department_id = usr.departmentID;
      let data = await stakeholder.create(body);

      if (data) {
        data.trade_name = body.trade_name;
        data.save();
        let usrID = usr.usrID;
        actionHelper.saveActionState(
          data.id,
          "stakeholder",
          "REGISTER",
          usrID,
          req,
          res
        );
      }
      return res.json(data);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.update = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await stakeholder.update(body, {
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await stakeholder.destroy({
      where: {
        id: id,
      },
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
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
    const { count } = await stakeholder.findAndCountAll();
    const Result = [];
    //let Result = {};
    const parent = {
      name: "stakeholder",
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
self.countAllStakeholderWithStakeCategory = async (req, res) => {
  try {
    let queryString =
      "SELECT stakecategories.title AS category, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakecategories LEFT JOIN stakeholders ON stakecategories.id = stakeholders.stakecategory_id GROUP BY stakecategories.title;";
    let stakeData = await sequelize.query(queryString, {
      type: sequelize.QueryTypes.SELECT,
    });

    res.send(stakeData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = self;
