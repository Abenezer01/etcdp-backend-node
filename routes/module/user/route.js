const UserController = require("../../../controllers/department/userController.js");
const roleController = require("../../../controllers/department/roleController.js");
const PermissionController = require("../../../controllers/department/permissionController.js");
const positionController = require("../../../controllers/department/positionController.js");
const departmentController = require("../../../controllers/department/departmentController.js");
// const TestController = require("../../../controllers/TestController.js")
//Hr
const EducationStatusController = require("../../../controllers/department/EducationStatusController.js");
const ChildController = require("../../../controllers/department/ChildController.js");
const FamilyStatusController = require("../../../controllers/department/FamilyStatusController.js");
const ContactPersonController = require("../../../controllers/department/ContactPersonController.js");
const JobExperienceController = require("../../../controllers/department/JobExperienceController.js");

const ActivityLogController = require("../../../controllers/department/ActivityLogController.js");
const CenterDocumentController = require("../../../controllers/projects/CenterDocumentController.js");

const validateInput = require("../../../middleware/validate/module/user/validate");
const checkEditable = require("../../../middleware/CheckEditable.js");
const UserDashboardController = require("../../../controllers/department/UserDashboardController.js");

//middleware import
const hasPermission = require("../../../middleware/hasPermission.js");

module.exports = function (express) {
  const route = express.Router();

  //user route

  route.get("/generate", hasPermission('view_stakeholdertype'), PermissionController.generate);

  // route.get("/generate", authorize('PERMISSION_GENERATE'), PermissionController.generate);



  route.get("/password", UserController.getHashed);

  route.get("/users-emails", UserController.getUserEmail);
  route.get("/users", hasPermission('view_user'),UserController.getAll);
  route.get("/users/:id", UserController.get);
  route.get("/user_search/:key", UserController.search);
  route.post("/users", hasPermission('create_user'), validateInput.createUser, UserController.save);
  route.put("/users/:id",hasPermission('update_user'), validateInput.createUser, UserController.update);
  route.delete("/users/:id", hasPermission('delete_user'), UserController.delete);
  route.get("/department-users/:id", UserController.getDepartmentUsers);

  route.post("/account-action/:id/:action", hasPermission('activate_user'), UserController.accountActivation);


  route.post("/assign-user-position", UserController.assignPosition);
  route.get("/disable-user-position/:id", UserController.dePosition);
  route.post("/switch-account", UserController.switchAccount);
  route.get("/user-positions/:id", UserController.getAllUserPositions);
  route.get("/user-check-status/:id", UserController.checkUserStatus);

  route.get("/change-all-password", UserController.changeAllPasswords);
  route.post("/change-password", UserController.changePassword);

  //position route
  route.get("/position-permissions", positionController.givePositionPermissions);

  route.get("/positions", hasPermission('view_position'), positionController.getAll);
  route.get("/positions/:id", hasPermission('view_position') ,positionController.get);
  route.post(
    "/positions",
    hasPermission('create_position'),
    validateInput.positionValidate,
    positionController.save
  );
  route.put("/positions/:id", hasPermission('update_position'), validateInput.positionValidate , positionController.update);
  route.delete("/positions/:id", hasPermission('delete_position'), positionController.delete);


  route.get(
    "/department-positions/:id",
    positionController.getDepartmentPositions
  );
  route.get("/all-positions", positionController.getAllPositions);

  //department route
  route.get("/departments", hasPermission('view_department'), departmentController.getAll);
  route.get("/departments/:id", hasPermission('view_department'),departmentController.get);
  route.post(
    "/departments",
    hasPermission('create_department'),
    validateInput.departmentValidate,
    departmentController.save
  );
  route.put(
    "/departments/:id",
    hasPermission('update_department'),
    [validateInput.departmentValidate, checkEditable.checkEditability],
    departmentController.update
  );
  route.delete("/departments/:id", hasPermission('delete_department'),departmentController.delete);


  route.get("/sub-departments/:id", departmentController.getSubDepartments);
  route.get("/parent-department", departmentController.getParentDepartment);

  route.get("/department-dashboard/:id", departmentController.getDepartmentDashboad);
  route.get("/user-dashboard", departmentController.getUserDashboard);

  route.get("/search-department/:id?", departmentController.getParentOrGivenId);
  route.get("/department-structure", departmentController.getDepartments);
  route.get("/department-structure/:id", departmentController.getDepartments);


  route.get("/department-head/:id", departmentController.getDepartmentHead);
  route.get("/all-parents/:id", departmentController.getToRoot);

  route.get("/center-stat/:id", departmentController.getCenterStat);

  //Role route

  route.get("/default-role", roleController.defaultRole);
  route.get("/default-role-admin", roleController.defaultRoleAdmin);
  route.get("/roles", roleController.getAll);
  route.get("/roles/:id", roleController.get);
  route.get("/role_search", roleController.search);
  route.post("/roles", validateInput.roleValidate, roleController.save);
  route.put("/roles/:id", validateInput.roleValidate, roleController.update);
  route.delete("/roles/:id", roleController.delete);

  //Role route
  route.get("/permissions", hasPermission('view_permission'),PermissionController.getAll);
  route.get("/permissions/:id", hasPermission('view_permission'), PermissionController.get);
  route.post(
    "/permissions",
    hasPermission('create_permission'),
    validateInput.permissionValidate,
    PermissionController.save
  );
  route.put("/permissions/:id", hasPermission('update_permission'), validateInput.permissionValidate,PermissionController.update);
  route.delete("/permissions/:id", hasPermission('delete_permission'), PermissionController.delete);
  
  route.get("/generate-permission", PermissionController.initPermission);
  route.get("/models", PermissionController.getModels);
  route.post("/assign-role-permissions", PermissionController.assignRolePermissions);
  route.get("/assignx", PermissionController.assignRolePermissionsGenerate);
  route.get("/test", PermissionController.test);

  route.get("/role-permissions/:id", PermissionController.getRolePermissions);




  route.get(
    "/grouped-permissions/:id/:module",
    PermissionController.getGroupedPermissions
  );
  route.get(
    "/position-permissions/:id/:action",
    PermissionController.getPermissionsByAction
  );

  route.post(
    "/assign-permissions",
    PermissionController.assignPositionPermissions
  );

  route.post(
    "/assign-position-permissions",
    PermissionController.assignPositionPermissions
  );
  route.get("/user-permissions", PermissionController.getUserPermission);

  route.get(
    "/module-permissions/:module",
    PermissionController.getPermissionsByModule
  );
  route.get("/permission-modules", PermissionController.getPermissionModules);
  route.get("/permission-change", PermissionController.changeModulePermissons);

  route.get("/add-permission-to-model", PermissionController.addPermissionToModel);


  //Photo route
  // route.get("/photos", UserPhotoController.getAll);
  // route.get("/photo/:id", UserPhotoController.get);
  // route.post("/photo/:id", UserPhotoController.save);
  // route.put("/photo/:id", validateInput.userPhotoValidate, UserPhotoController.update);
  // route.delete("/photo/:id", validateInput.userPhotoValidate, UserPhotoController.delete);

  //hr for
  //Role route
  route.get("/education-statuses", hasPermission('view_educationstatus'),EducationStatusController.getAll);
  route.get("/education-statuses/:id", hasPermission('view_educationstatus'), EducationStatusController.get);
  route.post(
    "/education-statuses",
    hasPermission('create_educationstatus'),
    validateInput.educationStatusValidate,
    EducationStatusController.save
  );
  route.put(
    "/education-statuses/:id",
    hasPermission('update_educationstatus'),
    validateInput.educationStatusValidate,
    EducationStatusController.update
  );
  route.delete("/education-statuses/:id", hasPermission('delete_educationstatus'), roleController.delete);

  //child

  route.get("/childs", hasPermission('view_child'),ChildController.getAll);
  route.get("/childs/:id", hasPermission('view_child'), ChildController.get);
  route.post("/childs", hasPermission('create_child'), validateInput.childValidate, ChildController.save);
  route.put("/childs/:id", hasPermission('update_child'), validateInput.childValidate, ChildController.update);
  route.delete("/childs/:id", hasPermission('delete_child'), ChildController.delete);

  //family status
  route.get("/family-statuses", hasPermission('view_familystatus'), FamilyStatusController.getAll);
  route.get("/family-statuses/:id", hasPermission('view_familystatus'), FamilyStatusController.get);
  route.post(
    "/family-statuses",
    hasPermission('create_familystatus'),
    validateInput.familyStatusValidate,
    FamilyStatusController.save
  );
  route.put(
    "/family-statuses/:id",
    hasPermission('update_familystatus'),
    validateInput.familyStatusValidate,
    FamilyStatusController.update
  );
  route.delete("/family-statuses/:id", hasPermission('delete_familystatus'), FamilyStatusController.delete);

  //Role route
  route.get("/contact-persons", hasPermission('view_contactperson'), ContactPersonController.getAll);
  route.get("/contact-persons/:id", hasPermission('view_contactperson'), ContactPersonController.get);
  route.post(
    "/contact-persons",
    hasPermission('create_contactperson'),
    validateInput.contactPersonValidate,
    ContactPersonController.save
  );
  route.put(
    "/contact-persons/:id",
    hasPermission('update_contactperson'),
    validateInput.contactPersonValidate,
    ContactPersonController.update
  );
  route.delete("/contact-persons/:id", hasPermission('delete_contactperson'), ContactPersonController.delete);
  //job experience

  //Role route
  route.get("/job-experiences", hasPermission('view_jobexperience'),JobExperienceController.getAll);
  route.get("/job-experiences/:id", hasPermission('view_jobexperience'), JobExperienceController.get);
  route.post(
    "/job-experiences",
    hasPermission('create_jobexperience'),
    validateInput.jobExperienceValidate,
    JobExperienceController.save
  );
  route.put(
    "/job-experiences/:id",
    hasPermission('update_jobexperience'),
    validateInput.jobExperienceValidate,
    JobExperienceController.update
  );
  route.delete("/job-experiences/:id", hasPermission('delete_jobexperience'), JobExperienceController.delete);

  //user hr routing

  route.get(
    "/education-statuses/user/:id",
    EducationStatusController.getByUserId
  );
  route.get("/family-statuses/user/:id", FamilyStatusController.getByUserId);
  route.get("/contact-persons/user/:id", ContactPersonController.getByUserId);
  route.get("/job-experiences/user/:id", JobExperienceController.getByUserId);
  //test
  route.post("/change-language", UserController.changeLanguage);
  // route.get("/test", departmentController.test);

  // ActivityLog routes with validation
  route.get("/activity-logs", hasPermission('view_activitylog'), ActivityLogController.getAll);
  route.get("/activity-logs/:id", hasPermission('view_activitylog'), ActivityLogController.get);
  route.post("/activity-logs", hasPermission('create_activitylog'), validateInput.activityLogValidate, ActivityLogController.save);
  route.put("/activity-logs/:id", hasPermission('update_activitylog'), validateInput.activityLogValidate, ActivityLogController.update);
  route.delete("/activity-logs/:id", hasPermission('delete_activitylog'), ActivityLogController.delete);

   //CenterDocument routes with validation
  route.get("/center-documents", hasPermission('view_centerdocument'), CenterDocumentController.getAll);
  route.get("/center-documents/:id", hasPermission('view_centerdocument'), CenterDocumentController.get);
  route.post("/center-documents", hasPermission('create_centerdocument'),validateInput.CenterDocumentValidate, CenterDocumentController.save);
  route.put("/center-documents/:id", hasPermission('update_centerdocument'),validateInput.CenterDocumentValidate, CenterDocumentController.update);
  route.delete("/center-documents/:id", hasPermission('delete_centerdocument'), CenterDocumentController.delete);



  // user dashboard

  route.get("/user-dashboard/contractors-split", UserDashboardController.getContractorsSplit);
  route.get("/user-dashboard/contractors-grade-split/:id", UserDashboardController.getContractorsGradeSplit);

  return route;
};
