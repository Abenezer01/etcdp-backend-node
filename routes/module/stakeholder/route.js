const stakeholderCategoryController = require("../../../controllers/stakeholder/StakeholderCategoryController.js");
const stakeholderSubCategoryController = require("../../../controllers/stakeholder/StakeholderSubCategoryController.js");
const stakeholderTypeController = require("../../../controllers/stakeholder/StakeholderTypeController.js");
const stakeholderInfoController = require("../../../controllers/stakeholder/StakeholderInfoController.js");
const stakeholderController = require("../../../controllers/stakeholder/StakeholderController.js");
const ownershiptypeController = require("../../../controllers/stakeholder/OwnershiptypeController");
const BusinessfieldController = require("../../../controllers/stakeholder/BusinessfieldController");
const CertificateController = require("../../../controllers/stakeholder/CertificateController");
const TotalEmployeeController = require("../../../controllers/stakeholder/TotalEmployeeController");
const AgeLevelController = require("../../../controllers/stakeholder/AgeLevelController");
const StudyLevelController = require("../../../controllers/stakeholder/StudyLevelController");
const EmployeeAgeController = require("../../../controllers/stakeholder/EmployeeAgeController");
const EmployeeEducationController = require("../../../controllers/stakeholder/EmployeeEducationController");
const WorkExperienceLevelController = require("../../../controllers/stakeholder/WorkExperienceLevelController");
const WorkExperienceController = require("../../../controllers/stakeholder/WorkExperienceController");
const StakeHolderTrainingController = require("../../../controllers/stakeholder/StakeHolderTrainingController");
const RegulationController = require("../../../controllers/stakeholder/RegulationController");
const StudyFieldController = require("../../../controllers/stakeholder/StudyFieldController");
const StakeholderStudyFieldController = require("../../../controllers/stakeholder/StakeholderStudyFieldController");
const StudyPeriodCostController = require("../../../controllers/stakeholder/StudyPeriodCostController");
const GraduateController = require("../../../controllers/stakeholder/GraduateController");
const ConstructionRelatedServiceController = require("../../../controllers/stakeholder/ConstructionRelatedServiceController");
const StudyProgramController = require("../../../controllers/stakeholder/StudyProgramController");
const StakeholderServiceController = require("../../../controllers/stakeholder/StakeholderServiceController");
const OperationlocationController = require("../../../controllers/stakeholder/OperationlocationController");
const StakeholderEmailController = require("../../../controllers/stakeholder/StakeholderEmailController");
const StakeholderPhoneController = require("../../../controllers/stakeholder/StakeholderPhoneController");
const middleware = require("../../../middleware/middleware");
const validateData = require("../../../middleware/validate/module/stakeholder/validate");

