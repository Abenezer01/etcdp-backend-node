const validateReply = require("../../../../utils/validateerror");

const professionalLicenseValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    professional_id: "required|string",
    license_type_id: "required|string",
    license_category_id: "required|string",
    license_name: "required|string",
    license_scope: "string",
    licensing_body: "string",
    issue_date: "required|date",
    expire_date: "required|date",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

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


const resourceMasterDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    resource_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const resourceQuantityValidate = async (req, res, next) => {
  
  let param = await validateReply.checkParam(req, res, next);
    if (param === "failed") {
      return res.status(400).json({
        message: "Invalid ID format",
      });
    }
  const validationRule = {
    resource_id: "required|string",
    resource_brand_id: "required|string",
    resource_specification_id: "required|string",
    unit_price_id: "required|string",
    price_date: "date",
    supplier_name_id: "required|string",
    supplier_address_id: "required|string",
    total_quantity_available: "integer",
    quality_id: "required|string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const resourcePriceValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
    if (param === "failed") {
      return res.status(400).json({
        message: "Invalid ID format",
      });
    }
  const validationRule = {
    resource_id: "required|string",
    resource_brand_id: "required|string",
    resource_specification_id: "required|string",
    unit_price: "required|numeric",
    total_quantity_available: "integer",
    price_date: "date",
    supplier_name_id: "required|string",
    supplier_address_id: "required|string",
    quality_id: "required|string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const resourceSpecificationValidate = async (req, res, next) => {
  
  let param = await validateReply.checkParam(req, res, next);
    if (param === "failed") {
      return res.status(400).json({
        message: "Invalid ID format",
      });
    }
  const validationRule = {
    resource_id: "required|string",
    name: "required|string",
    product_type: "string",
    specification: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const resourceBrandValidate = async (req, res, next) => {

    let param = await validateReply.checkParam(req, res, next);
    if (param === "failed") {
      return res.status(400).json({
        message: "Invalid ID format",
      });
    }
    const validationRule = {
      resource_id: "required|string",
      name: "required|string",
      manufacturer: "string",
      remark: "string"
    };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const resourceValidate = async (req, res, next) => {
    let param = await validateReply.checkParam(req, res, next);
    if (param === "failed") {
      return res.status(400).json({
        message: "Invalid ID format",
      });
    }
  
    const validationRule = {
        department_id: "rstring",
        resourcetype_id: "required|string",
        resourcecategory_id: "required|string",
        resourcesubcategory_id: "required|string",
        name: "required|string",
        quantity_measurement_unit_id: "required|string",
        quality_measurement_unit_id: "required|string",
        remark: "string"
    };
  
    await validateReply.validateReply(req.body, validationRule, res, next);
  };
  

module.exports = {
  professionalLicenseValidate,
  professionalWorkExperienceValidate,
  professionalAssociationMembershipValidate,
  professionalCertificationValidate,
  professionalEducationValidate,
  professionalAdditionalInformationValidate,
  professionalContactPeopleValidate,
  professionalContactValidate,
  professionalValidate,
  professionalAddressValidate,
  resourceMasterDataValidate,
  resourceQuantityValidate,
  resourcePriceValidate,
  resourceSpecificationValidate,
  resourceBrandValidate,
  resourceValidate,
};
