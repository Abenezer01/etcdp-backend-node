const ProjectTypeController = require("../../../controllers/project/ProjectTypeController.js")
const ProjectCategoryController = require("../../../controllers/project/ProjectCategoryController.js")
const ProjectSubCategoryController = require("../../../controllers/project/ProjectSubCategoryController.js")
const StatusController = require("../../../controllers/project/StatusController.js")
const ProjectStatusController = require("../../../controllers/project/ProjectStatusController.js")
const ProjectController = require("../../../controllers/project/ProjectController.js")
const ProjectStakeholderController = require("../../../controllers/project/ProjectStakeholderController.js")
const ProjectPlanController = require("../../../controllers/project/ProjectPlanController.js")
const ProjectDocumentController = require("../../../controllers/project/ProjectDocumentController.js")
const ConstructionResourceController = require("../../../controllers/project/ConstructionResourceController.js")
const BuildingEnvelopMaterialController = require("../../../controllers/project/BuildingEnvelopMaterialController.js")
const BuildingDimensionDetailsController = require("../../../controllers/project/BuildingDimensionDetailsController.js")
const TelecomInfrastructureController = require("../../../controllers/project/TelecomInfrastructureController.js")
const GeneratingCapacityController = require("../../../controllers/project/GeneratingCapacityController.js")
const TurbineDetailController = require("../../../controllers/project/TurbineDetailController.js")
const HydroElectricDamController = require("../../../controllers/project/HydroElectricDamController.js")
const SpillWaysDetailController = require("../../../controllers/project/SpillWaysDetailController.js")
const ReservoirDetailsController = require("../../../controllers/project/ReservoirDetailsController.js")
const validateData = require("../../../middleware/validate/module/project/validate")

// const ProjectController = require("../../../controllers/project/ProjectController.js")
// const ProjectCategoryController = require("../../../controllers/project/ProjectCategoryController.js")
// const ProjectSubCategoryController = require("../../../controllers/project/ProjectSubCategoryController.js")
const ProjectFinanceController = require("../../../controllers/project/ProjectFinanceController.js")
const ProjectVariationController = require("../../../controllers/project/ProjectVariationController.js")
const ProjectTimeController = require("../../../controllers/project/ProjectTimeController.js")
const ProjectBondController = require("../../../controllers/project/ProjectBondController.js")
const RoadInfoController = require("../../../controllers/project/RoadInfoController.js")
const RoadSegmentController = require("../../../controllers/project/RoadSegmentController.js")
const RoadLayerController = require("../../../controllers/project/RoadLayerController.js")

const SolarEnergyController = require("../../../controllers/project/SolarEnergyController.js")
const WindEnergyController = require("../../../controllers/project/WindEnergyController.js")
const TransformerController = require("../../../controllers/project/TransformerController.js")
const TransformerTypeController = require("../../../controllers/project/TransformerTypeController.js")

const TransmissionLineController = require("../../../controllers/project/TransmissionLineController.js")
const ElectricTowerController = require("../../../controllers/project/ElectricTowerController.js")
const RailwayController = require("../../../controllers/project/RailwayController.js")
const RailwayStationController = require("../../../controllers/project/RailwayStationController.js")

const WaterIrrigationDamController = require("../../../controllers/project/WaterIrrigationDamController.js")
const PortController = require("../../../controllers/project/PortController.js")


// const middleware = require("../../../middleware/middleware")
// const stakeCategoryValidate = require("../../../middleware/validate")

