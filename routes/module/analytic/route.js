const DashboardController = require("../../../controllers/analytics/DashboardController")
const validateData = require("../../../middleware/validate/module/auth/validate")
module.exports = function(express) {
    const route = express.Router();

     //analysis and dashboard
     route.get("/general-analytics/:module/:id", DashboardController.getGeneralAnalysis);
     route.get("/general-analytics-category/:module/:id", DashboardController.getGeneralAnalysisCategory);

     route.get("/general-analytics-departments/:module/:id", DashboardController.getGeneralAnalysisDepartments);
     route.get("/general-analytics-departments-by-category/:module/:id", DashboardController.getGeneralAnalysisDepartmentsByCategory);

     route.get("/type-analytics/:module", DashboardController.getModuleTypesAnalysis);
     

     route.get("/each-type-analytics/:module/:id", DashboardController.getModuleEachTypesAnalysis);
     //not used
     route.get("/each-category-analytics/:module/:id", DashboardController.getModuleEachCategoriesAnalysis);

     route.get("/type-categories/:module/:id", DashboardController.getCategoriesByTypeId);
     route.get("/type-sub-categories/:module/:id", DashboardController.getSubCategoriesByModuleCategoryId);
     

     

    //  route.get("/note/:id", DashboardController.get);
    //  route.put("/note/:id", DashboardController.update);
    //  route.delete("/note/:id", DashboardController.delete);
    //  route.get("/model-notes/:id", DashboardController.getNoteByModelId);
    return route;
};