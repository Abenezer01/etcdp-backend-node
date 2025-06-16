const stakeholderInfoController = require("../../../controllers/stakeholder/StakeholderInfoController.js");
const StakeholderController = require("../../../controllers/stakeholder/StakeholderController.js");
const StakeholderContactPersonController = require("../../../controllers/stakeholder/StakeholderContactPersonController.js");
const CertificateController = require("../../../controllers/stakeholder/CertificateController");
const TotalEmployeeController = require("../../../controllers/stakeholder/TotalEmployeeController");
const EmployeeAgeController = require("../../../controllers/stakeholder/EmployeeAgeController");
const EmployeeEducationController = require("../../../controllers/stakeholder/EmployeeEducationController");
const WorkExperienceLevelController = require("../../../controllers/stakeholder/WorkExperienceLevelController");
const StakeholderTrainingController = require("../../../controllers/stakeholder/StakeHolderTrainingController.js");
const RegulationController = require("../../../controllers/stakeholder/RegulationController");
const StakeholderStudyFieldController = require("../../../controllers/stakeholder/StakeholderStudyFieldController");
const StudyPeriodCostController = require("../../../controllers/stakeholder/StudyPeriodCostController");
const GraduateController = require("../../../controllers/stakeholder/GraduateController");
const ConstructionRelatedServiceController = require("../../../controllers/stakeholder/ConstructionRelatedServiceController");
const StakeholderServiceController = require("../../../controllers/stakeholder/StakeholderServiceController");
const OperationlocationController = require("../../../controllers/stakeholder/OperationlocationController");
const StakeholderEmailController = require("../../../controllers/stakeholder/StakeholderEmailController");
const StakeholderPhoneController = require("../../../controllers/stakeholder/StakeholderPhoneController");
const StakeholderOwnerOrManager26ABController = require("../../../controllers/stakeholder/StakeholderOwnerOrManager26ABController");
const StakeholderAddress26A3Controller = require("../../../controllers/stakeholder/StakeholderAddress26A3Controller");

const JointVenture34A1Controller = require("../../../controllers/stakeholder/JointVenture34A1Controller");
const JointVentureCompanyController = require("../../../controllers/stakeholder/JointVentureCompanyController");

const StakeholderAdditionalInformationController = require("../../../controllers/stakeholder/StakeholderAdditionalInformationController");

const StakeholderBranchController = require("../../../controllers/stakeholder/StakeholderBranchController");
const BranchManagerController = require("../../../controllers/stakeholder/BranchManagerController");
const BranchContactPersonController = require("../../../controllers/stakeholder/BranchContactPersonController");
const BranchAddressController = require("../../../controllers/stakeholder/BranchAddressController");
const BranchAdditionalInformationController = require("../../../controllers/stakeholder/BranchAdditionalInformationController");
const StakeholderDepartmentController = require("../../../controllers/stakeholder/StakeholderDepartmentController");
const StakeholderPositionController = require("../../../controllers/stakeholder/StakeholderPositionController");
const StakeholderMachineryController = require("../../../controllers/stakeholder/StakeholderMachineryController");
const SafetyEquipmentController = require("../../../controllers/stakeholder/SafetyEquipmentController");
const StakeholderMaterialController = require("../../../controllers/stakeholder/StakeholderMaterialController");
const StakeholderEmployeeController = require("../../../controllers/stakeholder/StakeholderEmployeeController");

const UpgradeController = require("../../../controllers/stakeholder/UpgradeController.js");
const VehicleController = require("../../../controllers/stakeholder/VehicleController.js");
const LicenseController = require("../../../controllers/stakeholder/LicenseController.js");

const validateData = require("../../../middleware/validate/module/stakeholder/validate");