module.exports = function (express) {
  const route = express.Router();
  //ownership route
  route.get("/ownership/", ownershiptypeController.getAll);
  route.get("/ownership/:id", ownershiptypeController.get);
  route.get("/ownership-search", ownershiptypeController.search);
  route.post(
    "/ownership",
    validateData.ownerShipValidate,
    ownershiptypeController.save
  );
  route.put(
    "/ownership/:id",
    validateData.ownerShipValidate,
    ownershiptypeController.update
  );
  route.delete("/ownership/:id", ownershiptypeController.delete);
  //business field route
  route.get("/businessfield/", BusinessfieldController.getAll);
  route.get("/businessfield/:id", BusinessfieldController.get);
  route.get("/businessfield-search", BusinessfieldController.search);
  route.post(
    "/businessfield",
    validateData.buisnessFieldValidate,
    BusinessfieldController.save
  );
  route.put(
    "/businessfield/:id",
    validateData.buisnessFieldValidate,
    BusinessfieldController.update
  );
  route.delete("/businessfield/:id", BusinessfieldController.delete);
  //stakeholder category route
  route.get("/stakeholder-category/", stakeholderCategoryController.getAll);
  route.get("/stakeholder-category/:id", stakeholderCategoryController.get);
  route.get(
    "/stakeholder-category/stakeholder-type/:id",
    stakeholderCategoryController.getAllCatByTypeId
  );
  // route.get("/stakeholder-category/staketype/:id", stakeholderCategoryController.getCatByTypeId);
  route.get(
    "/stakeholder-category-search",
    stakeholderCategoryController.search
  );
  route.post(
    "/stakeholder-category",
    validateData.stakeholderCategoryValidate,
    stakeholderCategoryController.save
  );
  route.put(
    "/stakeholder-category/:id",
    validateData.stakeholderCategoryValidate,
    stakeholderCategoryController.update
  );
  route.delete(
    "/stakeholder-category/:id",
    stakeholderCategoryController.delete
  );
  //stakeholder subcategory route
  route.get(
    "/stakeholder-sub-category/",
    stakeholderSubCategoryController.getAll
  );
  route.get(
    "/stakeholder-sub-category/:id",
    stakeholderSubCategoryController.get
  );
  route.get(
    "/stakeholder-sub-category-search",
    stakeholderSubCategoryController.search
  );
  route.post(
    "/stakeholder-sub-category",
    validateData.stakeholderSubCategoryValidate,
    stakeholderSubCategoryController.save
  );
  route.put(
    "/stakeholder-sub-category/:id",
    validateData.stakeholderSubCategoryValidate,
    stakeholderSubCategoryController.update
  );
  route.delete(
    "/stakeholder-sub-category/:id",
    stakeholderSubCategoryController.delete
  );
  //stakeholder type route
  route.get("/stakeholder-type", stakeholderTypeController.getAll);
  route.get("/stakeholder-type/:id", stakeholderTypeController.get);
  route.get("/stakeholder-type-search", stakeholderTypeController.search);
  route.post(
    "/stakeholder-type",
    validateData.stakeholderTypeValidate,
    stakeholderTypeController.save
  );
  route.put(
    "/stakeholder-type/:id",
    validateData.stakeholderTypeValidate,
    stakeholderTypeController.update
  );
  route.delete("/stakeholder-type/:id", stakeholderTypeController.delete);
  //stakeholder info route
  route.get("/stakeholder-info/", stakeholderInfoController.getAll);
  route.get("/stakeholder-info/:id", stakeholderInfoController.get);
  route.get(
    "/stakeholder-info/stakeholder/:id",
    stakeholderInfoController.getStakeInfoByStakeHolderId
  );
  route.get("/stakeholder-info-search", stakeholderInfoController.search);
  route.post(
    "/stakeholder-info",
    validateData.stakeHolderInfo,
    stakeholderInfoController.save
  );
  route.put(
    "/stakeholder-info/:id",
    validateData.stakeHolderInfo,
    stakeholderInfoController.update
  );
  route.delete("/stakeholder-info/:id", stakeholderInfoController.delete);
  //stakeholder route
  route.get("/stakeholder", stakeholderController.getStakeholders);
  route.get("/stakeholder/:id", stakeholderController.get);
  route.post(
    "/stakeholder/filter/stakeholder-type/",
    stakeholderController.getStakeHolderByTypeId
  );
  route.get("/stakeholder-search", stakeholderController.search);
  route.post(
    "/stakeholder",
    validateData.stakeHolderValidate,
    stakeholderController.save
  );
  route.put(
    "/stakeholder/:id",
    validateData.stakeHolderValidate,
    stakeholderController.update
  );
  route.delete("/stakeholder/:id", stakeholderController.delete);
  //certificate route
  route.get("/certificate/", CertificateController.getAll);
  route.get("/certificate/:id", CertificateController.get);
  route.get(
    "/certificate/stakeholder/:id",
    CertificateController.getCertificateWithStakeholderId
  );
  route.get("/certificate-search", CertificateController.search);
  route.post(
    "/certificate",
    validateData.certificateValidate,
    CertificateController.save
  );
  route.put(
    "/certificate/:id",
    validateData.certificateValidate,
    CertificateController.update
  );
  route.delete("/certificate/:id", CertificateController.delete);
  //total employee route
  route.get("/total-employee/", TotalEmployeeController.getAll);
  route.get("/total-employee/:id", TotalEmployeeController.get);
  route.get(
    "/employee_years/total-employee",
    TotalEmployeeController.getTotalEmployeeAllYears
  );
  route.get(
    "/total-employee/stakeholder/:id",
    TotalEmployeeController.getTotalEmployeeWithStakeholderId
  );
  route.get("/total-employee-search", TotalEmployeeController.search);
  route.post(
    "/total-employee",
    validateData.totalEmployeeValidate,
    TotalEmployeeController.save
  );
  route.put(
    "/total-employee/:id",
    validateData.totalEmployeeValidate,
    TotalEmployeeController.update
  );
  route.delete("/total-employee/:id", TotalEmployeeController.delete);
  //age level route
  route.get("/age-level/", AgeLevelController.getAll);
  route.get("/age-level/:id", AgeLevelController.get);
  route.get("/age-level-search", AgeLevelController.search);
  route.post(
    "/age-level",
    validateData.ageLevelValidate,
    AgeLevelController.save
  );
  route.put(
    "/age-level/:id",
    validateData.ageLevelValidate,
    AgeLevelController.update
  );
  route.delete("/age-level/:id", AgeLevelController.delete);
  //employee age route
  route.get("/employee-age/", EmployeeAgeController.getAll);
  route.get("/employee-age/:id", EmployeeAgeController.get);
  route.get(
    "/employee-age/stakeholder/:id",
    EmployeeAgeController.getEmployeeAgeByStakeholderId
  );
  route.get("/employee-age-search", EmployeeAgeController.search);
  route.post(
    "/employee-age",
    validateData.employeeAgeValidate,
    EmployeeAgeController.save
  );
  route.put(
    "/employee-age",
    validateData.employeeAgeValidate,
    EmployeeAgeController.update
  );
  route.delete("/employee-age/:id", EmployeeAgeController.delete);
  //study level route
  route.get("/study-level/", StudyLevelController.getAll);
  route.get("/study-level/:id", StudyLevelController.get);
  route.get("/study-level-search", StudyLevelController.search);
  route.post(
    "/study-level",
    validateData.studyLevelValidate,
    StudyLevelController.save
  );
  route.put(
    "/study-level/:id",
    validateData.studyLevelValidate,
    StudyLevelController.update
  );
  route.delete("/study-level/:id", StudyLevelController.delete);
  //employee education route
  route.get("/employee-education/", EmployeeEducationController.getAll);
  route.get("/collection/", EmployeeEducationController.getCollectionOfData);
  route.get("/employee-education/:id", EmployeeEducationController.get);
  route.get(
    "/employee-education/stakeholder/:id",
    EmployeeEducationController.getEmployeeEducationByStakeholderId
  );
  route.get("/employee-education-search", EmployeeEducationController.search);
  route.post(
    "/employee-education",
    validateData.educationValidate,
    EmployeeEducationController.save
  );
  route.put(
    "/employee-education/",
    validateData.educationValidate,
    EmployeeEducationController.update
  );
  route.delete("/employee-education/:id", EmployeeEducationController.delete);
  //work experience level route
  route.get("/work-experience-level/", WorkExperienceLevelController.getAll);
  route.get("/work-experience-level/:id", WorkExperienceLevelController.get);
  route.get(
    "/work-experience-level-search",
    WorkExperienceLevelController.search
  );
  route.post(
    "/work-experience-level",
    validateData.workExperienceLevelValidate,
    WorkExperienceLevelController.save
  );
  route.put(
    "/work-experience-level/:id",
    validateData.workExperienceLevelValidate,
    WorkExperienceLevelController.update
  );
  route.delete(
    "/work-experience-level/:id",
    WorkExperienceLevelController.delete
  );
  //work experience
  route.get("/work-experience/", WorkExperienceController.getAll);
  route.get("/work-experience/:id", WorkExperienceController.get);
  route.get(
    "/work-experience/stakeholder/:id",
    WorkExperienceController.getWorkExperienceByStakeholderId
  );
  route.get("/work-experience-search", WorkExperienceController.search);
  route.post(
    "/work-experience",
    validateData.workExperienceValidate,
    WorkExperienceController.save
  );
  route.put(
    "/work-experience",
    validateData.workExperienceValidate,
    WorkExperienceController.update
  );
  route.delete("/work-experience/:id", WorkExperienceController.delete);
  //stakeholder training/ support
  route.get("/training/", StakeHolderTrainingController.getAll);
  route.get("/training/:id", StakeHolderTrainingController.get);
  route.get(
    "/training/stakeholder/:id",
    StakeHolderTrainingController.getTrainingByStakeholderId
  );
  route.get("/training-search", StakeHolderTrainingController.search);
  route.post(
    "/training",
    validateData.trainingValidate,
    StakeHolderTrainingController.save
  );
  route.put(
    "/training/:id",
    validateData.trainingValidate,
    StakeHolderTrainingController.update
  );
  route.delete("/training/:id", StakeHolderTrainingController.delete);
  //stakeholder regulation
  route.get("/regulation/", RegulationController.getAll);
  route.get("/regulation/:id", RegulationController.get);
  route.get(
    "/regulation/stakeholder/:id",
    RegulationController.getRegulationByStakeholderId
  );
  route.get("/regulation-search", RegulationController.search);
  route.post(
    "/regulation",
    validateData.regulationValidate,
    RegulationController.save
  );
  route.put(
    "/regulation/:id",
    validateData.regulationValidate,
    RegulationController.update
  );
  route.delete("/regulation/:id", RegulationController.delete);
  //study field
  route.get("/study-field/", StudyFieldController.getAll);
  route.get("/study-field/:id", StudyFieldController.getStudyFieldById);
  route.get("/study-field-search", StudyFieldController.search);
  route.post(
    "/study-field",
    validateData.studyFieldValidate,
    StudyFieldController.save
  );
  route.put(
    "/study-field/:id",
    validateData.studyFieldValidate,
    StudyFieldController.update
  );
  route.delete("/study-field/:id", StudyFieldController.delete);
  //stakeholder study field
  route.get(
    "/stake-holder/study-field/",
    StakeholderStudyFieldController.getAll
  );
  route.get(
    "/stake-holder/study-field/:id",
    StakeholderStudyFieldController.get
  );
  route.get(
    "/stake-holder/study-field/stake-holder/:id",
    StakeholderStudyFieldController.getStakeholderStudyFieldByStakeholderId
  );
  route.get(
    "/stake-holder/study-field-search",
    StakeholderStudyFieldController.search
  );
  route.post(
    "/stake-holder/study-field",
    validateData.stakeholderStudyFieldValidate,
    StakeholderStudyFieldController.save
  );
  route.put(
    "/stake-holder/study-field/:id",
    validateData.stakeholderStudyFieldValidate,
    StakeholderStudyFieldController.update
  );
  route.delete(
    "/stake-holder/study-field/:id",
    StakeholderStudyFieldController.delete
  );
  //study program
  route.get("/study-program/", StudyProgramController.getAll);
  route.get("/study-program/:id", StudyProgramController.get);
  route.get("/study-program-search", StudyProgramController.search);
  route.post(
    "/study-program",
    validateData.studyProgramValidate,
    StudyProgramController.save
  );
  route.put(
    "/study-program/:id",
    validateData.studyProgramValidate,
    StudyProgramController.update
  );
  route.delete("/study-program/:id", StudyProgramController.delete);
  //study period cost
  route.get("/study-period-cost/", StudyPeriodCostController.getAll);
  route.get("/study-period-cost/:id", StudyPeriodCostController.get);
  route.get(
    "/study-period-cost/higher-institute/:id",
    StudyPeriodCostController.getByHigherInstituteId
  );
  route.get(
    "/study-period-cost/study-field/:id",
    StudyPeriodCostController.getByStudyFieldId
  );
  route.get("/study-period-cost-search", StudyPeriodCostController.search);
  route.post(
    "/study-period-cost",
    validateData.studyPeriodCostValidate,
    StudyPeriodCostController.save
  );
  route.put(
    "/study-period-cost/:id",
    validateData.studyPeriodCostValidate,
    StudyPeriodCostController.update
  );
  route.delete("/study-period-cost/:id", StudyPeriodCostController.delete);
  //Graduate
  route.get("/graduate/", GraduateController.getAll);
  route.get("/graduate/:id", GraduateController.get);
  route.get(
    "/graduate/higher-institute/:id",
    GraduateController.getByHigherInstituteId
  );
  route.get("/graduate-search", GraduateController.search);
  route.post(
    "/graduate",
    validateData.graduateValidate,
    GraduateController.save
  );
  route.put(
    "/graduate/:id",
    validateData.graduateValidate,
    GraduateController.update
  );
  route.delete("/graduate/:id", GraduateController.delete);
  //Construction related service
  route.get(
    "/construction-related-service/",
    ConstructionRelatedServiceController.getAll
  );
  route.get(
    "/construction-related-service/:id",
    ConstructionRelatedServiceController.get
  );
  route.get(
    "/construction-related-service/stakeholder/:id",
    ConstructionRelatedServiceController.getConstructionRelatedServiceByStakeholderId
  );
  route.get(
    "/construction-related-service-search",
    ConstructionRelatedServiceController.search
  );
  route.post(
    "/construction-related-service",
    validateData.constructionRelatedServiceValidate,
    ConstructionRelatedServiceController.save
  );
  route.put(
    "/construction-related-service/:id",
    validateData.constructionRelatedServiceValidate,
    ConstructionRelatedServiceController.update
  );
  route.delete(
    "/construction-related-service/:id",
    ConstructionRelatedServiceController.delete
  );
  //Stakeholder service
  route.get("/stakeholder-service/", StakeholderServiceController.getAll);
  route.get("/stakeholder-service/:id", StakeholderServiceController.get);
  route.get(
    "/stakeholder-service/stakeholder/:id",
    StakeholderServiceController.getStakeServiceByStakeHolderId
  );
  route.get("/stakeholder-service-search", StakeholderServiceController.search);
  route.post(
    "/stakeholder-service",
    validateData.StakeholderServiceValidate,
    StakeholderServiceController.save
  );
  route.put(
    "/stakeholder-service/:id",
    validateData.StakeholderServiceValidate,
    StakeholderServiceController.update
  );
  route.delete("/stakeholder-service/:id", StakeholderServiceController.delete);
  //Stakeholder operation location
  route.get(
    "/stakeholder-operation-location/",
    OperationlocationController.getAll
  );
  route.get(
    "/stakeholder-operation-location/:id",
    OperationlocationController.getByStakeholderId
  );
  route.get(
    "/stakeholder-operation-location-search",
    OperationlocationController.search
  );
  route.post(
    "/stakeholder-operation-location",
    OperationlocationController.save
  );
  route.put(
    "/stakeholder-operation-location",
    OperationlocationController.update
  );
  route.delete(
    "/stakeholder-operation-location/:id",
    OperationlocationController.delete
  );
  //summary
  route.get(
    "/count/stakeholder/stakeholdertype",
    stakeholderController.countAllStakeholderWithStakeType
  );
  route.get(
    "/count/stakeholder/stakeholdercategory",
    stakeholderController.countAllStakeholderWithStakeCategory
  );
  //Stakeholder email and phone
  route.post("/stakeholder-email", StakeholderEmailController.save);
  route.post("/stakeholder-phone", StakeholderPhoneController.save);
  route.put("/stakeholder-email/:id", StakeholderEmailController.update);
  route.put("/stakeholder-phone/:id", StakeholderPhoneController.update);
  route.get(
    "/stakeholder-email/:id",
    StakeholderEmailController.getEmailAndPhone
  );
  route.put("/stakeholder-email", StakeholderEmailController.update);
  route.delete("/stakeholder-email/:id", StakeholderEmailController.delete);
  route.delete("/stakeholder-phone/:id", StakeholderPhoneController.delete);
  return route;
};
