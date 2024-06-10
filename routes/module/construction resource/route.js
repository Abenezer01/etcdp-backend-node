const ConstructionResourceTypeController = require("../../../controllers/construction resource/ConstructionResourceTypeController");
const ConstructionResourceCategoryController = require("../../../controllers/construction resource/ConstructionResourceCategoryController");
const ConstructionResourceSubCategoryController = require("../../../controllers/construction resource/ConstructionResourceSubCategoryController");
const ConstructionResourceRegistrationController = require("../../../controllers/construction resource/ConstructionResourceRegistrationController");
//const ConstructionResourceQuantityAndPriceController = require("../../../controllers/construction resource/ConstructionResourceQuantityAndPriceController")
const DetailResourceTypeController = require("../../../controllers/construction resource/DetailResourceTypeController");
const ResourceBrandController = require("../../../controllers/construction resource/ResourceBrandController");
//const ResourcePriceController = require("../../../controllers/construction resource/ResourcePriceController")
const ResourceQuantityandPriceController = require("../../../controllers/construction resource/ResourceQuantityandPriceController");
const ResourceSpecificationController = require("../../../controllers/construction resource/ResourceSpecificationController");
const ResourceImageController = require("../../../controllers/construction resource/ResourceImageController");
const ResourceStudyFieldController = require("../../../controllers/construction resource/ResourceStudyFieldController");
const ResourceStudyLevelController = require("../../../controllers/construction resource/ResourceStudyLevelController");
const ResourceWorkExperienceController = require("../../../controllers/construction resource/ResourceWorkExperienceController");

