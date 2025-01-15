const validateData = require("../../../middleware/validate/module/auth/validate");
const ProjectOutcome45C3Controller = require("../../../controllers/project/ProjectOutcome45C3Controller.js");
const ProjectAdditionalInfo48A1Controller = require("../../../controllers/project/ProjectAdditionalInfo48A1Controller.js");

module.exports = function (express) {
  const route = express.Router();

  //project outcomes
  route.get("/project-outcomes", ProjectOutcome45C3Controller.getAll);
  route.get("/project-outcomes/:id", ProjectOutcome45C3Controller.get);
  // route.get("/project/project-outcomes/:id", ProjectOutcome45C3Controller.getByProjectId);
  route.post("/project-outcomes", validateData.railWayValidate, ProjectOutcome45C3Controller.save);
  route.put(
    "/project-outcomes/:id",
    validateData.railWayValidate,
    ProjectOutcome45C3Controller.update
  );
  route.delete("/project-outcomes/:id", ProjectAdditionalInfo48A1Controller.delete);

  //project outcomes
  route.get("/project-additional-infos", ProjectAdditionalInfo48A1Controller.getAll);
  route.get("/project-additional-infos/:id", ProjectAdditionalInfo48A1Controller.get);
  route.post("/project-additional-infos", validateData.railWayValidate, ProjectAdditionalInfo48A1Controller.save);
  route.put(
    "/project-additional-infos/:id",
    validateData.railWayValidate,
    ProjectAdditionalInfo48A1Controller.update
  );
  route.delete("/project-additional-infos/:id", ProjectAdditionalInfo48A1Controller.delete);

  return route;
};
