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
const StakeholderOwnerOrManagerController = require("../../../controllers/stakeholder/StakeholderOwnerOrManagerController");
const StakeholderAddressController = require("../../../controllers/stakeholder/StakeholderAddressController");

const JointVentureController = require("../../../controllers/stakeholder/JointVentureController");
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

const StakeholderDocumentController = require("../../../controllers/stakeholder/StakeholderDocumentController.js");
const StakeholderAccreditationController = require("../../../controllers/stakeholder/StakeholderAccreditationController.js");

const validateData = require("../../../middleware/validate/module/stakeholder/validate");
const hasPermission = require("../../../middleware/hasPermission.js");

module.exports = function (express) {
  const route = express.Router();
  
  //stakeholder info route
  route.get("/stakeholder-infos/", hasPermission('view_stakeholderinfo'), stakeholderInfoController.getAll);
  route.get("/stakeholder-infos/:id", hasPermission('view_stakeholderinfo'), stakeholderInfoController.get);
  route.post(
    "/stakeholder-infos",
    hasPermission('create_stakeholderinfo'),
    validateData.stakeHolderInfo,
    stakeholderInfoController.save
  );
  route.put(
    "/stakeholder-infos/:id",
    hasPermission('update_stakeholderinfo'),
    validateData.stakeHolderInfo,
    stakeholderInfoController.update
  );
  route.delete("/stakeholder-infos/:id", hasPermission('delete_stakeholderinfo'), stakeholderInfoController.delete);

  route.get(
    "/stakeholder-infos/stakeholder/:id",
    stakeholderInfoController.getStakeInfoByStakeHolderId
  );
  
  
  //stakeholder route
  route.get("/stakeholders", hasPermission('view_stakeholder'),StakeholderController.getAll);
  route.get("/stakeholders/:id", hasPermission('view_stakeholder'),StakeholderController.get);
  route.post(
    "/stakeholder/filter/stakeholder-type/",
    StakeholderController.getStakeHolderByTypeId
  );
  route.post(
    "/stakeholders",
    hasPermission('create_stakeholder'),
    validateData.stakeHolderValidate,
    StakeholderController.save
  );
  route.put(
    "/stakeholders/:id",
    hasPermission('update_stakeholder'),
    validateData.stakeHolderValidate,
    StakeholderController.update
  );
  route.delete("/stakeholders/:id", hasPermission('delete_stakeholder'), StakeholderController.delete);
  route.get("/general-infos/:id", StakeholderController.getStakeholderData);

  route.get("/stakeholder-projects/:id", StakeholderController.getStakeholderProjects);
  route.get("/joint-venture-company-projects/:id", JointVentureCompanyController.getJointVentureCompanyProjects);
  //stakeholder contact person
  route.get(
    "/stakeholder-contact-people",
    hasPermission('view_stakeholdercontactperson'),
    StakeholderContactPersonController.getAll
  );
  route.get(
    "/stakeholder-contact-people/:id",
    hasPermission('view_stakeholdercontactperson'),
    StakeholderContactPersonController.get
  );
  route.post(
    "/stakeholder-contact-people",
    hasPermission('create_stakeholdercontactperson'),
    validateData.stakeholderContactPersonValidate,
    StakeholderContactPersonController.save
  );
  route.put(
    "/stakeholder-contact-people/:id",
    hasPermission('update_stakeholdercontactperson'),
    validateData.stakeholderContactPersonValidate,
    StakeholderContactPersonController.update
  );
  route.delete(
    "/stakeholder-contact-people/:id",
    hasPermission('delete_stakeholdercontactperson'),
    StakeholderContactPersonController.delete
  );
  route.get(
    "/stakeholder-contacts/:id",
    StakeholderContactPersonController.getByStakeholderId
  );

  //certificate route
  route.get("/certificates/", hasPermission('view_certificate'),CertificateController.getAll);
  route.get("/certificates/:id", hasPermission('view_certificate'), CertificateController.get);
  route.post(
    "/certificates",
    hasPermission('create_certificate'),
    validateData.certificateValidate,
    CertificateController.save
  );
  route.put(
    "/certificates/:id",
    hasPermission('update_certificate'),
    validateData.certificateValidate,
    CertificateController.update
  );
  route.delete("/certificates/:id", hasPermission('delete_certificate'), CertificateController.delete);

  // Upgrade routes with validation
  route.get("/upgrades", hasPermission('view_upgrade'), UpgradeController.getAll);
  route.get("/upgrades/:id", hasPermission('view_upgrade'), UpgradeController.get);
  route.post("/upgrades", hasPermission('create_upgrade'), validateData.upgradeValidate, UpgradeController.save);
  route.put("/upgrades/:id", hasPermission('update_upgrade'), validateData.upgradeValidate, UpgradeController.update);
  route.delete("/upgrades/:id", hasPermission('delete_upgrade'), UpgradeController.delete);

  // Vehicle routes with validation
  route.get("/vehicles", hasPermission('view_vehicle'), VehicleController.getAll);
  route.get("/vehicles/:id", hasPermission('view_vehicle'), VehicleController.get);
  route.post("/vehicles", hasPermission('create_vehicle'), validateData.vehicleValidate, VehicleController.save);
  route.put("/vehicles/:id", hasPermission('update_vehicle'), validateData.vehicleValidate, VehicleController.update);
  route.delete("/vehicles/:id", hasPermission('delete_vehicle'), VehicleController.delete);

  // License routes with validation
  route.get("/licenses", hasPermission('view_license'), LicenseController.getAll);
  route.get("/licenses/:id", hasPermission('view_license'), LicenseController.get);
  route.post("/licenses", hasPermission('create_license'), validateData.licenseValidate, LicenseController.save);
  route.put("/licenses/:id", hasPermission('update_license'), validateData.licenseValidate, LicenseController.update);
  route.delete("/licenses/:id", hasPermission('delete_license'), LicenseController.delete);

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
  route.get("/employee-ages/", hasPermission('view_employeeage'), EmployeeAgeController.getAll);
  route.get("/employee-ages/:id", hasPermission('view_employeeage'), EmployeeAgeController.get);
  route.get(
    "/employee-ages/stakeholder/:id",
    EmployeeAgeController.getEmployeeAgeByStakeholderId
  );
  route.post(
    "/employee-ages",
    hasPermission('create_employeeage'),
    validateData.employeeAgeValidate,
    EmployeeAgeController.save
  );
  route.put(
    "/employee-ages",
    hasPermission('update_employeeage'),
    validateData.employeeAgeValidate,
    EmployeeAgeController.update
  );
  route.delete("/employee-ages/:id", hasPermission('delete_employeeage'), EmployeeAgeController.delete);
  
  //employee education route
  route.get("/employee-educations/", hasPermission('view_employeeeducation'), EmployeeEducationController.getAll);
  route.get("/collection/", EmployeeEducationController.getCollectionOfData);
  route.get("/employee-educations/:id", hasPermission('view_employeeeducation'), EmployeeEducationController.get);
  route.get(
    "/employee-educations/stakeholder/:id",
    EmployeeEducationController.getEmployeeEducationByStakeholderId
  );
  route.get("/employee-education-searches", EmployeeEducationController.search);
  route.post("/employee-educations", hasPermission('create_employeeeducation'), validateData.educationValidate,EmployeeEducationController.save);
  route.put(
    "/employee-educations/",
    hasPermission('update_employeeeducation'),
    validateData.educationValidate,
    EmployeeEducationController.update
  );
  route.delete("/employee-educations/:id", hasPermission('delete_employeeeducation'), EmployeeEducationController.delete);

  //work experience level route
  route.get("/work-experience-levels/", hasPermission('view_workexperiencelevel'), WorkExperienceLevelController.getAll);
  route.get("/work-experience-levels/:id", hasPermission('view_workexperiencelevel'), WorkExperienceLevelController.get);

  route.post(
    "/work-experience-levels",
    hasPermission('create_workexperiencelevel'),
    validateData.workExperienceLevelValidate,
    WorkExperienceLevelController.save
  );
  route.put(
    "/work-experience-levels/:id",
    hasPermission('update_workexperiencelevel'),
    validateData.workExperienceLevelValidate,
    WorkExperienceLevelController.update
  );
  route.delete(
    "/work-experience-levels/:id",
    hasPermission('delete_workexperiencelevel'),
    WorkExperienceLevelController.delete
  );
  //stakeholder training/ support
  route.get("/trainings/", hasPermission('view_stakeholdertraining'), StakeholderTrainingController.getAll);
  route.get("/trainings/:id", hasPermission('view_stakeholdertraining'), StakeholderTrainingController.get);
  route.post(
    "/trainings",
    hasPermission('create_stakeholdertraining'),
    validateData.trainingValidate,
    StakeholderTrainingController.save
  );
  route.put(
    "/trainings/:id",
    hasPermission('update_stakeholdertraining'),
    validateData.trainingValidate,
    StakeholderTrainingController.update
  );
  route.delete("/trainings/:id", hasPermission('delete_stakeholdertraining'), StakeholderTrainingController.delete);
  //stakeholder regulation
  route.get("/regulations/", hasPermission('view_regulation'), RegulationController.getAll);
  route.get("/regulations/:id", hasPermission('view_regulation'), RegulationController.get);
  route.post(
    "/regulations",
    hasPermission('create_regulation'),
    validateData.regulationValidate,
    RegulationController.save
  );
  route.put(
    "/regulations/:id",
    hasPermission('update_regulation'),
    validateData.regulationValidate,
    RegulationController.update
  );
  route.delete("/regulations/:id", hasPermission('delete_regulation'), RegulationController.delete);

  //stakeholder study field
  route.get(
    "/stakeholderstudyfields",
    hasPermission('view_stakeholderstudyfield'),
    StakeholderStudyFieldController.getAll
  );
  route.get(
    "/stakeholderstudyfields/:id",
    hasPermission('view_stakeholderstudyfield'),
    StakeholderStudyFieldController.get
  );
  route.get(
    "/stakeholderstudyfields/stakeholder/:id",
    StakeholderStudyFieldController.getStakeholderStudyFieldByStakeholderId
  );
  route.post(
    "/stakeholderstudyfields",
    hasPermission('create_stakeholderstudyfield'),
    validateData.stakeholderStudyFieldValidate,
    StakeholderStudyFieldController.save
  );
  route.put(
    "/stakeholderstudyfields/:id",
    hasPermission('update_stakeholderstudyfield'),
    validateData.stakeholderStudyFieldValidate,
    StakeholderStudyFieldController.update
  );
  route.delete(
    "/stakeholderstudyfields/:id",
    hasPermission('delete_stakeholderstudyfield'),
    StakeholderStudyFieldController.delete
  );

  //study period cost
  route.get("/studyperiodcosts/", hasPermission('view_studyperiodcost'), StudyPeriodCostController.getAll);
  route.get("/studyperiodcosts/:id", hasPermission('view_studyperiodcost'), StudyPeriodCostController.get);
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
    hasPermission('create_studyperiodcost'),
    validateData.studyPeriodCostValidate,
    StudyPeriodCostController.save
  );
  route.put(
    "/studyperiodcosts/:id",
    hasPermission('update_studyperiodcost'),
    validateData.studyPeriodCostValidate,
    StudyPeriodCostController.update
  );
  route.delete("/studyperiodcosts/:id", hasPermission('delete_studyperiodcost'), StudyPeriodCostController.delete);
  //Graduate
  route.get("/graduates/", hasPermission('view_graduate'), GraduateController.getAll);
  route.get("/graduates/:id", hasPermission('view_graduate'), GraduateController.get);
  route.get(
    "/graduates/higher-institute/:id",
    GraduateController.getByHigherInstituteId
  );
  route.post(
    "/graduates",
    hasPermission('create_graduate'),
    validateData.graduateValidate,
    GraduateController.save
  );
  route.put(
    "/graduates/:id",
    hasPermission('update_graduate'),
    validateData.graduateValidate,
    GraduateController.update
  );
  route.delete("/graduates/:id", hasPermission('delete_graduate'), GraduateController.delete);
  //Construction related service
  route.get(
    "/constructionrelatedservices/",
    hasPermission('view_constructionrelatedservice'),
    ConstructionRelatedServiceController.getAll
  );
  route.get(
    "/constructionrelatedservices/:id",
    hasPermission('view_constructionrelatedservice'),
    ConstructionRelatedServiceController.get
  );
  route.get(
    "/constructionrelatedservices/stakeholder/:id",
    ConstructionRelatedServiceController.getConstructionRelatedServiceByStakeholderId
  );
  route.post(
    "/constructionrelatedservices",
    hasPermission('create_constructionrelatedservice'),
    validateData.constructionRelatedServiceValidate,
    ConstructionRelatedServiceController.save
  );
  route.put(
    "/constructionrelatedservices/:id",
    hasPermission('update_constructionrelatedservice'),
    validateData.constructionRelatedServiceValidate,
    ConstructionRelatedServiceController.update
  );
  route.delete(
    "/constructionrelatedservices/:id",
    hasPermission('delete_constructionrelatedservice'),
    ConstructionRelatedServiceController.delete
  );
  //Stakeholder service
  route.get("/stakeholderservices/", hasPermission('view_stakeholderservice'),StakeholderServiceController.getAll);
  route.get("/stakeholderservices/:id", hasPermission('view_stakeholderservice'), StakeholderServiceController.get);
  route.get(
    "/stakeholderservices/stakeholder/:id",
    StakeholderServiceController.getStakeholderServiceByStakeholderId
  );
  route.post(
    "/stakeholderservices",
    hasPermission('create_stakeholderservice'),
    validateData.StakeholderServiceValidate,
    StakeholderServiceController.save
  );
  route.put(
    "/stakeholderservices/:id",
    hasPermission('update_stakeholderservice'),
    validateData.StakeholderServiceValidate,
    StakeholderServiceController.update
  );
  route.delete("/stakeholderservices/:id", hasPermission('delete_stakeholderservice') ,StakeholderServiceController.delete);
  //Stakeholder operation location
  route.get(
    "/stakeholder-operation-locations/",
    hasPermission('view_stakeholderoperationlocation'),
    OperationlocationController.getAll
  );
  route.get(
    "/stakeholder-operation-locations/:id",
    hasPermission('view_stakeholderoperationlocation'),
    OperationlocationController.getByStakeholderId
  );
  route.post(
    "/stakeholder-operation-locations",
    hasPermission('create_stakeholderoperationlocation'),
    // validateData.operationLocationValidate,
    OperationlocationController.save
  );
  route.put(
    "/stakeholder-operation-locations/:id",
    hasPermission('update_stakeholderoperationlocation'),
    OperationlocationController.update
  );
  route.delete(

    "/stakeholder-operation-locations/:id",
    hasPermission('delete_stakeholderoperationlocation'),
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
    hasPermission('view_stakeholderemail'),
    StakeholderEmailController.getAll
  );
  route.get(
    "/stakeholder-phones",
    hasPermission('view_stakeholderphone'),
    StakeholderPhoneController.getAll
  );
  route.post("/stakeholder-emails", hasPermission('create_stakeholderemail'), StakeholderEmailController.save);
  route.post("/stakeholder-phones", hasPermission('create_stakeholderphone'), StakeholderPhoneController.save);
  route.put("/stakeholder-emails/:id", hasPermission('update_stakeholderemail'), StakeholderEmailController.update);
  route.put("/stakeholder-phones/:id", hasPermission('update_stakeholderphone'), StakeholderPhoneController.update);
  route.get(
    "/stakeholder-emails/:id",
    StakeholderEmailController.getEmailAndPhone
  );
  route.put("/stakeholder-emails", StakeholderEmailController.update);
  route.delete("/stakeholder-emails/:id", hasPermission('delete_stakeholderemail'), StakeholderEmailController.delete);
  route.delete("/stakeholder-phones/:id", hasPermission('delete_stakeholderphone'),StakeholderPhoneController.delete);

  // stakeholder managers routes with validation
  route.get("/stakeholder-managers", hasPermission('view_stakeholdermanager'), StakeholderOwnerOrManagerController.getAll);
  route.get("/stakeholder-managers/:id", hasPermission('view_stakeholdermanager'), StakeholderOwnerOrManagerController.get);
  route.post("/stakeholder-managers", 
    hasPermission('create_stakeholdermanager'),
    validateData.stakeholderManagerValidate, 
    StakeholderOwnerOrManagerController.save);
  route.put(
    "/stakeholder-managers/:id",
    hasPermission('update_stakeholdermanager'),
    validateData.stakeholderManagerValidate,
    StakeholderOwnerOrManagerController.update
  );
  route.delete("/stakeholder-managers/:id", hasPermission('delete_stakeholdermanager'), StakeholderOwnerOrManagerController.delete);
  

    // stakeholder addresses routes with validation
    route.get("/stakeholder-addresses", hasPermission('view_stakeholderaddress'), StakeholderAddressController.getAll);
    route.get("/stakeholder-addresses/:id", hasPermission('view_stakeholderaddress'), StakeholderAddressController.get);
    route.post("/stakeholder-addresses", 
      hasPermission('create_stakeholderaddress'),
     validateData.stakeholderManagerValidate, StakeholderAddressController.save);
    route.put(
      "/stakeholder-addresses/:id",
      hasPermission('update_stakeholderaddress'),
      validateData.stakeholderManagerValidate,
      StakeholderAddressController.update
    );
    route.delete("/stakeholder-addresses/:id", hasPermission('delete_stakeholderaddress'), StakeholderAddressController.delete);
    
  
    // joint venture routes with validation
    route.get("/joint-ventures", hasPermission('view_jointventure'), JointVentureController.getAll);
    route.get("/joint-ventures/:id", hasPermission('view_jointventure'), JointVentureController.get);
    route.post("/joint-ventures", 
      hasPermission('create_jointventure'),
      validateData.jointVentureValidate, JointVentureController.save);
    route.put(
      "/joint-ventures/:id",
      hasPermission('update_jointventure'),
      validateData.jointVentureValidate,
      JointVentureController.update
    );
    route.delete("/joint-ventures/:id", hasPermission('delete_jointventure'), JointVentureController.delete);
  
  
    // joint venture companies routes with validation
    route.get("/joint-venture-companies", hasPermission('view_jointventurecompany'), JointVentureCompanyController.getAll);
    route.get("/joint-venture-companies/:id", hasPermission('view_jointventurecompany'), JointVentureCompanyController.get);
    route.post("/joint-venture-companies", 
      hasPermission('create_jointventurecompany'),
      validateData.jointVentureCompanyValidate, JointVentureCompanyController.save);
    route.put(
      "/joint-venture-companies/:id",
      hasPermission('update_jointventurecompany'),
      validateData.jointVentureCompanyValidate,
      JointVentureCompanyController.update
    );
    route.delete("/joint-venture-companies/:id", hasPermission('delete_jointventurecompany'), JointVentureCompanyController.delete);
  

    // stakeholder additional informations routes with validation
    route.get("/stakeholder-additional-informations", hasPermission('view_stakeholderadditionalinformation'), StakeholderAdditionalInformationController.getAll);
    route.get("/stakeholder-additional-informations/:id", hasPermission('view_stakeholderadditionalinformation'), StakeholderAdditionalInformationController.get);
    route.post("/stakeholder-additional-informations", 
      hasPermission('create_stakeholderadditionalinformation'),
      validateData.stakeholderAdditionalInformationValidate, StakeholderAdditionalInformationController.save);
    route.put(
      "/stakeholder-additional-informations/:id", 
      hasPermission('update_stakeholderadditionalinformation'),
      validateData.stakeholderAdditionalInformationValidate,
      StakeholderAdditionalInformationController.update
    );
    route.delete("/stakeholder-additional-informations/:id", hasPermission('delete_stakeholderadditionalinformation'), StakeholderAdditionalInformationController.delete);

    // stakeholder branches routes with validation
    route.get("/stakeholder-branches", hasPermission('view_stakeholderbranch'), StakeholderBranchController.getAll);
    route.get("/stakeholder-branches/:id", hasPermission('view_stakeholderbranch'), StakeholderBranchController.get);
    route.post("/stakeholder-branches", 
      hasPermission('create_stakeholderbranch'),
      validateData.stakeholderBranchValidate, StakeholderBranchController.save);
    route.put(
      "/stakeholder-branches/:id",
      hasPermission('update_stakeholderbranch'),
      validateData.stakeholderBranchValidate,
      StakeholderBranchController.update
    );
    route.delete("/stakeholder-branches/:id", hasPermission('delete_stakeholderbranch'), StakeholderBranchController.delete);

     // branche managers routes with validation
     route.get("/branch-managers", hasPermission('view_branchmanager'), BranchManagerController.getAll);
     route.get("/branch-managers/:id", hasPermission('view_branchmanager'), BranchManagerController.get);
     route.post("/branch-managers", 
      hasPermission('create_branchmanager'),
      validateData.branchManagerValidate, BranchManagerController.save);
     route.put(
       "/branch-managers/:id",
       hasPermission('update_branchmanager'),
       validateData.branchManagerValidate,
       BranchManagerController.update
     );
     route.delete("/branch-managers/:id", hasPermission('delete_branchmanager'), BranchManagerController.delete);
    
    // branch contact people routes with validation
    route.get("/branch-contact-people", hasPermission('view_branchcontactperson'), BranchContactPersonController.getAll);
    route.get("/branch-contact-people/:id", hasPermission('view_branchcontactperson'), BranchContactPersonController.get);
    route.post("/branch-contact-people", 
      hasPermission('create_branchcontactperson'),
      validateData.branchContactPersonValidate, BranchContactPersonController.save);
    route.put(
      "/branch-contact-people/:id",
      hasPermission('update_branchcontactperson'),
      validateData.branchContactPersonValidate,
      BranchContactPersonController.update
    );
    route.delete("/branch-contact-people/:id", hasPermission('delete_branchcontactperson'), BranchContactPersonController.delete);

    // branch address routes with validation
    route.get("/branch-addresses", hasPermission('view_branchaddress'), BranchAddressController.getAll);
    route.get("/branch-addresses/:id", hasPermission('view_branchaddress'), BranchAddressController.get);
    route.post("/branch-addresses", 
      hasPermission('create_branchaddress'),
      validateData.branchAddressValidate, BranchAddressController.save);
    route.put(
      "/branch-addresses/:id",
      hasPermission('update_branchaddress'),
      validateData.branchAddressValidate,
      BranchAddressController.update
    );
    route.delete("/branch-addresses/:id", hasPermission('delete_branchaddress'), BranchAddressController.delete);

    // branch additional informations routes with validation
    route.get("/branch-additional-informations", hasPermission('view_branchadditionalinformation'), BranchAdditionalInformationController.getAll);
    route.get("/branch-additional-informations/:id", hasPermission('view_branchadditionalinformation'), BranchAdditionalInformationController.get);
    route.post("/branch-additional-informations",
       hasPermission('create_branchadditionalinformation'),
       validateData.branchAdditionalInformationValidate, BranchAdditionalInformationController.save);
    route.put(
      "/branch-additional-informations/:id",
      hasPermission('update_branchadditionalinformation'),
      validateData.branchAdditionalInformationValidate,
      BranchAdditionalInformationController.update
    );
    route.delete("/branch-additional-informations/:id", hasPermission('delete_branchadditionalinformation'), BranchAdditionalInformationController.delete);
  
    // stakeholder departments routes with validation
    route.get("/stakeholder-departments", hasPermission('view_stakeholderdepartment'), StakeholderDepartmentController.getAll);
    route.get("/stakeholder-departments/:id", hasPermission('view_stakeholderdepartment'), StakeholderDepartmentController.get);
    route.post("/stakeholder-departments", hasPermission('create_stakeholderdepartment'), validateData.stakeholderDepartmentValidate, StakeholderDepartmentController.save);
    route.put(
      "/stakeholder-departments/:id",
      hasPermission('update_stakeholderdepartment'),
      validateData.stakeholderDepartmentValidate,
      StakeholderDepartmentController.update
    );
    route.delete("/stakeholder-departments/:id", hasPermission('delete_stakeholderdepartment'), StakeholderDepartmentController.delete);

    // stakeholder positions routes with validation
    route.get("/stakeholder-positions", hasPermission('view_stakeholderposition'), StakeholderPositionController.getAll);
    route.get("/stakeholder-positions/:id", hasPermission('view_stakeholderposition'), StakeholderPositionController.get);
    route.post("/stakeholder-positions", hasPermission('create_stakeholderposition'), validateData.stakeholderPositionValidate, StakeholderPositionController.save);
    route.put(
      "/stakeholder-positions/:id",
      hasPermission('update_stakeholderposition'),
      validateData.stakeholderPositionValidate,
      StakeholderPositionController.update
    );
    route.delete("/stakeholder-positions/:id", hasPermission('delete_stakeholderposition'), StakeholderPositionController.delete);

    // stakeholder machinery routes with validation 
    route.get("/stakeholder-machineries", hasPermission('view_stakeholdermachinery'), StakeholderMachineryController.getAll);
    route.get("/stakeholder-machineries/:id", hasPermission('view_stakeholdermachinery'),StakeholderMachineryController.get);
    route.post("/stakeholder-machineries", hasPermission('create_stakeholdermachinery'), validateData.stakeholderMachineryValidate, StakeholderMachineryController.save);
    route.put(
      "/stakeholder-machineries/:id",
      hasPermission('update_stakeholdermachinery'),
      validateData.stakeholderMachineryValidate,
      StakeholderMachineryController.update
    );
    route.delete("/stakeholder-machineries/:id", hasPermission('delete_stakeholdermachinery'), StakeholderMachineryController.delete);

    // safety equipment routes with validation
    route.get("/safety-equipments", hasPermission('view_safetyequipment'), SafetyEquipmentController.getAll);
    route.get("/safety-equipments/:id", hasPermission('view_safetyequipment'), SafetyEquipmentController.get);
    route.post("/safety-equipments", hasPermission('create_safetyequipment'), validateData.safetyEquipmentValidate, SafetyEquipmentController.save);
    route.put("/safety-equipments/:id", hasPermission('update_safetyequipment'), validateData.safetyEquipmentValidate, SafetyEquipmentController.update);
    route.delete("/safety-equipments/:id", hasPermission('delete_safetyequipment'), SafetyEquipmentController.delete);

    // stakeholder material routes with validation
    route.get("/stakeholder-materials", hasPermission('view_stakeholdermaterial'), StakeholderMaterialController.getAll);
    route.get("/stakeholder-materials/:id",  hasPermission('view_stakeholdermaterial'), StakeholderMaterialController.get);
    // route.post("/stakeholder-materials", validateData.stakeholderMaterialValidate, StakeholderMaterialController.save);
    route.post("/stakeholder-materials", hasPermission('create_stakeholdermaterial'), StakeholderMaterialController.save);
    route.put("/stakeholder-materials/:id", hasPermission('update_stakeholdermaterial'), StakeholderMaterialController.update);
    route.delete("/stakeholder-materials/:id", hasPermission('delete_stakeholdermaterial'), StakeholderMaterialController.delete);

    // stakeholder employee routes with validation
    route.get("/stakeholder-employees", hasPermission('view_stakeholdermaterial'), StakeholderEmployeeController.getAll);
    route.get("/stakeholder-employees/:id", hasPermission('view_stakeholdermaterial'), StakeholderEmployeeController.get);
    // route.post("/stakeholder-employees", validateData.stakeholderEmployeeValidate, StakeholderEmployeeController.save);
    route.post("/stakeholder-employees", hasPermission('create_stakeholdermaterial'), StakeholderEmployeeController.save);
    route.put("/stakeholder-employees/:id", hasPermission('update_stakeholdermaterial'), StakeholderEmployeeController.update);
    route.delete("/stakeholder-employees/:id", hasPermission('delete_stakeholdermaterial'), StakeholderEmployeeController.delete);

    // stakeholder document routes with validation
    route.get("/stakeholder-documents", hasPermission('view_stakeholderdocument'), StakeholderDocumentController.getAll);
    route.get("/stakeholder-documents/:id", hasPermission('view_stakeholderdocument'), StakeholderDocumentController.get);
    route.post("/stakeholder-documents", hasPermission('create_stakeholderdocument'), validateData.stakeholderDocumentValidate, StakeholderDocumentController.save);
    route.put("/stakeholder-documents/:id", hasPermission('update_stakeholderdocument'), validateData.stakeholderDocumentValidate, StakeholderDocumentController.update);
    route.delete("/stakeholder-documents/:id", hasPermission('delete_stakeholderdocument'), StakeholderDocumentController.delete);
    
    // stakeholder accreditation routes with validation
    route.get("/stakeholder-accreditations", hasPermission('view_stakeholderaccreditation'), StakeholderAccreditationController.getAll);
    route.get("/stakeholder-accreditations/:id", hasPermission('view_stakeholderaccreditation'), StakeholderAccreditationController.get);
    route.post("/stakeholder-accreditations", hasPermission('create_stakeholderaccreditation'), validateData.stakeholderAccreditationValidate, StakeholderAccreditationController.save);
    route.put("/stakeholder-accreditations/:id", hasPermission('update_stakeholderaccreditation'), validateData.stakeholderAccreditationValidate, StakeholderAccreditationController.update);
    route.delete("/stakeholder-accreditations/:id", hasPermission('delete_stakeholderaccreditation'), StakeholderAccreditationController.delete);
    
    return route;

};
