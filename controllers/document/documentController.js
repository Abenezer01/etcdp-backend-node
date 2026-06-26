const {
  Document,
  DocumentType,
  DocumentCategory,
  DocumentSubCategory,
  Department,
  sequelize,
  Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const { deleteRecord } = require("../utils/format-helper");
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const path = require("path");
const fs = require("fs");

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
    const paginatedResult = await paginationHelper(Document, req, whereCondition);

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
  try {
    let id = req.params.id;
    let data = await Document.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: DocumentType,
          as: "DocumentType",
          attributes: ["id", "title"],
        },
        {
          model: DocumentCategory,
          as: "DocumentCategory",
          attributes: ["id", "title"],
        },
        {
          model: DocumentSubCategory,
          as: "DocumentSubCategory",
          attributes: ["id", "title"],
        },
      ],
    });
    data.attachement = data.attachement.substr(
      data.attachement.lastIndexOf("/") + 1
    );

    return res.apiSuccess({
      data
    });

  } catch (error) {
    res.apiError(error);
  }
};

self.filter = async (req, res) => {
  let { page, size, order } = req.query;
  const { typeId, categoryId, subcategoryId } = req.query;
  //console.log("The page", page, size)
  if (page === null && size === null) {
    (page = process.env.page), (size = process.env.size);
  }
  if (order === null) {
    order = process.env.order;
  }
  const filter = () => {
    if (subcategoryId) {
      return [
        { documenttype_id: typeId },
        { documentcategory_id: categoryId },
        { documentsubcategory_id: subcategoryId },
      ];
    }

    if (categoryId) {
      return [{ documenttype_id: typeId }, { documentcategory_id: categoryId }];
    }
    return [{ documenttype_id: typeId }];
  };
  const { limit, offset } = paginate.getPagination(page, size);
  Document
    .findAndCountAll({
      limit,
      offset,
      order: [["created_at", order]],
      where: {
        [Op.and]: filter(),
      },
      raw: true,
    })
    .then((data) => {
      const newData = data.rows.map((item) => {
        // console.log("The item attachement", )
        return {
          ...item,
          attachement: item.attachement.substr(
            item.attachement.lastIndexOf("/") + 1
          ),
        };
      });

      const response = paginate.getPagingData(
        { rows: newData, count: data.count },
        page,
        limit
      );
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Document.findAll({
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
    const file = req.files;
    let pat;
    if (file) {
      const ext = req.files.attachement.mimetype.split("/")[1];
      let rand = Math.floor(100000 + Math.random() * 900000);
      var name = req.files.attachement.name;
      let parsedName = path.parse(name).name;
      let checkedNew = parsedName.concat(rand);
      const filePath = path.join(
        __dirname,
        "../../public",
        "documents",
        checkedNew + "." + `${ext}`
      );
      var filePathh = filePath.split("public").pop();
      //return res.send(filePathh)

      body.attachement = filePathh;
      pat = filePath;
    }
    if (!file) {
      body.attachement = "";
    }
    if (usr) {
      body.department_id = usr.departmentID;
      let data = await Document.create(body);
      if (data) {
        if (pat) {
          const filee = req.files.attachement;
          filee.mv(pat, (err) => {
            if (err) {return res.status(500).send(err);}
            // res.redirect('/')
          });
        }
        let us = usr.usrID;
        //add the department to data

        //await data.save()
        await actionHelper.saveActionState(
          data.id,
          "Document",
          "REGISTER",
          us,
          req,
          res
        );
      }
      res.apiSuccess({
      data: data
      });
    }
  } catch (error) {
    res.apiError(error);

  }
};
self.getdocument = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Document.findOne({
      where: {
        id: id,
      },
    });
    let prePath = "/home/kaleb/Desktop/etcdp-backend-node/public";
    let conPath = prePath.concat(data.attachement);
    return res.download(conPath);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.countAllDocumentWithDocumentType = async (req, res) => {
  try {
    let queryTypeString =
      "SELECT documenttypes.title AS name,documenttypes.id AS id, COALESCE(COUNT(documents.id), 0) AS total FROM documenttypes LEFT JOIN documents ON documenttypes.id = documents.documenttype_id GROUP BY documenttypes.title;";
    let documentTypeData = await sequelize.query(queryTypeString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let queryCategoryString =
      "SELECT documentcategories.title AS name,documentcategories.documenttype_Id AS typeID,documentcategories.id AS id, COALESCE(COUNT(documents.id), 0) AS total FROM documentcategories LEFT JOIN documents ON documentcategories.id = documents.documentcategory_id GROUP BY documentcategories.title,typeID,id;";
    let documentCategoryData = await sequelize.query(queryCategoryString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let querySubCategoryString =
      "SELECT documentsubcategories.id AS id,documentsubcategories.title AS name,documentsubcategories.documentcategory_id AS category_id, COALESCE(COUNT(documents.id), 0) AS total FROM documentsubcategories LEFT JOIN documents ON documentsubcategories.id = documents.documentsubcategory_id GROUP BY documentsubcategories.title,category_id,id;";
    let documentSubCategoryData = await sequelize.query(
      querySubCategoryString,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    const { count } = await Document.findAndCountAll();
    const Result = [];
    //let Result = {};
    const parent = {
      name: "Document",
      id: "382d79ee-2b9d-4919-a7ad-1ada61c1ab28",
      parentNodeId: null,
      total: count,
    };
    Result.push(parent);
    for (let i = 0; i < documentTypeData.length; i++) {
      const objA = documentTypeData[i];
      //const categories = [];

      // loop through documentCategoryData to find matching typeIDs
      for (let j = 0; j < documentCategoryData.length; j++) {
        const objB = documentCategoryData[j];

        if (objA.id === objB.typeID) {
          const category = {
            parentNodeId: objA.id,
            id: objB.id,
            name: objB.name,
            total: objB.total,
          };
          Result.push(category);
          // loop through documentSubCategoryData to find matching category ids
          for (let k = 0; k < documentSubCategoryData.length; k++) {
            const objC = documentSubCategoryData[k];

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
self.update = async (req, res) => {
  try {
    let id = req.params.id;
    let usr = await usrData.userData(req, res);
    let body = req.body;
    const file = req.files;
    let pat;
    if (file) {
      const ext = req.files.attachement.mimetype.split("/")[1];
      let rand = Math.floor(100000 + Math.random() * 900000);
      var name = req.files.attachement.name;
      let parsedName = path.parse(name).name;
      let checkedNew = parsedName.concat(rand);
      const filePath = path.join(
        __dirname,
        "../../public",
        "documents",
        checkedNew + "." + `${ext}`
      );
      var filePathh = filePath.split("public").pop();
      //return res.send(filePathh)

      body.attachement = filePathh;
      pat = filePath;
    }
    // if (!file) {
    //     body.attachement = ''
    // }

    if (usr) {
      if (pat) {
        const filee = req.files.attachement;
        let data = await Document.findOne({
          where: {
            id: id,
          },
        });
        if (data.attachement) {
          let f = "/home/kaleb/Desktop/etcdp-backend-node/public";
          let fc = f + data.attachement;

          if (fs.existsSync(fc)) {
            fs.unlink(fc, (err) => {
              if (err) {
                throw err;
              }
            });
          }
        }
        filee.mv(pat, (err) => {
          if (err) {return res.status(500).send(err);}
          // res.redirect('/')
        });
      }

      const [updated] = await Document.update(body, {
        where: { id },
      });
  
      if (updated) {
        const updatedData = await Document.findOne({ where: { id } });
        return res.apiSuccess({
          data: updatedData
        });
      }
    }
  } catch (error) {
    return res.apiError(error);
  }
};

self.delete = async (req, res) => {
  deleteRecord(Document, req, res);
};

module.exports = self;