module.exports = function(express) {
    const route = express.Router();

    //project route

    route.get("/project-type", ProjectTypeController.getAll);
    route.get("/project-type/:id", ProjectTypeController.get);
    route.get("/project-type-search", ProjectTypeController.search);
    route.post("/project-type", validateData.projectTypeValidate, ProjectTypeController.save);
    route.put("/project-type/:id", validateData.projectTypeValidate, ProjectTypeController.update);
    route.delete("/project-type/:id", ProjectTypeController.delete);
    //project category
    route.get("/project-category", ProjectCategoryController.getAll);
    route.get("/project-category/:id", ProjectCategoryController.get);
    route.get("/project-category-search", ProjectCategoryController.search);
    route.get("/project-category-type/:id", ProjectCategoryController.getAllProCatByTypeId);
    route.post("/project-category", validateData.projectCategoryValidate, ProjectCategoryController.save);
    route.put("/project-category/:id", validateData.projectCategoryValidate, ProjectCategoryController.update);
    route.delete("/project-category/:id", ProjectCategoryController.delete);
    //project subcategory
    route.get("/project-sub-category", ProjectSubCategoryController.getAll);
    route.get("/project-sub-category/:id", ProjectSubCategoryController.get);
    route.get("/project-sub-category-search", ProjectSubCategoryController.search);
    route.post("/project-sub-category", validateData.projectSubCategoryValidate, ProjectSubCategoryController.save);
    route.put("/project-sub-category/:id", validateData.projectSubCategoryValidate, ProjectSubCategoryController.update);
    route.delete("/project-sub-category/:id", ProjectSubCategoryController.delete);
    //status
    route.get("/status", StatusController.getAll);
    route.get("/status/:id", StatusController.get);
    route.get("/status-search", StatusController.search);
    route.post("/status", validateData.statusValidate, StatusController.save);
    route.put("/status/:id", validateData.statusValidate, StatusController.update);
    route.delete("/status/:id", StatusController.delete);
    //Project status
    route.get("/project-status", ProjectStatusController.getAll);
    route.get("/project-status/:id", ProjectStatusController.get);
    route.get("/project-status-search", ProjectStatusController.search);
    route.post("/project-status", validateData.projectStatusValidate, ProjectStatusController.save);
    route.put("/project-status/:id", validateData.projectStatusValidate, ProjectStatusController.update);
    route.delete("/project-status/:id", ProjectStatusController.delete);
    //Project registration
    route.get("/project", ProjectController.getAll);
    route.get("/project/:id", ProjectController.get);
    route.get("/project-search", ProjectController.search);
    route.post("/project", validateData.projectValidate, ProjectController.save);
    route.put("/project/:id", validateData.projectValidate, ProjectController.update);
    route.delete("/project/:id", ProjectController.delete);
    //Project stakeholder
    route.get("/project-stakeholder", ProjectStakeholderController.getAll);
    route.get("/project-stakeholder/:id", ProjectStakeholderController.get);
    route.get("/project-stakeholder-search", ProjectStakeholderController.search);
    route.post("/project-stakeholder", validateData.projectStakeholderValidate, ProjectStakeholderController.save);
    route.put("/project-stakeholder/:id", validateData.projectStakeholderValidate, ProjectStakeholderController.update);
    route.delete("/project-stakeholder/:id", ProjectStakeholderController.delete);
    //Project plan
    route.get("/project-plan", ProjectPlanController.getAll);
    route.get("/project-plan/:id", ProjectPlanController.get);
    route.get("/project-plan-search", ProjectPlanController.search);
    route.post("/project-plan", validateData.projectPlanValidate, ProjectPlanController.save);
    route.put("/project-plan/:id", validateData.projectPlanValidate, ProjectPlanController.update);
    route.delete("/project-plan/:id", ProjectPlanController.delete);
    //Project document
    route.get("/project-document", ProjectDocumentController.getAll);
    route.get("/project-document/:id", ProjectDocumentController.get);
    route.get("/project-document-search", ProjectDocumentController.search);
    route.post("/project-document", validateData.projectDocumentValidate, ProjectDocumentController.save);
    route.put("/project-document/:id", validateData.projectDocumentValidate, ProjectDocumentController.update);
    route.delete("/project-document/:id", ProjectDocumentController.delete);
    //Construction resource
    route.get("/construction-resource", ConstructionResourceController.getAll);
    route.get("/construction-resource/:id", ConstructionResourceController.get);
    route.get("/construction-resource-search", ConstructionResourceController.search);
    route.post("/construction-resource", validateData.constructionResourceValidate, ConstructionResourceController.save);
    route.put("/construction-resource/:id", validateData.constructionResourceValidate, ConstructionResourceController.update);
    route.delete("/construction-resource/:id", ConstructionResourceController.delete);
    //Building envelop material
    route.get("/building-envelop-material", BuildingEnvelopMaterialController.getAll);
    route.get("/building-envelop-material/:id", BuildingEnvelopMaterialController.get);
    route.get("/building-envelop-material-search", BuildingEnvelopMaterialController.search);
    route.post("/building-envelop-material", validateData.buildingEnvelopMaterialValidate, BuildingEnvelopMaterialController.save);
    route.put("/building-envelop-material/:id", validateData.buildingEnvelopMaterialValidate, BuildingEnvelopMaterialController.update);
    route.delete("/building-envelop-material/:id", BuildingEnvelopMaterialController.delete);
    //Building dimension details
    route.get("/building-dimension-detail", BuildingDimensionDetailsController.getAll);
    route.get("/building-dimension-detail/:id", BuildingDimensionDetailsController.get);
    route.get("/building-dimension-detail-search", BuildingDimensionDetailsController.search);
    route.post("/building-dimension-detail", validateData.buildingDimensionDetailValidate, BuildingDimensionDetailsController.save);
    route.put("/building-dimension-detail/:id", validateData.buildingDimensionDetailValidate, BuildingDimensionDetailsController.update);
    route.delete("/building-dimension-detail/:id", BuildingDimensionDetailsController.delete);
    //Telecom infrastructure
    route.get("/telecom-infrastructure", TelecomInfrastructureController.getAll);
    route.get("/telecom-infrastructure/:id", TelecomInfrastructureController.get);
    route.get("/telecom-infrastructure-search", TelecomInfrastructureController.search);
    route.post("/telecom-infrastructure", validateData.telecomValidate, TelecomInfrastructureController.save);
    route.put("/telecom-infrastructure/:id", validateData.telecomValidate, TelecomInfrastructureController.update);
    route.delete("/telecom-infrastructure/:id", TelecomInfrastructureController.delete);
    //Generating capacity
    route.get("/generating-capacity", GeneratingCapacityController.getAll);
    route.get("/generating-capacity/:id", GeneratingCapacityController.get);
    route.get("/generating-capacity-search", GeneratingCapacityController.search);
    route.post("/generating-capacity", validateData.generatingCapacityValidate, GeneratingCapacityController.save);
    route.put("/generating-capacity/:id", validateData.generatingCapacityValidate, GeneratingCapacityController.update);
    route.delete("/generating-capacity/:id", GeneratingCapacityController.delete);
    //Turbine detail
    route.get("/turbine-detail", TurbineDetailController.getAll);
    route.get("/turbine-detail/:id", TurbineDetailController.get);
    route.get("/turbine-detail-search", TurbineDetailController.search);
    route.post("/turbine-detail", validateData.turbineInfoValidate, TurbineDetailController.save);
    route.put("/turbine-detail/:id", validateData.turbineInfoValidate, TurbineDetailController.update);
    route.delete("/turbine-detail/:id", TurbineDetailController.delete);
    //Hydrolectric dam
    route.get("/hydro-electric-dam", HydroElectricDamController.getAll);
    route.get("/hydro-electric-dam/:id", HydroElectricDamController.get);
    route.get("/hydro-electric-dam-search", HydroElectricDamController.search);
    route.post("/hydro-electric-dam", validateData.hydroElectricDamValidate, HydroElectricDamController.save);
    route.put("/hydro-electric-dam/:id", validateData.hydroElectricDamValidate, HydroElectricDamController.update);
    route.delete("/hydro-electric-dam/:id", HydroElectricDamController.delete);
    //Spillways detail
    route.get("/spill-way-detail", SpillWaysDetailController.getAll);
    route.get("/spill-way-detail/:id", SpillWaysDetailController.get);
    route.get("/spill-way-detail-search", SpillWaysDetailController.search);
    route.post("/spill-way-detail", validateData.spillWayInfoValidate, SpillWaysDetailController.save);
    route.put("/spill-way-detail/:id", validateData.spillWayInfoValidate, SpillWaysDetailController.update);
    route.delete("/spill-way-detail/:id", SpillWaysDetailController.delete);
    //Reservoir detail
    route.get("/reservoir-detail", ReservoirDetailsController.getAll);
    route.get("/reservoir-detail/:id", ReservoirDetailsController.get);
    route.get("/reservoir-detail-search", ReservoirDetailsController.search);
    route.post("/reservoir-detail", validateData.reserviorDetailValidate, ReservoirDetailsController.save);
    route.put("/reservoir-detail/:id", validateData.reserviorDetailValidate, ReservoirDetailsController.update);
    route.delete("/reservoir-detail/:id", ReservoirDetailsController.delete);

    route.get("/project/", ProjectController.getAll);
    route.get("/project/:id", ProjectController.get);
    route.get("/project-search", ProjectController.search);
    route.post("/project", ProjectController.save);
    route.put("/project/:id", ProjectController.update);
    route.delete("/project/:id", ProjectController.delete);

    //project category
    route.get("/project-category/", ProjectCategoryController.getAll);
    route.get("/project-category/:id", ProjectCategoryController.get);
    route.get("/project-category-search", ProjectCategoryController.search);
    route.post("/project-category", ProjectCategoryController.save);
    route.put("/project-category/:id", ProjectCategoryController.update);
    route.delete("/project-category/:id", ProjectCategoryController.delete);


    //projec subcategory
    route.get("/project-sub-category/", ProjectSubCategoryController.getAll);
    route.get("/project-sub-category/:id", ProjectSubCategoryController.get);
    route.get("/project-sub-category-search", ProjectSubCategoryController.search);
    route.post("/project-sub-category", ProjectSubCategoryController.save);
    route.put("/project-sub-category/:id", ProjectSubCategoryController.update);
    route.delete("/project-sub-category/:id", ProjectSubCategoryController.delete);


    //project finance route
    route.get("/project-finance/", ProjectFinanceController.getAll);
    route.get("/project-finance/:id", ProjectFinanceController.get);
    route.get("/project-finance-search", ProjectFinanceController.search);
    route.post("/project-finance", ProjectFinanceController.save);
    route.put("/project-finance/:id", ProjectFinanceController.update);
    route.delete("/project-finance/:id", ProjectFinanceController.delete);


    //project variation route
    route.get("/project-variation/", ProjectVariationController.getAll);
    route.get("/project-variation/:id", ProjectVariationController.get);
    route.get("/project-variation-search", ProjectVariationController.search);
    route.post("/project-variation", ProjectVariationController.save);
    route.put("/project-variation/:id", ProjectVariationController.update);
    route.delete("/project-variation/:id", ProjectVariationController.delete);

    //project time
    route.get("/project-time/", ProjectTimeController.getAll);
    route.get("/project-time/:id", ProjectTimeController.get);
    route.get("/project-time-search", ProjectTimeController.search);
    route.post("/project-time", ProjectTimeController.save);
    route.put("/project-time/:id", ProjectTimeController.update);
    route.delete("/project-time/:id", ProjectTimeController.delete);

    //project bond
    route.get("/project-bond/", ProjectBondController.getAll);
    route.get("/project-bond/:id", ProjectBondController.get);
    route.get("/project-bond-search", ProjectBondController.search);
    route.post("/project-bond", ProjectBondController.save);
    route.put("/project-bond/:id", ProjectBondController.update);
    route.delete("/project-bond/:id", ProjectBondController.delete);

    //road info
    route.get("/road-info/", RoadInfoController.getAll);
    route.get("/road-info/:id", RoadInfoController.get);
    route.get("/road-info-search", RoadInfoController.search);
    route.post("/road-info", RoadInfoController.save);
    route.put("/road-info/:id", RoadInfoController.update);
    route.delete("/road-info/:id", RoadInfoController.delete);

    //road segment
    route.get("/road-segment/", RoadSegmentController.getAll);
    route.get("/road-segment/:id", RoadSegmentController.get);
    route.get("/road-segment-search", RoadSegmentController.search);
    route.post("/road-segment", RoadSegmentController.save);
    route.put("/road-segment/:id", RoadSegmentController.update);
    route.delete("/road-segment/:id", RoadSegmentController.delete);

    //road layer
    route.get("/road-layer/", RoadLayerController.getAll);
    route.get("/road-layer/:id", RoadLayerController.get);
    route.get("/road-layer-search", RoadLayerController.search);
    route.post("/road-layer", RoadLayerController.save);
    route.put("/road-layer/:id", RoadLayerController.update);
    route.delete("/road-layer/:id", RoadLayerController.delete);

    //solar energy
    route.get("/solar-energy", SolarEnergyController.getAll);
    route.get("/solar-energy/:id", SolarEnergyController.get);
    route.get("/solar-enegy-search", SolarEnergyController.search);
    route.post("/solar-energy", SolarEnergyController.save);
    route.put("/solar-energy/:id", SolarEnergyController.update);
    route.delete("/solar-energy/:id", SolarEnergyController.delete);

    //wind energy
    route.get("/wind-energy", WindEnergyController.getAll);
    route.get("/wind-energy/:id", WindEnergyController.get);
    route.get("/wind-enegy-search", WindEnergyController.search);
    route.post("/wind-energy", WindEnergyController.save);
    route.put("/wind-energy/:id", WindEnergyController.update);
    route.delete("/wind-energy/:id", WindEnergyController.delete);

    //transformer
    route.get("/transformer", TransformerController.getAll);
    route.get("/transformer/:id", TransformerController.get);
    route.get("/transformer-search", TransformerController.search);
    route.post("/transformer", TransformerController.save);
    route.put("/transformer/:id", TransformerController.update);
    route.delete("/transformer/:id", TransformerController.delete);

    //transformer type
    route.get("/transformer-type", TransformerTypeController.getAll);
    route.get("/transformer-type/:id", TransformerTypeController.get);
    route.get("/transformer-type-search", TransformerTypeController.search);
    route.post("/transformer-type", TransformerTypeController.save);
    route.put("/transformer-type/:id", TransformerTypeController.update);
    route.delete("/transformer-type/:id", TransformerTypeController.delete);


    //transmission lines
    route.get("/transmission-line", TransmissionLineController.getAll);
    route.get("/transmission-line/:id", TransmissionLineController.get);
    route.get("/transmission-line-search", TransmissionLineController.search);
    route.post("/transmission-line", TransmissionLineController.save);
    route.put("/transmission-line/:id", TransmissionLineController.update);
    route.delete("/transmission-line/:id", TransmissionLineController.delete);

    //electric tower
    route.get("/electric-tower", ElectricTowerController.getAll);
    route.get("/electric-tower/:id", ElectricTowerController.get);
    route.get("/electric-tower-search", ElectricTowerController.search);
    route.post("/electric-tower", ElectricTowerController.save);
    route.put("/electric-tower/:id", ElectricTowerController.update);
    route.delete("/electric-tower/:id", ElectricTowerController.delete);

    //electric tower
    route.get("/railway", RailwayController.getAll);
    route.get("/railway/:id", RailwayController.get);
    route.get("/railway-search", RailwayController.search);
    route.post("/railway", RailwayController.save);
    route.put("/railway/:id", RailwayController.update);
    route.delete("/railway/:id", RailwayController.delete);

    //railway station
    route.get("/railway-station", RailwayStationController.getAll);
    route.get("/railway-station/:id", RailwayStationController.get);
    route.get("/railway-station-search", RailwayStationController.search);
    route.post("/railway-station", RailwayStationController.save);
    route.put("/railway-station/:id", RailwayStationController.update);
    route.delete("/railway-station/:id", RailwayStationController.delete);


    //water irrigation dam
    route.get("/water-irrigation-dam", WaterIrrigationDamController.getAll);
    route.get("/water-irrigation-dam/:id", WaterIrrigationDamController.get);
    route.get("/water-irrigation-dam-search", WaterIrrigationDamController.search);
    route.post("/water-irrigation-dam", WaterIrrigationDamController.save);
    route.put("/water-irrigation-dam/:id", WaterIrrigationDamController.update);
    route.delete("/water-irrigation-dam/:id", WaterIrrigationDamController.delete);

    //port
    route.get("/port", PortController.getAll);
    route.get("/port/:id", PortController.get);
    route.get("/port", PortController.search);
    route.post("/port", PortController.save);
    route.put("/port/:id", PortController.update);
    route.delete("/port/:id", PortController.delete);



    return route;
};