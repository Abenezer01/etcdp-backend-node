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
  route.get("/generatingcapacities", GeneratingCapacityController.getAll);
  route.get("/generatingcapacities/:id", GeneratingCapacityController.get);
  route.get(
    "/project/generatingcapacities/:id",
    GeneratingCapacityController.getByProjectId
  );
  route.get("/generating-capacity-searches", GeneratingCapacityController.search);
  route.post(
    "/generatingcapacities",
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.save
  );
  route.put(
    "/generatingcapacities/:id",
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.update
  );
  route.delete("/generatingcapacities/:id", GeneratingCapacityController.delete);
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
  route.get("/road-segment-searchs", RoadSegmentController.search);
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
  route.get("/solarenergies", SolarEnergyController.getAll);
  route.get("/solarenergies/:id", SolarEnergyController.get);
  route.get("/project/solarenergies/:id", SolarEnergyController.getByProjectId);
  route.get("/solar-enegy-searches", SolarEnergyController.search);
  route.post(
    "/solarenergies",
    validateData.solarEnergyValidate,
    SolarEnergyController.save
  );
  route.put(
    "/solarenergies/:id",
    validateData.solarEnergyValidate,
    SolarEnergyController.update
  );
  route.delete("/solarenergies/:id", SolarEnergyController.delete);

  //wind energy
  route.get("/windenergies", WindEnergyController.getAll);
  route.get("/windenergies/:id", WindEnergyController.get);
  route.get("/project/windenergies/:id", WindEnergyController.getByProjectId);
  route.get("/wind-enegy-searches", WindEnergyController.search);
  route.post(
    "/windenergies",
    validateData.windEnergyValidate,
    WindEnergyController.save
  );
  route.put(
    "/windenergies/:id",
    validateData.windEnergyValidate,
    WindEnergyController.update
  );
  route.delete("/windenergies/:id", WindEnergyController.delete);

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
  return route;
};
