const ProjectStatusController = require("../../../controllers/project/ProjectStatusController.js");
const ProjectController = require("../../../controllers/project/ProjectController.js");
const ProjectStakeholderController = require("../../../controllers/project/ProjectStakeholderController.js");
const ProjectPlanController = require("../../../controllers/project/ProjectPlanController.js");
const ProjectReportController = require("../../../controllers/project/ProjectReportController.js");
const ProjectDocumentController = require("../../../controllers/project/ProjectDocumentController.js");
const ConstructionResourceController = require("../../../controllers/project/ConstructionResourceController.js");
const BuildingEnvelopMaterialController = require("../../../controllers/project/BuildingEnvelopMaterialController.js");
const BuildingDimensionDetailsController = require("../../../controllers/project/BuildingDimensionDetailsController.js");
const TelecomInfrastructureController = require("../../../controllers/project/TelecomInfrastructureController.js");
const GeneratingCapacityController = require("../../../controllers/project/GeneratingCapacityController.js");
const TurbineDetailController = require("../../../controllers/project/TurbineDetailController.js");
const HydroElectricDamController = require("../../../controllers/project/HydroElectricDamController.js");
const SpillWaysDetailController = require("../../../controllers/project/SpillWaysDetailController.js");
const ReservoirDetailsController = require("../../../controllers/project/ReservoirDetailsController.js");
const IrrigationCapacityController = require("../../../controllers/project/IrrigationCapacityController.js");
const ProjectFinanceController = require("../../../controllers/project/ProjectFinanceController.js");
const ProjectVariationController = require("../../../controllers/project/ProjectVariationController.js");
const ProjectExtensionTimeController = require("../../../controllers/project/ProjectExtensionTimeController.js");
const ProjectTimeController = require("../../../controllers/project/ProjectTimeController.js");
const ProjectBondController = require("../../../controllers/project/ProjectBondController.js");
const RoadInfoController = require("../../../controllers/project/RoadInfoController.js");
const RoadSegmentController = require("../../../controllers/project/RoadSegmentController.js");
const RoadLayerController = require("../../../controllers/project/RoadLayerController.js");

const SolarEnergyController = require("../../../controllers/project/SolarEnergyController.js");
const WindEnergyController = require("../../../controllers/project/WindEnergyController.js");
const TransformerController = require("../../../controllers/project/TransformerController.js");
const TransformerTypeController = require("../../../controllers/project/TransformerTypeController.js");

const TransmissionLineController = require("../../../controllers/project/TransmissionLineController.js");
const ElectricTowerController = require("../../../controllers/project/ElectricTowerController.js");
const RailwayController = require("../../../controllers/project/RailwayController.js");
const RailwayStationController = require("../../../controllers/project/RailwayStationController.js");

const WaterIrrigationDamController = require("../../../controllers/project/WaterIrrigationDamController.js");
const PortController = require("../../../controllers/project/PortController.js");
const PaymentController = require("../../../controllers/project/PaymentController.js");
const ProjectOutcome45C3Controller = require("../../../controllers/project/ProjectOutcome45C3Controller.js");
const ProjectAdditionalInfo48A1Controller = require("../../../controllers/project/ProjectAdditionalInfo48A1Controller.js");

// new 
const ProjectManager65A1Controller = require("../../../controllers/projects/ProjectManager65A1Controller.js");
const ProjectContactPersonController = require("../../../controllers/projects/ProjectContactPersonController.js");
const ProjectSafetyStatusController = require("../../../controllers/projects/ProjectSafetyStatusController.js");
const ProjectQualityController = require("../../../controllers/projects/ProjectQualityController.js");  
const WeatherConditionController = require("../../../controllers/projects/WeatherConditionController.js");
const ProjectConstructionTypeController = require("../../../controllers/projects/ProjectConstructionTypeController.js");
const SegmentGeometryController = require("../../../controllers/projects/SegmentGeometryController.js");
const IntersectionAndDrivewayController = require("../../../controllers/projects/IntersectionAndDrivewayController.js");

const TrafficParameterController = require("../../../controllers/projects/TrafficParameterController.js");
const AccessoryController = require("../../../controllers/projects/AccessoryController.js");
const PavementController = require("../../../controllers/projects/PavementController.js");
const CulvertBasicDataController = require("../../../controllers/projects/CulvertBasicDataController.js");
const CulvertStructuralInformationController = require("../../../controllers/projects/CulvertStructuralInformationController.js");
const CulvertRoadOverInformationController = require("../../../controllers/projects/CulvertRoadOverInformationController.js");
const BridgeBasicDataController = require("../../../controllers/projects/BridgeBasicDataController.js");
const BridgeAreaDataController = require("../../../controllers/projects/BridgeAreaDataController.js");

const BridgeSuperStructureController = require("../../../controllers/projects/BridgeSuperStructureController.js");
const BridgeSubStructureController = require("../../../controllers/projects/BridgeSubStructureController.js");

const BridgeFoundationController = require("../../../controllers/projects/BridgeFoundationController.js");
const BridgeInspectionController = require("../../../controllers/projects/BridgeInspectionController.js");
const BridgeStructureInformationController = require("../../../controllers/projects/BridgeStructureInformationController.js");
const TrafficVolumeController = require("../../../controllers/projects/TrafficVolumeController.js");
const RoadProjectQualityControlController = require("../../../controllers/projects/RoadProjectQualityControlController.js");

const RoadDrainageController = require("../../../controllers/projects/RoadDrainageController.js");

const GeotechnicalInformationController = require("../../../controllers/projects/GeotechnicalInformationController.js");
const EnvironmentalDataController = require("../../../controllers/projects/EnvironmentalDataController.js");
const RoadMaintenanceDataController = require("../../../controllers/projects/RoadMaintenanceDataController.js");
const RoadMaintenanceActivityController = require("../../../controllers/projects/RoadMaintenanceActivityController.js");


const DrainageAssessmentController = require("../../../controllers/projects/DrainageAssessmentController.js");

