const OwnershipTypeController = require("../../../controllers/stakeholder/OwnershiptypeController.js");
const StudyLevelController = require("../../../controllers/stakeholder/StudyLevelController");
const BusinessFieldController = require("../../../controllers/stakeholder/BusinessfieldController.js");
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
//road project
const FunctionalClassificationController = require("../../../controllers/projects/FunctionalClassificationController.js");
const DesignClassificationController = require("../../../controllers/projects/DesignClassificationController.js");
const DesignStandardController = require("../../../controllers/projects/DesignStandardController.js");
const DesignTrafficFlowController = require("../../../controllers/projects/DesignTrafficFlowController.js");
const SurfaceTypeController = require("../../../controllers/projects/SurfaceTypeController.js");
const CrossSectionTypeController = require("../../../controllers/projects/CrossSectionTypeController.js");
const IntersectionTypeController = require("../../../controllers/projects/IntersectionTypeController.js");
const DrivewayAccessPointController = require("../../../controllers/projects/DrivewayAccessPointController.js");
const PedestrianFacilityController = require("../../../controllers/projects/PedestrianFacilityController.js");
const RoadLengthTypeController = require("../../../controllers/projects/RoadLengthTypeController.js");
const AreaTopographyController = require("../../../controllers/projects/AreaTopographyController.js");
const PierTypeController = require("../../../controllers/projects/PierTypeController.js");
const AbutmentTypeController = require("../../../controllers/projects/AbutmentTypeController.js");
const EndwallTypeInletController = require("../../../controllers/projects/EndwallTypeInletController.js");
const EndwallTypeOutletController = require("../../../controllers/projects/EndwallTypeOutletController.js");
const PavedWaterWayTypeController = require("../../../controllers/projects/PavedWaterWayTypeController.js");
const SoilTypeController = require("../../../controllers/projects/SoilTypeController.js");
const GuardRailTypeController = require("../../../controllers/projects/GuardRailTypeController.js");
const BridgeStructureTypeController = require("../../../controllers/projects/BridgeStructureTypeController.js");
const SpanSupportTypeController = require("../../../controllers/projects/SpanSupportTypeController.js");
const DeckSlabTypeController = require("../../../controllers/projects/DeckSlabTypeController.js");
const ExpansionJointTypeController = require("../../../controllers/projects/ExpansionJointTypeController.js");

const BridgePartDefectController = require("../../../controllers/projects/BridgePartDefectController.js");
const DamageTypeController = require("../../../controllers/projects/DamageTypeController.js");
const DamageConditionController = require("../../../controllers/projects/DamageConditionController.js");
const HydrologyDefectController = require("../../../controllers/projects/HydrologyDefectController.js");
const RoadSafetyFeatureController = require("../../../controllers/projects/RoadSafetyFeatureController.js");
const CountTypeController = require("../../../controllers/projects/CountTypeController.js");
const ProjectPhaseController = require("../../../controllers/projects/ProjectPhaseController.js");
const InspectionTypeController = require("../../../controllers/projects/InspectionTypeController.js");

const CurrentConditionController = require("../../../controllers/projects/CurrentConditionController.js");
const GroundWaterImpactController = require("../../../controllers/projects/GroundWaterImpactController.js");
const SlopeStabilityController = require("../../../controllers/projects/SlopeStabilityController.js");
const MaintenanceFrequencyController = require("../../../controllers/projects/MaintenanceFrequencyController.js");

const MaintenanceTypeController = require("../../../controllers/projects/MaintenanceTypeController.js");
const DrainageTypeController = require("../../../controllers/projects/DrainageTypeController.js");
const DrainageConditionController = require("../../../controllers/projects/DrainageConditionController.js");
const AssessmentConditionController = require("../../../controllers/projects/AssessmentConditionController.js");

const SeverityLevelController = require("../../../controllers/projects/SeverityLevelController.js");
const SuggestedRepairController = require("../../../controllers/projects/SuggestedRepairController.js");
const RecommendedActionUrgencyController = require("../../../controllers/projects/RecommendedActionUrgencyController.js");
const HazardTypeController = require("../../../controllers/projects/HazardTypeController.js");

const PotentialImpactController = require("../../../controllers/projects/PotentialImpactController.js");
const RiskLevelController = require("../../../controllers/projects/RiskLevelController.js");
const IncidentTypeController = require("../../../controllers/projects/IncidentTypeController.js");
const IncidentTimeController = require("../../../controllers/projects/IncidentTimeController.js");

const ProjectMasterDataController = require("../../../controllers/projects/ProjectMasterDataController.js");

