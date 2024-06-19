const ownershiptypeController = require("../../../controllers/stakeholder/OwnershiptypeController");
const StudyLevelController = require("../../../controllers/stakeholder/StudyLevelController");
const BusinessFieldController = require("../../../controllers/stakeholder/BusinessFieldController");
const StudyProgramController = require("../../../controllers/stakeholder/StudyProgramController");
const StudyFieldController = require("../../../controllers/stakeholder/StudyFieldController");
const AgeLevelController = require("../../../controllers/stakeholder/AgeLevelController");
const WorkExperienceController = require("../../../controllers/stakeholder/WorkExperienceController");


const StatusController = require("../../../controllers/project/StatusController.js");


const stakeholderCategoryController = require("../../../controllers/stakeholder/StakeholderCategoryController.js");
const stakeholderSubCategoryController = require("../../../controllers/stakeholder/StakeholderSubCategoryController.js");
const stakeholderTypeController = require("../../../controllers/stakeholder/StakeholderTypeController.js");

const ProjectTypeController = require("../../../controllers/project/ProjectTypeController.js");
const ProjectCategoryController = require("../../../controllers/project/ProjectCategoryController.js");
const ProjectSubCategoryController = require("../../../controllers/project/ProjectSubCategoryController.js");

const ConstructionResourceTypeController = require("../../../controllers/construction resource/ConstructionResourceTypeController");
const ConstructionResourceCategoryController = require("../../../controllers/construction resource/ConstructionResourceCategoryController");
const ConstructionResourceSubCategoryController = require("../../../controllers/construction resource/ConstructionResourceSubCategoryController");

const DocumentTypeController = require("../../../controllers/document/documentTypeController.js")
const DocumentCategoryController = require("../../../controllers/document/DocumentCategoryController");
const DocumentSubCategoryController = require("../../../controllers/document/DocumentSubCategoryController");



const ConstructionRelatedServiceController = require("../../../controllers/stakeholder/ConstructionRelatedServiceController");

const validateData = require("../../../middleware/validate/module/stakeholder/validate");

