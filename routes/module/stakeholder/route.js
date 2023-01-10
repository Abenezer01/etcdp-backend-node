const stakeholderCategoryController = require("../../../controllers/stakeholder/StakeholderCategoryController.js")
const stakeholderSubCategoryController = require("../../../controllers/stakeholder/StakeholderSubCategoryController.js")
const stakeholderTypeController = require("../../../controllers/stakeholder/StakeholderTypeController.js")
const stakeholderInfoController = require("../../../controllers/stakeholder/StakeholderInfoController.js")
const stakeholderController = require("../../../controllers/stakeholder/StakeholderController.js")
const ownershiptypeController = require("../../../controllers/stakeholder/OwnershiptypeController")
const BusinessfieldController = require("../../../controllers/stakeholder/BusinessfieldController")
const CertificateController = require("../../../controllers/stakeholder/CertificateController")
const TotalEmployeeController = require("../../../controllers/stakeholder/TotalEmployeeController")
const middleware = require("../../../middleware/middleware")
const stakeCategoryValidate = require("../../../middleware/validate")
module.exports = function(express) {
    const route = express.Router();
    //ownership route
    route.get("/ownership/", ownershiptypeController.getAll);
    route.get("/ownership/:id", ownershiptypeController.get);
    route.get("/ownership-search", ownershiptypeController.search);
    route.post("/ownership", ownershiptypeController.save);
    route.put("/ownership/:id", ownershiptypeController.update);
    route.delete("/ownership/:id", ownershiptypeController.delete);
    //business field route
    route.get("/businessfield/", BusinessfieldController.getAll);
    route.get("/businessfield/:id", BusinessfieldController.get);
    route.get("/businessfield-search", BusinessfieldController.search);
    route.post("/businessfield", BusinessfieldController.save);
    route.put("/businessfield/:id", BusinessfieldController.update);
    route.delete("/businessfield/:id", BusinessfieldController.delete);
    //stakeholder category route
    route.get("/stakeholder-category/", stakeholderCategoryController.getAll);
    route.get("/stakeholder-category/:id", stakeholderCategoryController.get);
    route.get("/stakeholder-category/stakeholder-type/:id", stakeholderCategoryController.getAllCatByTypeId);
    route.get("/stakeholder-category-search", stakeholderCategoryController.search);
    route.post("/stakeholder-category", stakeCategoryValidate.stakeholderCategoryValidate, stakeholderCategoryController.save);
    route.put("/stakeholder-category/:id", stakeholderCategoryController.update);
    route.delete("/stakeholder-category/:id", stakeholderCategoryController.delete);
    //stakeholder subcategory route
    route.get("/stakeholder-sub-category/", stakeholderSubCategoryController.getAll);
    route.get("/stakeholder-sub-category/:id", stakeholderSubCategoryController.get);
    route.get("/stakeholder-sub-category-search", stakeholderSubCategoryController.search);
    route.post("/stakeholder-sub-category", stakeholderSubCategoryController.save);
    route.put("/stakeholder-sub-category/:id", stakeholderSubCategoryController.update);
    route.delete("/stakeholder-sub-category/:id", stakeholderSubCategoryController.delete);
    //stakeholder type route
    route.get("/stakeholder-type/", stakeholderTypeController.getAll);
    route.get("/stakeholder-type/:id", stakeholderTypeController.get);
    route.get("/stakeholder-type-search", stakeholderTypeController.search);
    route.post("/stakeholder-type", stakeholderTypeController.save);
    route.put("/stakeholder-type/:id", stakeholderTypeController.update);
    route.delete("/stakeholder-type/:id", stakeholderTypeController.delete);
    //stakeholder info route
    route.get("/stakeholder-info/", stakeholderInfoController.getAll);
    route.get("/stakeholder-info/:id", stakeholderInfoController.get);
    route.get("/stakeholder-info-search", stakeholderInfoController.search);
    route.post("/stakeholder-info", stakeholderInfoController.save);
    route.put("/stakeholder-info/:id", stakeholderInfoController.update);
    route.delete("/stakeholder-info/:id", stakeholderInfoController.delete);
    //stakeholder route
    route.get("/stakeholder/", stakeholderController.getAll);
    route.get("/stakeholder/:id", stakeholderController.get);
    route.get("/stakeholder-search", stakeholderController.search);
    route.post("/stakeholder", stakeholderController.save);
    route.put("/stakeholder/:id", stakeholderController.update);
    route.delete("/stakeholder/:id", stakeholderController.delete);
    //certificate route
    route.get("/certificate/", CertificateController.getAll);
    route.get("/certificate/:id", CertificateController.get);
    route.get("/certificate-search", CertificateController.search);
    route.post("/certificate", CertificateController.save);
    route.put("/certificate/:id", CertificateController.update);
    route.delete("/certificate/:id", CertificateController.delete);
    //total employee route
    route.get("/total-employee/", TotalEmployeeController.getAll);
    route.get("/total-employee/:id", TotalEmployeeController.get);
    route.get("/total-employee-search", TotalEmployeeController.search);
    route.post("/total-employee", TotalEmployeeController.save);
    route.put("/total-employee/:id", TotalEmployeeController.update);
    route.delete("/total-employee/:id", TotalEmployeeController.delete);
    return route;
};