const validateReply = require("../../../../utils/validateerror");


const stakeholderMasterDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {

    stakeholder_type_id: "required|string",
    model: "required|string",
    title: "required|string",
    flag: "string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const stakeholderDocumentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    document_type: "required|string",
    title: "required|string",
    description: "string",
    author: "string",
    edition: "string",
    publication_date: "date",
    isbn: "string",
    copy_right_notice: "string",

  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const stakeholderEmployeeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    stakeholder_department_id: "required|string",
    stakeholder_position_id: "required|string",
    first_name: "required|string",
    middle_name: "required|string",
    last_name: "required|string",
    national_id_no: "required|string",
    gender: "required|string",
    phone: "required|string",
    email: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const stakeholderMaterialValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    material_category: "required|string",
    material_subcategory: "string",
    name: "required|string",
    description: "string",
    purpose: "string",
    quantity: "integer",
    unit_price: "numeric",
    current_situation: "string",
    location: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


// safety equipment validation

const safetyEquipmentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    name: "required|string",
    serial_no: "string",
    brand_name: "string",
    model: "required|string",
    year: "integer",
    capacity: "string",
    purpose: "string",
    quantity: "integer",
    current_situation: "string",
    location: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

// stakeholder machinery validation
const stakeholderMachineryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    name: "required|string",
    plate_no: "required|string",
    brand_name: "string",
    model: "required|string",
    year: "integer",
    chassis_number: "string",
    engine_number: "string",
    capacity: "string",
    purpose: "string",
    quantity: "integer",
    current_situation: "string",
    latitude: "string",
    longitude: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

// stakeholder position validation
const stakeholderPositionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    stakeholder_department_id: "required|string",
    name: "required|string",
    required_education: "string",
    required_work_experience: "string",
    salary: "numeric",
    no_of_professionals: "integer",
    description: "string",
    reference: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

// stakeholder department validation
const stakeholderDepartmentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    parent_department_id: "string",
    name: "required|string",
    description: "string",
    reference: "string",

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};



const branchAdditionalInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    stakeholder_branch_id: "required|string",
    additional_information: "required|string",
    reference: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const branchAddressValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    stakeholder_branch_id: "required|string",
    country: "required|string",
    region: "required|string",
    city: "required|string",
    subcity: "required|string",
    woreda: "required|string",
    street: "string",
    block_no: "string",
    website: "string",
    northing: "required|string",
    easting: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const branchContactPersonValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    stakeholder_branch_id: "required|string",
    department: "required|string",
    position: "required|string",
    first_name: "required|string",
    middle_name: "required|string",
    last_name: "required|string",
    gender: "required|string",
    phone: "required|string",
    email: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const branchManagerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    stakeholder_branch_id: "required|string",
    department: "required|string",
    position: "required|string",
    first_name: "required|string",
    middle_name: "required|string",
    last_name: "required|string",
    gender: "required|string",
    phone: "required|string",
    email: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const stakeholderBranchValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    name: "required|string",
    description: "string",
    reference: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const stakeholderAdditionalInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    stakeholder_id: "required|string",
    additional_information: "required|string",
    reference: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const jointVentureCompanyValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    joint_venture_id: "string",
    title: "string",
    company_name: "string",
    specialization: "string",
    roles_and_responsibilities: "string",
    ownership_percentage: "numeric",
    description: "required|string",
    reference: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const jointVentureValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    name: "required|string",
    member_companies_no: "required|integer",
    description: "required|string",
    reference: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const stakeholderManagerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    type: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const stakeholderCategoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholdertype_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const stakeholderSubCategoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    title: "required|string",
    stakeholdercategory_id: "required|string",
    stakeholdertype_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const stakeholderTypeValidate = async (req, res, next) => {
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
const ownerShipValidate = async (req, res, next) => {
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
const buisnessFieldValidate = async (req, res, next) => {
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
const studyProgramValidate = async (req, res, next) => {
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
const stakeHolderValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholdercategory_id: "required|string",
    stakeholdersubcategory_id: "required|string",
    trade_name: "required|string",
    tin: "required|string",
    ownership_id: "required|string",
    businessfield_id: "string",
    origin: "required|string",
    license_number: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const stakeholderContactPersonValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    parent_id: "string",
    stakeholder_id: "required|string",
    first_name: "required|string",
    middle_name: "required|string",
    last_name: "required|string",
    gender: "required|string",
    email: "required|email|string",
    phone_number: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const stakeHolderInfo = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const certificateValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    type: "required|string",
    title: "required|string",
    scope: "required|string",
    certifying_body: "required|string",
    certification_number: "required|string",
    issue_date: "required|date",
    expire_date: "required|date",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const upgradeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    upgrade_type_id: "required|string",
    previous_level: "string",
    upgraded_level: "string",
    description: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const vehicleValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    vehicle_name: "required|string",
    plate_number: "required|string",
    brand_name: "string",
    model: "required|string",
    year: "integer",
    chassis_number: "string",
    engine_number: "string",
    capacity: "string",
    purpose: "string",
    quantity: "integer",
    current_situation: "string",
    location: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const licenseValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    license_type: "required|string",
    license_category: "required|string",
    license_name: "required|string",
    license_scope: "required|string",
    licensing_body: "required|string",
    license_number: "required|string",
    issue_date: "required|date",
    expire_date: "required|date",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const totalEmployeeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    year: "required|date",
    domain: "required|string",
    nationality: "required|string",
    male: "required|integer",
    female: "required|integer",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const studyLevelValidate = async (req, res, next) => {
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
const departmentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const educationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    year: "required|date",
    domain: "required|string",
    nationality: "required|string",
    male: "required|integer",
    female: "required|integer",
    studylevel_id: "required|string",
  };
  let bodyArr = req.body.empEduArr;
  await validateReply.validateArrayReply(bodyArr, validationRule, res, next);
};
const ageLevelValidate = async (req, res, next) => {
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
const employeeAgeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    year: "required|date",
    domain: "required|string",
    nationality: "required|string",
    male: "required|integer",
    female: "required|integer",
    agelevel_id: "required|string",
  };

  let bodyArr = req.body.empAgeArr;
  await validateReply.validateArrayReply(bodyArr, validationRule, res, next);
};
const experienceLevelValidate = async (req, res, next) => {
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
const workExperienceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    year: "required|date",
    domain: "required|string",
    nationality: "required|string",
    male: "required|integer",
    female: "required|integer",
    experiencelevel_id: "required|string",
  };

  let bodyArr = req.body.empWorkArr;
  await validateReply.validateArrayReply(bodyArr, validationRule, res, next);
};
const workExperienceLevelValidate = async (req, res, next) => {
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
const trainingValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    title: "required|string",
    type: "required|string",
    provider: "required|string",
    provision_date: "required|date",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const regulationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    title: "required|string",
    prepared_by: "required|string",
    effective_start_date: "required|date",
    effective_end_date: "required|date",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const studyFieldValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    title: "required|string",
    study_program_id: "required|string",
    studylevel_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const stakeholderStudyFieldValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    studyfield_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const studyPeriodCostValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
    stakeholderstudyfield_id: "required|string",
    total_month: "required|date",
    study_cost: "required",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const graduateValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    higher_institute_id: "required|string",
    stake_study_field_id: "required|string",
    study_program_id: "required|string",
    studylevel_id: "required|string",
    study_period_id: "required|string",
    male: "required|integer",
    female: "required|integer",
    year: "required|date",
    agelevel_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const constructionRelatedServiceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    service_type: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const StakeholderServiceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    stakeholder_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
module.exports = {
  stakeholderMasterDataValidate,
  stakeholderDocumentValidate,
  licenseValidate,
  vehicleValidate,
  upgradeValidate,

  stakeholderEmployeeValidate,
  stakeholderMaterialValidate,
  safetyEquipmentValidate,
  stakeholderMachineryValidate,
  stakeholderPositionValidate,
  stakeholderDepartmentValidate,
  branchAdditionalInformationValidate,
  branchAddressValidate,
  branchContactPersonValidate,
  branchManagerValidate,
  stakeholderBranchValidate,
  stakeholderAdditionalInformationValidate,
  jointVentureCompanyValidate,
  jointVentureValidate,
  stakeholderManagerValidate,
  stakeholderCategoryValidate,
  stakeholderSubCategoryValidate,
  ownerShipValidate,
  stakeholderTypeValidate,
  buisnessFieldValidate,
  stakeHolderValidate,
  stakeHolderInfo,
  certificateValidate,
  totalEmployeeValidate,
  studyLevelValidate,
  departmentValidate,
  educationValidate,
  ageLevelValidate,
  employeeAgeValidate,
  experienceLevelValidate,
  workExperienceValidate,
  trainingValidate,
  regulationValidate,
  studyFieldValidate,
  stakeholderStudyFieldValidate,
  studyPeriodCostValidate,
  constructionRelatedServiceValidate,
  graduateValidate,
  workExperienceLevelValidate,
  studyProgramValidate,
  StakeholderServiceValidate,
  stakeholderContactPersonValidate,
};
