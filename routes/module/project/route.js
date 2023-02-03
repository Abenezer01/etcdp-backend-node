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
    return route;
};