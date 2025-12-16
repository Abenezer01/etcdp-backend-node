const ProjectController = require("../../../controllers/project/ProjectController.js");

// const validateData = require("../../../middleware/validate/module/project/validate");

module.exports = function (express) {
  const route = express.Router();

  //infrastructure project registration controller
//   route.get("/infrastructures/", ProjectController.getAllInfrastructure);
    
  return route;
};
