const UserController = require("../../../controllers/department/UserController.js");
const roleController = require("../../../controllers/department/RoleController.js");
const PermissionController = require("../../../controllers/department/PermissionController.js");
const UserPhotoController = require("../../../controllers/department/UserPhotoController.js");
const positionController = require("../../../controllers/department/PositionController.js");
const departmentController = require("../../../controllers/department/departmentController.js");
// const TestController = require("../../../controllers/TestController.js")
//Hr
const EducationStatusController = require("../../../controllers/department/EducationStatusController.js");
const ChildController = require("../../../controllers/department/ChildController.js");
const FamilyStatusController = require("../../../controllers/department/FamilyStatusController.js");
const ContactPersonController = require("../../../controllers/department/ContactPersonController.js");
const JobExperienceController = require("../../../controllers/department/JobExperienceController.js");

const validateInput = require("../../../middleware/validate/module/user/validate");
const checkEditable = require("../../../middleware/CheckEditable.js")
module.exports = function (express) {
  const route = express.Router();

  //user route
  
  route.get("/user", UserController.getAll);
  route.get("/user/:id", UserController.get);
  route.get("/user_search/:key", UserController.search);
  route.post("/user", validateInput.createUser, UserController.save);
  route.put("/user/:id", validateInput.createUser, UserController.update);
  route.delete("/user/:id", UserController.delete);
  route.get("/department-users/:id", UserController.getDepartmentUsers);

  route.put("/account-activate/:id", validateInput.createUser, UserController.activateAccount);
  route.put("/account-deactivate/:id", validateInput.createUser, UserController.deactivateAccount);


  route.post("/assign-user-position", UserController.assignPosition);
  route.get("/disable-user-position/:id", UserController.dePosition);
  route.post("/switch-account", UserController.switchAccount);
  route.get("/user-positions/:id", UserController.getAllUserPositions);
  route.get("/user-check-status/:id", UserController.checkUserStatus);

  //position route
  route.get("/position", positionController.getAll);
  route.get("/position-permissions", positionController.givePositionPermissions);

  
  route.get("/position/:id", positionController.get);
  route.get("/position_search", positionController.search);
  route.post(
    "/position",
    validateInput.positionValidate,
    positionController.save
  );
  route.put("/position/:id", positionController.update);
  route.delete("/position/:id", positionController.delete);
  route.get(
    "/department-positions/:id",
    positionController.getDepartmentPositions
  );

  //department route
  route.get("/department", departmentController.getAll);
  route.get("/department/:id", departmentController.get);
  route.get("/department_search", departmentController.search);
  route.post(
    "/department",
    validateInput.departmentValidate,
    departmentController.save
  );
  route.put(
    "/department/:id",
    [validateInput.departmentValidate, checkEditable.checkEditability],
    departmentController.update
  );
  route.delete("/department/:id", departmentController.delete);
  route.get("/sub-departments/:id", departmentController.getSubDepartments);
  route.get("/parent-department", departmentController.getParentDepartment);

  route.get(
    "/department-dashboard/:id",
    departmentController.getDepartmentDashboad
  );

  route.get("/search-department/:id?", departmentController.getParentOrGivenId);
  route.get("/department-structure", departmentController.getStructure);
  route.get("/department-structure/:id", departmentController.getChildren);

  route.get("/department-head/:id", departmentController.getDepartmentHead);
  route.get("/all-parents/:id", departmentController.getToRoot);

  //Role route
  route.get("/role", roleController.getAll);
  route.get("/role/:id", roleController.get);
  route.get("/role_search", roleController.search);
  route.post("/role", validateInput.roleValidate, roleController.save);
  route.put("/role/:id", validateInput.roleValidate, roleController.update);
  route.delete("/role/:id", roleController.delete);

  //Role route
  route.get("/permission", PermissionController.getAll);
  route.get("/permission/:id", PermissionController.get);
  route.get("/permission_search", PermissionController.search);
  route.post(
    "/permission",
    validateInput.permissionValidate,
    PermissionController.save
  );
  route.put("/permission/:id", PermissionController.update);
  route.delete("/permission/:id", PermissionController.delete);
  route.get("/generate-permission", PermissionController.initPermission);
  route.get("/models", PermissionController.getModels);

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
  //Photo route
  // route.get("/photo", UserPhotoController.getAll);
  // route.get("/photo/:id", UserPhotoController.get);
  // route.post("/photo/:id", UserPhotoController.save);
  // route.put("/photo/:id", validateInput.userPhotoValidate, UserPhotoController.update);
  // route.delete("/photo/:id", validateInput.userPhotoValidate, UserPhotoController.delete);

  //hr for
  //Role route
  route.get("/education-status", EducationStatusController.getAll);
  route.get("/education-status/:id", EducationStatusController.get);
  route.get("/education-status-search", EducationStatusController.search);
  route.post(
    "/education-status",
    validateInput.educationStatusValidate,
    EducationStatusController.save
  );
  route.put(
    "/education-status/:id",
    validateInput.educationStatusValidate,
    EducationStatusController.update
  );
  route.delete("/education-status/:id", roleController.delete);

  //child

  route.get("/child", ChildController.getAll);
  route.get("/child/:id", ChildController.get);
  route.get("/child_search", ChildController.search);
  route.post("/child", validateInput.childValidate, ChildController.save);
  route.put("/child/:id", validateInput.childValidate, ChildController.update);
  route.delete("/child/:id", ChildController.delete);

  //family status
  route.get("/family-status", FamilyStatusController.getAll);
  route.get("/family-status/:id", FamilyStatusController.get);
  route.get("/family-status-search", FamilyStatusController.search);
  route.post(
    "/family-status",
    validateInput.familyStatusValidate,
    FamilyStatusController.save
  );
  route.put(
    "/family-status/:id",
    validateInput.familyStatusValidate,
    FamilyStatusController.update
  );
  route.delete("/family-status/:id", FamilyStatusController.delete);

  //Role route
  route.get("/contact-person", ContactPersonController.getAll);
  route.get("/contact-person/:id", ContactPersonController.get);
  route.get("/contact-person-search", ContactPersonController.search);
  route.post(
    "/contact-person",
    validateInput.contactPersonValidate,
    ContactPersonController.save
  );
  route.put(
    "/contact-person/:id",
    validateInput.contactPersonValidate,
    ContactPersonController.update
  );
  route.delete("/contact-person/:id", ContactPersonController.delete);
  //job experience

  //Role route
  route.get("/job-experience", JobExperienceController.getAll);
  route.get("/job-experience/:id", JobExperienceController.get);
  route.get("/job-experience-search", JobExperienceController.search);
  route.post(
    "/job-experience",
    validateInput.jobExperienceValidate,
    JobExperienceController.save
  );
  route.put(
    "/job-experience/:id",
    validateInput.jobExperienceValidate,
    JobExperienceController.update
  );
  route.delete("/job-experience/:id", JobExperienceController.delete);

  //user hr routing

  route.get(
    "/education-status/user/:id",
    EducationStatusController.getByUserId
  );
  route.get("/family-status/user/:id", FamilyStatusController.getByUserId);
  route.get("/contact-person/user/:id", ContactPersonController.getByUserId);
  route.get("/job-experience/user/:id", JobExperienceController.getByUserId);
  //test
  route.post("/change-language", UserController.changeLanguage);
  route.get("/test", departmentController.test);

  return route;
};
