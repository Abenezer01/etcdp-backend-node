const stakeholderCategoryController = require("../../../controllers/stakeholder/StakeholderCategoryController.js");
const stakeholderSubCategoryController = require("../../../controllers/stakeholder/StakeholderSubCategoryController.js");
const stakeholderTypeController = require("../../../controllers/stakeholder/StakeholderTypeController.js");
const stakeholderInfoController = require("../../../controllers/stakeholder/StakeholderInfoController.js");
const StakeholderController = require("../../../controllers/stakeholder/StakeholderController.js");
const StakeholderContactPersonController = require("../../../controllers/stakeholder/StakeholderContactPersonController.js");
const ownershiptypeController = require("../../../controllers/stakeholder/OwnershiptypeController");
const CertificateController = require("../../../controllers/stakeholder/CertificateController");
const TotalEmployeeController = require("../../../controllers/stakeholder/TotalEmployeeController");
const EmployeeAgeController = require("../../../controllers/stakeholder/EmployeeAgeController");
const EmployeeEducationController = require("../../../controllers/stakeholder/EmployeeEducationController");
const WorkExperienceLevelController = require("../../../controllers/stakeholder/WorkExperienceLevelController");
const StakeholderTrainingController = require("../../../controllers/stakeholder/StakeholderTrainingController.js");
const RegulationController = require("../../../controllers/stakeholder/RegulationController");
const StakeholderStudyFieldController = require("../../../controllers/stakeholder/StakeholderStudyFieldController");
const StudyPeriodCostController = require("../../../controllers/stakeholder/StudyPeriodCostController");
const GraduateController = require("../../../controllers/stakeholder/GraduateController");
const ConstructionRelatedServiceController = require("../../../controllers/stakeholder/ConstructionRelatedServiceController");
const StakeholderServiceController = require("../../../controllers/stakeholder/StakeholderServiceController");
const OperationlocationController = require("../../../controllers/stakeholder/OperationlocationController");
const StakeholderEmailController = require("../../../controllers/stakeholder/StakeholderEmailController");
const StakeholderPhoneController = require("../../../controllers/stakeholder/StakeholderPhoneController");
const validateData = require("../../../middleware/validate/module/stakeholder/validate");

