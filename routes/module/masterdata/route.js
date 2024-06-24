const OwnershipTypeController = require("../../../controllers/stakeholder/OwnershipTypeController");
const StudyLevelController = require("../../../controllers/stakeholder/StudyLevelController");
const BusinessFieldController = require("../../../controllers/stakeholder/BusinessFieldController");
const StudyProgramController = require("../../../controllers/stakeholder/StudyProgramController");
const StudyFieldController = require("../../../controllers/stakeholder/StudyFieldController");
const AgeLevelController = require("../../../controllers/stakeholder/AgeLevelController");
const WorkExperienceController = require("../../../controllers/stakeholder/WorkExperienceController");


const StatusController = require("../../../controllers/project/StatusController.js");


const StakeholderCategoryController = require("../../../controllers/stakeholder/StakeholderCategoryController.js");
const StakeholderSubCategoryController = require("../../../controllers/stakeholder/StakeholderSubCategoryController.js");
const StakeholderTypeController = require("../../../controllers/stakeholder/StakeholderTypeController.js");

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

const validateStakeholderData = require("../../../middleware/validate/module/stakeholder/validate");
const validateResourceData = require("../../../middleware/validate/module/construction resource/validate.js");
const validateProjectData = require("../../../middleware/validate/module/project/validate.js");
const validateDocumentData = require("../../../middleware/validate/module/document/validate.js");