const ConstructionResourceTypeController = require("../../../controllers/construction resource/ConstructionResourceTypeController");
const ConstructionResourceCategoryController = require("../../../controllers/construction resource/ConstructionResourceCategoryController");
const ConstructionResourceSubCategoryController = require("../../../controllers/construction resource/ConstructionResourceSubCategoryController");

const DocumentTypeController = require("../../../controllers/document/documentTypeController.js");
const DocumentCategoryController = require("../../../controllers/document/documentCategoryController.js");
const DocumentSubCategoryController = require("../../../controllers/document/documentSubCategoryController.js");

const ConstructionRelatedServiceController = require("../../../controllers/stakeholder/ConstructionRelatedServiceController");

const ModuleTypeController = require("../../../controllers/polymorphic/ModuleTypeController.js");
const InfrastructureCategoryController = require("../../../controllers/polymorphic/InfrastructureCategoryController.js");
const InfrastructureSubCategoryController = require("../../../controllers/polymorphic/InfrastructureSubCategoryController.js");

const ResourceMasterDataController = require("../../../controllers/resources/ResourceMasterDataController.js");

const AddressMasterDataController = require("../../../controllers/polymorphic/AddressMasterDataController.js");
const StakeholderMasterDataController = require("../../../controllers/projects/StakeholderMasterDataController.js");


const validateStakeholderData = require("../../../middleware/validate/module/stakeholder/validate");
const validateResourceData = require("../../../middleware/validate/module/construction resource/validate.js");
const validateProjectData = require("../../../middleware/validate/module/project/validate.js");
const validateDocumentData = require("../../../middleware/validate/module/document/validate.js");

const validateResource = require("../../../middleware/validate/module/resource/validate.js");

