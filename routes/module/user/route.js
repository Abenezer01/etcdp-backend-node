const userController = require("../../../controllers/user/userController.js")
const roleController = require("../../../controllers/user/roleController.js")

const positionController = require("../../../controllers/user/positionController.js")
const departmentController = require("../../../controllers/user/departmentController.js")
const middleware = require("../../../middleware/middleware")
module.exports = function(express) {
    const route = express.Router();

    //user route
    route.get("/user", userController.getAll);
    route.get("/user/:id", userController.get);
    route.get("/user_search/:key", userController.search);
    route.post("/user", userController.save);
    route.put("/user/:id", userController.update);
    route.delete("/user/:id", userController.delete);
    //position route
    route.get("/position", positionController.getAll);
    route.get("/position/:id", positionController.get);
    route.get("/position_search", positionController.search);
    route.post("/position", positionController.save);
    route.put("/position/:id", positionController.update);
    route.delete("/position/:id", positionController.delete);
    //brands route
    route.get("/department", departmentController.getAll);
    route.get("/department/:id", departmentController.get);
    route.get("/department_search", departmentController.search);
    route.post("/department", departmentController.save);
    route.put("/department/:id", departmentController.update);
    route.delete("/department/:id", departmentController.delete);
    //Role route
    route.get("/role", roleController.getAll);
    route.get("/role/:id", roleController.get);
    route.get("/role_search", roleController.search);
    route.post("/role", roleController.save);
    route.put("/role/:id", roleController.update);
    route.delete("/role/:id", roleController.delete);

    return route;
};