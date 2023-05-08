const { resource, image, sequelize, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { rows, count } = await resource.findAndCountAll({
      limit,
      offset,
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
      message: err.message || "An error occurred while retrieving data.",
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await resource.findOne({
      where: {
        id: id,
      },
      //include: { model: image, as: "image", attributes: ["url"] },
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

self.filter = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
    typeId,
    categoryId,
    subcategoryId,
  } = req.query;
  const filter = [{ resourcetype_id: typeId }];
  if (categoryId) {
    filter.push({ resourcecategory_id: categoryId });
  }
  if (subcategoryId) {
    filter.push({ resourcesubcategory_id: subcategoryId });
  }
  const { limit, offset } = paginate.getPagination(page, size);
  let limiter = { limit, offset };
  page == -1 ? (limiter = {}) : limiter;
  try {
    const result = await resource.findAndCountAll({
      limit: limiter.limit,
      offset: limiter.offset,
      order: [["createdAt", order]],
      where: {
        [Op.and]: filter,
      },
    });
    const pagingData = paginate.getPagingData(result, page, limit);
    res.send(pagingData);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await resource.findAll({
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
      let data = await resource.create(body);
      if (data) {
        let us = usr.usrID;
        data.department_id = us.departmentID;
        await data.save();
        await actionHelper.saveActionState(
          data.id,
          "resource",
          "REGISTER",
          us,
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
    let data = await resource.update(body, {
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
    let data = await resource.destroy({
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
self.countAllConstructionResourceWithResourceType = async (req, res) => {
  try {
    let queryTypeString =
      "SELECT resourcetypes.title AS name,resourcetypes.id AS id, COALESCE(COUNT(resources.id), 0) AS total FROM resourcetypes LEFT JOIN resources ON resourcetypes.id = resources.resourcetype_id GROUP BY resourcetypes.title;";
    let resourceTypeData = await sequelize.query(queryTypeString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let queryCategoryString =
      "SELECT resourcecategories.title AS name,resourcecategories.resourcetype_Id AS typeID,resourcecategories.id AS id, COALESCE(COUNT(resources.id), 0) AS total FROM resourcecategories LEFT JOIN resources ON resourcecategories.id = resources.resourcecategory_id GROUP BY resourcecategories.title,typeID,id;";
    let resourceCategoryData = await sequelize.query(queryCategoryString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let querySubCategoryString =
      "SELECT resourcesubcategories.id AS id,resourcesubcategories.title AS name,resourcesubcategories.resourcecategory_id AS category_id, COALESCE(COUNT(resources.id), 0) AS total FROM resourcesubcategories LEFT JOIN resources ON resourcesubcategories.id = resources.resourcesubcategory_id GROUP BY resourcesubcategories.title,category_id,id;";
    let resourceSubCategoryData = await sequelize.query(
      querySubCategoryString,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    const { count } = await resource.findAndCountAll();
    const Result = [];
    //let Result = {};
    const parent = {
      name: "resource",
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
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = self;
