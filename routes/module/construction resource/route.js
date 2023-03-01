const ConstructionResourceTypeController = require("../../../controllers/construction resource/ConstructionResourceTypeController")
const ConstructionResourceCategoryController = require("../../../controllers/construction resource/ConstructionResourceCategoryController")
const ConstructionResourceSubCategoryController = require("../../../controllers/construction resource/ConstructionResourceSubCategoryController")
const ConstructionResourceRegistrationController = require("../../../controllers/construction resource/ConstructionResourceRegistrationController")
const ConstructionResourceQuantityAndPriceController = require("../../../controllers/construction resource/ConstructionResourceQuantityAndPriceController")
const DetailResourceTypeController = require("../../../controllers/construction resource/DetailResourceTypeController")
const ResourceBrandController = require("../../../controllers/construction resource/ResourceBrandController")
const ResourcePriceController = require("../../../controllers/construction resource/ResourcePriceController")
const ResourceQuantityController = require("../../../controllers/construction resource/ResourceQuantityController")
const ResourceSpecificationController = require("../../../controllers/construction resource/ResourceSpecificationController")
const ResourceImageController = require("../../../controllers/construction resource/ResourceImageController")
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
    route.get("/type/construction-resource-category/:id", ConstructionResourceCategoryController.getCRCByResourceTypeId);
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
    route.get("/filter/construction-resource", ConstructionResourceRegistrationController.filter);
    route.get("/construction-resource_search", ConstructionResourceRegistrationController.search);
    route.post("/construction-resource", validateData.constructionResourceValidate, ConstructionResourceRegistrationController.save);
    route.put("/construction-resource/:id", validateData.constructionResourceValidate, ConstructionResourceRegistrationController.update);
    route.delete("/construction-resource/:id", ConstructionResourceRegistrationController.delete);
    //construction resource quantity and controller
    // route.get("/construction-resource-quantity-price", ConstructionResourceQuantityAndPriceController.getAll);
    // route.get("/construction-resource-quantity-price/:id", ConstructionResourceQuantityAndPriceController.get);
    // route.get("/construction-resource-quantity-price_search", ConstructionResourceQuantityAndPriceController.search);
    // route.post("/construction-resource-quantity-price", validateData.constructionResourceQuantityandPriceValidate, ConstructionResourceQuantityAndPriceController.save);
    // route.put("/construction-resource-quantity-price/:id", validateData.constructionResourceQuantityandPriceValidate, ConstructionResourceQuantityAndPriceController.update);
    // route.delete("/construction-resource-quantity-price/:id", ConstructionResourceQuantityAndPriceController.delete);
    //construction resource quantity and controller
    route.get("/detail-construction-resource-type", DetailResourceTypeController.getAll);
    route.get("/detail-construction-resource-type/:id", DetailResourceTypeController.get);
    route.get("/resource/detail-construction-resource-type/:id", DetailResourceTypeController.getByResourceId);
    route.get("/detail-construction-resource-type_search", DetailResourceTypeController.search);
    route.post("/detail-construction-resource-type", validateData.detailResourceTypeValidate, DetailResourceTypeController.save);
    route.put("/detail-construction-resource-type/:id", DetailResourceTypeController.update);
    route.delete("/detail-construction-resource-type/:id", DetailResourceTypeController.delete);
    //construction resource quantity and controller
    route.get("/construction-resource-brand", ResourceBrandController.getAll);
    route.get("/construction-resource-brand/:id", ResourceBrandController.get);
    route.get("/resource/construction-resource-brand/:id", ResourceBrandController.getByResourceId);
    route.get("/construction-resource-brand_search", ResourceBrandController.search);
    route.post("/construction-resource-brand", validateData.resourceBrandValidate, ResourceBrandController.save);
    route.put("/construction-resource-brand/:id", validateData.resourceBrandValidate, ResourceBrandController.update);
    route.delete("/construction-resource-brand/:id", ResourceBrandController.delete);
    //construction resource quantity and controller
    route.get("/construction-resource-price", ResourcePriceController.getAll);
    route.get("/construction-resource-price/:id", ResourcePriceController.get);
    route.get("/resource/construction-resource-price/:id", ResourcePriceController.getByResourceId);
    route.get("/construction-resource-price_search", ResourcePriceController.search);
    route.post("/construction-resource-price", validateData.resourcePriceValidate, ResourcePriceController.save);
    route.put("/construction-resource-price/:id", validateData.resourcePriceValidate, ResourcePriceController.update);
    route.delete("/construction-resource-price/:id", ResourcePriceController.delete);
    //construction resource quantity and controller
    route.get("/construction-resource-quantity", ResourceQuantityController.getAll);
    route.get("/construction-resource-quantity/:id", ResourceQuantityController.get);
    route.get("/resource/construction-resource-quantity/:id", ResourceQuantityController.getByResourceId);
    route.get("/construction-resource-quantity_search", ResourceQuantityController.search);
    route.post("/construction-resource-quantity", validateData.resourceQuantityValidate, ResourceQuantityController.save);
    route.put("/construction-resource-quantity/:id", validateData.resourceQuantityValidate, ResourceQuantityController.update);
    route.delete("/construction-resource-quantity/:id", ResourceQuantityController.delete);
    //construction resource quantity and controller
    route.get("/construction-resource-specification", ResourceSpecificationController.getAll);
    route.get("/construction-resource-specification/:id", ResourceSpecificationController.get);
    route.get("/resource/construction-resource-specification/:id", ResourceSpecificationController.getByResourceId);
    route.get("/construction-resource-specification_search", ResourceSpecificationController.search);
    route.post("/construction-resource-specification", validateData.resourceSpecificationValidate, ResourceSpecificationController.save);
    route.put("/construction-resource-specification/:id", validateData.resourceSpecificationValidate, ResourceSpecificationController.update);
    route.delete("/construction-resource-specification/:id", ResourceSpecificationController.delete);
    //Resource image
    route.post("/resource-image/:id", ResourceImageController.save);
    route.put("/resource-image/:id", ResourceImageController.update);
    route.delete("/resource-image/:id", ResourceImageController.delete);
    return route;
};