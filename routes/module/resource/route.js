const ResourceController = require("../../../controllers/resources/ResourceController.js");
const ResourceBrandController = require("../../../controllers/resources/ResourceBrandController.js");
const ResourceSpecificationController = require("../../../controllers/resources/ResourceSpecificationController.js");
const ResourcePriceController = require("../../../controllers/resources/ResourcePriceController.js");
const ResourceQuantityController = require("../../../controllers/resources/ResourceQuantityController.js");


const ProfessionalController = require("../../../controllers/construction resource/ProfessionalController");
const ProfessionalAddressController = require("../../../controllers/construction resource/ProfessionalAddressController");
const ProfessionalContactController = require("../../../controllers/construction resource/ProfessionalContactController");
const ProfessionalContactPeopleController = require("../../../controllers/construction resource/ProfessionalContactPeopleController");
const ProfessionalAdditionalInformationController = require("../../../controllers/construction resource/ProfessionalAdditionalInformationController");
const ProfessionalEducationController = require("../../../controllers/construction resource/ProfessionalEducationController");
const ProfessionalWorkExperienceController = require("../../../controllers/construction resource/ProfessionalWorkExperienceController");
const ProfessionalAssociationMembershipController = require("../../../controllers/construction resource/ProfessionalAssociationMembershipController");
const ProfessionalCertificationController = require("../../../controllers/construction resource/ProfessionalCertificationController");


const validateData = require("../../../middleware/validate/module/resource/validate");
module.exports = function (express) {
  const route = express.Router();

 
  // Resource routes with validation
    route.get("/resources", ResourceController.getAll);
    route.get("/resources/:id", ResourceController.get);
    route.post("/resources", validateData.resourceValidate, ResourceController.save);
    route.put("/resources/:id", validateData.resourceValidate, ResourceController.update);
    route.delete("/resources/:id", ResourceController.delete);

    // ResourceBrand routes with validation
    route.get("/resource-brands", ResourceBrandController.getAll);
    route.get("/resource-brands/:id", ResourceBrandController.get);
    route.post("/resource-brands", validateData.resourceBrandValidate, ResourceBrandController.save);
    route.put("/resource-brands/:id", validateData.resourceBrandValidate, ResourceBrandController.update);
    route.delete("/resource-brands/:id", ResourceBrandController.delete);

    // ResourceSpecification routes with validation
    route.get("/resource-specifications", ResourceSpecificationController.getAll);
    route.get("/resource-specifications/:id", ResourceSpecificationController.get);
    route.post("/resource-specifications", validateData.resourceSpecificationValidate, ResourceSpecificationController.save);
    route.put("/resource-specifications/:id", validateData.resourceSpecificationValidate, ResourceSpecificationController.update);
    route.delete("/resource-specifications/:id", ResourceSpecificationController.delete);

    // ResourcePrice routes with validation
    route.get("/resource-prices", ResourcePriceController.getAll);
    route.get("/resource-prices/:id", ResourcePriceController.get);
    route.post("/resource-prices", validateData.resourcePriceValidate, ResourcePriceController.save);
    route.put("/resource-prices/:id", validateData.resourcePriceValidate, ResourcePriceController.update);
    route.delete("/resource-prices/:id", ResourcePriceController.delete);

    // ResourceQuantity routes with validation
    route.get("/resource-quantities", ResourceQuantityController.getAll);
    route.get("/resource-quantities/:id", ResourceQuantityController.get);
    route.post("/resource-quantities", validateData.resourceQuantityValidate, ResourceQuantityController.save);
    route.put("/resource-quantities/:id", validateData.resourceQuantityValidate, ResourceQuantityController.update);
    route.delete("/resource-quantities/:id", ResourceQuantityController.delete);

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