const validateData = require("../../../middleware/validate/module/polymorphic/validate.js");

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
  route.delete("/ownerships/:id", OwnershipTypeController.delete);
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
  route.get("/project-progress-statuses", StatusController.getAll);
  route.get("/project-progress-statuses/:id", StatusController.get);
  route.get("/project-progress-status-searches", StatusController.search);
  route.post("/project-progress-statuses", validateProjectData.statusValidate, StatusController.save);
  route.put(
    "/project-progress-statuses/:id",
    validateProjectData.statusValidate,
    StatusController.update
  );
  route.delete("/project-progress-statuses/:id", StatusController.delete);

  
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
    "/project-types/:id",
    validateProjectData.projectTypeValidate,
    ProjectTypeController.update
  );
  route.delete("/project-types/:id", ProjectTypeController.delete);
  
  //project category
  route.get("/project-categories", ProjectCategoryController.getAll);
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
    "/resource-types",
    ConstructionResourceTypeController.getAll
  );
  route.get(
    "/resource-types/:id",
    ConstructionResourceTypeController.get
  );
  route.get(
    "/resource-type-search",
    ConstructionResourceTypeController.search
  );
  route.post(
    "/resource-types",
    validateResourceData.constructionResourceTypeValidate,
    ConstructionResourceTypeController.save
  );
  route.put(
    "/resource-types/:id",
    validateResourceData.constructionResourceTypeValidate,
    ConstructionResourceTypeController.update
  );
  route.delete(
    "/resource-types/:id",
    ConstructionResourceTypeController.delete
  );
  

  //construction resource category controller
  route.get(
    "/resource-categories",
    ConstructionResourceCategoryController.getAll
  );
  route.get(
    "/resource-categories/:id",
    ConstructionResourceCategoryController.get
  );
  route.get(
    "/type/resource-categories/:id",
    ConstructionResourceCategoryController.getCRCByResourceTypeId
  );
  route.get(
    "/resource-category_search",
    ConstructionResourceCategoryController.search
  );
  route.post(
    "/resource-categories",
    validateResourceData.constructionResourceCategoryValidate,
    ConstructionResourceCategoryController.save
  );
  route.put(
    "/resource-categories/:id",
    validateResourceData.constructionResourceCategoryValidate,
    ConstructionResourceCategoryController.update
  );
  route.delete(
    "/resource-categories/:id",
    ConstructionResourceCategoryController.delete
  );
  //construction resource subcategory controller
  route.get(
    "/resource-sub-categories",
    ConstructionResourceSubCategoryController.getAll
  );
  route.get(
    "/resource-sub-categories/:id",
    ConstructionResourceSubCategoryController.get
  );
  route.get(
    "/resource-subcategory-searches",
    ConstructionResourceSubCategoryController.search
  );
  route.post(
    "/resource-sub-categories",
    validateResourceData.constructionResourceSubCategoryValidate,
    ConstructionResourceSubCategoryController.save
  );
  route.put(
    "/resource-sub-categories/:id",
    validateResourceData.constructionResourceSubCategoryValidate,
    ConstructionResourceSubCategoryController.update
  );
  route.delete(
    "/resource-sub-categories/:id",
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
  route.get("/document-sub-categories", DocumentSubCategoryController.getAll);
  route.get("/document-sub-categories/:id", DocumentSubCategoryController.get);
  route.get(
    "/document-subcategory_search",
    DocumentSubCategoryController.search
  );
  route.post(
    "/document-sub-categories",
    validateDocumentData.documentSubCategoryValidate,
    DocumentSubCategoryController.save
  );
  route.put(
    "/document-sub-categories/:id",
    validateDocumentData.documentSubCategoryValidate,
    DocumentSubCategoryController.update
  );
  route.delete(
    "/document-sub-categories/:id",
    DocumentSubCategoryController.delete
  );

  // new

  // FunctionalClassification routes with validation
  route.get("/functional-classifications", FunctionalClassificationController.getAll);
  route.get("/functional-classifications/:id", FunctionalClassificationController.get);
  route.post("/functional-classifications", validateProjectData.functionalClassificationValidate, FunctionalClassificationController.save);
  route.put("/functional-classifications/:id", validateProjectData.functionalClassificationValidate, FunctionalClassificationController.update);
  route.delete("/functional-classifications/:id", FunctionalClassificationController.delete);

  // DesignClassification routes with validation
  route.get("/design-classifications", DesignClassificationController.getAll);
  route.get("/design-classifications/:id", DesignClassificationController.get);
  route.post("/design-classifications", validateProjectData.designClassificationValidate, DesignClassificationController.save);
  route.put("/design-classifications/:id", validateProjectData.designClassificationValidate, DesignClassificationController.update);
  route.delete("/design-classifications/:id", DesignClassificationController.delete);

  // DesignStandard routes with validation
  route.get("/design-standards", DesignStandardController.getAll);
  route.get("/design-standards/:id", DesignStandardController.get);
  route.post("/design-standards", validateProjectData.designStandardValidate, DesignStandardController.save);
  route.put("/design-standards/:id", validateProjectData.designStandardValidate, DesignStandardController.update);
  route.delete("/design-standards/:id", DesignStandardController.delete);

  // DesignTrafficFlow routes with validation
  route.get("/design-traffic-flows", DesignTrafficFlowController.getAll);
  route.get("/design-traffic-flows/:id", DesignTrafficFlowController.get);
  route.post("/design-traffic-flows", validateProjectData.designTrafficFlowValidate, DesignTrafficFlowController.save);
  route.put("/design-traffic-flows/:id", validateProjectData.designTrafficFlowValidate, DesignTrafficFlowController.update);
  route.delete("/design-traffic-flows/:id", DesignTrafficFlowController.delete);
  
  // SurfaceType routes with validation
  route.get("/surface-types", SurfaceTypeController.getAll);
  route.get("/surface-types/:id", SurfaceTypeController.get);
  route.post("/surface-types", validateProjectData.surfaceTypeValidate, SurfaceTypeController.save);
  route.put("/surface-types/:id", validateProjectData.surfaceTypeValidate, SurfaceTypeController.update);
  route.delete("/surface-types/:id", SurfaceTypeController.delete);

  // CrossSectionType routes with validation
  route.get("/cross-section-types", CrossSectionTypeController.getAll);
  route.get("/cross-section-types/:id", CrossSectionTypeController.get);
  route.post("/cross-section-types", validateProjectData.crossSectionTypeValidate, CrossSectionTypeController.save);
  route.put("/cross-section-types/:id", validateProjectData.crossSectionTypeValidate, CrossSectionTypeController.update);
  route.delete("/cross-section-types/:id", CrossSectionTypeController.delete);

  // IntersectionType routes with validation
  route.get("/intersection-types", IntersectionTypeController.getAll);
  route.get("/intersection-types/:id", IntersectionTypeController.get);
  route.post("/intersection-types", validateProjectData.intersectionTypeValidate, IntersectionTypeController.save);
  route.put("/intersection-types/:id", validateProjectData.intersectionTypeValidate, IntersectionTypeController.update);
  route.delete("/intersection-types/:id", IntersectionTypeController.delete);

  // DrivewayAccessPoint routes with validation
  route.get("/driveway-access-points", DrivewayAccessPointController.getAll);
  route.get("/driveway-access-points/:id", DrivewayAccessPointController.get);
  route.post("/driveway-access-points", validateProjectData.drivewayAccessPointValidate, DrivewayAccessPointController.save);
  route.put("/driveway-access-points/:id", validateProjectData.drivewayAccessPointValidate, DrivewayAccessPointController.update);
  route.delete("/driveway-access-points/:id", DrivewayAccessPointController.delete);
  
  // PedestrianFacility routes with validation
  route.get("/pedestrian-facilities", PedestrianFacilityController.getAll);
  route.get("/pedestrian-facilities/:id", PedestrianFacilityController.get);
  route.post("/pedestrian-facilities", validateProjectData.pedestrianFacilityValidate, PedestrianFacilityController.save);
  route.put("/pedestrian-facilities/:id", validateProjectData.pedestrianFacilityValidate, PedestrianFacilityController.update);
  route.delete("/pedestrian-facilities/:id", PedestrianFacilityController.delete);
  
  // RoadLengthType routes with validation
  route.get("/road-length-types", RoadLengthTypeController.getAll);
  route.get("/road-length-types/:id", RoadLengthTypeController.get);
  route.post("/road-length-types", validateProjectData.roadLengthTypeValidate, RoadLengthTypeController.save);
  route.put("/road-length-types/:id", validateProjectData.roadLengthTypeValidate, RoadLengthTypeController.update);
  route.delete("/road-length-types/:id", RoadLengthTypeController.delete);

  // AreaTopography routes with validation
  route.get("/area-topographies", AreaTopographyController.getAll);
  route.get("/area-topographies/:id", AreaTopographyController.get);
  route.post("/area-topographies", validateProjectData.areaTopographyValidate, AreaTopographyController.save);
  route.put("/area-topographies/:id", validateProjectData.areaTopographyValidate, AreaTopographyController.update);
  route.delete("/area-topographies/:id", AreaTopographyController.delete);
  
  // PierType routes with validation
  route.get("/pier-types", PierTypeController.getAll);
  route.get("/pier-types/:id", PierTypeController.get);
  route.post("/pier-types", validateProjectData.pierTypeValidate, PierTypeController.save);
  route.put("/pier-types/:id", validateProjectData.pierTypeValidate, PierTypeController.update);
  route.delete("/pier-types/:id", PierTypeController.delete);

  // AbutmentType routes with validation
  route.get("/abutment-types", AbutmentTypeController.getAll);
  route.get("/abutment-types/:id", AbutmentTypeController.get);
  route.post("/abutment-types", validateProjectData.abutmentTypeValidate, AbutmentTypeController.save);
  route.put("/abutment-types/:id", validateProjectData.abutmentTypeValidate, AbutmentTypeController.update);
  route.delete("/abutment-types/:id", AbutmentTypeController.delete);

  // EndwallTypeInlet routes with validation
  route.get("/endwall-type-inlets", EndwallTypeInletController.getAll);
  route.get("/endwall-type-inlets/:id", EndwallTypeInletController.get);
  route.post("/endwall-type-inlets", validateProjectData.endwallTypeInletValidate, EndwallTypeInletController.save);
  route.put("/endwall-type-inlets/:id", validateProjectData.endwallTypeInletValidate, EndwallTypeInletController.update);
  route.delete("/endwall-type-inlets/:id", EndwallTypeInletController.delete);

  // EndwallTypeOutlet routes with validation
  route.get("/endwall-type-outlets", EndwallTypeOutletController.getAll);
  route.get("/endwall-type-outlets/:id", EndwallTypeOutletController.get);
  route.post("/endwall-type-outlets", validateProjectData.endwallTypeOutletValidate, EndwallTypeOutletController.save);
  route.put("/endwall-type-outlets/:id", validateProjectData.endwallTypeOutletValidate, EndwallTypeOutletController.update);
  route.delete("/endwall-type-outlets/:id", EndwallTypeOutletController.delete);

  // PavedWaterWayType routes with validation
  route.get("/paved-water-way-types", PavedWaterWayTypeController.getAll);
  route.get("/paved-water-way-types/:id", PavedWaterWayTypeController.get);
  route.post("/paved-water-way-types", validateProjectData.pavedWaterWayTypeValidate, PavedWaterWayTypeController.save);
  route.put("/paved-water-way-types/:id", validateProjectData.pavedWaterWayTypeValidate, PavedWaterWayTypeController.update);
  route.delete("/paved-water-way-types/:id", PavedWaterWayTypeController.delete);

  // SoilType routes with validation
  route.get("/soil-types", SoilTypeController.getAll);
  route.get("/soil-types/:id", SoilTypeController.get);
  route.post("/soil-types", validateProjectData.soilTypeValidate, SoilTypeController.save);
  route.put("/soil-types/:id", validateProjectData.soilTypeValidate, SoilTypeController.update);
  route.delete("/soil-types/:id", SoilTypeController.delete);

  // GuardRailtype routes with validation
  route.get("/guard-rail-types", GuardRailTypeController.getAll);
  route.get("/guard-rail-types/:id", GuardRailTypeController.get);
  route.post("/guard-rail-types", validateProjectData.guardRailTypeValidate, GuardRailTypeController.save);
  route.put("/guard-rail-types/:id", validateProjectData.guardRailTypeValidate, GuardRailTypeController.update);
  route.delete("/guard-rail-types/:id", GuardRailTypeController.delete);

  // BridgeStructureType routes with validation
  route.get("/bridge-structure-types", BridgeStructureTypeController.getAll);
  route.get("/bridge-structure-types/:id", BridgeStructureTypeController.get);
  route.post("/bridge-structure-types", validateProjectData.bridgeStructureTypeValidate, BridgeStructureTypeController.save);
  route.put("/bridge-structure-types/:id", validateProjectData.bridgeStructureTypeValidate, BridgeStructureTypeController.update);
  route.delete("/bridge-structure-types/:id", BridgeStructureTypeController.delete);

  // SpanSupportType routes with validation
  route.get("/span-support-types", SpanSupportTypeController.getAll);
  route.get("/span-support-types/:id", SpanSupportTypeController.get);
  route.post("/span-support-types", validateProjectData.spanSupportTypeValidate, SpanSupportTypeController.save);
  route.put("/span-support-types/:id", validateProjectData.spanSupportTypeValidate, SpanSupportTypeController.update);
  route.delete("/span-support-types/:id", SpanSupportTypeController.delete);

  // DeckSlabType routes with validation
  route.get("/deck-slab-types", DeckSlabTypeController.getAll);
  route.get("/deck-slab-types/:id", DeckSlabTypeController.get);
  route.post("/deck-slab-types", validateProjectData.deckSlabTypeValidate, DeckSlabTypeController.save);
  route.put("/deck-slab-types/:id", validateProjectData.deckSlabTypeValidate, DeckSlabTypeController.update);
  route.delete("/deck-slab-types/:id", DeckSlabTypeController.delete);

  // ExpansionJointType routes with validation
  route.get("/expansion-joint-types", ExpansionJointTypeController.getAll);
  route.get("/expansion-joint-types/:id", ExpansionJointTypeController.get);
  route.post("/expansion-joint-types", validateProjectData.expansionJointTypeValidate, ExpansionJointTypeController.save);
  route.put("/expansion-joint-types/:id", validateProjectData.expansionJointTypeValidate, ExpansionJointTypeController.update);
  route.delete("/expansion-joint-types/:id", ExpansionJointTypeController.delete);

  // BridgePartDefect routes with validation
  route.get("/bridge-part-defects", BridgePartDefectController.getAll);
  route.get("/bridge-part-defects/:id", BridgePartDefectController.get);
  route.post("/bridge-part-defects", validateProjectData.bridgePartDefectValidate, BridgePartDefectController.save);
  route.put("/bridge-part-defects/:id", validateProjectData.bridgePartDefectValidate, BridgePartDefectController.update);
  route.delete("/bridge-part-defects/:id", BridgePartDefectController.delete);

  // DamageType routes with validation
  route.get("/damage-types", DamageTypeController.getAll);
  route.get("/damage-types/:id", DamageTypeController.get);
  route.post("/damage-types", validateProjectData.damageTypeValidate, DamageTypeController.save);
  route.put("/damage-types/:id", validateProjectData.damageTypeValidate, DamageTypeController.update);
  route.delete("/damage-types/:id", DamageTypeController.delete);

  // DamageCondition routes with validation
  route.get("/damage-conditions", DamageConditionController.getAll);
  route.get("/damage-conditions/:id", DamageConditionController.get);
  route.post("/damage-conditions", validateProjectData.damageConditionValidate, DamageConditionController.save);
  route.put("/damage-conditions/:id", validateProjectData.damageConditionValidate, DamageConditionController.update);
  route.delete("/damage-conditions/:id", DamageConditionController.delete);

  // HydrologyDefect routes with validation
  route.get("/hydrology-defects", HydrologyDefectController.getAll);
  route.get("/hydrology-defects/:id", HydrologyDefectController.get);
  route.post("/hydrology-defects", validateProjectData.hydrologyDefectValidate, HydrologyDefectController.save);
  route.put("/hydrology-defects/:id", validateProjectData.hydrologyDefectValidate, HydrologyDefectController.update);
  route.delete("/hydrology-defects/:id", HydrologyDefectController.delete);

  // RoadSafetyFeature routes with validation
  route.get("/road-safety-features", RoadSafetyFeatureController.getAll);
  route.get("/road-safety-features/:id", RoadSafetyFeatureController.get);
  route.post("/road-safety-features", validateProjectData.roadSafetyFeatureValidate, RoadSafetyFeatureController.save);
  route.put("/road-safety-features/:id", validateProjectData.roadSafetyFeatureValidate, RoadSafetyFeatureController.update);
  route.delete("/road-safety-features/:id", RoadSafetyFeatureController.delete);

  // CountType routes with validation
  route.get("/count-types", CountTypeController.getAll);
  route.get("/count-types/:id", CountTypeController.get);
  route.post("/count-types", validateProjectData.countTypeValidate, CountTypeController.save);
  route.put("/count-types/:id", validateProjectData.countTypeValidate, CountTypeController.update);
  route.delete("/count-types/:id", CountTypeController.delete);

  // ProjectPhase routes with validation
  route.get("/project-phases", ProjectPhaseController.getAll);
  route.get("/project-phases/:id", ProjectPhaseController.get);
  route.post("/project-phases", validateProjectData.projectPhaseValidate, ProjectPhaseController.save);
  route.put("/project-phases/:id", validateProjectData.projectPhaseValidate, ProjectPhaseController.update);
  route.delete("/project-phases/:id", ProjectPhaseController.delete);

  // InspectionType routes with validation
  route.get("/inspection-types", InspectionTypeController.getAll);
  route.get("/inspection-types/:id", InspectionTypeController.get);
  route.post("/inspection-types", validateProjectData.inspectionTypeValidate, InspectionTypeController.save);
  route.put("/inspection-types/:id", validateProjectData.inspectionTypeValidate, InspectionTypeController.update);
  route.delete("/inspection-types/:id", InspectionTypeController.delete);

 
  // CurrentCondition routes with validation
  route.get("/current-conditions", CurrentConditionController.getAll);
  route.get("/current-conditions/:id", CurrentConditionController.get);
  route.post("/current-conditions", validateProjectData.currentConditionValidate, CurrentConditionController.save);
  route.put("/current-conditions/:id", validateProjectData.currentConditionValidate, CurrentConditionController.update);
  route.delete("/current-conditions/:id", CurrentConditionController.delete);

  // GroundWaterImpact routes with validation
  route.get("/ground-water-impacts", GroundWaterImpactController.getAll);
  route.get("/ground-water-impacts/:id", GroundWaterImpactController.get);
  route.post("/ground-water-impacts", validateProjectData.groundWaterImpactValidate, GroundWaterImpactController.save);
  route.put("/ground-water-impacts/:id", validateProjectData.groundWaterImpactValidate, GroundWaterImpactController.update);
  route.delete("/ground-water-impacts/:id", GroundWaterImpactController.delete);

  // SlopeStability routes with validation
  route.get("/slope-stabilities", SlopeStabilityController.getAll);
  route.get("/slope-stabilities/:id", SlopeStabilityController.get);
  route.post("/slope-stabilities", validateProjectData.slopeStabilityValidate, SlopeStabilityController.save);
  route.put("/slope-stabilities/:id", validateProjectData.slopeStabilityValidate, SlopeStabilityController.update);
  route.delete("/slope-stabilities/:id", SlopeStabilityController.delete);

  // MaintenanceFrequency routes with validation
  route.get("/maintenance-frequencies", MaintenanceFrequencyController.getAll);
  route.get("/maintenance-frequencies/:id", MaintenanceFrequencyController.get);
  route.post("/maintenance-frequencies", validateProjectData.maintenanceFrequencyValidate, MaintenanceFrequencyController.save);
  route.put("/maintenance-frequencies/:id", validateProjectData.maintenanceFrequencyValidate, MaintenanceFrequencyController.update);
  route.delete("/maintenance-frequencies/:id", MaintenanceFrequencyController.delete);

  // MaintenanceType routes with validation
  route.get("/maintenance-types", MaintenanceTypeController.getAll);
  route.get("/maintenance-types/:id", MaintenanceTypeController.get);
  route.post("/maintenance-types", validateProjectData.maintenanceTypeValidate, MaintenanceTypeController.save);
  route.put("/maintenance-types/:id", validateProjectData.maintenanceTypeValidate, MaintenanceTypeController.update);
  route.delete("/maintenance-types/:id", MaintenanceTypeController.delete);

  // DrainageType routes with validation
  route.get("/drainage-types", DrainageTypeController.getAll);
  route.get("/drainage-types/:id", DrainageTypeController.get);
  route.post("/drainage-types", validateProjectData.drainageTypeValidate, DrainageTypeController.save);
  route.put("/drainage-types/:id", validateProjectData.drainageTypeValidate, DrainageTypeController.update);
  route.delete("/drainage-types/:id", DrainageTypeController.delete);

  // DrainageCondition routes with validation
  route.get("/drainage-conditions", DrainageConditionController.getAll);
  route.get("/drainage-conditions/:id", DrainageConditionController.get);
  route.post("/drainage-conditions", validateProjectData.drainageConditionValidate, DrainageConditionController.save);
  route.put("/drainage-conditions/:id", validateProjectData.drainageConditionValidate, DrainageConditionController.update);
  route.delete("/drainage-conditions/:id", DrainageConditionController.delete);

  // AssessmentCondition routes with validation
  route.get("/assessment-conditions", AssessmentConditionController.getAll);
  route.get("/assessment-conditions/:id", AssessmentConditionController.get);
  route.post("/assessment-conditions", validateProjectData.assessmentConditionValidate, AssessmentConditionController.save);
  route.put("/assessment-conditions/:id", validateProjectData.assessmentConditionValidate, AssessmentConditionController.update);
  route.delete("/assessment-conditions/:id", AssessmentConditionController.delete);

  // SeverityLevel routes with validation
route.get("/severity-levels", SeverityLevelController.getAll);
route.get("/severity-levels/:id", SeverityLevelController.get);
route.post("/severity-levels", validateProjectData.severityLevelValidate, SeverityLevelController.save);
route.put("/severity-levels/:id", validateProjectData.severityLevelValidate, SeverityLevelController.update);
route.delete("/severity-levels/:id", SeverityLevelController.delete);

// SuggestedRepair routes with validation
route.get("/suggested-repairs", SuggestedRepairController.getAll);
route.get("/suggested-repairs/:id", SuggestedRepairController.get);
route.post("/suggested-repairs", validateProjectData.suggestedRepairValidate, SuggestedRepairController.save);
route.put("/suggested-repairs/:id", validateProjectData.suggestedRepairValidate, SuggestedRepairController.update);
route.delete("/suggested-repairs/:id", SuggestedRepairController.delete);

// RecommendedActionUrgency routes with validation
route.get("/recommended-action-urgencies", RecommendedActionUrgencyController.getAll);
route.get("/recommended-action-urgencies/:id", RecommendedActionUrgencyController.get);
route.post("/recommended-action-urgencies", validateProjectData.recommendedActionUrgencyValidate, RecommendedActionUrgencyController.save);
route.put("/recommended-action-urgencies/:id", validateProjectData.recommendedActionUrgencyValidate, RecommendedActionUrgencyController.update);
route.delete("/recommended-action-urgencies/:id", RecommendedActionUrgencyController.delete);

// HazardType routes with validation
route.get("/hazard-types", HazardTypeController.getAll);
route.get("/hazard-types/:id", HazardTypeController.get);
route.post("/hazard-types", validateProjectData.hazardTypeValidate, HazardTypeController.save);
route.put("/hazard-types/:id", validateProjectData.hazardTypeValidate, HazardTypeController.update);
route.delete("/hazard-types/:id", HazardTypeController.delete);

// PotentialImpact routes with validation
route.get("/potential-impacts", PotentialImpactController.getAll);
route.get("/potential-impacts/:id", PotentialImpactController.get);
route.post("/potential-impacts", validateProjectData.potentialImpactValidate, PotentialImpactController.save);
route.put("/potential-impacts/:id", validateProjectData.potentialImpactValidate, PotentialImpactController.update);
route.delete("/potential-impacts/:id", PotentialImpactController.delete);

// RiskLevel routes with validation
route.get("/risk-levels", RiskLevelController.getAll);
route.get("/risk-levels/:id", RiskLevelController.get);
route.post("/risk-levels", validateProjectData.riskLevelValidate, RiskLevelController.save);
route.put("/risk-levels/:id", validateProjectData.riskLevelValidate, RiskLevelController.update);
route.delete("/risk-levels/:id", RiskLevelController.delete);

// IncidentType routes with validation
route.get("/incident-types", IncidentTypeController.getAll);
route.get("/incident-types/:id", IncidentTypeController.get);
route.post("/incident-types", validateProjectData.incidentTypeValidate, IncidentTypeController.save);
route.put("/incident-types/:id", validateProjectData.incidentTypeValidate, IncidentTypeController.update);
route.delete("/incident-types/:id", IncidentTypeController.delete);

// IncidentTime routes with validation
route.get("/incident-times", IncidentTimeController.getAll);
route.get("/incident-times/:id", IncidentTimeController.get);
route.post("/incident-times", validateProjectData.incidentTimeValidate, IncidentTimeController.save);
route.put("/incident-times/:id", validateProjectData.incidentTimeValidate, IncidentTimeController.update);
route.delete("/incident-times/:id", IncidentTimeController.delete);


// ProjectMasterData routes with validation
route.get("/project-general-master-data", ProjectMasterDataController.getAll);
route.get("/project-general-master-data/:id", ProjectMasterDataController.get);
route.post("/project-general-master-data", validateProjectData.projectMasterDataValidate, ProjectMasterDataController.save);
route.put("/project-general-master-data/:id", validateProjectData.projectMasterDataValidate, ProjectMasterDataController.update);
route.delete("/project-general-master-data/:id", ProjectMasterDataController.delete);

route.get("/project-general", ProjectMasterDataController.getMasterData);


// ModuleType routes with validation
route.get("/infrastructure-types", ModuleTypeController.getAll);
route.get("/infrastructure-types/:id", ModuleTypeController.get);
route.post("/infrastructure-types", validateData.moduleTypeValidate, ModuleTypeController.save);
route.put("/infrastructure-types/:id", validateData.moduleTypeValidate, ModuleTypeController.update);
route.delete("/infrastructure-types/:id", ModuleTypeController.delete);

// InfrastructureCategory routes with validation
route.get("/infrastructure-categories", InfrastructureCategoryController.getAll);
route.get("/infrastructure-categories/:id", InfrastructureCategoryController.get);
route.post("/infrastructure-categories", validateData.infrastructureCategoryValidate, InfrastructureCategoryController.save);
route.put("/infrastructure-categories/:id", validateData.infrastructureCategoryValidate, InfrastructureCategoryController.update);
route.delete("/infrastructure-categories/:id", InfrastructureCategoryController.delete);

// InfrastructureSubCategory routes with validation
route.get("/infrastructure-sub-categories", InfrastructureSubCategoryController.getAll);
route.get("/infrastructure-sub-categories/:id", InfrastructureSubCategoryController.get);
route.post("/infrastructure-sub-categories", validateData.infrastructureSubCategoryValidate, InfrastructureSubCategoryController.save);
route.put("/infrastructure-sub-categories/:id", validateData.infrastructureSubCategoryValidate, InfrastructureSubCategoryController.update);
route.delete("/infrastructure-sub-categories/:id", InfrastructureSubCategoryController.delete);


// ResourceMasterData routes with validation
route.get("/resource-general-master-data", ResourceMasterDataController.getAll);
route.get("/resource-general-master-data/:id", ResourceMasterDataController.get);
route.post("/resource-general-master-data", validateResource.resourceMasterDataValidate, ResourceMasterDataController.save);
route.put("/resource-general-master-data/:id", validateResource.resourceMasterDataValidate, ResourceMasterDataController.update);
route.delete("/resource-general-master-data/:id", ResourceMasterDataController.delete);


// AddressMasterData routes with validation
route.get("/address-master-data", AddressMasterDataController.getAll);
route.get("/address-master-data/:id", AddressMasterDataController.get);
route.post("/address-master-data", validateData.addressMasterDataValidate, AddressMasterDataController.save);
route.put("/address-master-data/:id", validateData.addressMasterDataValidate, AddressMasterDataController.update);
route.delete("/address-master-data/:id", AddressMasterDataController.delete);
route.get("/address-master-data/all-parents/:id", AddressMasterDataController.getToRoot);
  


route.get("/address-structure", AddressMasterDataController.getAddresses);
route.get("/address-structure/:id", AddressMasterDataController.getAddresses);

route.get("/stakeholder-general-master-data", StakeholderMasterDataController.getAll);
route.get("/stakeholder-general-master-data/:id", StakeholderMasterDataController.get);
route.post("/stakeholder-general-master-data", validateStakeholderData.stakeholderMasterDataValidate, StakeholderMasterDataController.save);
route.put("/stakeholder-general-master-data/:id", validateStakeholderData.stakeholderMasterDataValidate, StakeholderMasterDataController.update);
route.delete("/stakeholder-general-master-data/:id", StakeholderMasterDataController.delete);

  return route;
};
