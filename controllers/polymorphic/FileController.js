const {
  File,
  EmployeeEducation,
  EmployeeAge,
  WorkExperience,
  Sequelize,
} = require("../../models");
const path = require("path");
const fs = require("fs");
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');

const { url } = require("inspector");
let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(File, req);

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
  getRecordById(File, req, res);
};

self.getMyFiles = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { reference_id: id }
    const paginatedResult = await paginationHelper(File, req, whereCondition);

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


self.getMyFilteredFiles = async (req, res) => {
  
  const { id, project_type} = req.query;
  try {
    const whereCondition = { 
      reference_id: id,
      project_type: project_type,
     }
    const paginatedResult = await paginationHelper(File, req, whereCondition);

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

self.getFilesByModelAndType = async (req, res) => {
  const { id, type } = req.query;
  try {
    const whereCondition = { [Op.and]: [{ reference_id: id }, { type: type }] }

    const paginatedResult = await paginationHelper(File, req, whereCondition);

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
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await File.findAll({
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
  const id = req.params.id;
  const filer = req.files.upload;
  const type = req.body.type;
  const description = req.body.description;
  const referenceId = req.body.reference_id;
  const fileabletype = req.body.fileable_type;
  const projectType = req.body.project_type;

  const ext = filer.mimetype.split("/")[1];
  console.log("The File type is", ext);

  const rand = Math.floor(100000 + Math.random() * 900000);
  const parsedName = path.parse(filer.name).name;
  const checkedNew = `${parsedName}-${rand}`;
  const filePath = path.join(
    __dirname,
    "../../public/files",
    `${checkedNew}.${ext}`
  );
  const filePathh = filePath.split("public").pop();

  const { size } = filer;
  const fileSizeInKB = size / 1024;
  const approxNum = Math.round(fileSizeInKB);
  const docSize = approxNum;

  const document = {
    fileable_type: fileabletype,
    title: checkedNew,
    url: filePathh,
    type,
    description,
    extension: ext,
    reference_id: referenceId,
    project_type: projectType,
    size: docSize,
  };
  try {
    const usr = await usrData.userData(req, res);
    if (usr) {
      const doc = await File.create(document);
      filer.mv(filePath, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
      });

      if (doc) {
        const usrID = usr.usrID;
        let ac = await actionHelper.saveActionState(
          doc.id,
          "File",
          "REGISTER",
          usrID,
          req,
          res
        );}
      
      res.apiSuccess({
        data: doc
      });

    }
  } catch (error) {
    console.error("Error:", error);
    res.apiError(error);
  }
};

self.update = async (req, res) => {
  let id = req.params.id;
  const filer = req.files.upload;
  if (!id) {
    return res.status(412).json({
      message: "Can't get File id",
    });
  }
  try {
    let fileData = await File.findOne({
      where: {
        id: id,
      },
    });
    if (fileData) {
      if (fs.existsSync(fileData.url)) {
        fs.unlink(fileData.url, (err) => {
          if (err) {
            throw err;
          }

          console.log("File deleted successfully.");
        });
      }
    }
    const ext = req.files.upload.mimetype.split("/")[1];
    let rand = Math.floor(100000 + Math.random() * 900000);
    var name = req.files.upload.name;
    let parsedName = path.parse(name).name;
    checkedNew = parsedName.concat(rand);
    const filePath = path.join(
      __dirname,
      "../../public",
      "files",
      checkedNew + "." + `${ext}`
    );
    //console.log("The File path is ", filePath)

    filer.mv(filePath, (err) => {
      if (err) return res.status(500).send(err);
      // res.redirect('/')
    });
    updatedFile = {
      type: req.body.type,
      title: req.body.title,
      description: req.body.description,
      url: filePath,
    };
    await File.update(updatedFile, {
      where: { id: id },
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
    let fileData = await File.findOne({
      where: {
        id: id,
      },
    });
    if (fileData) {
      if (fs.existsSync(fileData.url)) {
        fs.unlink(fileData.url, (err) => {
          if (err) {
            throw err;
          }

          console.log("File deleted successfully.");
        });
      }
    }
    let data = await File.destroy({
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

self.linkfiles = async (req, res) => {
  let { model, id } = req.params;
  try {
    let data = null;
    switch (model) {
      case "EmployeeEducation":
        data = await EmployeeEducation.findOne({
          where: {
            id: id,
          },
        });
        break;
      case "EmployeeAge":
        data = await EmployeeAge.findOne({
          where: {
            id: id,
          },
        });
        break;
      case "WorkExperience":
        data = await WorkExperience.findOne({
          where: {
            id: id,
          },
        });
        break;

      default:
        return res.status(404).json("Unknown model");
        break;
    }

    if (!data) {
      return res.json({
        message: "Not found",
      });
    }

    const { stakeholder_id, year, nationality } = data;

    const models = await eval(model).findAll({
      where: {
        stakeholder_id,
        year,
        nationality,
        id: {
          [Op.ne]: data.id,
        },
      },
    });
    if (models.length === 0) {
      return res.json({
        message: "No models found",
      });
    }

    const files = await File.findAll({
      where: {
        reference_id: id,
      },
    });

    if (files.length === 0) {
      return res.json({
        message: "No files uploaded",
      });
    }

    for (const model of models) {
      for (const doc of files) {
        let exists = await File.findOne({
          where: {
            reference_id: model.id,
            url: doc.url,
          },
        });
        if (!exists) {
          let fileobj = {
            title: doc.title,
            url: doc.url,
            type: doc.type,
            description: doc.description,
            extension: doc.extension,
            reference_id: model.id,
            size: doc.size,
          };
          await File.create(fileobj);
        }
      }
    }

    return res.json({
      message: "Files linked successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = self;
