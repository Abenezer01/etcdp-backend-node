const validateReply = require("../../../../utils/validateerror");

const documentTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    title: "required|string",
    flag: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const documentCategoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    documenttype_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const documentSubCategoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    title: "required|string",
    documentcategory_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const documentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
   const validationRule = {
    documenttype_id: "required|string",
    documentcategory_id: "required|string",
    documentsubcategory_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const documentUpdateValidate = async (req, res, next) => {
  // return res.send("Hi Leul")
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  if (req.files) {
    if (!req.files.attachement) {
      return res.status(412).json({
        message: "Please check the file attachement name",
      });
    }
  }

  const validationRule = {
    documenttype_id: "required|string",
    documentcategory_id: "required|string",
    documentsubcategory_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

module.exports = {
  documentCategoryValidate,
  documentSubCategoryValidate,
  documentTypeValidate,
  documentValidate,
  documentUpdateValidate,
};