module.exports = function (express) {
  const route = express.Router();

  //ownership route
  route.get("/ownerships/", OwnershipTypeController.getAll);
  route.get("/ownerships/:id", OwnershipTypeController.get);
  route.get("/ownership-searches", OwnershipTypeController.search);
  route.post(
    "/ownerships",
    validateStakeholderData.ownerShipValidate,
    OwnershipTypeController.save
  );
  route.put(
    "/ownerships/:id",
    validateStakeholderData.ownerShipValidate,
    OwnershipTypeController.update
  );
  route.delete("/ownership/:id", OwnershipTypeController.delete);
  //business field route
  route.get("/business-fields/", BusinessFieldController.getAll);
  route.get("/business-fields/:id", BusinessFieldController.get);
  route.get("/business-field-searches", BusinessFieldController.search);
  route.post(
    "/business-fields",
    validateStakeholderData.buisnessFieldValidate,
    BusinessFieldController.save
  );
  route.put(
    "/business-fields/:id",
    validateStakeholderData.buisnessFieldValidate,
    BusinessFieldController.update
  );
  route.delete("/business-fields/:id", BusinessFieldController.delete);
  //stakeholder category route
  route.get("/stakeholder-categories/", StakeholderCategoryController.getAll);
  route.get("/stakeholder-categories/:id", StakeholderCategoryController.get);
  route.get(
    "/stakeholder-categories/stakeholder-type/:id",
    StakeholderCategoryController.getAllCatByTypeId
  );
  // route.get("/stakeholder-category/staketype/:id", StakeholderCategoryController.getCatByTypeId);
  route.get(
    "/stakeholder-category-searches",
    StakeholderCategoryController.search
  );
  route.post(
    "/stakeholder-categories",
    validateStakeholderData.stakeholderCategoryValidate,
    StakeholderCategoryController.save
  );
  route.put(
    "/stakeholder-categories/:id",
    validateStakeholderData.stakeholderCategoryValidate,
    StakeholderCategoryController.update
  );
  route.delete(
    "/stakeholder-categories/:id",
    StakeholderCategoryController.delete
  );
  //stakeholder subcategory route
  route.get(
    "/stakeholder-sub-categories/",
    StakeholderSubCategoryController.getAll
  );
  route.get(
    "/stakeholder-sub-categories/:id",
    StakeholderSubCategoryController.get
  );
  route.get(
    "/stakeholder-sub-category-searches",
    StakeholderSubCategoryController.search
  );
  route.post(
    "/stakeholder-sub-categories",
    validateStakeholderData.stakeholderSubCategoryValidate,
    StakeholderSubCategoryController.save
  );
  route.put(
    "/stakeholder-sub-categories/:id",
    validateStakeholderData.stakeholderSubCategoryValidate,
    StakeholderSubCategoryController.update
  );
  route.delete(
    "/stakeholder-sub-categories/:id",
    StakeholderSubCategoryController.delete
  );
  //stakeholder type route
  route.get("/stakeholder-types", StakeholderTypeController.getAll);
  route.get("/stakeholder-types/:id", StakeholderTypeController.get);
  route.get("/stakeholder-type-searches", StakeholderTypeController.search);
  route.post(
    "/stakeholder-types",
    validateStakeholderData.stakeholderTypeValidate,
    StakeholderTypeController.save
  );
  route.put(
    "/stakeholder-types/:id",
    validateStakeholderData.stakeholderTypeValidate,
    StakeholderTypeController.update
  );
  route.delete("/stakeholder-types/:id", StakeholderTypeController.delete);
  //stakeholder info route
 
  //age level route
  route.get("/age-levels/", AgeLevelController.getAll);
  route.get("/age-levels/:id", AgeLevelController.get);
  route.get("/age-level-searches", AgeLevelController.search);
  route.post(
    "/age-levels",
    validateStakeholderData.ageLevelValidate,
    AgeLevelController.save
  );
  route.put(
    "/age-levels/:id",
    validateStakeholderData.ageLevelValidate,
    AgeLevelController.update
  );
  route.delete("/age-levels/:id", AgeLevelController.delete);
  
  //study level route
  route.get("/study-levels/", StudyLevelController.getAll);
  route.get("/study-levels/:id", StudyLevelController.get);
  route.get("/study-level-searches", StudyLevelController.search);
  route.post(
    "/study-levels",
    validateStakeholderData.studyLevelValidate,
    StudyLevelController.save
  );
  route.put(
    "/study-levels/:id",
    validateStakeholderData.studyLevelValidate,
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
    validateStakeholderData.workExperienceValidate,
    WorkExperienceController.save
  );
  route.put(
    "/work-experiences",
    validateStakeholderData.workExperienceValidate,
    WorkExperienceController.update
  );
  route.delete("/work-experiences/:id", WorkExperienceController.delete);
  
  //study field
  route.get("/study-fields/", StudyFieldController.getAll);
  route.get("/study-fields/:id", StudyFieldController.getStudyFieldById);
  route.get("/study-field-searches", StudyFieldController.search);
  route.post(
    "/study-fields",
    validateStakeholderData.studyFieldValidate,
    StudyFieldController.save
  );
  route.put(
    "/study-fields/:id",
    validateStakeholderData.studyFieldValidate,
    StudyFieldController.update
  );
  route.delete("/study-fields/:id", StudyFieldController.delete);
 
  //study program
  route.get("/study-programs/", StudyProgramController.getAll);
  route.get("/study-programs/:id", StudyProgramController.get);
  route.get("/study-program-searches", StudyProgramController.search);
  route.post(
    "/study-programs",
    validateStakeholderData.studyProgramValidate,
    StudyProgramController.save
  );
  route.put(
    "/study-programs/:id",
    validateStakeholderData.studyProgramValidate,
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
    validateStakeholderData.constructionRelatedServiceValidate,
    ConstructionRelatedServiceController.save
  );
  route.put(
    "/construction-related-services/:id",
    validateStakeholderData.constructionRelatedServiceValidate,
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
  route.post("/statuses", validateProjectData.statusValidate, StatusController.save);
  route.put(
    "/statuses/:id",
    validateProjectData.statusValidate,
    StatusController.update
  );
  route.delete("/statuses/:id", StatusController.delete);

  
  //project route

  route.get("/project-types", ProjectTypeController.getAll);
  route.get("/project-types/:id", ProjectTypeController.get);
  route.get("/project-type-searches", ProjectTypeController.search);
  route.post(
    "/project-types",
    validateProjectData.projectTypeValidate,
    ProjectTypeController.save
  );
  route.put(
    "/project-typse/:id",
    validateProjectData.projectTypeValidate,
    ProjectTypeController.update
  );
  route.delete("/project-types/:id", ProjectTypeController.delete);
  //project category
  route.get("/project-categories", ProjectCategoryController.getAll);
  // route.get(
  //   "/project-categories/projecttype/:id",
  //   ProjectCategoryController.getAllProCatByTypeId
  // );
  route.get("/project-categories/:id", ProjectCategoryController.get);
  route.get("/project-categories-searches", ProjectCategoryController.search);
  
  route.post(
    "/project-categories",
    validateProjectData.projectCategoryValidate,
    ProjectCategoryController.save
  );
  route.put(
    "/project-categories/:id",
    validateProjectData.projectCategoryValidate,
    ProjectCategoryController.update
  );
  route.delete("/project-categories/:id", ProjectCategoryController.delete);
  //project subcategory
  route.get("/project-sub-categories", ProjectSubCategoryController.getAll);
  route.get("/project-sub-categories/:id", ProjectSubCategoryController.get);

  route.get(
    "/project-sub-category-searches",
    ProjectSubCategoryController.search
  );
  route.post(
    "/project-sub-categories",
    validateProjectData.projectSubCategoryValidate,
    ProjectSubCategoryController.save
  );
  route.put(
    "/project-sub-categories/:id",
    validateProjectData.projectSubCategoryValidate,
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
    validateResourceData.constructionResourceTypeValidate,
    ConstructionResourceTypeController.save
  );
  route.put(
    "/construction-resource-types/:id",
    validateResourceData.constructionResourceTypeValidate,
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
    validateResourceData.constructionResourceCategoryValidate,
    ConstructionResourceCategoryController.save
  );
  route.put(
    "/construction-resource-categories/:id",
    validateResourceData.constructionResourceCategoryValidate,
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
    validateResourceData.constructionResourceSubCategoryValidate,
    ConstructionResourceSubCategoryController.save
  );
  route.put(
    "/construction-resource-subcategories/:id",
    validateResourceData.constructionResourceSubCategoryValidate,
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
    validateDocumentData.documentTypeValidate,
    DocumentTypeController.save
  );
  route.put(
    "/document-types/:id",
    validateDocumentData.documentTypeValidate,
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
    validateDocumentData.documentCategoryValidate,
    DocumentCategoryController.save
  );
  route.put(
    "/document-categories/:id",
    validateDocumentData.documentCategoryValidate,
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
    validateDocumentData.documentSubCategoryValidate,
    DocumentSubCategoryController.save
  );
  route.put(
    "/document-subcategories/:id",
    validateDocumentData.documentSubCategoryValidate,
    DocumentSubCategoryController.update
  );
  route.delete(
    "/document-subcategories/:id",
    DocumentSubCategoryController.delete
  );

  return route;
};
