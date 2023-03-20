const authController = require("../../../controllers/Auth/LoginController")
const refreshController = require("../../../controllers/Auth/RefreshTokenController")
const logoutController = require("../../../controllers/Auth/LogoutController")
const validateData = require("../../../middleware/validate/module/auth/validate")
module.exports = function(express) {
    const route = express.Router();

    // route.post("/login", validateData.loginValidate, authController.loginUser);
    route.get("/refresh/token", refreshController.refreshToken);
    route.post("/logout", logoutController.logout);
    return route;
};