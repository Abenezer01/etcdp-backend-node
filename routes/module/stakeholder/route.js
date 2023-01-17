const stakeholderCategoryController = require("../../../controllers/stakeholder/StakeholderCategoryController.js")
const stakeholderSubCategoryController = require("../../../controllers/stakeholder/StakeholderSubCategoryController.js")
const stakeholderTypeController = require("../../../controllers/stakeholder/StakeholderTypeController.js")
const stakeholderInfoController = require("../../../controllers/stakeholder/StakeholderInfoController.js")
const stakeholderController = require("../../../controllers/stakeholder/StakeholderController.js")
const ownershiptypeController = require("../../../controllers/stakeholder/OwnershiptypeController")
const BusinessfieldController = require("../../../controllers/stakeholder/BusinessfieldController")
const CertificateController = require("../../../controllers/stakeholder/CertificateController")
const TotalEmployeeController = require("../../../controllers/stakeholder/TotalEmployeeController")
const AgeLevelController = require("../../../controllers/stakeholder/AgeLevelController")
const StudyLevelController = require("../../../controllers/stakeholder/StudyLevelController")
const EmployeeAgeController = require("../../../controllers/stakeholder/EmployeeAgeController")
const EmployeeEducationController = require("../../../controllers/stakeholder/EmployeeEducationController")
const WorkExperienceLevelController = require("../../../controllers/stakeholder/WorkExperienceLevelController")
const WorkExperienceController = require("../../../controllers/stakeholder/WorkExperienceController")
const StakeHolderTrainingController = require("../../../controllers/stakeholder/StakeHolderTrainingController")
const RegulationController = require("../../../controllers/stakeholder/RegulationController")
const StudyFieldController = require("../../../controllers/stakeholder/StudyFieldController")
const StudyPeriodCostController = require("../../../controllers/stakeholder/StudyPeriodCostController")
const GraduateController = require("../../../controllers/stakeholder/GraduateController")
const ClientCategoryController = require("../../../controllers/stakeholder/ClientCategoryController")
const ClientSubCategoryController = require("../../../controllers/stakeholder/ClientSubCategoryController")
const ContractorCategoryController = require("../../../controllers/stakeholder/ContractorCategoryController")
const ContractorSubCategoryController = require("../../../controllers/stakeholder/ContractorSubCategoryController")
const ConstructionRelatedServiceController = require("../../../controllers/stakeholder/ConstructionRelatedServiceController")
const middleware = require("../../../middleware/middleware")
const stakeCategoryValidate = require("../../../middleware/validate")
module.exports = function(express) {
    const route = express.Router();
    //ownership route
    route.get("/ownership/", ownershiptypeController.getAll);
    route.get("/ownership/:id", ownershiptypeController.get);
    route.get("/ownership-search", ownershiptypeController.search);
    route.post("/ownership", ownershiptypeController.save);
    route.put("/ownership/:id", ownershiptypeController.update);
    route.delete("/ownership/:id", ownershiptypeController.delete);
    //business field route
    route.get("/businessfield/", BusinessfieldController.getAll);
    route.get("/businessfield/:id", BusinessfieldController.get);
    route.get("/businessfield-search", BusinessfieldController.search);
    route.post("/businessfield", BusinessfieldController.save);
    route.put("/businessfield/:id", BusinessfieldController.update);
    route.delete("/businessfield/:id", BusinessfieldController.delete);
    //stakeholder category route
    route.get("/stakeholder-category/", stakeholderCategoryController.getAll);
    route.get("/stakeholder-category/:id", stakeholderCategoryController.get);
    route.get("/stakeholder-category/stakeholder-type/:id", stakeholderCategoryController.getAllCatByTypeId);
    route.get("/stakeholder-category-search", stakeholderCategoryController.search);
    route.post("/stakeholder-category", stakeCategoryValidate.stakeholderCategoryValidate, stakeholderCategoryController.save);
    route.put("/stakeholder-category/:id", stakeholderCategoryController.update);
    route.delete("/stakeholder-category/:id", stakeholderCategoryController.delete);
    //stakeholder subcategory route
    route.get("/stakeholder-sub-category/", stakeholderSubCategoryController.getAll);
    route.get("/stakeholder-sub-category/:id", stakeholderSubCategoryController.get);
    route.get("/stakeholder-sub-category-search", stakeholderSubCategoryController.search);
    route.post("/stakeholder-sub-category", stakeholderSubCategoryController.save);
    route.put("/stakeholder-sub-category/:id", stakeholderSubCategoryController.update);
    route.delete("/stakeholder-sub-category/:id", stakeholderSubCategoryController.delete);
    //stakeholder type route
    route.get("/stakeholder-type/", stakeholderTypeController.getAll);
    route.get("/stakeholder-type/:id", stakeholderTypeController.get);
    route.get("/stakeholder-type-search", stakeholderTypeController.search);
    route.post("/stakeholder-type", stakeholderTypeController.save);
    route.put("/stakeholder-type/:id", stakeholderTypeController.update);
    route.delete("/stakeholder-type/:id", stakeholderTypeController.delete);
    //stakeholder info route
    route.get("/stakeholder-info/", stakeholderInfoController.getAll);
    route.get("/stakeholder-info/:id", stakeholderInfoController.get);
    route.get("/stakeholder-info-search", stakeholderInfoController.search);
    route.post("/stakeholder-info", stakeholderInfoController.save);
    route.put("/stakeholder-info/:id", stakeholderInfoController.update);
    route.delete("/stakeholder-info/:id", stakeholderInfoController.delete);
    //stakeholder route
    route.get("/stakeholder/", stakeholderController.getAll);
    route.get("/stakeholder/:id", stakeholderController.get);
    route.get("/stakeholder-search", stakeholderController.search);
    route.post("/stakeholder", stakeholderController.save);
    route.put("/stakeholder/:id", stakeholderController.update);
    route.delete("/stakeholder/:id", stakeholderController.delete);
    //certificate route
    route.get("/certificate/", CertificateController.getAll);
    route.get("/certificate/:id", CertificateController.get);
    route.get("/certificate-search", CertificateController.search);
    route.post("/certificate", CertificateController.save);
    route.put("/certificate/:id", CertificateController.update);
    route.delete("/certificate/:id", CertificateController.delete);
    //total employee route
    route.get("/total-employee/", TotalEmployeeController.getAll);
    route.get("/total-employee/:id", TotalEmployeeController.get);
    route.get("/total-employee-search", TotalEmployeeController.search);
    route.post("/total-employee", TotalEmployeeController.save);
    route.put("/total-employee/:id", TotalEmployeeController.update);
    route.delete("/total-employee/:id", TotalEmployeeController.delete);
    //age level route
    route.get("/age-level/", AgeLevelController.getAll);
    route.get("/age-level/:id", AgeLevelController.get);
    route.get("/age-level-search", AgeLevelController.search);
    route.post("/age-level", AgeLevelController.save);
    route.put("/age-level/:id", AgeLevelController.update);
    route.delete("/age-level/:id", AgeLevelController.delete);
    //employee age route
    route.get("/employee-age/", EmployeeAgeController.getAll);
    route.get("/employee-age/:id", EmployeeAgeController.get);
    route.get("/employee-age-search", EmployeeAgeController.search);
    route.post("/employee-age", EmployeeAgeController.save);
    route.put("/employee-age/:id", EmployeeAgeController.update);
    route.delete("/employee-age/:id", EmployeeAgeController.delete);
    //study level route
    route.get("/study-level/", StudyLevelController.getAll);
    route.get("/study-level/:id", StudyLevelController.get);
    route.get("/study-level-search", StudyLevelController.search);
    route.post("/study-level", StudyLevelController.save);
    route.put("/study-level/:id", StudyLevelController.update);
    route.delete("/study-level/:id", StudyLevelController.delete);
    //employee education route
    route.get("/employee-education/", EmployeeEducationController.getAll);
    route.get("/employee-education/:id", EmployeeEducationController.get);
    route.get("/employee-education-search", EmployeeEducationController.search);
    route.post("/employee-education", EmployeeEducationController.save);
    route.put("/employee-education/:id", EmployeeEducationController.update);
    route.delete("/employee-education/:id", EmployeeEducationController.delete);
    //work experience level route
    route.get("/work-experience-level/", WorkExperienceLevelController.getAll);
    route.get("/work-experience-level/:id", WorkExperienceLevelController.get);
    route.get("/work-experience-level-search", WorkExperienceLevelController.search);
    route.post("/work-experience-level", WorkExperienceLevelController.save);
    route.put("/work-experience-level/:id", WorkExperienceLevelController.update);
    route.delete("/work-experience-level/:id", WorkExperienceLevelController.delete);
    //work experience
    route.get("/work-experience/", WorkExperienceController.getAll);
    route.get("/work-experience/:id", WorkExperienceController.get);
    route.get("/work-experience-search", WorkExperienceController.search);
    route.post("/work-experience", WorkExperienceController.save);
    route.put("/work-experience/:id", WorkExperienceController.update);
    route.delete("/work-experience/:id", WorkExperienceController.delete);
    //stakeholder training/ support
    route.get("/training/", StakeHolderTrainingController.getAll);
    route.get("/training/:id", StakeHolderTrainingController.get);
    route.get("/training-search", StakeHolderTrainingController.search);
    route.post("/training", StakeHolderTrainingController.save);
    route.put("/training/:id", StakeHolderTrainingController.update);
    route.delete("/training/:id", StakeHolderTrainingController.delete);
    //stakeholder regulation
    route.get("/regulation/", RegulationController.getAll);
    route.get("/regulation/:id", RegulationController.get);
    route.get("/regulation-search", RegulationController.search);
    route.post("/regulation", RegulationController.save);
    route.put("/regulation/:id", RegulationController.update);
    route.delete("/regulation/:id", RegulationController.delete);
    //study field
    route.get("/study-field/", StudyFieldController.getAll);
    route.get("/study-field/:id", StudyFieldController.get);
    route.get("/study-field-search", StudyFieldController.search);
    route.post("/study-field", StudyFieldController.save);
    route.put("/study-field/:id", StudyFieldController.update);
    route.delete("/study-field/:id", StudyFieldController.delete);
    //study period cost
    route.get("/study-period-cost/", StudyPeriodCostController.getAll);
    route.get("/study-period-cost/:id", StudyPeriodCostController.get);
    route.get("/study-period-cost-search", StudyPeriodCostController.search);
    route.post("/study-period-cost", StudyPeriodCostController.save);
    route.put("/study-period-cost/:id", StudyPeriodCostController.update);
    route.delete("/study-period-cost/:id", StudyPeriodCostController.delete);
    //Graduate
    route.get("/graduate/", GraduateController.getAll);
    route.get("/graduate/:id", GraduateController.get);
    route.get("/graduate-search", GraduateController.search);
    route.post("/graduate", GraduateController.save);
    route.put("/graduate/:id", GraduateController.update);
    route.delete("/graduate/:id", GraduateController.delete);
    //Client category
    route.get("/client-category/", ClientCategoryController.getAll);
    route.get("/client-category/:id", ClientCategoryController.get);
    route.get("/client-category-search", ClientCategoryController.search);
    route.post("/client-category", ClientCategoryController.save);
    route.put("/client-category/:id", ClientCategoryController.update);
    route.delete("/client-category/:id", ClientCategoryController.delete);
    //Client subcategory
    route.get("/client-sub-category/", ClientSubCategoryController.getAll);
    route.get("/client-sub-category/:id", ClientSubCategoryController.get);
    route.get("/client-sub-category-search", ClientSubCategoryController.search);
    route.post("/client-sub-category", ClientSubCategoryController.save);
    route.put("/client-sub-category/:id", ClientSubCategoryController.update);
    route.delete("/client-sub-category/:id", ClientSubCategoryController.delete);
    //Contractor category
    route.get("/contractor-category/", ContractorCategoryController.getAll);
    route.get("/contractor-category/:id", ContractorCategoryController.get);
    route.get("/contractor-category-search", ContractorCategoryController.search);
    route.post("/contractor-category", ContractorCategoryController.save);
    route.put("/contractor-category/:id", ContractorCategoryController.update);
    route.delete("/contractor-category/:id", ContractorCategoryController.delete);
    //Contractor subcategory
    route.get("/contractor-subcategory/", ContractorSubCategoryController.getAll);
    route.get("/contractor-subcategory/:id", ContractorSubCategoryController.get);
    route.get("/contractor-subcategory-search", ContractorSubCategoryController.search);
    route.post("/contractor-subcategory", ContractorSubCategoryController.save);
    route.put("/contractor-subcategory/:id", ContractorSubCategoryController.update);
    route.delete("/contractor-subcategory/:id", ContractorSubCategoryController.delete);
    //Construction related service
    route.get("/construction-related-service/", ConstructionRelatedServiceController.getAll);
    route.get("/construction-related-service/:id", ConstructionRelatedServiceController.get);
    route.get("/construction-related-service-search", ConstructionRelatedServiceController.search);
    route.post("/construction-related-service", ConstructionRelatedServiceController.save);
    route.put("/construction-related-service/:id", ConstructionRelatedServiceController.update);
    route.delete("/construction-related-service/:id", ConstructionRelatedServiceController.delete);
    return route;
};