const validateData = require("../../../middleware/validate/module/project/validate");

module.exports = function (express) {
  const route = express.Router();

  //project outcomes
  route.get("/project-outcomes", ProjectOutcome45C3Controller.getAll);
  route.get("/project-outcomes/:id", ProjectOutcome45C3Controller.get);
  // route.get("/project/project-outcomes/:id", ProjectOutcome45C3Controller.getByProjectId);
  route.post("/project-outcomes", validateData.railWayValidate, ProjectOutcome45C3Controller.save);
  route.put(
    "/project-outcomes/:id",
    validateData.railWayValidate,
    ProjectOutcome45C3Controller.update
  );
  route.delete("/project-outcomes/:id", ProjectAdditionalInfo48A1Controller.delete);

  //project outcomes
  route.get("/project-additional-infos", ProjectAdditionalInfo48A1Controller.getAll);
  route.get("/project-additional-infos/:id", ProjectAdditionalInfo48A1Controller.get);
  route.post("/project-additional-infos", validateData.railWayValidate, ProjectAdditionalInfo48A1Controller.save);
  route.put(
    "/project-additional-infos/:id",
    validateData.railWayValidate,
    ProjectAdditionalInfo48A1Controller.update
  );
  route.delete("/project-additional-infos/:id", ProjectAdditionalInfo48A1Controller.delete);
//project outcomes
  route.get("/project-outcomes", ProjectOutcome45C3Controller.getAll);
  route.get("/project-outcomes/:id", ProjectOutcome45C3Controller.get);
  // route.get("/project/project-outcomes/:id", ProjectOutcome45C3Controller.getByProjectId);
  route.post("/project-outcomes", validateData.railWayValidate, ProjectOutcome45C3Controller.save);
  route.put(
    "/project-outcomes/:id",
    validateData.railWayValidate,
    ProjectOutcome45C3Controller.update
  );
  route.delete("/project-outcomes/:id", ProjectAdditionalInfo48A1Controller.delete);

  //project outcomes
  route.get("/project-additional-infos", ProjectAdditionalInfo48A1Controller.getAll);
  route.get("/project-additional-infos/:id", ProjectAdditionalInfo48A1Controller.get);
  route.post("/project-additional-infos", validateData.railWayValidate, ProjectAdditionalInfo48A1Controller.save);
  route.put(
    "/project-additional-infos/:id",
    validateData.railWayValidate,
    ProjectAdditionalInfo48A1Controller.update
  );
  route.delete("/project-additional-infos/:id", ProjectAdditionalInfo48A1Controller.delete);

  //Project status
  route.get("/project-statuses", ProjectStatusController.getAll);
  route.get("/project-statuses/:id", ProjectStatusController.get);
  route.get(
    "/project/project-statuses/:id",
    ProjectStatusController.getByProjectId
  );
  route.get("/project-status-searches", ProjectStatusController.search);
  route.post(
    "/project-statuses",
    validateData.projectStatusValidate,
    ProjectStatusController.save
  );
  route.put(
    "/project-statuses/:id",
    validateData.projectStatusValidate,
    ProjectStatusController.update
  );
  route.delete("/project-statuses/:id", ProjectStatusController.delete);
  // //Project registration
  // route.get("/project", ProjectController.getAll);
  // route.get("/project/:id", ProjectController.get);
  // route.get("/project-searches", ProjectController.search);
  // route.post("/project", validateData.projectValidate, ProjectController.save);
  // route.put("/project/:id", validateData.projectValidate, ProjectController.update);
  // route.delete("/project/:id", ProjectController.delete);
  //Project stakeholder
  route.get("/project-stakeholders", ProjectStakeholderController.getAll);
  route.get("/project-stakeholders/:id", ProjectStakeholderController.get);
  route.get(
    "/project/project-stakeholders/:id",
    ProjectStakeholderController.getByProjectId
  );
  route.get(
    "/stakeholder/project-stakeholders/:id",
    ProjectStakeholderController.getByStakeholderId
  );
  route.get("/project-stakeholder-searches", ProjectStakeholderController.search);
  route.post(
    "/project-stakeholders",
    validateData.projectStakeholderValidate,
    ProjectStakeholderController.save
  );
  route.put(
    "/project-stakeholders/:id",
    validateData.projectStakeholderValidate,
    ProjectStakeholderController.update
  );
  route.delete("/project-stakeholders/:id", ProjectStakeholderController.delete);
  //Project plan
  route.get("/project-plans", ProjectPlanController.getAll);
  route.get("/project-plans/:id", ProjectPlanController.get);
  route.get("/project/project-plans/:id", ProjectPlanController.getByProjectId);
  route.get("/project-plan-searches", ProjectPlanController.search);
  route.post(
    "/project-plans",
    validateData.projectPlanValidate,
    ProjectPlanController.save
  );
  route.put(
    "/project-plans/:id",
    validateData.projectPlanValidate,
    ProjectPlanController.update
  );
  route.delete("/project-plans/:id", ProjectPlanController.delete);
  route.get(
    "/project-yearly-plans/:id/:year",
    ProjectPlanController.getProjectYearlyPlans
  );

  //project report

  route.get("/project-reports", ProjectReportController.getAll);
  route.get("/project-reports/:id", ProjectReportController.get);
  route.get(
    "/project/project-reports/:id",
    ProjectReportController.getByProjectId
  );
  route.get(
    "/populate/project-plan/project-reports/:id",
    ProjectReportController.getByProjectIdAndPopulate
  );
  route.get("/project-report-searches", ProjectReportController.search);
  route.post(
    "/project-reports",
    validateData.projectReportValidate,
    ProjectReportController.save
  );
  route.put(
    "/project-reports/:id",
    validateData.projectReportValidate,
    ProjectReportController.update
  );
  route.delete("/project-reports/:id", ProjectReportController.delete);

  route.get(
    "/monthly-project-report/:id",
    ProjectReportController.getMonthlyProjectReport
  );

  route.get(
    "/project-yearly-reports/:id/:year",
    ProjectReportController.getProjectYearlyReports
  );

  //Project document
  route.get("/project-documents", ProjectDocumentController.getAll);
  route.get("/project-documents/:id", ProjectDocumentController.get);
  route.get(
    "/project/project-documents/:id",
    ProjectDocumentController.getByProjectId
  );
  route.get("/project-document-searches", ProjectDocumentController.search);
  route.post(
    "/project-documents",
    validateData.projectDocumentValidate,
    ProjectDocumentController.save
  );
  route.put(
    "/project-documents/:id",
    validateData.projectDocumentValidate,
    ProjectDocumentController.update
  );
  route.delete("/project-documents/:id", ProjectDocumentController.delete);
  //Construction resource
  route.get("/project-resources", ConstructionResourceController.getAll);
  route.get("/project-resources/:id", ConstructionResourceController.get);
  route.get(
    "/project/project-resources/:id",
    ConstructionResourceController.getByProjectId
  );
  route.get(
    "/constructionproject/project-resources/:id",
    ConstructionResourceController.getByProjectId
  );
  route.get(
    "/construction-resource-searches",
    ConstructionResourceController.search
  );
  route.post(
    "/project-resources",
    validateData.constructionResourceValidate,
    ConstructionResourceController.save
  );
  route.put(
    "/construction-resource/:id",
    validateData.constructionResourceValidate,
    ConstructionResourceController.update
  );
  route.delete(
    "/project-resources/:id",
    ConstructionResourceController.delete
  );
  //Building envelop material
  route.get(
    "/buildingenvelopmaterials",
    BuildingEnvelopMaterialController.getAll
  );
  route.get(
    "/buildingenvelopmaterials/:id",
    BuildingEnvelopMaterialController.get
  );
  route.get(
    "/project/buildingenvelopmaterials/:id",
    BuildingEnvelopMaterialController.getByProjectId
  );
  route.get(
    "/building-envelop-material-searches",
    BuildingEnvelopMaterialController.search
  );
  route.post(
    "/buildingenvelopmaterials",
    validateData.buildingEnvelopMaterialValidate,
    BuildingEnvelopMaterialController.save
  );
  route.put(
    "/buildingenvelopmaterials/:id",
    validateData.buildingEnvelopMaterialValidate,
    BuildingEnvelopMaterialController.update
  );
  route.delete(
    "/buildingenvelopmaterials/:id",
    BuildingEnvelopMaterialController.delete
  );
  //Building dimension details
  route.get(
    "/buildingdimensiondetails",
    BuildingDimensionDetailsController.getAll
  );
  route.get(
    "/buildingdimensiondetails/:id",
    BuildingDimensionDetailsController.get
  );
  route.get(
    "/project/buildingdimensiondetails/:id",
    BuildingDimensionDetailsController.getByProjectId
  );
  route.get(
    "/building-dimension-detail-searches",
    BuildingDimensionDetailsController.search
  );
  route.post(
    "/buildingdimensiondetails",
    validateData.buildingDimensionDetailValidate,
    BuildingDimensionDetailsController.save
  );
  route.put(
    "/buildingdimensiondetails/:id",
    validateData.buildingDimensionDetailValidate,
    BuildingDimensionDetailsController.update
  );
  route.delete(
    "/building-dimension-detail/:id",
    BuildingDimensionDetailsController.delete
  );
  //Telecom infrastructure
  route.get("/telecoms", TelecomInfrastructureController.getAll);
  route.get("/telecoms/:id", TelecomInfrastructureController.get);
  route.get(
    "/project/telecoms/:id",
    TelecomInfrastructureController.getByProjectId
  );
  route.get(
    "/telecom-infrastructure-searches",
    TelecomInfrastructureController.search
  );
  route.post(
    "/telecoms",
    validateData.telecomValidate,
    TelecomInfrastructureController.save
  );
  route.put(
    "/telecoms/:id",
    validateData.telecomValidate,
    TelecomInfrastructureController.update
  );
  route.delete(
    "/telecoms/:id",
    TelecomInfrastructureController.delete
  );
  //Generating capacity
  route.get("/generatingcapacitys", GeneratingCapacityController.getAll);
  route.get("/generatingcapacitys/:id", GeneratingCapacityController.get);
  route.get(
    "/project/generatingcapacitys/:id",
    GeneratingCapacityController.getByProjectId
  );
  route.get("/generating-capacity-searches", GeneratingCapacityController.search);
  route.post(
    "/generatingcapacitys",
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.save
  );
  route.put(
    "/generatingcapacitys/:id",
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.update
  );
  route.delete("/generatingcapacitys/:id", GeneratingCapacityController.delete);
  //Turbine detail
  route.get("/turbineinfos", TurbineDetailController.getAll);
  route.get("/turbineinfos/:id", TurbineDetailController.get);
  route.get(
    "/project/turbineinfos/:id",
    TurbineDetailController.getByProjectId
  );
  route.get("/turbine-detail-searches", TurbineDetailController.search);
  route.post(
    "/turbineinfos",
    validateData.turbineInfoValidate,
    TurbineDetailController.save
  );
  route.put(
    "/turbineinfos/:id",
    validateData.turbineInfoValidate,
    TurbineDetailController.update
  );
  route.delete("/turbineinfos/:id", TurbineDetailController.delete);
  //Hydrolectric dam
  route.get("/hydroelectricdams", HydroElectricDamController.getAll);
  route.get("/hydroelectricdams/:id", HydroElectricDamController.get);
  route.get(
    "/project/hydroelectricdams/:id",
    HydroElectricDamController.getByProjectId
  );
  route.get("/hydro-electric-dam-searches", HydroElectricDamController.search);
  route.post(
    "/hydroelectricdams",
    validateData.hydroElectricDamValidate,
    HydroElectricDamController.save
  );
  route.put(
    "/hydroelectricdams/:id",
    validateData.hydroElectricDamValidate,
    HydroElectricDamController.update
  );
  route.delete("/hydroelectricdams/:id", HydroElectricDamController.delete);
  //Spillways detailf
  route.get("/spillwayinfos", SpillWaysDetailController.getAll);
  route.get("/spillwayinfos/:id", SpillWaysDetailController.get);
  route.get(
    "/project/spillwayinfos/:id",
    SpillWaysDetailController.getByProjectId
  );
  route.get("/spill-way-detail-searches", SpillWaysDetailController.search);
  route.post(
    "/spillwayinfos",
    validateData.spillWayInfoValidate,
    SpillWaysDetailController.save
  );
  route.put(
    "/spillwayinfos/:id",
    validateData.spillWayInfoValidate,
    SpillWaysDetailController.update
  );
  route.delete("/spillwayinfos/:id", SpillWaysDetailController.delete);
  //Reservoir detail
  route.get("/reservoirinfos", ReservoirDetailsController.getAll);
  route.get("/reservoirinfos/:id", ReservoirDetailsController.get);
  route.get(
    "/project/reservoirinfos/:id",
    ReservoirDetailsController.getByProjectId
  );
  route.get("/reservoir-detail-searches", ReservoirDetailsController.search);
  route.post(
    "/reservoirinfos",
    validateData.reserviorDetailValidate,
    ReservoirDetailsController.save
  );
  route.put(
    "/reservoirinfos/:id",
    validateData.reserviorDetailValidate,
    ReservoirDetailsController.update
  );
  route.delete("/reservoirinfos/:id", ReservoirDetailsController.delete);
  //Irrigation capacity
  route.get("/irrigationcapacities", IrrigationCapacityController.getAll);
  route.get("/irrigationcapacities/:id", IrrigationCapacityController.get);
  route.get(
    "/project/irrigationcapacities/:id",
    IrrigationCapacityController.getByProjectId
  );
  route.get("/irrigation-capacity-searches", IrrigationCapacityController.search);
  route.post(
    "/irrigationcapacities",
    validateData.irrigationCapacityValidate,
    IrrigationCapacityController.save
  );
  route.put(
    "/irrigationcapacities/:id",
    validateData.irrigationCapacityValidate,
    IrrigationCapacityController.update
  );
  route.delete("/irrigationcapacities/:id", IrrigationCapacityController.delete);

  
  // route.get("/projects/cpm", ProjectController.getAllCPMProject);
  route.get("/projects/", ProjectController.getAll);
  route.get("/projects/:id", ProjectController.get);
  route.get("/project-searches", ProjectController.search);
  // route.post("/projects/filter/", ProjectController.getProjectByTypeId);
  route.post("/projects", validateData.projectValidate, ProjectController.save);
  route.get("/project-analysis/:id", ProjectController.getProjectAnalysis);

  route.put(
    "/projects/:id",
    validateData.projectValidate,
    ProjectController.update
  );
  route.delete("/projects/:id", ProjectController.delete);
  route.get(
    "/project-general-information/:id",
    ProjectController.getProjectDetail
  );
  route.get("/project-detail/:id", ProjectController.getProjectData);
  route.get(
    "/general-project-finance/:id",
    ProjectController.getFinancialNumbers
  );

  
  //project finance route
  route.get("/project-finances/", ProjectFinanceController.getAll);
  route.get("/project-finances/:id", ProjectFinanceController.get);
  route.get(
    "/project-finances/project/:id",
    ProjectFinanceController.getByProjectId
  );
  route.get("/project-finance-searches", ProjectFinanceController.search);
  route.post(
    "/project-finances",
    validateData.projectFinanceValidate,
    ProjectFinanceController.save
  );
  route.put(
    "/project-finances/:id",
    validateData.projectFinanceValidate,
    ProjectFinanceController.update
  );
  route.delete("/project-finances/:id", ProjectFinanceController.delete);

  //project variation route
  route.get("/project-variations/", ProjectVariationController.getAll);
  route.get("/project-variations/:id", ProjectVariationController.get);
  route.get(
    "/project/project-variations/:id",
    ProjectVariationController.getByProjectId
  );
  route.get(
    "/type/project-variations",
    ProjectVariationController.getByProjectType
  );
  route.get("/project-variation-searches", ProjectVariationController.search);
  route.post(
    "/project-variations",
    validateData.projectVariationValidate,
    ProjectVariationController.save
  );
  route.put(
    "/project-variations/:id",
    validateData.projectVariationValidate,
    ProjectVariationController.update
  );
  route.delete("/project-variations/:id", ProjectVariationController.delete);

  //extensions
  route.get("/project-extension-times/", ProjectExtensionTimeController.getAll);
  route.get("/project-extension-times/:id", ProjectExtensionTimeController.get);
  route.get(
    "/project/project-extension-times/:id",
    ProjectExtensionTimeController.getByProjectId
  );
  route.get(
    "/project-extension-time-searches",
    ProjectExtensionTimeController.search
  );
  route.post(
    "/project-extension-times",
    validateData.projectExtensionTimeValidate,
    ProjectExtensionTimeController.save
  );
  route.put(
    "/project-extension-times/:id",
    validateData.projectExtensionTimeValidate,
    ProjectExtensionTimeController.update
  );
  route.delete(
    "/project-extension-times/:id",
    ProjectExtensionTimeController.delete
  );

  //project time
  route.get("/project-times", ProjectTimeController.getAll);
  route.get("/project-times/:id", ProjectTimeController.get);
  route.get("/project/project-times/:id", ProjectTimeController.getByProjectId);
  route.get("/project-time-searches", ProjectTimeController.search);
  route.post(
    "/project-times",
    validateData.projectTimeValidate,
    ProjectTimeController.save
  );
  route.put(
    "/project-times/:id",
    validateData.projectTimeValidate,
    ProjectTimeController.update
  );
  route.delete("/project-times/:id", ProjectTimeController.delete);

  route.get("/project-time-analysis/:id", ProjectController.getContractTimeAnalysis);

  //project bond
  route.get("/project-bonds/", ProjectBondController.getAll);
  route.get("/project-bonds/:id", ProjectBondController.get);
  route.get("/project/project-bonds/:id", ProjectBondController.getByProjectId);
  route.get("/type/project-bonds", ProjectBondController.getByProjectType);
  route.get("/project-bond-searches", ProjectBondController.search);
  route.post(
    "/project-bonds",
    validateData.projectBondValidate,
    ProjectBondController.save
  );
  route.put(
    "/project-bonds/:id",
    validateData.projectBondValidate,
    ProjectBondController.update
  );
  route.delete("/project-bonds/:id", ProjectBondController.delete);

  //road info
  route.get("/roadinfos/", RoadInfoController.getAll);
  route.get("/roadinfos/:id", RoadInfoController.get);
  route.get("/project/roadinfos/:id", RoadInfoController.getByProjectId);
  route.get("/road-info-searches", RoadInfoController.search);
  route.post(
    "/roadinfos",
    validateData.roadDetailValidate,
    RoadInfoController.save
  );
  route.put(
    "/roadinfos/:id",
    validateData.roadDetailValidate,
    RoadInfoController.update
  );
  route.delete("/roadinfos/:id", RoadInfoController.delete);

  //road segment
  route.get("/roadsegments/", RoadSegmentController.getAll);
  route.get("/roadsegments/:id", RoadSegmentController.get);
  route.get("/project/roadsegments/:id", RoadSegmentController.getByProjectId);
  route.post(
    "/roadsegments",
    validateData.roadSegmentValidate,
    RoadSegmentController.save
  );
  route.put(
    "/roadsegments/:id",
    validateData.roadSegmentValidate,
    RoadSegmentController.update
  );
  route.delete("/roadsegments/:id", RoadSegmentController.delete);

  //road layer
  route.get("/roadlayers/", RoadLayerController.getAll);
  route.get("/roadlayers/:id", RoadLayerController.get);
  route.get("/project/roadlayers/:id", RoadLayerController.getByProjectId);
  route.get("/road-layer-searches", RoadLayerController.search);
  route.post(
    "/roadlayers",
    validateData.roadLayerValidate,
    RoadLayerController.save
  );
  route.put(
    "/roadlayers/:id",
    validateData.roadLayerValidate,
    RoadLayerController.update
  );
  route.delete("/roadlayers/:id", RoadLayerController.delete);

  //solar energy
  route.get("/solarenergys", SolarEnergyController.getAll);
  route.get("/solarenergys/:id", SolarEnergyController.get);
  route.get("/project/solarenergys/:id", SolarEnergyController.getByProjectId);
  route.get("/solar-enegy-searches", SolarEnergyController.search);
  route.post(
    "/solarenergys",
    validateData.solarEnergyValidate,
    SolarEnergyController.save
  );
  route.put(
    "/solarenergys/:id",
    validateData.solarEnergyValidate,
    SolarEnergyController.update
  );
  route.delete("/solarenergys/:id", SolarEnergyController.delete);

  //wind energy
  route.get("/windenergys", WindEnergyController.getAll);
  route.get("/windenergys/:id", WindEnergyController.get);
  route.get("/project/windenergys/:id", WindEnergyController.getByProjectId);
  route.get("/wind-enegy-searches", WindEnergyController.search);
  route.post(
    "/windenergys",
    validateData.windEnergyValidate,
    WindEnergyController.save
  );
  route.put(
    "/windenergys/:id",
    validateData.windEnergyValidate,
    WindEnergyController.update
  );
  route.delete("/windenergys/:id", WindEnergyController.delete);

  //transformer
  route.get("/transformers", TransformerController.getAll);
  route.get("/transformers/:id", TransformerController.get);
  route.get("/project/transformers/:id", TransformerController.getByProjectId);
  route.get("/transformer-searches", TransformerController.search);
  route.post(
    "/transformers",
    validateData.transformerValidate,
    TransformerController.save
  );
  route.put(
    "/transformers/:id",
    validateData.transformerValidate,
    TransformerController.update
  );
  route.delete("/transformers/:id", TransformerController.delete);

  //transformer type
  route.get("/transformertypes", TransformerTypeController.getAll);
  route.get("/transformertypes/:id", TransformerTypeController.get);
  route.get(
    "/project/transformertypes/:id",
    TransformerTypeController.getByProjectId
  );
  route.get("/transformer-type-searches", TransformerTypeController.search);
  route.post(
    "/transformertypes",
    validateData.transformerTypeValidate,
    TransformerTypeController.save
  );
  route.put(
    "/transformertypes/:id",
    validateData.transformerTypeValidate,
    TransformerTypeController.update
  );
  route.delete("/transformertypes/:id", TransformerTypeController.delete);

  //transmission lines
  route.get("/transmissionlines", TransmissionLineController.getAll);
  route.get("/transmissionlines/:id", TransmissionLineController.get);
  route.get(
    "/project/transmissionlines/:id",
    TransmissionLineController.getByProjectId
  );
  route.get("/transmission-line-searches", TransmissionLineController.search);
  route.post(
    "/transmissionlines",
    validateData.transmissionLineValidate,
    TransmissionLineController.save
  );
  route.put(
    "/transmissionlines/:id",
    validateData.transmissionLineValidate,
    TransmissionLineController.update
  );
  route.delete("/transmissionlines/:id", TransmissionLineController.delete);

  //electric tower
  route.get("/electrictowers", ElectricTowerController.getAll);
  route.get("/electrictowers/:id", ElectricTowerController.get);
  route.get(
    "/project/electrictowers/:id",
    ElectricTowerController.getByProjectId
  );
  route.get("/electric-tower-searches", ElectricTowerController.search);
  route.post(
    "/electrictowers",
    validateData.electricTowerValidate,
    ElectricTowerController.save
  );
  route.put(
    "/electrictowers/:id",
    validateData.electricTowerValidate,
    ElectricTowerController.update
  );
  route.delete("/electrictowers/:id", ElectricTowerController.delete);

  //railway
  route.get("/railways", RailwayController.getAll);
  route.get("/railways/:id", RailwayController.get);
  route.get("/project/railways/:id", RailwayController.getByProjectId);
  route.get("/railway-searches", RailwayController.search);
  route.post("/railways", validateData.railWayValidate, RailwayController.save);
  route.put(
    "/railways/:id",
    validateData.railWayValidate,
    RailwayController.update
  );
  route.delete("/railways/:id", RailwayController.delete);

  //railway station
  route.get("/railwaystations", RailwayStationController.getAll);
  route.get("/railwaystations/:id", RailwayStationController.get);
  route.get(
    "/project/railwaystations/:id",
    RailwayStationController.getByProjectId
  );
  route.get("/railway-station-searches", RailwayStationController.search);
  route.post(
    "/railwaystations",
    validateData.railWayStationValidate,
    RailwayStationController.save
  );
  route.put(
    "/railwaystations/:id",
    validateData.railWayStationValidate,
    RailwayStationController.update
  );
  route.delete("/railwaystations/:id", RailwayStationController.delete);

  //water irrigation dam
  route.get("/waterirrigationdams", WaterIrrigationDamController.getAll);
  route.get("/waterirrigationdams/:id", WaterIrrigationDamController.get);
  route.get(
    "/project/waterirrigationdams/:id",
    WaterIrrigationDamController.getByProjectId
  );
  route.get(
    "/water-irrigation-dam-searches",
    WaterIrrigationDamController.search
  );
  route.post(
    "/waterirrigationdams",
    validateData.waterIrrigationValidate,
    WaterIrrigationDamController.save
  );
  route.put(
    "/waterirrigationdams/:id",
    validateData.waterIrrigationValidate,
    WaterIrrigationDamController.update
  );
  route.delete(
    "/waterirrigationdams/:id",
    WaterIrrigationDamController.delete
  );

  //port
  route.get("/ports", PortController.getAll);
  route.get("/ports/:id", PortController.get);
  route.get("/project/ports/:id", PortController.getByProjectId);
  route.get("/port", PortController.search);
  route.post("/ports", validateData.portValidate, PortController.save);
  route.put("/ports/:id", validateData.portValidate, PortController.update);
  route.delete("/ports/:id", PortController.delete);

  //payment
  route.get("/payments", PaymentController.getAll);
  route.get("/payments/:id", PaymentController.get);
  route.get("/type/project/payments", PaymentController.getByProjectIdAndType);
  route.get("/project/payments/:id", PaymentController.getByProjectId);
  route.get("/paymenst", PaymentController.search);
  route.post("/payments", validateData.paymentValidate, PaymentController.save);
  route.put(
    "/payments/:id",
    validateData.paymentValidate,
    PaymentController.update
  );
  route.delete("/payments/:id", PaymentController.delete);

  //summary
  route.get(
    "/matrix/projects",
    ProjectController.countAllProjectWithProjectType
  );
  route.get(
    "/count/project/projectcategories",
    ProjectController.countAllProjectWithProjectCategory
  );

  // ProjectManager65A1 routes with validation
  route.get("/project-managers", ProjectManager65A1Controller.getAll);
  route.get("/project-managers/:id", ProjectManager65A1Controller.get);
  route.post("/project-managers", validateData.railWayValidate, ProjectManager65A1Controller.save);
  route.put(
    "/project-managers/:id",
    validateData.railWayValidate,
    ProjectManager65A1Controller.update
  );
  route.delete("/project-managers/:id", ProjectManager65A1Controller.delete);

  // ProjectContactPerson routes with validation
  route.get("/project-contact-people", ProjectContactPersonController.getAll);
  route.get("/project-contact-people/:id", ProjectContactPersonController.get);
  route.post("/project-contact-people", validateData.projectContactPersonValidate, ProjectContactPersonController.save);
  route.put("/project-contact-people/:id", validateData.projectContactPersonValidate, ProjectContactPersonController.update);
  route.delete("/project-contact-people/:id", ProjectContactPersonController.delete);

  // ProjectSafetyStatus routes with validation
  route.get("/project-safety-statuses", ProjectSafetyStatusController.getAll);
  route.get("/project-safety-statuses/:id", ProjectSafetyStatusController.get);
  route.post("/project-safety-statuses", validateData.projectSafetyStatusValidate, ProjectSafetyStatusController.save);
  route.put("/project-safety-statuses/:id", validateData.projectSafetyStatusValidate, ProjectSafetyStatusController.update);
  route.delete("/project-safety-statuses/:id", ProjectSafetyStatusController.delete);

  // ProjectQuality routes with validation  
  route.get("/project-qualities", ProjectQualityController.getAll);
  route.get("/project-qualities/:id", ProjectQualityController.get);
  route.post("/project-qualities", validateData.projectQualityValidate, ProjectQualityController.save);
  route.put("/project-qualities/:id", validateData.projectQualityValidate, ProjectQualityController.update);
  route.delete("/project-qualities/:id", ProjectQualityController.delete);

  // WeatherCondition routes with validation
  route.get("/weather-conditions", WeatherConditionController.getAll);
  route.get("/weather-conditions/:id", WeatherConditionController.get);
  route.post("/weather-conditions", validateData.weatherConditionValidate, WeatherConditionController.save);
  route.put("/weather-conditions/:id", validateData.weatherConditionValidate, WeatherConditionController.update);
  route.delete("/weather-conditions/:id", WeatherConditionController.delete);
  
  // ProjectConstructionType routes with validation
  route.get("/project-construction-types", ProjectConstructionTypeController.getAll);
  route.get("/project-construction-types/:id", ProjectConstructionTypeController.get);
  route.post("/project-construction-types", validateData.projectConstructionTypeValidate, ProjectConstructionTypeController.save);
  route.put("/project-construction-types/:id", validateData.projectConstructionTypeValidate, ProjectConstructionTypeController.update);
  route.delete("/project-construction-types/:id", ProjectConstructionTypeController.delete);

  // SegmentGeometry routes with validation
  route.get("/segment-geometries", SegmentGeometryController.getAll);
  route.get("/segment-geometries/:id", SegmentGeometryController.get);
  route.post("/segment-geometries", validateData.segmentGeometryValidate, SegmentGeometryController.save);
  route.put("/segment-geometries/:id", validateData.segmentGeometryValidate, SegmentGeometryController.update);
  route.delete("/segment-geometries/:id", SegmentGeometryController.delete);

  // IntersectionAndDriveway routes with validation
  route.get("/intersection-and-driveways", IntersectionAndDrivewayController.getAll);
  route.get("/intersection-and-driveways/:id", IntersectionAndDrivewayController.get);
  route.post("/intersection-and-driveways", validateData.intersectionAndDrivewayValidate, IntersectionAndDrivewayController.save);
  route.put("/intersection-and-driveways/:id", validateData.intersectionAndDrivewayValidate, IntersectionAndDrivewayController.update);
  route.delete("/intersection-and-driveways/:id", IntersectionAndDrivewayController.delete);


  
   // TrafficParameter routes with validation
   route.get("/traffic-parameters", TrafficParameterController.getAll);
   route.get("/traffic-parameters/:id", TrafficParameterController.get);
   route.post("/traffic-parameters", validateData.trafficParameterValidate, TrafficParameterController.save);
   route.put("/traffic-parameters/:id", validateData.trafficParameterValidate, TrafficParameterController.update);
   route.delete("/traffic-parameters/:id", TrafficParameterController.delete);
 
   // Accessory routes with validation
   route.get("/accessories", AccessoryController.getAll);
   route.get("/accessories/:id", AccessoryController.get);
   route.post("/accessories", validateData.accessoryValidate, AccessoryController.save);
   route.put("/accessories/:id", validateData.accessoryValidate, AccessoryController.update);
   route.delete("/accessories/:id", AccessoryController.delete);

  // Pavement routes with validation
  route.get("/pavements", PavementController.getAll);
  route.get("/pavements/:id", PavementController.get);
  route.post("/pavements", validateData.pavementValidate, PavementController.save);
  route.put("/pavements/:id", validateData.pavementValidate, PavementController.update);
  route.delete("/pavements/:id", PavementController.delete);

  // CulvertBasicData routes with validation
  route.get("/culvert-basic-data", CulvertBasicDataController.getAll);
  route.get("/culvert-basic-data/:id", CulvertBasicDataController.get);
  route.post("/culvert-basic-data", validateData.culvertBasicDataValidate, CulvertBasicDataController.save);
  route.put("/culvert-basic-data/:id", validateData.culvertBasicDataValidate, CulvertBasicDataController.update);
  route.delete("/culvert-basic-data/:id", CulvertBasicDataController.delete);

  // CulvertStructuralInformation routes with validation
  route.get("/culvert-structural-informations", CulvertStructuralInformationController.getAll);
  route.get("/culvert-structural-informations/:id", CulvertStructuralInformationController.get);
  route.post("/culvert-structural-informations", validateData.culvertStructuralInformationValidate, CulvertStructuralInformationController.save);
  route.put("/culvert-structural-informations/:id", validateData.culvertStructuralInformationValidate, CulvertStructuralInformationController.update);
  route.delete("/culvert-structural-informations/:id", CulvertStructuralInformationController.delete);

  // CulvertRoadOverInformation routes with validation
  route.get("/culvert-road-over-informations", CulvertRoadOverInformationController.getAll);
  route.get("/culvert-road-over-informations/:id", CulvertRoadOverInformationController.get);
  route.post("/culvert-road-over-informations", validateData.culvertRoadOverInformationValidate, CulvertRoadOverInformationController.save);
  route.put("/culvert-road-over-informations/:id", validateData.culvertRoadOverInformationValidate, CulvertRoadOverInformationController.update);
  route.delete("/culvert-road-over-informations/:id", CulvertRoadOverInformationController.delete);

  // BridgeBasicData routes with validation
  route.get("/bridge-basic-data", BridgeBasicDataController.getAll);
  route.get("/bridge-basic-data/:id", BridgeBasicDataController.get);
  route.post("/bridge-basic-data", validateData.bridgeBasicDataValidate, BridgeBasicDataController.save);
  route.put("/bridge-basic-data/:id", validateData.bridgeBasicDataValidate, BridgeBasicDataController.update);
  route.delete("/bridge-basic-data/:id", BridgeBasicDataController.delete);


  // BridgeAreaData routes with validation
  route.get("/bridge-area-data", BridgeAreaDataController.getAll);
  route.get("/bridge-area-data/:id", BridgeAreaDataController.get);
  route.post("/bridge-area-data", validateData.bridgeAreaDataValidate, BridgeAreaDataController.save);
  route.put("/bridge-area-data/:id", validateData.bridgeAreaDataValidate, BridgeAreaDataController.update);
  route.delete("/bridge-area-data/:id", BridgeAreaDataController.delete);

  

  // BridgeSuperStructure routes with validation
  route.get("/bridge-super-structures", BridgeSuperStructureController.getAll);
  route.get("/bridge-super-structures/:id", BridgeSuperStructureController.get);
  route.post("/bridge-super-structures", validateData.bridgeSuperStructureValidate, BridgeSuperStructureController.save);
  route.put("/bridge-super-structures/:id", validateData.bridgeSuperStructureValidate, BridgeSuperStructureController.update);
  route.delete("/bridge-super-structures/:id", BridgeSuperStructureController.delete);

  
  // BridgeSuperStructure routes with validation
  route.get("/bridge-sub-structures", BridgeSubStructureController.getAll);
  route.get("/bridge-sub-structures/:id", BridgeSubStructureController.get);
  route.post("/bridge-sub-structures", validateData.bridgeSubStructureValidate, BridgeSubStructureController.save);
  route.put("/bridge-sub-structures/:id", validateData.bridgeSubStructureValidate, BridgeSubStructureController.update);
  route.delete("/bridge-sub-structures/:id", BridgeSubStructureController.delete);

  // BridgeFoundation routes with validation
  route.get("/bridge-foundations", BridgeFoundationController.getAll);
  route.get("/bridge-foundations/:id", BridgeFoundationController.get);
  route.post("/bridge-foundations", validateData.bridgeFoundationValidate, BridgeFoundationController.save);
  route.put("/bridge-foundations/:id", validateData.bridgeFoundationValidate, BridgeFoundationController.update);
  route.delete("/bridge-foundations/:id", BridgeFoundationController.delete);



  // BridgeInspection routes with validation
  route.get("/bridge-inspections", BridgeInspectionController.getAll);
  route.get("/bridge-inspections/:id", BridgeInspectionController.get);
  route.post("/bridge-inspections", validateData.bridgeInspectionValidate, BridgeInspectionController.save);
  route.put("/bridge-inspections/:id", validateData.bridgeInspectionValidate, BridgeInspectionController.update);
  route.delete("/bridge-inspections/:id", BridgeInspectionController.delete);


  // BridgeStructureInformation routes with validation
  route.get("/bridge-structure-informations", BridgeStructureInformationController.getAll);
  route.get("/bridge-structure-informations/:id", BridgeStructureInformationController.get);
  route.post("/bridge-structure-informations", validateData.bridgeStructureInformationValidate, BridgeStructureInformationController.save);
  route.put("/bridge-structure-informations/:id", validateData.bridgeStructureInformationValidate, BridgeStructureInformationController.update);
  route.delete("/bridge-structure-informations/:id", BridgeStructureInformationController.delete);

  
  // TrafficVolume routes with validation
  route.get("/traffic-volumes", TrafficVolumeController.getAll);
  route.get("/traffic-volumes/:id", TrafficVolumeController.get);
  route.post("/traffic-volumes", validateData.trafficVolumeValidate, TrafficVolumeController.save);
  route.put("/traffic-volumes/:id", validateData.trafficVolumeValidate, TrafficVolumeController.update);
  route.delete("/traffic-volumes/:id", TrafficVolumeController.delete);

  // RoadProjectQualityControl routes with validation
  route.get("/road-project-quality-controls", RoadProjectQualityControlController.getAll);
  route.get("/road-project-quality-controls/:id", RoadProjectQualityControlController.get);
  route.post("/road-project-quality-controls", validateData.roadProjectQualityControlValidate, RoadProjectQualityControlController.save);
  route.put("/road-project-quality-controls/:id", validateData.roadProjectQualityControlValidate, RoadProjectQualityControlController.update);
  route.delete("/road-project-quality-controls/:id", RoadProjectQualityControlController.delete);


  // RoadDrainage routes with validation
  route.get("/road-drainages", RoadDrainageController.getAll);
  route.get("/road-drainages/:id", RoadDrainageController.get);
  route.post("/road-drainages", validateData.roadDrainageValidate, RoadDrainageController.save);
  route.put("/road-drainages/:id", validateData.roadDrainageValidate, RoadDrainageController.update);
  route.delete("/road-drainages/:id", RoadDrainageController.delete);


  // GeotechnicalInformation routes with validation
  route.get("/geotechnical-informations", GeotechnicalInformationController.getAll);
  route.get("/geotechnical-informations/:id", GeotechnicalInformationController.get);
  route.post("/geotechnical-informations", validateData.geotechnicalInformationValidate, GeotechnicalInformationController.save);
  route.put("/geotechnical-informations/:id", validateData.geotechnicalInformationValidate, GeotechnicalInformationController.update);
  route.delete("/geotechnical-informations/:id", GeotechnicalInformationController.delete);

  // EnvironmentalData routes with validation
  route.get("/environmental-data", EnvironmentalDataController.getAll);
  route.get("/environmental-data/:id", EnvironmentalDataController.get);
  route.post("/environmental-data", validateData.environmentalDataValidate, EnvironmentalDataController.save);
  route.put("/environmental-data/:id", validateData.environmentalDataValidate, EnvironmentalDataController.update);
  route.delete("/environmental-data/:id", EnvironmentalDataController.delete);

  // RoadMaintenanceData routes with validation
  route.get("/road-maintenance-data", RoadMaintenanceDataController.getAll);
  route.get("/road-maintenance-data/:id", RoadMaintenanceDataController.get);
  route.post("/road-maintenance-data", validateData.roadMaintenanceDataValidate, RoadMaintenanceDataController.save);
  route.put("/road-maintenance-data/:id", validateData.roadMaintenanceDataValidate, RoadMaintenanceDataController.update);
  route.delete("/road-maintenance-data/:id", RoadMaintenanceDataController.delete);


  // RoadMaintenanceActivity routes with validation
  route.get("/road-maintenance-activities", RoadMaintenanceActivityController.getAll);
  route.get("/road-maintenance-activities/:id", RoadMaintenanceActivityController.get);
  route.post("/road-maintenance-activities", validateData.roadMaintenanceActivityValidate, RoadMaintenanceActivityController.save);
  route.put("/road-maintenance-activities/:id", validateData.roadMaintenanceActivityValidate, RoadMaintenanceActivityController.update);
  route.delete("/road-maintenance-activities/:id", RoadMaintenanceActivityController.delete);


  // DrainageAssessment routes with validation
  route.get("/drainage-assessments", DrainageAssessmentController.getAll);
  route.get("/drainage-assessments/:id", DrainageAssessmentController.get);
  route.post("/drainage-assessments", validateData.drainageAssessmentValidate, DrainageAssessmentController.save);
  route.put("/drainage-assessments/:id", validateData.drainageAssessmentValidate, DrainageAssessmentController.update);
  route.delete("/drainage-assessments/:id", DrainageAssessmentController.delete);


  return route;

};
