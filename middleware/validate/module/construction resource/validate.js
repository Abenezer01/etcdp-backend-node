const validateReply = require("../../../../utils/validateerror");


const professionalWorkExperienceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    professional_id: "required|string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const professionalAssociationMembershipValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    professional_id: "required|string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const professionalCertificationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    professional_id: "required|string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const professionalEducationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    professional_id: "required|string",
    study_field: "required|string",
    school_name: "string",
    education_level: "string",
    program_type: "required|string",
    start_date: "required|date",
    end_date: "required|date",
    gpa: "required:double"  
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const professionalAdditionalInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    professional_id: "required|string",
    additional_information: "required|string",
    reference: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const professionalContactValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    professional_id: "required|string",
    phone_no: "required|string",
    email: "string",
    website: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const professionalContactPeopleValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    professional_id: "required|string",
    national_id_no: "string",
    first_name: "required|string",
    middle_name: "required|string",
    last_name: "required|string",
    gender: "required|string",
    phone_no: "required|string",
    email: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const professionalValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    first_name: "required|string",
    middle_name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const professionalAddressValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    professional_id: "required:string",
    country: "required|string",
    region: "required|string",
    city: "required|string",
    sub_city: "required|string",
    woreda: "required|string",
    northing: "required",
    easting: "required",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const constructionResourceTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const constructionResourceCategoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resourcetype_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const constructionResourceSubCategoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const constructionResourceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resourcetype_id: "required|string",
    resourcecategory_id: "required|string",
    resourcesubcategory_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const constructionResourceQuantityandPriceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resourcetype_id: "required|string",
    resourcecategory_id: "required|string",
    resourcesubcategory_id: "required|string",
    name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const detailResourceTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resource_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const resourceBrandValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resource_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const resourceSpecificationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resource_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const resourcePriceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resource_id: "required|string",
    resourcebrand_id: "required|string",
    detailresourcetype_id: "required|string",
    unit_price: "required|integer",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const resourceQuantityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resource_id: "required|string",
    resourcebrand_id: "required|string",
    detailresourcetype_id: "required|string",
    quantity: "required|integer",
    unit_price: "required",
    date: "required|date",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const resourceImageValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  if (!req.files) {
    return res.status(412).json({
      message: "There is no image file attached",
    });
  } else if (!req.files.image) {
    return res.status(412).json({
      message: "There is no image field on file upload",
    });
  } else {
    next();
  }
};
const resourceStudyFieldValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    studyfield_id: "required|string",
    resource_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const resourceStudyLevelValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    studylevel_id: "required|string",
    resource_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const resourceWorkExperienceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    experiencelevel_id: "required|string",
    resource_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const salaryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resource_id: "required|string",
    min_pay: "required",
    max_pay: "required",
    salary_type: "string",
    year: "required|date"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
module.exports = {
  professionalWorkExperienceValidate,
  professionalAssociationMembershipValidate,
  professionalCertificationValidate,
  professionalEducationValidate,
  professionalAdditionalInformationValidate,
  professionalContactPeopleValidate,
  professionalContactValidate,
  professionalValidate,
  professionalAddressValidate,
  constructionResourceCategoryValidate,
  constructionResourceQuantityandPriceValidate,
  constructionResourceSubCategoryValidate,
  constructionResourceTypeValidate,
  constructionResourceValidate,
  detailResourceTypeValidate,
  resourceBrandValidate,
  resourcePriceValidate,
  resourceQuantityValidate,
  resourceSpecificationValidate,
  resourceImageValidate,
  resourceStudyFieldValidate,
  resourceStudyLevelValidate,
  resourceWorkExperienceValidate,
  salaryValidate
};
