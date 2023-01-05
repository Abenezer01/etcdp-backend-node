const stakeholderCategoryController = require("../../../controllers/stakeholder/StakeholderCategoryController.js")
const stakeholderSubCategoryController = require("../../../controllers/stakeholder/StakeholderSubCategoryController.js")
const stakeholderTypeController = require("../../../controllers/stakeholder/StakeholderTypeController.js")
const stakeholderInfoController = require("../../../controllers/stakeholder/StakeholderInfoController.js")
const stakeholderController = require("../../../controllers/stakeholder/StakeholderController.js")
const ownershiptypeController = require("../../../controllers/stakeholder/OwnershiptypeController")
const BusinessfieldController = require("../../../controllers/stakeholder/BusinessfieldController")
const middleware = require("../../../middleware/middleware")
const stakeCategoryValidate = require("../../../middleware/validate")
module.exports = function(express) {
    const route = express.Router();
    //stakeholder route
    route.get("/ownership/", ownershiptypeController.getAll);
    route.get("/ownership/:id", ownershiptypeController.get);
    route.get("/ownership_search", ownershiptypeController.search);
    route.post("/ownership", ownershiptypeController.save);
    route.put("/ownership/:id", ownershiptypeController.update);
    route.delete("/ownership/:id", ownershiptypeController.delete);
    //business field route
    route.get("/businessfield/", BusinessfieldController.getAll);
    route.get("/businessfield/:id", BusinessfieldController.get);
    route.get("/businessfield_search", BusinessfieldController.search);
    route.post("/businessfield", BusinessfieldController.save);
    route.put("/businessfield/:id", BusinessfieldController.update);
    route.delete("/businessfield/:id", BusinessfieldController.delete);
    //stakeholder category route
    route.get("/stakeholder_category/", stakeholderCategoryController.getAll);
    route.get("/stakeholder_category/:id", stakeholderCategoryController.get);
    route.get("/stakeholder_category_search", stakeholderCategoryController.search);
    route.post("/stakeholder_category", stakeCategoryValidate.stakeholderCategoryValidate, stakeholderCategoryController.save);
    route.put("/stakeholder_category/:id", stakeholderCategoryController.update);
    route.delete("/stakeholder_category/:id", stakeholderCategoryController.delete);
    //stakeholder subcategory route
    route.get("/stakeholder_sub_category/", stakeholderSubCategoryController.getAll);
    route.get("/stakeholder_sub_category/:id", stakeholderSubCategoryController.get);
    route.get("/stakeholder_sub_category_search", stakeholderSubCategoryController.search);
    route.post("/stakeholder_sub_category", stakeholderSubCategoryController.save);
    route.put("/stakeholder_sub_category/:id", stakeholderSubCategoryController.update);
    route.delete("/stakeholder_sub_category/:id", stakeholderSubCategoryController.delete);
    //stakeholder type route
    route.get("/stakeholder_type/", stakeholderTypeController.getAll);
    route.get("/stakeholder_type/:id", stakeholderTypeController.get);
    route.get("/stakeholder_type_search", stakeholderTypeController.search);
    route.post("/stakeholder_type", stakeholderTypeController.save);
    route.put("/stakeholder_type/:id", stakeholderTypeController.update);
    route.delete("/stakeholder_type/:id", stakeholderTypeController.delete);
    //stakeholder info route
    route.get("/stakeholder_info/", stakeholderInfoController.getAll);
    route.get("/stakeholder_info/:id", stakeholderInfoController.get);
    route.get("/stakeholder_info_search", stakeholderInfoController.search);
    route.post("/stakeholder_info", stakeholderInfoController.save);
    route.put("/stakeholder_info/:id", stakeholderInfoController.update);
    route.delete("/stakeholder_info/:id", stakeholderInfoController.delete);
    //stakeholder route
    route.get("/stakeholder/", stakeholderController.getAll);
    route.get("/stakeholder/:id", stakeholderController.get);
    route.get("/stakeholder_search", stakeholderController.search);
    route.post("/stakeholder", stakeholderController.save);
    route.put("/stakeholder/:id", stakeholderController.update);
    route.delete("/stakeholder/:id", stakeholderController.delete);
    return route;
};