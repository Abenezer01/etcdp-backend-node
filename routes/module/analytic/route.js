const DashboardController = require("../../../controllers/analytics/DashboardController");
const authRequired = require("../../../controllers/utils/auth-required");
module.exports = function (express) {
  const route = express.Router();
  //analysis and dashboard
  route.get(
    "/general-analytics/:module/:id", authRequired, 
    DashboardController.getGeneralAnalysis
  );
  route.get(
    "/general-analytics-category/:module/:id", authRequired, 
    DashboardController.getGeneralAnalysisCategory
  );

  route.get(
    "/type-distribution-department/:module/:id", authRequired, 
    DashboardController.getDepartmentDistributionPerType
  );
  route.get(
    "/category-distribution-department/:module/:id", authRequired, 
    DashboardController.getDepartmentDistributionPerCategory
  );
  //used
  route.get(
    "/subcategory-distribution-department/:module/:id", authRequired,
    DashboardController.getDepartmentDistributionPerSubCategory
  );

  

  // route.get(
  //   "/type-analytics/:module",
  //   DashboardController.getModuleTypesAnalysis
  // );
  route.get(
    "/type-analytics/stakeholder", authRequired, 
    DashboardController.getStakeholderTypesAnalysis
  );
  // );
  route.get(
    "/type-analytics/project", authRequired, 
    DashboardController.getProjectTypesAnalysis
  );

  route.get(
    "/type-analytics/resource", authRequired, 
    DashboardController.getResourceTypesAnalysis
  );

  route.get(
    "/type-analytics/document", authRequired, 
    DashboardController.getDocumentTypesAnalysis
  );

  route.get(
    "/each-type-analytics/:module/:id", authRequired, 
    DashboardController.getModuleEachTypesAnalysis
  );
  //not used
  route.get(
    "/each-category-analytics/:module/:id", authRequired,
    DashboardController.getModuleEachCategoriesAnalysis
  );

  route.get(
    "/type-categories/:module/:id", authRequired,
    DashboardController.getCategoriesByTypeId
  );
  route.get(
    "/category-sub-categories/:module/:id", authRequired,   
    DashboardController.getSubCategoriesByModuleCategoryId
  );

  

  route.get(
    "/project-general-financial-analytics", authRequired,
    DashboardController.getProjectGeneralFinancialAnalysis
  );

  route.get(
    "/project-type-project-finance/:id", authRequired,
    DashboardController.getProjectTypeFinancialInformation
  );

  route.get(
    "/project-category-project-finance/:id", authRequired,
    DashboardController.getProjectTypeFinancialInformation
  );
  
  // route.get(
  //   "/project-category-project-finance/:id",
  //   DashboardController.getProjectCategoryFinancialInformation
  // );


  route.get(
    "/project-category-departments-finance/:id", authRequired,
    DashboardController.getProjectCategoryFinancialInformationDepartments
  );

  

  route.get(
    "/project-type-category-departments-plan-report/:id", authRequired,
    DashboardController.getProjectTypeOrCategoryDepartmentStatus
  );
  route.get(
    "/project-category-departments-plan/:id", authRequired,
    DashboardController.getProjectCategoryProjectPlanDepartments
  );

  route.get(
    "/project-category-departments-report/:id", authRequired,
    DashboardController.getProjectCategoryProjectReportDepartments
  );
  

  route.get(
    "/project-type-categories-finance/:id", authRequired,
    DashboardController.getProjectTypeCategoriesFinancialAnalysis
  );

  route.get(
    "/project-category-location-information/:id", authRequired,
    DashboardController.getProjectCategoryLocationInformation
  );
  

  route.get(
    "/stakeholder-category-location-information/:id", authRequired,
    DashboardController.getStakeholderCategoryLocationInformation
  );
  
  
  route.get(
    "/project-annual-plan-analysis/:id/:year", authRequired,
    DashboardController.getProjectYearlyFinancialPlan
  );

  route.get(
    "/project-annual-report-analysis/:id/:year", authRequired,
    DashboardController.getProjectYearlyFinancialReport
  );

  route.get(
    "/project-annual-financial-performance/:attr/:id?", authRequired,
    DashboardController.getProjectYearlyPerformance
  );

   route.get(
    "/project-annual-cost-schedule-variance/:id?", authRequired, 
    DashboardController.getProjectAnnualCostAndScheduleVariances
  );

  //user departments
  route.get('/user-departments', authRequired, DashboardController.getUserDepartments);
  
  // route.get(
  //   "/project-annual-financial-performance/:id/:year/:attr/cpm",
  //   DashboardController.getAllProjectAnnualFinancial
  // );
  // all-projects-yearly-financial/:year/:attr"
  
 
  
  route.get(
    "/project-catagory-mapping/:id", authRequired, DashboardController.getCategoryMapping);
  
  return route;
};