module.exports = function (express) {
  const route = express.Router();
  
  //stakeholder info route
  route.get("/stakeholder-infos/", stakeholderInfoController.getAll);
  route.get("/stakeholder-infos/:id", stakeholderInfoController.get);
  route.get(
    "/stakeholder-infos/stakeholder/:id",
    stakeholderInfoController.getStakeInfoByStakeHolderId
  );
  route.get("/stakeholder-info-searches", stakeholderInfoController.search);
  route.post(
    "/stakeholder-infos",
    validateData.stakeHolderInfo,
    stakeholderInfoController.save
  );
  route.put(
    "/stakeholder-infos/:id",
    validateData.stakeHolderInfo,
    stakeholderInfoController.update
  );
  route.delete("/stakeholder-infos/:id", stakeholderInfoController.delete);
  
  //stakeholder route
  route.get("/stakeholders", StakeholderController.getAll);
  route.get("/stakeholders/:id", StakeholderController.get);
  route.post(
    "/stakeholder/filter/stakeholder-type/",
    StakeholderController.getStakeHolderByTypeId
  );
  route.get("/stakeholder-searches", StakeholderController.search);
  route.post(
    "/stakeholders",
    validateData.stakeHolderValidate,
    StakeholderController.save
  );
  route.put(
    "/stakeholders/:id",
    validateData.stakeHolderValidate,
    StakeholderController.update
  );
  route.delete("/stakeholders/:id", StakeholderController.delete);
  route.get("/general-infos/:id", StakeholderController.getStakeholderData);

  //stakeholder contact person
  route.get(
    "/stakeholder-contact-people",
    StakeholderContactPersonController.getAll
  );
  route.get(
    "/stakeholder-contact-people/:id",
    StakeholderContactPersonController.get
  );
  route.get(
    "/stakeholder-contact-person-searches",
    StakeholderContactPersonController.search
  );
  route.post(
    "/stakeholder-contact-people",
    validateData.stakeholderContactPersonValidate,
    StakeholderContactPersonController.save
  );
  route.put(
    "/stakeholder-contact-people/:id",
    validateData.stakeholderContactPersonValidate,
    StakeholderContactPersonController.update
  );
  route.delete(
    "/stakeholder-contact-people/:id",
    StakeholderContactPersonController.delete
  );
  route.get(
    "/stakeholder-contacts/:id",
    StakeholderContactPersonController.getByStakeholderId
  );

  //certificate route
  route.get("/certificates/", CertificateController.getAll);
  route.get("/certificates/:id", CertificateController.get);
  route.post(
    "/certificates",
    validateData.certificateValidate,
    CertificateController.save
  );
  route.put(
    "/certificates/:id",
    validateData.certificateValidate,
    CertificateController.update
  );
  route.delete("/certificates/:id", CertificateController.delete);

  // Upgrade routes with validation
  route.get("/upgrades", UpgradeController.getAll);
  route.get("/upgrades/:id", UpgradeController.get);
  route.post("/upgrades", validateData.upgradeValidate, UpgradeController.save);
  route.put("/upgrades/:id", validateData.upgradeValidate, UpgradeController.update);
  route.delete("/upgrades/:id", UpgradeController.delete);

  // Vehicle routes with validation
  route.get("/vehicles", VehicleController.getAll);
  route.get("/vehicles/:id", VehicleController.get);
  route.post("/vehicles", validateData.vehicleValidate, VehicleController.save);
  route.put("/vehicles/:id", validateData.vehicleValidate, VehicleController.update);
  route.delete("/vehicles/:id", VehicleController.delete);

  // License routes with validation
  route.get("/licenses", LicenseController.getAll);
  route.get("/licenses/:id", LicenseController.get);
  route.post("/licenses", validateData.licenseValidate, LicenseController.save);
  route.put("/licenses/:id", validateData.licenseValidate, LicenseController.update);
  route.delete("/licenses/:id", LicenseController.delete);

  //total employee route
  route.get("/total-employees/", TotalEmployeeController.getAll);
  route.get("/total-employees/:id", TotalEmployeeController.get);
  route.get(
    "/employee_years/total-employese",
    TotalEmployeeController.getTotalEmployeeAllYears
  );
  route.get(
    "/total-employees/stakeholder/:id",
    TotalEmployeeController.getTotalEmployeeWithStakeholderId
  );
  route.get("/total-employee-searches", TotalEmployeeController.search);
  route.post(
    "/total-employees",
    validateData.totalEmployeeValidate,
    TotalEmployeeController.save
  );
  route.put(
    "/total-employees/:id",
    validateData.totalEmployeeValidate,
    TotalEmployeeController.update
  );
  route.delete("/total-employees/:id", TotalEmployeeController.delete);

  //employee age route
  route.get("/employee-ages/", EmployeeAgeController.getAll);
  route.get("/employee-ages/:id", EmployeeAgeController.get);
  route.get(
    "/employee-ages/stakeholder/:id",
    EmployeeAgeController.getEmployeeAgeByStakeholderId
  );
  route.get("/employee-age-searches", EmployeeAgeController.search);
  route.post(
    "/employee-ages",
    validateData.employeeAgeValidate,
    EmployeeAgeController.save
  );
  route.put(
    "/employee-ages",
    validateData.employeeAgeValidate,
    EmployeeAgeController.update
  );
  route.delete("/employee-ages/:id", EmployeeAgeController.delete);
  
  //employee education route
  route.get("/employee-educations/", EmployeeEducationController.getAll);
  route.get("/collection/", EmployeeEducationController.getCollectionOfData);
  route.get("/employee-educations/:id", EmployeeEducationController.get);
  route.get(
    "/employee-educations/stakeholder/:id",
    EmployeeEducationController.getEmployeeEducationByStakeholderId
  );
  route.get("/employee-education-searches", EmployeeEducationController.search);
  route.post("/employee-educations", EmployeeEducationController.save);
  route.put(
    "/employee-educations/",
    validateData.educationValidate,
    EmployeeEducationController.update
  );
  route.delete("/employee-educations/:id", EmployeeEducationController.delete);

  //work experience level route
  route.get("/work-experience-levels/", WorkExperienceLevelController.getAll);
  route.get("/work-experience-levels/:id", WorkExperienceLevelController.get);
  route.get(
    "/work-experience-level-searches",
    WorkExperienceLevelController.search
  );
  route.post(
    "/work-experience-levels",
    validateData.workExperienceLevelValidate,
    WorkExperienceLevelController.save
  );
  route.put(
    "/work-experience-levels/:id",
    validateData.workExperienceLevelValidate,
    WorkExperienceLevelController.update
  );
  route.delete(
    "/work-experience-levels/:id",
    WorkExperienceLevelController.delete
  );
  //stakeholder training/ support
  route.get("/trainings/", StakeholderTrainingController.getAll);
  route.get("/trainings/:id", StakeholderTrainingController.get);
  route.get("/training-searches", StakeholderTrainingController.search);
  route.post(
    "/trainings",
    validateData.trainingValidate,
    StakeholderTrainingController.save
  );
  route.put(
    "/trainings/:id",
    validateData.trainingValidate,
    StakeholderTrainingController.update
  );
  route.delete("/trainings/:id", StakeholderTrainingController.delete);
  //stakeholder regulation
  route.get("/regulations/", RegulationController.getAll);
  route.get("/regulations/:id", RegulationController.get);
  route.get("/regulation-searches", RegulationController.search);
  route.post(
    "/regulations",
    validateData.regulationValidate,
    RegulationController.save
  );
  route.put(
    "/regulations/:id",
    validateData.regulationValidate,
    RegulationController.update
  );
  route.delete("/regulations/:id", RegulationController.delete);

  //stakeholder study field
  route.get(
    "/stakeholderstudyfields",
    StakeholderStudyFieldController.getAll
  );
  route.get(
    "/stakeholderstudyfields/:id",
    StakeholderStudyFieldController.get
  );
  route.get(
    "/stakeholderstudyfields/stakeholder/:id",
    StakeholderStudyFieldController.getStakeholderStudyFieldByStakeholderId
  );
  route.get(
    "/stakeholder-study-field-searches",
    StakeholderStudyFieldController.search
  );
  route.post(
    "/stakeholderstudyfields",
    validateData.stakeholderStudyFieldValidate,
    StakeholderStudyFieldController.save
  );
  route.put(
    "/stakeholderstudyfields/:id",
    validateData.stakeholderStudyFieldValidate,
    StakeholderStudyFieldController.update
  );
  route.delete(
    "/stakeholderstudyfields/:id",
    StakeholderStudyFieldController.delete
  );

  //study period cost
  route.get("/studyperiodcosts/", StudyPeriodCostController.getAll);
  route.get("/studyperiodcosts/:id", StudyPeriodCostController.get);
  route.get(
    "/studyperiodcosts/higher-institute/:id",
    StudyPeriodCostController.getByHigherInstituteId
  );
  route.get(
    "/studyperiodcosts/study-field/:id",
    StudyPeriodCostController.getByStudyFieldId
  );
  route.get("/study-period-cost-searches", StudyPeriodCostController.search);
  route.post(
    "/studyperiodcosts",
    validateData.studyPeriodCostValidate,
    StudyPeriodCostController.save
  );
  route.put(
    "/studyperiodcosts/:id",
    validateData.studyPeriodCostValidate,
    StudyPeriodCostController.update
  );
  route.delete("/studyperiodcosts/:id", StudyPeriodCostController.delete);
  //Graduate
  route.get("/graduates/", GraduateController.getAll);
  route.get("/graduates/:id", GraduateController.get);
  route.get(
    "/graduates/higher-institute/:id",
    GraduateController.getByHigherInstituteId
  );
  route.get("/graduate-searches", GraduateController.search);
  route.post(
    "/graduates",
    validateData.graduateValidate,
    GraduateController.save
  );
  route.put(
    "/graduates/:id",
    validateData.graduateValidate,
    GraduateController.update
  );
  route.delete("/graduates/:id", GraduateController.delete);
  //Construction related service
  route.get(
    "/constructionrelatedservices/",
    ConstructionRelatedServiceController.getAll
  );
  route.get(
    "/constructionrelatedservices/:id",
    ConstructionRelatedServiceController.get
  );
  route.get(
    "/constructionrelatedservices/stakeholder/:id",
    ConstructionRelatedServiceController.getConstructionRelatedServiceByStakeholderId
  );
  route.get(
    "/construction-related-service-searches",
    ConstructionRelatedServiceController.search
  );
  route.post(
    "/constructionrelatedservices",
    validateData.constructionRelatedServiceValidate,
    ConstructionRelatedServiceController.save
  );
  route.put(
    "/constructionrelatedservices/:id",
    validateData.constructionRelatedServiceValidate,
    ConstructionRelatedServiceController.update
  );
  route.delete(
    "/constructionrelatedservices/:id",
    ConstructionRelatedServiceController.delete
  );
  //Stakeholder service
  route.get("/stakeholderservices/", StakeholderServiceController.getAll);
  route.get("/stakeholderservices/:id", StakeholderServiceController.get);
  route.get(
    "/stakeholderservices/stakeholder/:id",
    StakeholderServiceController.getStakeholderServiceByStakeholderId
  );
  route.get("/stakeholder-service-searches", StakeholderServiceController.search);
  route.post(
    "/stakeholderservices",
    validateData.StakeholderServiceValidate,
    StakeholderServiceController.save
  );
  route.put(
    "/stakeholderservices/:id",
    validateData.StakeholderServiceValidate,
    StakeholderServiceController.update
  );
  route.delete("/stakeholderservices/:id", StakeholderServiceController.delete);
  //Stakeholder operation location
  route.get(
    "/stakeholder-operation-locations/",
    OperationlocationController.getAll
  );
  route.get(
    "/stakeholder-operation-locations/:id",
    OperationlocationController.getByStakeholderId
  );
  route.get(
    "/stakeholder-operation-location-searches",
    OperationlocationController.search
  );
  route.post(
    "/stakeholder-operation-locations",
    OperationlocationController.save
  );
  route.put(
    "/stakeholder-operation-locations/:id",
    OperationlocationController.update
  );
  route.delete(
    "/stakeholder-operation-locations/:id",
    OperationlocationController.delete
  );
  //summary
  route.get(
    "/matrix/stakeholder",
    StakeholderController.countAllStakeholderWithStakeType
  );
  // route.get(
  //   "/count/stakeholder/stakeholdercategory",
  //   StakeholderController.countAllStakeholderWithStakeCategory
  // );
  //Stakeholder email and phone
  route.get(
    "/stakeholder-emails",
    StakeholderEmailController.getAll
  );
  route.get(
    "/stakeholder-phones",
    StakeholderPhoneController.getAll
  );
  route.post("/stakeholder-emails", StakeholderEmailController.save);
  route.post("/stakeholder-phones", StakeholderPhoneController.save);
  route.put("/stakeholder-emails/:id", StakeholderEmailController.update);
  route.put("/stakeholder-phones/:id", StakeholderPhoneController.update);
  route.get(
    "/stakeholder-emails/:id",
    StakeholderEmailController.getEmailAndPhone
  );
  route.put("/stakeholder-emails", StakeholderEmailController.update);
  route.delete("/stakeholder-emails/:id", StakeholderEmailController.delete);
  route.delete("/stakeholder-phones/:id", StakeholderPhoneController.delete);

  // stakeholder managers routes with validation
  route.get("/stakeholder-managers", StakeholderOwnerOrManager26ABController.getAll);
  route.get("/stakeholder-managers/:id", StakeholderOwnerOrManager26ABController.get);
  route.post("/stakeholder-managers", validateData.stakeholderManagerValidate, StakeholderOwnerOrManager26ABController.save);
  route.put(
    "/stakeholder-managers/:id",
    validateData.stakeholderManagerValidate,
    StakeholderOwnerOrManager26ABController.update
  );
  route.delete("/stakeholder-managers/:id", StakeholderOwnerOrManager26ABController.delete);
  

    // stakeholder addresses routes with validation
    route.get("/stakeholder-addresses", StakeholderAddress26A3Controller.getAll);
    route.get("/stakeholder-addresses/:id", StakeholderAddress26A3Controller.get);
    route.post("/stakeholder-addresses", validateData.stakeholderManagerValidate, StakeholderAddress26A3Controller.save);
    route.put(
      "/stakeholder-addresses/:id",
      validateData.stakeholderManagerValidate,
      StakeholderAddress26A3Controller.update
    );
    route.delete("/stakeholder-addresses/:id", StakeholderAddress26A3Controller.delete);
    
  
    // joint venture routes with validation
    route.get("/joint-ventures", JointVenture34A1Controller.getAll);
    route.get("/joint-ventures/:id", JointVenture34A1Controller.get);
    route.post("/joint-ventures", validateData.jointVentureValidate, JointVenture34A1Controller.save);
    route.put(
      "/joint-ventures/:id",
      validateData.jointVentureValidate,
      JointVenture34A1Controller.update
    );
    route.delete("/joint-ventures/:id", JointVenture34A1Controller.delete);
  
  
    // joint venture companies routes with validation
    route.get("/joint-venture-companies", JointVentureCompanyController.getAll);
    route.get("/joint-venture-companies/:id", JointVentureCompanyController.get);
    route.post("/joint-venture-companies", validateData.jointVentureCompanyValidate, JointVentureCompanyController.save);
    route.put(
      "/joint-venture-companies/:id",
      validateData.jointVentureCompanyValidate,
      JointVentureCompanyController.update
    );
    route.delete("/joint-venture-companies/:id", JointVentureCompanyController.delete);
  

    // stakeholder additional informations routes with validation
    route.get("/stakeholder-additional-informations", StakeholderAdditionalInformationController.getAll);
    route.get("/stakeholder-additional-informations/:id", StakeholderAdditionalInformationController.get);
    route.post("/stakeholder-additional-informations", validateData.stakeholderAdditionalInformationValidate, StakeholderAdditionalInformationController.save);
    route.put(
      "/stakeholder-additional-informations/:id",
      validateData.stakeholderAdditionalInformationValidate,
      StakeholderAdditionalInformationController.update
    );
    route.delete("/stakeholder-additional-informations/:id", StakeholderAdditionalInformationController.delete);

    // stakeholder branches routes with validation
    route.get("/stakeholder-branches", StakeholderBranchController.getAll);
    route.get("/stakeholder-branches/:id", StakeholderBranchController.get);
    route.post("/stakeholder-branches", validateData.stakeholderBranchValidate, StakeholderBranchController.save);
    route.put(
      "/stakeholder-branches/:id",
      validateData.stakeholderBranchValidate,
      StakeholderBranchController.update
    );
    route.delete("/stakeholder-branches/:id", StakeholderBranchController.delete);

     // branche managers routes with validation
     route.get("/branch-managers", BranchManagerController.getAll);
     route.get("/branch-managers/:id", BranchManagerController.get);
     route.post("/branch-managers", validateData.branchManagerValidate, BranchManagerController.save);
     route.put(
       "/branch-managers/:id",
       validateData.branchManagerValidate,
       BranchManagerController.update
     );
     route.delete("/branch-managers/:id", BranchManagerController.delete);
    
    // branch contact people routes with validation
    route.get("/branch-contact-people", BranchContactPersonController.getAll);
    route.get("/branch-contact-people/:id", BranchContactPersonController.get);
    route.post("/branch-contact-people", validateData.branchContactPersonValidate, BranchContactPersonController.save);
    route.put(
      "/branch-contact-people/:id",
      validateData.branchContactPersonValidate,
      BranchContactPersonController.update
    );
    route.delete("/branch-contact-people/:id", BranchContactPersonController.delete);

    // branch address routes with validation
    route.get("/branch-addresses", BranchAddressController.getAll);
    route.get("/branch-addresses/:id", BranchAddressController.get);
    route.post("/branch-addresses", validateData.branchAddressValidate, BranchAddressController.save);
    route.put(
      "/branch-addresses/:id",
      validateData.branchAddressValidate,
      BranchAddressController.update
    );
    route.delete("/branch-addresses/:id", BranchAddressController.delete);

    // branch additional informations routes with validation
    route.get("/branch-additional-informations", BranchAdditionalInformationController.getAll);
    route.get("/branch-additional-informations/:id", BranchAdditionalInformationController.get);
    route.post("/branch-additional-informations", validateData.branchAdditionalInformationValidate, BranchAdditionalInformationController.save);
    route.put(
      "/branch-additional-informations/:id",
      validateData.branchAdditionalInformationValidate,
      BranchAdditionalInformationController.update
    );
    route.delete("/branch-additional-informations/:id", BranchAdditionalInformationController.delete);
  
    // stakeholder departments routes with validation
    route.get("/stakeholder-departments", StakeholderDepartmentController.getAll);
    route.get("/stakeholder-departments/:id", StakeholderDepartmentController.get);
    route.post("/stakeholder-departments", validateData.stakeholderDepartmentValidate, StakeholderDepartmentController.save);
    route.put(
      "/stakeholder-departments/:id",
      validateData.stakeholderDepartmentValidate,
      StakeholderDepartmentController.update
    );
    route.delete("/stakeholder-departments/:id", StakeholderDepartmentController.delete);

    // stakeholder positions routes with validation
    route.get("/stakeholder-positions", StakeholderPositionController.getAll);
    route.get("/stakeholder-positions/:id", StakeholderPositionController.get);
    route.post("/stakeholder-positions", validateData.stakeholderPositionValidate, StakeholderPositionController.save);
    route.put(
      "/stakeholder-positions/:id",
      validateData.stakeholderPositionValidate,
      StakeholderPositionController.update
    );
    route.delete("/stakeholder-positions/:id", StakeholderPositionController.delete);

    // stakeholder machinery routes with validation 
    route.get("/stakeholder-machineries", StakeholderMachineryController.getAll);
    route.get("/stakeholder-machineries/:id", StakeholderMachineryController.get);
    route.post("/stakeholder-machineries", validateData.stakeholderMachineryValidate, StakeholderMachineryController.save);
    route.put(
      "/stakeholder-machineries/:id",
      validateData.stakeholderMachineryValidate,
      StakeholderMachineryController.update
    );
    route.delete("/stakeholder-machineries/:id", StakeholderMachineryController.delete);

    // safety equipment routes with validation
    route.get("/safety-equipments", SafetyEquipmentController.getAll);
    route.get("/safety-equipments/:id", SafetyEquipmentController.get);
    route.post("/safety-equipments", validateData.safetyEquipmentValidate, SafetyEquipmentController.save);
    route.put("/safety-equipments/:id", validateData.safetyEquipmentValidate, SafetyEquipmentController.update);
    route.delete("/safety-equipments/:id", SafetyEquipmentController.delete);

    // stakeholder material routes with validation
    route.get("/stakeholder-materials", StakeholderMaterialController.getAll);
    route.get("/stakeholder-materials/:id", StakeholderMaterialController.get);
    // route.post("/stakeholder-materials", validateData.stakeholderMaterialValidate, StakeholderMaterialController.save);
    route.post("/stakeholder-materials", StakeholderMaterialController.save);
    route.put("/stakeholder-materials/:id", StakeholderMaterialController.update);
    route.delete("/stakeholder-materials/:id", StakeholderMaterialController.delete);

    // stakeholder employee routes with validation
    route.get("/stakeholder-employees", StakeholderEmployeeController.getAll);
    route.get("/stakeholder-employees/:id", StakeholderEmployeeController.get);
    // route.post("/stakeholder-employees", validateData.stakeholderEmployeeValidate, StakeholderEmployeeController.save);
    route.post("/stakeholder-employees", StakeholderEmployeeController.save);
    route.put("/stakeholder-employees/:id", StakeholderEmployeeController.update);
    route.delete("/stakeholder-employees/:id", StakeholderEmployeeController.delete);
    return route;

};
