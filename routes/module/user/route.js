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

const validateInput = require("../../../middleware/validate/module/user/validate");
const checkEditable = require("../../../middleware/CheckEditable.js");
module.exports = function (express) {
  const route = express.Router();

  //user route
  
  
  route.get("/password", UserController.getHashed);

  route.get("/users-emails", UserController.getUserEmail);
  route.get("/users", UserController.getAll);
  route.get("/users/:id", UserController.get);
  route.get("/user_search/:key", UserController.search);
  route.post("/users", validateInput.createUser, UserController.save);
  route.put("/users/:id", validateInput.createUser, UserController.update);
  route.delete("/users/:id", UserController.delete);
  route.get("/department-users/:id", UserController.getDepartmentUsers);

  route.put("/account-activate/:id", validateInput.createUser, UserController.activateAccount);
  route.put("/account-deactivate/:id", validateInput.createUser, UserController.deactivateAccount);


  route.post("/assign-user-position", UserController.assignPosition);
  route.get("/disable-user-position/:id", UserController.dePosition);
  route.post("/switch-account", UserController.switchAccount);
  route.get("/user-positions/:id", UserController.getAllUserPositions);
  route.get("/user-check-status/:id", UserController.checkUserStatus);
  
  route.get("/change-password", UserController.changeAllPasswords);

  //position route
  route.get("/positions", positionController.getAll);
  route.get("/position-permissions", positionController.givePositionPermissions);

  
  route.get("/positions/:id", positionController.get);
  route.get("/position_search", positionController.search);
  route.post(
    "/positions",
    validateInput.positionValidate,
    positionController.save
  );
  route.put("/positions/:id", positionController.update);
  route.delete("/positions/:id", positionController.delete);
  route.get(
    "/department-positions/:id",
    positionController.getDepartmentPositions
  );

  //department route
  route.get("/departments", departmentController.getAll);
  route.get("/departments/:id", departmentController.get);
  route.get("/department_search", departmentController.search);
  route.post(
    "/departments",
    validateInput.departmentValidate,
    departmentController.save
  );
  route.put(
    "/departments/:id",
    [validateInput.departmentValidate, checkEditable.checkEditability],
    departmentController.update
  );
  route.delete("/departments/:id", departmentController.delete);
  route.get("/sub-departments/:id", departmentController.getSubDepartments);
  route.get("/parent-department", departmentController.getParentDepartment);

  route.get("/department-dashboard/:id", departmentController.getDepartmentDashboad);
  route.get("/user-dashboard", departmentController.getUserDashboard);

  route.get("/search-department/:id?", departmentController.getParentOrGivenId);
  route.get("/department-structure", departmentController.getDepartments);
  route.get("/department-structure/:id", departmentController.getDepartments);

  
  route.get("/department-head/:id", departmentController.getDepartmentHead);
  route.get("/all-parents/:id", departmentController.getToRoot);

  //Role route
  
  route.get("/default-role", roleController.defaultRole);
  // route.get("/default-role", roleController.defaultRoleAdmin);
  route.get("/roles", roleController.getAll);
  route.get("/roles/:id", roleController.get);
  route.get("/role_search", roleController.search);
  route.post("/roles", validateInput.roleValidate, roleController.save);
  route.put("/roles/:id", validateInput.roleValidate, roleController.update);
  route.delete("/roles/:id", roleController.delete);

  //Role route
  route.get("/permissions", PermissionController.getAll);
  route.get("/permissions/:id", PermissionController.get);
  route.get("/permission_search", PermissionController.search);
  route.post(
    "/permissions",
    validateInput.permissionValidate,
    PermissionController.save
  );


  route.put("/permissions/:id", PermissionController.update);
  route.delete("/permissions/:id", PermissionController.delete);
  route.get("/generate-permission", PermissionController.initPermission);
  route.get("/models", PermissionController.getModels);
  route.get("/generate", PermissionController.generate);
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

  //Photo route
  // route.get("/photos", UserPhotoController.getAll);
  // route.get("/photo/:id", UserPhotoController.get);
  // route.post("/photo/:id", UserPhotoController.save);
  // route.put("/photo/:id", validateInput.userPhotoValidate, UserPhotoController.update);
  // route.delete("/photo/:id", validateInput.userPhotoValidate, UserPhotoController.delete);

  //hr for
  //Role route
  route.get("/education-statuses", EducationStatusController.getAll);
  route.get("/education-statuses/:id", EducationStatusController.get);
  route.get("/education-status-searches", EducationStatusController.search);
  route.post(
    "/education-statuses",
    validateInput.educationStatusValidate,
    EducationStatusController.save
  );
  route.put(
    "/education-statuses/:id",
    validateInput.educationStatusValidate,
    EducationStatusController.update
  );
  route.delete("/education-statuses/:id", roleController.delete);

  //child

  route.get("/childs", ChildController.getAll);
  route.get("/childs/:id", ChildController.get);
  route.get("/child_search", ChildController.search);
  route.post("/childs", validateInput.childValidate, ChildController.save);
  route.put("/childs/:id", validateInput.childValidate, ChildController.update);
  route.delete("/childs/:id", ChildController.delete);

  //family status
  route.get("/family-statuses", FamilyStatusController.getAll);
  route.get("/family-statuses/:id", FamilyStatusController.get);
  route.get("/family-status-searches", FamilyStatusController.search);
  route.post(
    "/family-statuses",
    validateInput.familyStatusValidate,
    FamilyStatusController.save
  );
  route.put(
    "/family-statuses/:id",
    validateInput.familyStatusValidate,
    FamilyStatusController.update
  );
  route.delete("/family-statuses/:id", FamilyStatusController.delete);

  //Role route
  route.get("/contact-persons", ContactPersonController.getAll);
  route.get("/contact-persons/:id", ContactPersonController.get);
  route.post(
    "/contact-persons",
    validateInput.contactPersonValidate,
    ContactPersonController.save
  );
  route.put(
    "/contact-persons/:id",
    validateInput.contactPersonValidate,
    ContactPersonController.update
  );
  route.delete("/contact-persons/:id", ContactPersonController.delete);
  //job experience

  //Role route
  route.get("/job-experiences", JobExperienceController.getAll);
  route.get("/job-experiences/:id", JobExperienceController.get);
  route.get("/job-experience-searches", JobExperienceController.search);
  route.post(
    "/job-experiences",
    validateInput.jobExperienceValidate,
    JobExperienceController.save
  );
  route.put(
    "/job-experiences/:id",
    validateInput.jobExperienceValidate,
    JobExperienceController.update
  );
  route.delete("/job-experiences/:id", JobExperienceController.delete);

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
  route.get("/activity-logs", ActivityLogController.getAll);
  route.get("/activity-logs/:id", ActivityLogController.get);
  route.post("/activity-logs", validateInput.activityLogValidate, ActivityLogController.save);
  route.put("/activity-logs/:id", validateInput.activityLogValidate, ActivityLogController.update);
  route.delete("/activity-logs/:id", ActivityLogController.delete);

  return route;
};
