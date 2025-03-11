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
const ProfessionalController = require("../../../controllers/construction resource/ProfessionalController");
const ProfessionalAddressController = require("../../../controllers/construction resource/ProfessionalAddressController");

const ProfessionalContactController = require("../../../controllers/construction resource/ProfessionalContactController");
const ProfessionalContactPeopleController = require("../../../controllers/construction resource/ProfessionalContactPeopleController");

const ProfessionalAdditionalInformationController = require("../../../controllers/construction resource/ProfessionalAdditionalInformationController");

const ProfessionalEducationController = require("../../../controllers/construction resource/ProfessionalEducationController");

const ProfessionalWorkExperienceController = require("../../../controllers/construction resource/ProfessionalWorkExperienceController");
const ProfessionalAssociationMembershipController = require("../../../controllers/construction resource/ProfessionalAssociationMembershipController");
const ProfessionalCertificationController = require("../../../controllers/construction resource/ProfessionalCertificationController");


const validateData = require("../../../middleware/validate/module/construction resource/validate");
module.exports = function (express) {
  const route = express.Router();

 
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
  route.get(
    "/detail-resource-types",
    DetailResourceTypeController.getAll
  );
  route.get(
    "/detail-resource-types/:id",
    DetailResourceTypeController.get
  );
  route.get(
    "/image/detail-resource-types/:id",
    DetailResourceTypeController.getImage
  );
  route.get(
    "/resource/detail-resource-types/:id",
    DetailResourceTypeController.getByResourceId
  );
  route.get(
    "/detail-resource-type-searches",
    DetailResourceTypeController.search
  );
  route.post(
    "/detail-resource-types",
    validateData.detailResourceTypeValidate,
    DetailResourceTypeController.save
  );
  route.put(
    "/detail-resource-types/:id",
    DetailResourceTypeController.update
  );
  route.delete(
    "/detail-resource-types/:id",
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


  // Professionals routes with validation
  route.get("/professionals", ProfessionalController.getAll);
  route.get("/professionals/:id", ProfessionalController.get);
  route.post("/professionals", validateData.professionalValidate, ProfessionalController.save);
  route.put(
    "/professionals/:id",
    validateData.professionalValidate,
    ProfessionalController.update
  );
  route.delete("/professionals/:id", ProfessionalController.delete);


  // professional address
  route.get("/professional-addresses", ProfessionalAddressController.getAll);
  route.get("/professional-addresses/:id", ProfessionalAddressController.get);
  route.post("/professional-addresses", validateData.professionalAddressValidate, ProfessionalAddressController.save);
  route.put(
    "/professional-addresses/:id",
    validateData.professionalAddressValidate,
    ProfessionalAddressController.update
  );
  route.delete("/professional-addresses/:id", ProfessionalAddressController.delete);

  // Professional contacts routes with validation
  route.get("/professional-contacts", ProfessionalContactController.getAll);
  route.get("/professional-contacts/:id", ProfessionalContactController.get);
  route.post("/professional-contacts", validateData.professionalContactValidate, ProfessionalContactController.save);
  route.put(
    "/professional-contacts/:id",
    validateData.professionalContactValidate,
    ProfessionalContactController.update
  );
  route.delete("/professional-contacts/:id", ProfessionalContactController.delete);

  // Professional contact people routes with validation
  route.get("/professional-contact-people", ProfessionalContactPeopleController.getAll);
  route.get("/professional-contact-people/:id", ProfessionalContactPeopleController.get);
  route.post("/professional-contact-people", validateData.professionalContactPeopleValidate, ProfessionalContactPeopleController.save);
  route.put(
    "/professional-contact-people/:id",
    validateData.professionalContactPeopleValidate,
    ProfessionalContactPeopleController.update
  );
  route.delete("/professional-contact-people/:id", ProfessionalContactPeopleController.delete);
  

  // Professional additional information routes with validation
  route.get("/professional-additional-information", ProfessionalAdditionalInformationController.getAll);
  route.get("/professional-additional-information/:id", ProfessionalAdditionalInformationController.get);
  route.post("/professional-additional-information", validateData.professionalAdditionalInformationValidate, ProfessionalAdditionalInformationController.save);
  route.put(
    "/professional-additional-information/:id",
    validateData.professionalAdditionalInformationValidate,
    ProfessionalAdditionalInformationController.update
  );
  route.delete("/professional-additional-information/:id", ProfessionalAdditionalInformationController.delete);


  // Professional education routes with validation
  route.get("/professional-educations", ProfessionalEducationController.getAll);
  route.get("/professional-educations/:id", ProfessionalEducationController.get);
  route.post("/professional-educations", validateData.professionalEducationValidate, ProfessionalEducationController.save);
  route.put(
    "/professional-educations/:id",
    validateData.professionalEducationValidate,
    ProfessionalEducationController.update
  );
  route.delete("/professional-educations/:id", ProfessionalEducationController.delete);

  // Professional work experiences routes with validation
  route.get("/professional-work-experiences", ProfessionalWorkExperienceController.getAll);
  route.get("/professional-work-experiences/:id", ProfessionalWorkExperienceController.get);
  route.post("/professional-work-experiences", validateData.professionalWorkExperienceValidate, ProfessionalWorkExperienceController.save);
  route.put(
    "/professional-work-experiences/:id",
    validateData.professionalWorkExperienceValidate,
    ProfessionalWorkExperienceController.update
  );
  route.delete("/professional-work-experiences/:id", ProfessionalWorkExperienceController.delete);

  
  // Professional association memberships routes with validation
  route.get("/professional-association-memberships", ProfessionalAssociationMembershipController.getAll);
  route.get("/professional-association-memberships/:id", ProfessionalAssociationMembershipController.get);
  route.post("/professional-association-memberships", validateData.professionalAssociationMembershipValidate, ProfessionalAssociationMembershipController.save);
  route.put(
    "/professional-association-memberships/:id",
    validateData.professionalAssociationMembershipValidate,
    ProfessionalAssociationMembershipController.update
  );
  route.delete("/professional-association-memberships/:id", ProfessionalAssociationMembershipController.delete);
  
   // Professional certifications routes with validation
   route.get("/professional-certifications", ProfessionalCertificationController.getAll);
   route.get("/professional-certifications/:id", ProfessionalCertificationController.get);
   route.post("/professional-certifications", validateData.professionalCertificationValidate, ProfessionalCertificationController.save);
   route.put(
     "/professional-certifications/:id",
     validateData.professionalCertificationValidate,
     ProfessionalCertificationController.update
   );
   route.delete("/professional-certifications/:id", ProfessionalCertificationController.delete);
  return route;
};
