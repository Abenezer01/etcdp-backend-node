const userController = require("../../../controllers/user/userController.js")
const roleController = require("../../../controllers/user/roleController.js")
const userPhotoController = require("../../../controllers/user/userPhotoController.js")
const positionController = require("../../../controllers/user/positionController.js")
const departmentController = require("../../../controllers/user/departmentController.js")
const validateInput = require("../../../middleware/validate/module/user/validate")
module.exports = function(express) {
    const route = express.Router();

    //user route
    route.get("/user", userController.getAll);
    route.get("/user/:id", userController.get);
    route.get("/user_search/:key", userController.search);
    route.post("/user", validateInput.createUser, userController.save);
    route.put("/user/:id", validateInput.createUser, userController.update);
    route.delete("/user/:id", userController.delete);
    route.get("/department-users/:id", userController.getDepartmentUsers);

    route.post("/assign-user-position", userController.assignPosition);
    route.get("/disable-user-position/:id", userController.dePosition);
	route.get("/switch-account/:position_id", userController.switchAccount);

    
    //position route
    route.get("/position", positionController.getAll);
    route.get("/position/:id", positionController.get);
    route.get("/position_search", positionController.search);
    route.post("/position", validateInput.positionValidate, positionController.save);
    route.put("/position/:id", positionController.update);
    route.delete("/position/:id", positionController.delete);
    route.get("/department-positions/:id", positionController.getDepartmentPositions);

    
    //department route
    route.get("/department", departmentController.getAll);
    route.get("/department/:id", departmentController.get);
    route.get("/department_search", departmentController.search);
    route.post("/department", validateInput.departmentValidate, departmentController.save);
    route.put("/department/:id", validateInput.departmentValidate, departmentController.update);
    route.delete("/department/:id", departmentController.delete);
    route.get("/sub-departments/:id", departmentController.getSubDepartments);
    route.get("/parent-department", departmentController.getParentDepartment);

    route.get("/search-department/:id?", departmentController.getParentOrGivenId);
	route.get("/office-structure", departmentController.getStructure);
	route.get("/department-head/:id", departmentController.getDepartmentHead);
	route.get("/all-parents/:id", departmentController.getToRoot);

    



    //Role route
    route.get("/role", roleController.getAll);
    route.get("/role/:id", roleController.get);
    route.get("/role_search", roleController.search);
    route.post("/role", validateInput.roleValidate, roleController.save);
    route.put("/role/:id", validateInput.roleValidate, roleController.update);
    route.delete("/role/:id", roleController.delete);
    //Photo route
    route.get("/photo", userPhotoController.getAll);
    route.get("/photo/:id", userPhotoController.get);
    route.post("/photo/:id", userPhotoController.save);
    route.put("/photo/:id", validateInput.userPhotoValidate, userPhotoController.update);
    route.delete("/photo/:id", validateInput.userPhotoValidate, userPhotoController.delete);
    return route;
};