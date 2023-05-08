const DashboardController = require("../../../controllers/analytics/DashboardController");
const validateData = require("../../../middleware/validate/module/auth/validate");
module.exports = function (express) {
  const route = express.Router();

  //analysis and dashboard
  route.get(
    "/general-analytics/:module/:id",
    DashboardController.getGeneralAnalysis
  );
  route.get(
    "/general-analytics-category/:module/:id",
    DashboardController.getGeneralAnalysisCategory
  );

  route.get(
    "/general-analytics-departments/:module/:id",
    DashboardController.getGeneralAnalysisDepartments
  );
  route.get(
    "/general-analytics-departments-by-category/:module/:id",
    DashboardController.getGeneralAnalysisDepartmentsByCategory
  );

  // route.get(
  //   "/type-analytics/:module",
  //   DashboardController.getModuleTypesAnalysis
  // );
  route.get(
    "/type-analytics/stakeholder",
    DashboardController.getStakeholderTypesAnalysis
  );
  // );
  route.get(
    "/type-analytics/project",
    DashboardController.getProjectTypesAnalysis
  );

  route.get(
    "/type-analytics/resource",
    DashboardController.getResourceTypesAnalysis
  );

  route.get(
    "/type-analytics/document",
    DashboardController.getDocumentTypesAnalysis
  );

  route.get(
    "/each-type-analytics/:module/:id",
    DashboardController.getModuleEachTypesAnalysis
  );
  //not used
  route.get(
    "/each-category-analytics/:module/:id",
    DashboardController.getModuleEachCategoriesAnalysis
  );

  route.get(
    "/type-categories/:module/:id",
    DashboardController.getCategoriesByTypeId
  );
  route.get(
    "/category-sub-categories/:module/:id",
    DashboardController.getSubCategoriesByModuleCategoryId
  );

  route.get(
    "/sub-category-departments/:module/:id",
    DashboardController.getGeneralAnalysisSubCategoryDepartments
  );

  route.get(
    "/project-general-financial-analytics",
    DashboardController.getProjectGeneralFinancialAnalysis
  );

  // route.get(
  //   "/project-type-project-finance/:id",
  //   DashboardController.getProjectTypeFinancialInformation
  // );
  // route.get(
  //   "/project-category-project-finance/:id",
  //   DashboardController.getProjectCategoryFinancialInformation
  // );


  route.get(
    "/project-type-departments-project-finance/:id",
    DashboardController.getProjectTypeFinancialInformationDepartments
  );

  route.get(
    "/project-type-categories-finance/:id",
    DashboardController.getProjectTypeCategoriesFinancialAnalysis
  );

  route.get(
    "/project-category-location-information/:id",
    DashboardController.getProjectCategoryLocationInformation
  );
  

  route.get(
    "/stakeholder-category-location-information/:id",
    DashboardController.getStakeholderCategoryLocationInformation
  );
  
  
  route.get(
    "/project-annual-plan-analysis/:id/:year",
    DashboardController.getProjectYearlyFinancialPlan
  );

  route.get(
    "/project-annual-report-analysis/:id/:year",
    DashboardController.getProjectYearlyFinancialReport
  );

  route.get(
    "/project-annual-financial-performance/:id/:year/:attr",
    DashboardController.getProjectYearlyPerformance
  );

  route.get(
    "/project-annual-cost-schedule-variance/:id/:year",
    DashboardController.getProjectAnnualCostAndScheduleVariances
  );


  
  

  

  //  route.get("/note/:id", DashboardController.get);
  //  route.put("/note/:id", DashboardController.update);
  //  route.delete("/note/:id", DashboardController.delete);
  //  route.get("/model-notes/:id", DashboardController.getNoteByModelId);
  return route;
};