module.exports = function (express) {
  const route = express.Router();
  
  //stakeholder category route
  route.get("/stakeholder-categories/", stakeholderCategoryController.getAll);
  route.get("/stakeholder-categories/:id", stakeholderCategoryController.get);
  route.get(
    "/stakeholder-categories/stakeholder-type/:id",
    stakeholderCategoryController.getAllCatByTypeId
  );
  // route.get("/stakeholder-category/staketype/:id", stakeholderCategoryController.getCatByTypeId);
  route.get(
    "/stakeholder-category-searches",
    stakeholderCategoryController.search
  );
  route.post(
    "/stakeholder-categories",
    validateData.stakeholderCategoryValidate,
    stakeholderCategoryController.save
  );
  route.put(
    "/stakeholder-categories/:id",
    validateData.stakeholderCategoryValidate,
    stakeholderCategoryController.update
  );
  route.delete(
    "/stakeholder-categories/:id",
    stakeholderCategoryController.delete
  );
  //stakeholder subcategory route
  route.get(
    "/stakeholder-sub-categories/",
    stakeholderSubCategoryController.getAll
  );
  route.get(
    "/stakeholder-sub-categories/:id",
    stakeholderSubCategoryController.get
  );
  route.get(
    "/stakeholder-sub-category-searches",
    stakeholderSubCategoryController.search
  );
  route.post(
    "/stakeholder-sub-categories",
    validateData.stakeholderSubCategoryValidate,
    stakeholderSubCategoryController.save
  );
  route.put(
    "/stakeholder-sub-categories/:id",
    validateData.stakeholderSubCategoryValidate,
    stakeholderSubCategoryController.update
  );
  route.delete(
    "/stakeholder-sub-categories/:id",
    stakeholderSubCategoryController.delete
  );
  //stakeholder type route
  route.get("/stakeholder-types", stakeholderTypeController.getAll);
  route.get("/stakeholder-types/:id", stakeholderTypeController.get);
  route.get("/stakeholder-type-searches", stakeholderTypeController.search);
  route.post(
    "/stakeholder-typse",
    validateData.stakeholderTypeValidate,
    stakeholderTypeController.save
  );
  route.put(
    "/stakeholder-types/:id",
    validateData.stakeholderTypeValidate,
    stakeholderTypeController.update
  );
  route.delete("/stakeholder-types/:id", stakeholderTypeController.delete);
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
  route.get(
    "/certificates/stakeholder/:id",
    CertificateController.getCertificateWithStakeholderId
  );
  route.get("/certificate-searches", CertificateController.search);
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
  route.get(
    "/trainings/stakeholder/:id",
    StakeholderTrainingController.getTrainingByStakeholderId
  );
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
  route.get(
    "/regulations/stakeholder/:id",
    RegulationController.getRegulationByStakeholderId
  );
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
    "/stakeholder-study-fields",
    StakeholderStudyFieldController.getAll
  );
  route.get(
    "/stakeholder-study-fields/:id",
    StakeholderStudyFieldController.get
  );
  route.get(
    "/stakeholder-study-fields/stakeholder/:id",
    StakeholderStudyFieldController.getStakeholderStudyFieldByStakeholderId
  );
  route.get(
    "/stakeholder-study-field-searches",
    StakeholderStudyFieldController.search
  );
  route.post(
    "/stakeholder-study-fields",
    validateData.stakeholderStudyFieldValidate,
    StakeholderStudyFieldController.save
  );
  route.put(
    "/stakeholder-study-fields/:id",
    validateData.stakeholderStudyFieldValidate,
    StakeholderStudyFieldController.update
  );
  route.delete(
    "/stakeholder-study-fields/:id",
    StakeholderStudyFieldController.delete
  );

  //study period cost
  route.get("/study-period-costs/", StudyPeriodCostController.getAll);
  route.get("/study-period-costs/:id", StudyPeriodCostController.get);
  route.get(
    "/study-period-costs/higher-institute/:id",
    StudyPeriodCostController.getByHigherInstituteId
  );
  route.get(
    "/study-period-costs/study-field/:id",
    StudyPeriodCostController.getByStudyFieldId
  );
  route.get("/study-period-cost-searches", StudyPeriodCostController.search);
  route.post(
    "/study-period-costs",
    validateData.studyPeriodCostValidate,
    StudyPeriodCostController.save
  );
  route.put(
    "/study-period-costs/:id",
    validateData.studyPeriodCostValidate,
    StudyPeriodCostController.update
  );
  route.delete("/study-period-costs/:id", StudyPeriodCostController.delete);
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
    "/construction-related-services/",
    ConstructionRelatedServiceController.getAll
  );
  route.get(
    "/construction-related-services/:id",
    ConstructionRelatedServiceController.get
  );
  route.get(
    "/construction-related-services/stakeholder/:id",
    ConstructionRelatedServiceController.getConstructionRelatedServiceByStakeholderId
  );
  route.get(
    "/construction-related-service-searches",
    ConstructionRelatedServiceController.search
  );
  route.post(
    "/construction-related-services",
    validateData.constructionRelatedServiceValidate,
    ConstructionRelatedServiceController.save
  );
  route.put(
    "/construction-related-services/:id",
    validateData.constructionRelatedServiceValidate,
    ConstructionRelatedServiceController.update
  );
  route.delete(
    "/construction-related-services/:id",
    ConstructionRelatedServiceController.delete
  );
  //Stakeholder service
  route.get("/stakeholder-services/", StakeholderServiceController.getAll);
  route.get("/stakeholder-services/:id", StakeholderServiceController.get);
  route.get(
    "/stakeholder-services/stakeholder/:id",
    StakeholderServiceController.getStakeholderServiceByStakeholderId
  );
  route.get("/stakeholder-service-searches", StakeholderServiceController.search);
  route.post(
    "/stakeholder-services",
    validateData.StakeholderServiceValidate,
    StakeholderServiceController.save
  );
  route.put(
    "/stakeholder-services/:id",
    validateData.StakeholderServiceValidate,
    StakeholderServiceController.update
  );
  route.delete("/stakeholder-services/:id", StakeholderServiceController.delete);
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
    "/stakeholder-operation-locations",
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
  return route;
};
