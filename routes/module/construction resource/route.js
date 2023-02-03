const ConstructionResourceTypeController = require("../../../controllers/construction resource/ConstructionResourceTypeController")
const ConstructionResourceCategoryController = require("../../../controllers/construction resource/ConstructionResourceCategoryController")
const ConstructionResourceSubCategoryController = require("../../../controllers/construction resource/ConstructionResourceSubCategoryController")
const ConstructionResourceRegistrationController = require("../../../controllers/construction resource/ConstructionResourceRegistrationController")
const ConstructionResourceQuantityAndPriceController = require("../../../controllers/construction resource/ConstructionResourceQuantityAndPriceController")
const validateData = require("../../../middleware/validate/module/construction resource/validate")
module.exports = function(express) {
    const route = express.Router();

    //construction resource type controller
    route.get("/construction-resource-type", ConstructionResourceTypeController.getAll);
    route.get("/construction-resource-type/:id", ConstructionResourceTypeController.get);
    route.get("/construction-resource-type_search", ConstructionResourceTypeController.search);
    route.post("/construction-resource-type", validateData.constructionResourceTypeValidate, ConstructionResourceTypeController.save);
    route.put("/construction-resource-type/:id", validateData.constructionResourceTypeValidate, ConstructionResourceTypeController.update);
    route.delete("/construction-resource-type/:id", ConstructionResourceTypeController.delete);
    //construction resource category controller
    route.get("/construction-resource-category", ConstructionResourceCategoryController.getAll);
    route.get("/construction-resource-category/:id", ConstructionResourceCategoryController.get);
    route.get("/construction-resource-category_search", ConstructionResourceCategoryController.search);
    route.post("/construction-resource-category", validateData.constructionResourceCategoryValidate, ConstructionResourceCategoryController.save);
    route.put("/construction-resource-category/:id", validateData.constructionResourceCategoryValidate, ConstructionResourceCategoryController.update);
    route.delete("/construction-resource-category/:id", ConstructionResourceCategoryController.delete);
    //construction resource subcategory controller
    route.get("/construction-resource-subcategory", ConstructionResourceSubCategoryController.getAll);
    route.get("/construction-resource-subcategory/:id", ConstructionResourceSubCategoryController.get);
    route.get("/construction-resource-subcategory_search", ConstructionResourceSubCategoryController.search);
    route.post("/construction-resource-subcategory", validateData.constructionResourceSubCategoryValidate, ConstructionResourceSubCategoryController.save);
    route.put("/construction-resource-subcategory/:id", validateData.constructionResourceSubCategoryValidate, ConstructionResourceSubCategoryController.update);
    route.delete("/construction-resource-subcategory/:id", ConstructionResourceSubCategoryController.delete);
    //construction resource registration controller
    route.get("/construction-resource", ConstructionResourceRegistrationController.getAll);
    route.get("/construction-resource/:id", ConstructionResourceRegistrationController.get);
    route.get("/construction-resource_search", ConstructionResourceRegistrationController.search);
    route.post("/construction-resource", validateData.constructionResourceValidate, ConstructionResourceRegistrationController.save);
    route.put("/construction-resource/:id", validateData.constructionResourceValidate, ConstructionResourceRegistrationController.update);
    route.delete("/construction-resource/:id", ConstructionResourceRegistrationController.delete);
    //construction resource quantity and controller
    route.get("/construction-resource-quantity-price", ConstructionResourceQuantityAndPriceController.getAll);
    route.get("/construction-resource-quantity-price/:id", ConstructionResourceQuantityAndPriceController.get);
    route.get("/construction-resource-quantity-price_search", ConstructionResourceQuantityAndPriceController.search);
    route.post("/construction-resource-quantity-price", validateData.constructionResourceQuantityandPriceValidate, ConstructionResourceQuantityAndPriceController.save);
    route.put("/construction-resource-quantity-price/:id", validateData.constructionResourceQuantityandPriceValidate, ConstructionResourceQuantityAndPriceController.update);
    route.delete("/construction-resource-quantity-price/:id", ConstructionResourceQuantityAndPriceController.delete);
    return route;
};