const SalaryController = require("../../../controllers/construction resource/SalaryController");
const validateData = require("../../../middleware/validate/module/construction resource/validate");
module.exports = function (express) {
  const route = express.Router();

  //construction resource type controller
  route.get(
    "/construction-resource-types",
    ConstructionResourceTypeController.getAll
  );
  route.get(
    "/construction-resource-types/:id",
    ConstructionResourceTypeController.get
  );
  route.get(
    "/construction-resource-type-search",
    ConstructionResourceTypeController.search
  );
  route.post(
    "/construction-resource-types",
    validateData.constructionResourceTypeValidate,
    ConstructionResourceTypeController.save
  );
  route.put(
    "/construction-resource-types/:id",
    validateData.constructionResourceTypeValidate,
    ConstructionResourceTypeController.update
  );
  route.delete(
    "/construction-resource-types/:id",
    ConstructionResourceTypeController.delete
  );
  //Resource study field controller
  route.get("/resource-study-fields", ResourceStudyFieldController.getAll);
  route.get("/resource-study-fields/:id", ResourceStudyFieldController.get);
  route.get(
    "/resource-data/resource-study-fields/:id",
    ResourceStudyFieldController.getByResourceId
  );
  route.get("/resource-studyfield-searches", ResourceStudyFieldController.search);
  route.post(
    "/resource-study-fields",
    validateData.resourceStudyFieldValidate,
    ResourceStudyFieldController.save
  );
  route.put(
    "/resource-study-fields/:id",
    validateData.resourceStudyFieldValidate,
    ResourceStudyFieldController.update
  );
  route.delete("/resource-study-fields/:id", ResourceStudyFieldController.delete);
  //Resource study level controller
  route.get("/resource-study-levels", ResourceStudyLevelController.getAll);
  route.get("/resource-study-levels/:id", ResourceStudyLevelController.get);
  route.get(
    "/resource-data/resource-study-levels/:id",
    ResourceStudyLevelController.getByResourceId
  );
  route.get("/resource-studylevel-searches", ResourceStudyLevelController.search);
  route.post(
    "/resource-study-levels",
    validateData.resourceStudyLevelValidate,
    ResourceStudyLevelController.save
  );
  route.put(
    "/resource-study-levels/:id",
    validateData.resourceStudyLevelValidate,
    ResourceStudyLevelController.update
  );
  route.delete("/resource-study-levels/:id", ResourceStudyLevelController.delete);

  //Resource work experience controller
  route.get(
    "/resource-work-experiences",
    ResourceWorkExperienceController.getAll
  );
  route.get(
    "/resource-work-experiences/:id",
    ResourceWorkExperienceController.get
  );
  route.get(
    "/resource-data/resource-work-experiences/:id",
    ResourceWorkExperienceController.getByResourceId
  );
  route.get(
    "/resource-workexperience-searches",
    ResourceWorkExperienceController.search
  );
  route.post(
    "/resource-work-experiences",
    validateData.resourceWorkExperienceValidate,
    ResourceWorkExperienceController.save
  );
  route.put(
    "/resource-work-experiences/:id",
    validateData.resourceWorkExperienceValidate,
    ResourceWorkExperienceController.update
  );
  route.delete(
    "/resource-work-experiences/:id",
    ResourceWorkExperienceController.delete
  );
  //construction resource category controller
  route.get(
    "/construction-resource-categories",
    ConstructionResourceCategoryController.getAll
  );
  route.get(
    "/construction-resource-categories/:id",
    ConstructionResourceCategoryController.get
  );
  route.get(
    "/type/construction-resource-categories/:id",
    ConstructionResourceCategoryController.getCRCByResourceTypeId
  );
  route.get(
    "/construction-resource-category_search",
    ConstructionResourceCategoryController.search
  );
  route.post(
    "/construction-resource-categories",
    validateData.constructionResourceCategoryValidate,
    ConstructionResourceCategoryController.save
  );
  route.put(
    "/construction-resource-categories/:id",
    validateData.constructionResourceCategoryValidate,
    ConstructionResourceCategoryController.update
  );
  route.delete(
    "/construction-resource-categories/:id",
    ConstructionResourceCategoryController.delete
  );
  //construction resource subcategory controller
  route.get(
    "/construction-resource-subcategories",
    ConstructionResourceSubCategoryController.getAll
  );
  route.get(
    "/construction-resource-subcategories/:id",
    ConstructionResourceSubCategoryController.get
  );
  route.get(
    "/construction-resource-subcategory-searches",
    ConstructionResourceSubCategoryController.search
  );
  route.post(
    "/construction-resource-subcategories",
    validateData.constructionResourceSubCategoryValidate,
    ConstructionResourceSubCategoryController.save
  );
  route.put(
    "/construction-resource-subcategories/:id",
    validateData.constructionResourceSubCategoryValidate,
    ConstructionResourceSubCategoryController.update
  );
  route.delete(
    "/construction-resource-subcategories/:id",
    ConstructionResourceSubCategoryController.delete
  );
  //construction resource registration controller
  route.get("/resources", ConstructionResourceRegistrationController.getAll);
  route.get("/resources/:id", ConstructionResourceRegistrationController.get);
  route.get(
    "/filter/resources",
    ConstructionResourceRegistrationController.filter
  );
  route.get(
    "/resource-searches",
    ConstructionResourceRegistrationController.search
  );
  route.post(
    "/resources",
    validateData.constructionResourceValidate,
    ConstructionResourceRegistrationController.save
  );
  route.put(
    "/resources/:id",
    validateData.constructionResourceValidate,
    ConstructionResourceRegistrationController.update
  );
  route.delete(
    "/resources/:id",
    ConstructionResourceRegistrationController.delete
  );
  //construction resource quantity and controller
  // route.get("/construction-resource-quantity-price", ConstructionResourceQuantityAndPriceController.getAll);
  // route.get("/construction-resource-quantity-price/:id", ConstructionResourceQuantityAndPriceController.get);
  // route.get("/construction-resource-quantity-price_search", ConstructionResourceQuantityAndPriceController.search);
  // route.post("/construction-resource-quantity-price", validateData.constructionResourceQuantityandPriceValidate, ConstructionResourceQuantityAndPriceController.save);
  // route.put("/construction-resource-quantity-price/:id", validateData.constructionResourceQuantityandPriceValidate, ConstructionResourceQuantityAndPriceController.update);
  // route.delete("/construction-resource-quantity-price/:id", ConstructionResourceQuantityAndPriceController.delete);
  //construction resource quantity and controller
  route.get(
    "/detail-construction-resource-types",
    DetailResourceTypeController.getAll
  );
  route.get(
    "/detail-construction-resource-types/:id",
    DetailResourceTypeController.get
  );
  route.get(
    "/image/detail-construction-resource-types/:id",
    DetailResourceTypeController.getImage
  );
  route.get(
    "/resource/detail-construction-resource-types/:id",
    DetailResourceTypeController.getByResourceId
  );
  route.get(
    "/detail-construction-resource-type-searches",
    DetailResourceTypeController.search
  );
  route.post(
    "/detail-construction-resource-types",
    validateData.detailResourceTypeValidate,
    DetailResourceTypeController.save
  );
  route.put(
    "/detail-construction-resource-types/:id",
    DetailResourceTypeController.update
  );
  route.delete(
    "/detail-construction-resource-types/:id",
    DetailResourceTypeController.delete
  );
  //construction resource quantity and controller
  route.get("/construction-resource-brands", ResourceBrandController.getAll);
  route.get("/construction-resource-brands/:id", ResourceBrandController.get);
  route.get(
    "/image/construction-resource-brands/:id",
    ResourceBrandController.getImage
  );
  route.get(
    "/resource/construction-resource-brands/:id",
    ResourceBrandController.getByResourceId
  );
  route.get(
    "/construction-resource-brand-searches",
    ResourceBrandController.search
  );
  route.post(
    "/construction-resource-brands",
    validateData.resourceBrandValidate,
    ResourceBrandController.save
  );
  route.put(
    "/construction-resource-brands/:id",
    validateData.resourceBrandValidate,
    ResourceBrandController.update
  );
  route.delete(
    "/construction-resource-brands/:id",
    ResourceBrandController.delete
  );
  //construction resource quantity and controller
  // route.get("/construction-resource-price", ResourcePriceController.getAll);
  // route.get("/construction-resource-price/:id", ResourcePriceController.get);
  // route.get("/resource/construction-resource-price/:id", ResourcePriceController.getByResourceId);
  // route.get("/construction-resource-price_search", ResourcePriceController.search);
  // route.post("/construction-resource-price", validateData.resourcePriceValidate, ResourcePriceController.save);
  // route.put("/construction-resource-price/:id", validateData.resourcePriceValidate, ResourcePriceController.update);
  // route.delete("/construction-resource-price/:id", ResourcePriceController.delete);
  //construction resource quantity and price controller
  route.get(
    "/construction-resource-quantity-prices",
    ResourceQuantityandPriceController.getAll
  );
  route.get(
    "/construction-resource-quantity-prices/:id",
    ResourceQuantityandPriceController.get
  );
  route.get(
    "/project/construction-resource-quantity-prices/:id",
    ResourceQuantityandPriceController.getByProjectId
  );
  route.get(
    "/resource/construction-resource-quantity-prices/:id",
    ResourceQuantityandPriceController.getByResourceId
  );
  route.get(
    "/construction-resource-quantity-price-searches",
    ResourceQuantityandPriceController.search
  );
  route.post(
    "/construction-resource-quantity-prices",
    validateData.resourceQuantityValidate,
    ResourceQuantityandPriceController.save
  );
  route.put(
    "/construction-resource-quantity-prices/:id",
    validateData.resourceQuantityValidate,
    ResourceQuantityandPriceController.update
  );
  route.delete(
    "/construction-resource-quantity-prices/:id",
    ResourceQuantityandPriceController.delete
  );
  //construction resource quantity and controller
  route.get(
    "/construction-resource-specifications",
    ResourceSpecificationController.getAll
  );
  route.get(
    "/construction-resource-specifications/:id",
    ResourceSpecificationController.get
  );
  route.get(
    "/image/construction-resource-specifications/:id",
    ResourceSpecificationController.getImage
  );
  route.get(
    "/resource/construction-resource-specifications/:id",
    ResourceSpecificationController.getByResourceId
  );
  route.get(
    "/construction-resource-specification-searches",
    ResourceSpecificationController.search
  );
  route.post(
    "/construction-resource-specifications",
    validateData.resourceSpecificationValidate,
    ResourceSpecificationController.save
  );
  route.put(
    "/construction-resource-specifications/:id",
    validateData.resourceSpecificationValidate,
    ResourceSpecificationController.update
  );
  route.delete(
    "/construction-resource-specifications/:id",
    ResourceSpecificationController.delete
  );
  //Resource image
  route.post(
    "/resource-image/:id",
    validateData.resourceImageValidate,
    ResourceImageController.save
  );
  route.get("/resource-images/:id", ResourceImageController.getAll);
  route.get("/image/resource-images/:id", ResourceImageController.getImage);
  route.put(
    "/resource-images/:id",
    validateData.resourceImageValidate,
    ResourceImageController.update
  );
  route.delete("/resource-images/:id", ResourceImageController.delete);
  //Matrix
  route.get(
    "/matrix/construction-resource",
    ConstructionResourceRegistrationController.countAllConstructionResourceWithResourceType
  );


  //salary controller
  route.get(
    "/salaries",
    SalaryController.getAll
  );
  route.get(
    "/salaries/:id",
    SalaryController.get
  );
  route.get(
    "/resource/salaries/:id",
    SalaryController.getByResourceId
  );

  route.post(
    "/salaries",
    validateData.salaryValidate,
    SalaryController.save
  );
  route.put(
    "/salaries/:id",
    validateData.salaryValidate,
    SalaryController.update
  );
  route.delete(
    "/salaries/:id",
    SalaryController.delete
  );
  return route;
};
