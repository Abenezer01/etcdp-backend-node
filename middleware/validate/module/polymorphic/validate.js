const validateReply = require("../../../../utils/validateerror");

const dataCollectionGuideValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    model: "required|string",
    title: "required|string",
    description: "string",
    instruction: "string",
    data_collection_frequency: "string",
    data_source: "string",
    responsible_data_collector_body: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const addressMasterDataValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    parent_address_id: "string",
    parent: "string",
    type: "required|string",
    title: "required|string",
    is_root: "boolean",
    description: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const infrastructureSubCategoryValidate = async (req, res, next) => {
  const validationRule = {
    infrastructurecategory_id: "required|string",
    title: "required|string",
    description: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const infrastructureCategoryValidate = async (req, res, next) => {
  const validationRule = {
    infrastructuretype_id: "required|string",
    title: "required|string",
    description: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const moduleTypeValidate = async (req, res, next) => {
  const validationRule = {
    module: "required|string",
    title: "required|string",
    flag: "string",
    description: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const addressValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    model_id: "required|string",
    country: "required|string",
    northing: "required",
    easting: "required",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const modelMenuValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    module_type_id: "required|string",
    module: "required|string",
    models: "required",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const actionStateValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  let modelParam = req.params.model;
  if (!modelParam) {
    return res.status(400).json({
      message: "Empty model",
    });
  }
};
const noteValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    model: "required|string",
    model_id: "required|string",
    user_id: "string",
    description: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const replyValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    actionstate_id: "required|string",
    creator_id: "string",
    content: "required|string",
    type: "string",
    status: "boolean",
    is_authorized: "boolean",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const photoValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  if (!req.files) {
    return res.status(412).json({
      message: "File is empty",
    });
  }
  if (!req.files.upload) {
    return res.status(412).json({
      message: "Can't get upload name",
    });
  }

  // Check file size (max 2MB)
  const maxFileSize = 2 * 1024 * 1024; // 2MB in bytes
  if (req.files.upload.size > maxFileSize) {
    return res.status(413).json({
      message: "File size exceeds the maximum limit of 2MB",
    });
  }
  const validationRule = {
    type: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const fileValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  if (!req.files) {
    return res.status(412).json({
      message: "File is empty",
    });
  }
  // const array_of_allowed_files = ["pdf"];
  // const ext = req.files.upload.mimetype.split("/")[1];

  // Check if the uploaded file is allowed
  // if (!array_of_allowed_files.includes(ext)) {
  //     // throw Error('Invalid file');
  //     return res.status(412)
  //         .send({
  //             success: false,
  //             message: 'File must be pdf',
  //             data: "Invalid file"
  //         });
  // }
  const validationRule = {
    type: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const filterValidate = async (req, res, next) => {
  // let param = await validateReply.checkParam(req, res, next)
  // if (param == "failed") {
  //     return res.status(400).json({
  //         message: "Invalid id"
  //     })
  // }
  let id = req.query.id;
  let type = req.query.type;

  //console.log("Hey", id, type)
  if (!id) {
    return res.status(412).json({
      message: "Validation error, Please put id",
    });
  } else if (!type) {
    return res.status(412).json({
      message: "Validation error, Please put type",
    });
  } else {
    next();
  }
};

module.exports = {
  dataCollectionGuideValidate,
  addressMasterDataValidate,

  infrastructureSubCategoryValidate,
  infrastructureCategoryValidate,
  moduleTypeValidate,
  
  addressValidate,
  modelMenuValidate,
  actionStateValidate,
  noteValidate,
  replyValidate,
  photoValidate,
  filterValidate,
  fileValidate,
};
