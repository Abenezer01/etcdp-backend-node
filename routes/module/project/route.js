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
const validateData = require("../../../middleware/validate/module/project/validate");


module.exports = function (express) {
  const route = express.Router();

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
    "/project-stakeholder",
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
    "/monthly-project-report/:id/:year/:quarter",
    ProjectReportController.getMonthlyProjectReport
  );
  route.get(
    "/report/monthly-project-reports/:id",
    ProjectReportController.getByMonthlyId
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
  route.get("/construction-resources", ConstructionResourceController.getAll);
  route.get("/construction-resources/:id", ConstructionResourceController.get);
  route.get(
    "/project/construction-resources/:id",
    ConstructionResourceController.getByProjectId
  );
  route.get(
    "/constructionproject/construction-resources/:id",
    ConstructionResourceController.getByProjectId
  );
  route.get(
    "/construction-resource-searches",
    ConstructionResourceController.search
  );
  route.post(
    "/construction-resources",
    validateData.constructionResourceValidate,
    ConstructionResourceController.save
  );
  route.put(
    "/construction-resource/:id",
    validateData.constructionResourceValidate,
    ConstructionResourceController.update
  );
  route.delete(
    "/construction-resources/:id",
    ConstructionResourceController.delete
  );
  //Building envelop material
  route.get(
    "/building-envelop-materials",
    BuildingEnvelopMaterialController.getAll
  );
  route.get(
    "/building-envelop-materials/:id",
    BuildingEnvelopMaterialController.get
  );
  route.get(
    "/project/building-envelop-materials/:id",
    BuildingEnvelopMaterialController.getByProjectId
  );
  route.get(
    "/building-envelop-material-searches",
    BuildingEnvelopMaterialController.search
  );
  route.post(
    "/building-envelop-materials",
    validateData.buildingEnvelopMaterialValidate,
    BuildingEnvelopMaterialController.save
  );
  route.put(
    "/building-envelop-materials/:id",
    validateData.buildingEnvelopMaterialValidate,
    BuildingEnvelopMaterialController.update
  );
  route.delete(
    "/building-envelop-materials/:id",
    BuildingEnvelopMaterialController.delete
  );
  //Building dimension details
  route.get(
    "/building-dimension-details",
    BuildingDimensionDetailsController.getAll
  );
  route.get(
    "/building-dimension-details/:id",
    BuildingDimensionDetailsController.get
  );
  route.get(
    "/project/building-dimension-details/:id",
    BuildingDimensionDetailsController.getByProjectId
  );
  route.get(
    "/building-dimension-detail-searches",
    BuildingDimensionDetailsController.search
  );
  route.post(
    "/building-dimension-details",
    validateData.buildingDimensionDetailValidate,
    BuildingDimensionDetailsController.save
  );
  route.put(
    "/building-dimension-details/:id",
    validateData.buildingDimensionDetailValidate,
    BuildingDimensionDetailsController.update
  );
  route.delete(
    "/building-dimension-detail/:id",
    BuildingDimensionDetailsController.delete
  );
  //Telecom infrastructure
  route.get("/telecom-infrastructures", TelecomInfrastructureController.getAll);
  route.get("/telecom-infrastructures/:id", TelecomInfrastructureController.get);
  route.get(
    "/project/telecom-infrastructures/:id",
    TelecomInfrastructureController.getByProjectId
  );
  route.get(
    "/telecom-infrastructure-searches",
    TelecomInfrastructureController.search
  );
  route.post(
    "/telecom-infrastructures",
    validateData.telecomValidate,
    TelecomInfrastructureController.save
  );
  route.put(
    "/telecom-infrastructures/:id",
    validateData.telecomValidate,
    TelecomInfrastructureController.update
  );
  route.delete(
    "/telecom-infrastructures/:id",
    TelecomInfrastructureController.delete
  );
  //Generating capacity
  route.get("/generating-capacities", GeneratingCapacityController.getAll);
  route.get("/generating-capacities/:id", GeneratingCapacityController.get);
  route.get(
    "/project/generating-capacities/:id",
    GeneratingCapacityController.getByProjectId
  );
  route.get("/generating-capacity-searches", GeneratingCapacityController.search);
  route.post(
    "/generating-capacities",
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.save
  );
  route.put(
    "/generating-capacities/:id",
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.update
  );
  route.delete("/generating-capacities/:id", GeneratingCapacityController.delete);
  //Turbine detail
  route.get("/turbine-details", TurbineDetailController.getAll);
  route.get("/turbine-details/:id", TurbineDetailController.get);
  route.get(
    "/project/turbine-details/:id",
    TurbineDetailController.getByProjectId
  );
  route.get("/turbine-detail-searches", TurbineDetailController.search);
  route.post(
    "/turbine-details",
    validateData.turbineInfoValidate,
    TurbineDetailController.save
  );
  route.put(
    "/turbine-details/:id",
    validateData.turbineInfoValidate,
    TurbineDetailController.update
  );
  route.delete("/turbine-details/:id", TurbineDetailController.delete);
  //Hydrolectric dam
  route.get("/hydro-electric-dams", HydroElectricDamController.getAll);
  route.get("/hydro-electric-dams/:id", HydroElectricDamController.get);
  route.get(
    "/project/hydro-electric-dams/:id",
    HydroElectricDamController.getByProjectId
  );
  route.get("/hydro-electric-dam-searches", HydroElectricDamController.search);
  route.post(
    "/hydro-electric-dams",
    validateData.hydroElectricDamValidate,
    HydroElectricDamController.save
  );
  route.put(
    "/hydro-electric-dams/:id",
    validateData.hydroElectricDamValidate,
    HydroElectricDamController.update
  );
  route.delete("/hydro-electric-dams/:id", HydroElectricDamController.delete);
  //Spillways detailf
  route.get("/spill-way-details", SpillWaysDetailController.getAll);
  route.get("/spill-way-details/:id", SpillWaysDetailController.get);
  route.get(
    "/project/spill-way-details/:id",
    SpillWaysDetailController.getByProjectId
  );
  route.get("/spill-way-detail-searches", SpillWaysDetailController.search);
  route.post(
    "/spill-way-details",
    validateData.spillWayInfoValidate,
    SpillWaysDetailController.save
  );
  route.put(
    "/spill-way-details/:id",
    validateData.spillWayInfoValidate,
    SpillWaysDetailController.update
  );
  route.delete("/spill-way-details/:id", SpillWaysDetailController.delete);
  //Reservoir detail
  route.get("/reservoir-details", ReservoirDetailsController.getAll);
  route.get("/reservoir-details/:id", ReservoirDetailsController.get);
  route.get(
    "/project/reservoir-details/:id",
    ReservoirDetailsController.getByProjectId
  );
  route.get("/reservoir-detail-searches", ReservoirDetailsController.search);
  route.post(
    "/reservoir-details",
    validateData.reserviorDetailValidate,
    ReservoirDetailsController.save
  );
  route.put(
    "/reservoir-details/:id",
    validateData.reserviorDetailValidate,
    ReservoirDetailsController.update
  );
  route.delete("/reservoir-details/:id", ReservoirDetailsController.delete);
  //Irrigation capacity
  route.get("/irrigation-capacities", IrrigationCapacityController.getAll);
  route.get("/irrigation-capacities/:id", IrrigationCapacityController.get);
  route.get(
    "/project/irrigation-capacities/:id",
    IrrigationCapacityController.getByProjectId
  );
  route.get("/irrigation-capacity-searches", IrrigationCapacityController.search);
  route.post(
    "/irrigation-capacities",
    validateData.irrigationCapacityValidate,
    IrrigationCapacityController.save
  );
  route.put(
    "/irrigation-capacities/:id",
    validateData.irrigationCapacityValidate,
    IrrigationCapacityController.update
  );
  route.delete("/irrigation-capacities/:id", IrrigationCapacityController.delete);

  
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
  route.get("/general-info/:id", ProjectController.getProjectData);
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
    "/project-finance",
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
  route.get("/road-infos/", RoadInfoController.getAll);
  route.get("/road-infos/:id", RoadInfoController.get);
  route.get("/project/road-infos/:id", RoadInfoController.getByProjectId);
  route.get("/road-info-searches", RoadInfoController.search);
  route.post(
    "/road-infos",
    validateData.roadDetailValidate,
    RoadInfoController.save
  );
  route.put(
    "/road-infos/:id",
    validateData.roadDetailValidate,
    RoadInfoController.update
  );
  route.delete("/road-infos/:id", RoadInfoController.delete);

  //road segment
  route.get("/road-segments/", RoadSegmentController.getAll);
  route.get("/road-segments/:id", RoadSegmentController.get);
  route.get("/project/road-segments/:id", RoadSegmentController.getByProjectId);
  route.get("/road-segment-searchs", RoadSegmentController.search);
  route.post(
    "/road-segments",
    validateData.roadSegmentValidate,
    RoadSegmentController.save
  );
  route.put(
    "/road-segments/:id",
    validateData.roadSegmentValidate,
    RoadSegmentController.update
  );
  route.delete("/road-segments/:id", RoadSegmentController.delete);

  //road layer
  route.get("/road-layers/", RoadLayerController.getAll);
  route.get("/road-layers/:id", RoadLayerController.get);
  route.get("/project/road-layers/:id", RoadLayerController.getByProjectId);
  route.get("/road-layer-searches", RoadLayerController.search);
  route.post(
    "/road-layers",
    validateData.roadLayerValidate,
    RoadLayerController.save
  );
  route.put(
    "/road-layers/:id",
    validateData.roadLayerValidate,
    RoadLayerController.update
  );
  route.delete("/road-layers/:id", RoadLayerController.delete);

  //solar energy
  route.get("/solar-energies", SolarEnergyController.getAll);
  route.get("/solar-energies/:id", SolarEnergyController.get);
  route.get("/project/solar-energies/:id", SolarEnergyController.getByProjectId);
  route.get("/solar-enegy-searches", SolarEnergyController.search);
  route.post(
    "/solar-energies",
    validateData.solarEnergyValidate,
    SolarEnergyController.save
  );
  route.put(
    "/solar-energies/:id",
    validateData.solarEnergyValidate,
    SolarEnergyController.update
  );
  route.delete("/solar-energies/:id", SolarEnergyController.delete);

  //wind energy
  route.get("/wind-energies", WindEnergyController.getAll);
  route.get("/wind-energies/:id", WindEnergyController.get);
  route.get("/project/wind-energies/:id", WindEnergyController.getByProjectId);
  route.get("/wind-enegy-searches", WindEnergyController.search);
  route.post(
    "/wind-energies",
    validateData.windEnergyValidate,
    WindEnergyController.save
  );
  route.put(
    "/wind-energies/:id",
    validateData.windEnergyValidate,
    WindEnergyController.update
  );
  route.delete("/wind-energies/:id", WindEnergyController.delete);

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
  route.get("/transformer-types", TransformerTypeController.getAll);
  route.get("/transformer-types/:id", TransformerTypeController.get);
  route.get(
    "/project/transformer-types/:id",
    TransformerTypeController.getByProjectId
  );
  route.get("/transformer-type-searches", TransformerTypeController.search);
  route.post(
    "/transformer-types",
    validateData.transformerTypeValidate,
    TransformerTypeController.save
  );
  route.put(
    "/transformer-types/:id",
    validateData.transformerTypeValidate,
    TransformerTypeController.update
  );
  route.delete("/transformer-types/:id", TransformerTypeController.delete);

  //transmission lines
  route.get("/transmission-lines", TransmissionLineController.getAll);
  route.get("/transmission-lines/:id", TransmissionLineController.get);
  route.get(
    "/project/transmission-lines/:id",
    TransmissionLineController.getByProjectId
  );
  route.get("/transmission-line-searches", TransmissionLineController.search);
  route.post(
    "/transmission-lines",
    validateData.transmissionLineValidate,
    TransmissionLineController.save
  );
  route.put(
    "/transmission-lines/:id",
    validateData.transmissionLineValidate,
    TransmissionLineController.update
  );
  route.delete("/transmission-lines/:id", TransmissionLineController.delete);

  //electric tower
  route.get("/electric-towers", ElectricTowerController.getAll);
  route.get("/electric-towers/:id", ElectricTowerController.get);
  route.get(
    "/project/electric-towers/:id",
    ElectricTowerController.getByProjectId
  );
  route.get("/electric-tower-searches", ElectricTowerController.search);
  route.post(
    "/electric-towers",
    validateData.electricTowerValidate,
    ElectricTowerController.save
  );
  route.put(
    "/electric-towers/:id",
    validateData.electricTowerValidate,
    ElectricTowerController.update
  );
  route.delete("/electric-towers/:id", ElectricTowerController.delete);

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
  route.get("/railway-stations", RailwayStationController.getAll);
  route.get("/railway-stations/:id", RailwayStationController.get);
  route.get(
    "/project/railway-stations/:id",
    RailwayStationController.getByProjectId
  );
  route.get("/railway-station-searches", RailwayStationController.search);
  route.post(
    "/railway-stations",
    validateData.railWayStationValidate,
    RailwayStationController.save
  );
  route.put(
    "/railway-stations/:id",
    validateData.railWayStationValidate,
    RailwayStationController.update
  );
  route.delete("/railway-stations/:id", RailwayStationController.delete);

  //water irrigation dam
  route.get("/water-irrigation-dams", WaterIrrigationDamController.getAll);
  route.get("/water-irrigation-dams/:id", WaterIrrigationDamController.get);
  route.get(
    "/project/water-irrigation-dams/:id",
    WaterIrrigationDamController.getByProjectId
  );
  route.get(
    "/water-irrigation-dam-searches",
    WaterIrrigationDamController.search
  );
  route.post(
    "/water-irrigation-dams",
    validateData.waterIrrigationValidate,
    WaterIrrigationDamController.save
  );
  route.put(
    "/water-irrigation-dams/:id",
    validateData.waterIrrigationValidate,
    WaterIrrigationDamController.update
  );
  route.delete(
    "/water-irrigation-dams/:id",
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
  return route;
};
