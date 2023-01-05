const authController = require("../../../controllers/Auth/loginController")
const refreshController = require("../../../controllers/Auth/refreshTokenController")
const logoutController = require("../../../controllers/Auth/logoutController")
const middleware = require("../../../middleware/middleware")
module.exports = function(express) {
    const route = express.Router();

    route.post("/login", authController.loginUser);
    route.get("/refresh/token", refreshController.refreshToken);
    route.post("/logout", logoutController.logout);
    return route;
};