module.exports = function (express) {
  const route = express.Router();
  //ownership route
  route.get("/ownerships/", ownershiptypeController.getAll);
  route.get("/ownerships/:id", ownershiptypeController.get);
  route.get("/ownership-searches", ownershiptypeController.search);
  route.post(
    "/ownerships",
    validateData.ownerShipValidate,
    ownershiptypeController.save
  );
  route.put(
    "/ownerships/:id",
    validateData.ownerShipValidate,
    ownershiptypeController.update
  );
  route.delete("/ownership/:id", ownershiptypeController.delete);
  //business field route
  route.get("/business-fields/", BusinessFieldController.getAll);
  route.get("/business-fields/:id", BusinessFieldController.get);
  route.get("/business-field-searches", BusinessFieldController.search);
  route.post(
    "/business-fields",
    validateData.buisnessFieldValidate,
    BusinessFieldController.save
  );
  route.put(
    "/business-fields/:id",
    validateData.buisnessFieldValidate,
    BusinessFieldController.update
  );
  route.delete("/business-fields/:id", BusinessFieldController.delete);
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
 
  //age level route
  route.get("/age-levels/", AgeLevelController.getAll);
  route.get("/age-levels/:id", AgeLevelController.get);
  route.get("/age-level-searches", AgeLevelController.search);
  route.post(
    "/age-levels",
    validateData.ageLevelValidate,
    AgeLevelController.save
  );
  route.put(
    "/age-levels/:id",
    validateData.ageLevelValidate,
    AgeLevelController.update
  );
  route.delete("/age-levels/:id", AgeLevelController.delete);
  
  //study level route
  route.get("/study-levels/", StudyLevelController.getAll);
  route.get("/study-levels/:id", StudyLevelController.get);
  route.get("/study-level-searches", StudyLevelController.search);
  route.post(
    "/study-levels",
    validateData.studyLevelValidate,
    StudyLevelController.save
  );
  route.put(
    "/study-levels/:id",
    validateData.studyLevelValidate,
    StudyLevelController.update
  );
  route.delete("/study-levels/:id", StudyLevelController.delete);
  

  //work experience
  route.get("/work-experiences/", WorkExperienceController.getAll);
  route.get("/work-experiences/:id", WorkExperienceController.get);
  route.get(
    "/work-experiences/stakeholder/:id",
    WorkExperienceController.getWorkExperienceByStakeholderId
  );
  route.get("/work-experience-searches", WorkExperienceController.search);
  route.post(
    "/work-experiences",
    validateData.workExperienceValidate,
    WorkExperienceController.save
  );
  route.put(
    "/work-experiences",
    validateData.workExperienceValidate,
    WorkExperienceController.update
  );
  route.delete("/work-experiences/:id", WorkExperienceController.delete);
  
  //study field
  route.get("/study-fields/", StudyFieldController.getAll);
  route.get("/study-fields/:id", StudyFieldController.getStudyFieldById);
  route.get("/study-field-searches", StudyFieldController.search);
  route.post(
    "/study-fields",
    validateData.studyFieldValidate,
    StudyFieldController.save
  );
  route.put(
    "/study-fields/:id",
    validateData.studyFieldValidate,
    StudyFieldController.update
  );
  route.delete("/study-fields/:id", StudyFieldController.delete);
 
  //study program
  route.get("/study-programs/", StudyProgramController.getAll);
  route.get("/study-programs/:id", StudyProgramController.get);
  route.get("/study-program-searches", StudyProgramController.search);
  route.post(
    "/study-programs",
    validateData.studyProgramValidate,
    StudyProgramController.save
  );
  route.put(
    "/study-programs/:id",
    validateData.studyProgramValidate,
    StudyProgramController.update
  );
  route.delete("/study-programs/:id", StudyProgramController.delete);
  
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
  
  //status
  route.get("/statuses", StatusController.getAll);
  route.get("/statuses/:id", StatusController.get);
  route.get("/status-searches", StatusController.search);
  route.post("/statuses", validateData.statusValidate, StatusController.save);
  route.put(
    "/statuses/:id",
    validateData.statusValidate,
    StatusController.update
  );
  route.delete("/statuses/:id", StatusController.delete);

  
  //project route

  route.get("/project-types", ProjectTypeController.getAll);
  route.get("/project-types/:id", ProjectTypeController.get);
  route.get("/project-type-searches", ProjectTypeController.search);
  route.post(
    "/project-types",
    validateData.projectTypeValidate,
    ProjectTypeController.save
  );
  route.put(
    "/project-typse/:id",
    validateData.projectTypeValidate,
    ProjectTypeController.update
  );
  route.delete("/project-types/:id", ProjectTypeController.delete);
  //project category
  route.get("/project-categories", ProjectCategoryController.getAll);
  route.get(
    "/project-categories/projecttype/:id",
    ProjectCategoryController.getAllProCatByTypeId
  );
  route.get("/project-categories/:id", ProjectCategoryController.get);
  route.get("/project-categories-searches", ProjectCategoryController.search);
  
  route.post(
    "/project-categories",
    validateData.projectCategoryValidate,
    ProjectCategoryController.save
  );
  route.put(
    "/project-categories/:id",
    validateData.projectCategoryValidate,
    ProjectCategoryController.update
  );
  route.delete("/project-categories/:id", ProjectCategoryController.delete);
  //project subcategory
  route.get("/project-sub-categories", ProjectSubCategoryController.getAll);
  route.get("/project-sub-categories/:id", ProjectSubCategoryController.get);
  route.get(
    "/project-category/project-sub-categories/:id",
    ProjectSubCategoryController.getByProjectCategoryId
  );
  route.get(
    "/project-sub-category-searches",
    ProjectSubCategoryController.search
  );
  route.post(
    "/project-sub-categories",
    validateData.projectSubCategoryValidate,
    ProjectSubCategoryController.save
  );
  route.put(
    "/project-sub-categories/:id",
    validateData.projectSubCategoryValidate,
    ProjectSubCategoryController.update
  );
  route.delete(
    "/project-sub-categories/:id",
    ProjectSubCategoryController.delete
  );
  
   //construction resource type controller
   route.get(
    "/construction-resource-types",
    ConstructionResourceTypeController.getAll
  );
  route.get(
    "/construction-resource-types/:id",
    ConstructionResourceTypeController.get
  );
  route.get(
    "/construction-resource-type-search",
    ConstructionResourceTypeController.search
  );
  route.post(
    "/construction-resource-types",
    validateData.constructionResourceTypeValidate,
    ConstructionResourceTypeController.save
  );
  route.put(
    "/construction-resource-types/:id",
    validateData.constructionResourceTypeValidate,
    ConstructionResourceTypeController.update
  );
  route.delete(
    "/construction-resource-types/:id",
    ConstructionResourceTypeController.delete
  );
  

  //construction resource category controller
  route.get(
    "/construction-resource-categories",
    ConstructionResourceCategoryController.getAll
  );
  route.get(
    "/construction-resource-categories/:id",
    ConstructionResourceCategoryController.get
  );
  route.get(
    "/type/construction-resource-categories/:id",
    ConstructionResourceCategoryController.getCRCByResourceTypeId
  );
  route.get(
    "/construction-resource-category_search",
    ConstructionResourceCategoryController.search
  );
  route.post(
    "/construction-resource-categories",
    validateData.constructionResourceCategoryValidate,
    ConstructionResourceCategoryController.save
  );
  route.put(
    "/construction-resource-categories/:id",
    validateData.constructionResourceCategoryValidate,
    ConstructionResourceCategoryController.update
  );
  route.delete(
    "/construction-resource-categories/:id",
    ConstructionResourceCategoryController.delete
  );
  //construction resource subcategory controller
  route.get(
    "/construction-resource-subcategories",
    ConstructionResourceSubCategoryController.getAll
  );
  route.get(
    "/construction-resource-subcategories/:id",
    ConstructionResourceSubCategoryController.get
  );
  route.get(
    "/construction-resource-subcategory-searches",
    ConstructionResourceSubCategoryController.search
  );
  route.post(
    "/construction-resource-subcategories",
    validateData.constructionResourceSubCategoryValidate,
    ConstructionResourceSubCategoryController.save
  );
  route.put(
    "/construction-resource-subcategories/:id",
    validateData.constructionResourceSubCategoryValidate,
    ConstructionResourceSubCategoryController.update
  );
  route.delete(
    "/construction-resource-subcategories/:id",
    ConstructionResourceSubCategoryController.delete
  );

  
  //construction document type controller
  route.get("/document-types", DocumentTypeController.getAll);
  route.get("/document-types/:id", DocumentTypeController.get);
  route.get("/document-type_search", DocumentTypeController.search);
  route.post(
    "/document-types",
    validateData.documentTypeValidate,
    DocumentTypeController.save
  );
  route.put(
    "/document-types/:id",
    validateData.documentTypeValidate,
    DocumentTypeController.update
  );
  route.delete("/document-types/:id", DocumentTypeController.delete);
  //construction document category controller
  route.get("/document-categories", DocumentCategoryController.getAll);
  route.get("/document-categories/:id", DocumentCategoryController.get);
  route.get(
    "/type/document-categories/:id",
    DocumentCategoryController.getCRCBydocumentTypeId
  );
  route.get("/document-category_search", DocumentCategoryController.search);
  route.post(
    "/document-categories",
    validateData.documentCategoryValidate,
    DocumentCategoryController.save
  );
  route.put(
    "/document-categories/:id",
    validateData.documentCategoryValidate,
    DocumentCategoryController.update
  );
  route.delete("/document-categories/:id", DocumentCategoryController.delete);
  //construction document subcategory controller
  route.get("/document-subcategories", DocumentSubCategoryController.getAll);
  route.get("/document-subcategories/:id", DocumentSubCategoryController.get);
  route.get(
    "/document-subcategory_search",
    DocumentSubCategoryController.search
  );
  route.post(
    "/document-subcategories",
    validateData.documentSubCategoryValidate,
    DocumentSubCategoryController.save
  );
  route.put(
    "/document-subcategories/:id",
    validateData.documentSubCategoryValidate,
    DocumentSubCategoryController.update
  );
  route.delete(
    "/document-subcategories/:id",
    DocumentSubCategoryController.delete
  );

  return route;
};
