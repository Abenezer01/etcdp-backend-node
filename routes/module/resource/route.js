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
const ProfessionalLicenseController = require("../../../controllers/projects/ProfessionalLicenseController.js");

const hasPermission = require("../../../middleware/hasPermission.js");
const validateData = require("../../../middleware/validate/module/resource/validate");
module.exports = function (express) {
  const route = express.Router();

 
  // Resource routes with validation
    route.get("/resources", hasPermission('view_resource'), ResourceController.getAll);
    route.get("/resources/:id", hasPermission('view_resource'), ResourceController.get);
    route.post("/resources", hasPermission('create_resource'), validateData.resourceValidate, ResourceController.save);
    route.put("/resources/:id", hasPermission('update_resource'), validateData.resourceValidate, ResourceController.update);
    route.delete("/resources/:id", hasPermission('delete_resource'), ResourceController.delete);

    // ResourceBrand routes with validation
    route.get("/resource-brands", hasPermission('view_resourcebrand'), ResourceBrandController.getAll);
    route.get("/resource-brands/:id", hasPermission('view_resourcebrand'), ResourceBrandController.get);
    route.post("/resource-brands", hasPermission('create_resourcebrand'), validateData.resourceBrandValidate, ResourceBrandController.save);
    route.put("/resource-brands/:id", hasPermission('update_resourcebrand'), validateData.resourceBrandValidate, ResourceBrandController.update);
    route.delete("/resource-brands/:id", hasPermission('delete_resourcebrand'), ResourceBrandController.delete);

    // ResourceSpecification routes with validation
    route.get("/resource-specifications", hasPermission('view_resourcespecification'), ResourceSpecificationController.getAll);
    route.get("/resource-specifications/:id", hasPermission('view_resourcespecification'), ResourceSpecificationController.get);
    route.post("/resource-specifications", hasPermission('create_resourcespecification'), validateData.resourceSpecificationValidate, ResourceSpecificationController.save);
    route.put("/resource-specifications/:id", hasPermission('update_resourcespecification'), validateData.resourceSpecificationValidate, ResourceSpecificationController.update);
    route.delete("/resource-specifications/:id", hasPermission('delete_resourcespecification'), ResourceSpecificationController.delete);

    // ResourcePrice routes with validation
    route.get("/resource-prices", hasPermission('view_resourceprice'), ResourcePriceController.getAll);
    route.get("/resource-prices/:id", hasPermission('view_resourceprice'), ResourcePriceController.get);
    route.post("/resource-prices", hasPermission('create_resourceprice'), validateData.resourcePriceValidate, ResourcePriceController.save);
    route.put("/resource-prices/:id", hasPermission('update_resourceprice'), validateData.resourcePriceValidate, ResourcePriceController.update);
    route.delete("/resource-prices/:id", hasPermission('delete_resourceprice'), ResourcePriceController.delete);

    // ResourceQuantity routes with validation
    route.get("/resource-quantities", hasPermission('view_resourcequantity'), ResourceQuantityController.getAll);
    route.get("/resource-quantities/:id", hasPermission('view_resourcequantity'), ResourceQuantityController.get);
    route.post("/resource-quantities", hasPermission('create_resourcequantity'), validateData.resourceQuantityValidate, ResourceQuantityController.save);
    route.put("/resource-quantities/:id", hasPermission('update_resourcequantity'), validateData.resourceQuantityValidate, ResourceQuantityController.update);
    route.delete("/resource-quantities/:id", hasPermission('delete_resourcequantity'), ResourceQuantityController.delete);

    // Professionals routes with validation
  route.get("/professionals", hasPermission('view_professional'), ProfessionalController.getAll);
  route.get("/professionals/:id", hasPermission('view_professional'), ProfessionalController.get);
  route.post("/professionals", hasPermission('create_professional'), validateData.professionalValidate, ProfessionalController.save);
  route.put(
    "/professionals/:id",
    hasPermission('update_professional'),
    validateData.professionalValidate,
    ProfessionalController.update
  );
  route.delete("/professionals/:id", hasPermission('delete_professional'), ProfessionalController.delete);


  // professional address
  route.get("/professional-addresses", hasPermission('view_professionaladdress'), ProfessionalAddressController.getAll);
  route.get("/professional-addresses/:id", hasPermission('view_professionaladdress'), ProfessionalAddressController.get);
  route.post("/professional-addresses", hasPermission('create_professionaladdress'), validateData.professionalAddressValidate, ProfessionalAddressController.save);
  route.put(
    "/professional-addresses/:id",
    hasPermission('update_professionaladdress'),
    validateData.professionalAddressValidate,
    ProfessionalAddressController.update
  );
  route.delete("/professional-addresses/:id", hasPermission('delete_professionaladdress'), ProfessionalAddressController.delete);

  // Professional contacts routes with validation
  route.get("/professional-contacts", hasPermission('view_professionalcontact'), ProfessionalContactController.getAll);
  route.get("/professional-contacts/:id", hasPermission('view_professionalcontact'), ProfessionalContactController.get);
  route.post("/professional-contacts", hasPermission('create_professionalcontact'), validateData.professionalContactValidate, ProfessionalContactController.save);
  route.put(
    "/professional-contacts/:id",
    hasPermission('update_professionalcontact'),
    validateData.professionalContactValidate,
    ProfessionalContactController.update
  );
  route.delete("/professional-contacts/:id", hasPermission('delete_professionalcontact'), ProfessionalContactController.delete);

  // Professional contact people routes with validation
  route.get("/professional-contact-people", hasPermission('view_professionalcontactpeople'), ProfessionalContactPeopleController.getAll);
  route.get("/professional-contact-people/:id", hasPermission('view_professionalcontactpeople'), ProfessionalContactPeopleController.get);
  route.post("/professional-contact-people", hasPermission('create_professionalcontactpeople'), validateData.professionalContactPeopleValidate, ProfessionalContactPeopleController.save);
  route.put(
    "/professional-contact-people/:id",
    hasPermission('update_professionalcontactpeople'),
    validateData.professionalContactPeopleValidate,
    ProfessionalContactPeopleController.update
  );
  route.delete("/professional-contact-people/:id", hasPermission('delete_professionalcontactpeople'), ProfessionalContactPeopleController.delete);
  

  // Professional additional information routes with validation
  route.get("/professional-additional-information", hasPermission('view_professionaladditionalinformation'), ProfessionalAdditionalInformationController.getAll);
  route.get("/professional-additional-information/:id", hasPermission('view_professionaladditionalinformation'), ProfessionalAdditionalInformationController.get);
  route.post("/professional-additional-information", hasPermission('create_professionaladditionalinformation'), validateData.professionalAdditionalInformationValidate, ProfessionalAdditionalInformationController.save);
  route.put(
    "/professional-additional-information/:id",
    hasPermission('update_professionaladditionalinformation'),
    validateData.professionalAdditionalInformationValidate,
    ProfessionalAdditionalInformationController.update
  );
  route.delete("/professional-additional-information/:id", hasPermission('delete_professionaladditionalinformation'), ProfessionalAdditionalInformationController.delete);


  // Professional education routes with validation
  route.get("/professional-educations", hasPermission('view_professionaleducation'), ProfessionalEducationController.getAll);
  route.get("/professional-educations/:id", hasPermission('view_professionaleducation'), ProfessionalEducationController.get);
  route.post("/professional-educations", hasPermission('create_professionaleducation'), validateData.professionalEducationValidate, ProfessionalEducationController.save);
  route.put(
    "/professional-educations/:id",
    hasPermission('update_professionaleducation'),
    validateData.professionalEducationValidate,
    ProfessionalEducationController.update
  );
  route.delete("/professional-educations/:id", hasPermission('delete_professionaleducation'), ProfessionalEducationController.delete);

  // Professional work experiences routes with validation
  route.get("/professional-work-experiences", hasPermission('view_professionalworkexperience'), ProfessionalWorkExperienceController.getAll);
  route.get("/professional-work-experiences/:id", hasPermission('view_professionalworkexperience'), ProfessionalWorkExperienceController.get);
  route.post("/professional-work-experiences", hasPermission('create_professionalworkexperience'), validateData.professionalWorkExperienceValidate, ProfessionalWorkExperienceController.save);
  route.put(
    "/professional-work-experiences/:id",
    hasPermission('update_professionalworkexperience'),
    validateData.professionalWorkExperienceValidate,
    ProfessionalWorkExperienceController.update
  );
  route.delete("/professional-work-experiences/:id", hasPermission('delete_professionalworkexperience'), ProfessionalWorkExperienceController.delete);

  
  // Professional association memberships routes with validation
  route.get("/professional-association-memberships", hasPermission('view_professionalassociationmembership'), ProfessionalAssociationMembershipController.getAll);
  route.get("/professional-association-memberships/:id", hasPermission('view_professionalassociationmembership'), ProfessionalAssociationMembershipController.get);
  route.post("/professional-association-memberships", hasPermission('create_professionalassociationmembership'), validateData.professionalAssociationMembershipValidate, ProfessionalAssociationMembershipController.save);
  route.put(
    "/professional-association-memberships/:id",
    hasPermission('update_professionalassociationmembership'),
    validateData.professionalAssociationMembershipValidate,
    ProfessionalAssociationMembershipController.update
  );
  route.delete("/professional-association-memberships/:id", hasPermission('delete_professionalassociationmembership'), ProfessionalAssociationMembershipController.delete);
  
   // Professional certifications routes with validation
   route.get("/professional-certifications", hasPermission('view_professionalcertification'), ProfessionalCertificationController.getAll);
   route.get("/professional-certifications/:id", hasPermission('view_professionalcertification'), ProfessionalCertificationController.get);
   route.post("/professional-certifications", hasPermission('create_professionalcertification'), validateData.professionalCertificationValidate, ProfessionalCertificationController.save);
   route.put(
     "/professional-certifications/:id",
     hasPermission('update_professionalcertification'),
     validateData.professionalCertificationValidate,
     ProfessionalCertificationController.update
   );
   route.delete("/professional-certifications/:id", hasPermission('delete_professionalcertification'), ProfessionalCertificationController.delete);


  route.get("/professional-licenses", hasPermission('view_professionallicense'), ProfessionalLicenseController.getAll);
  route.get("/professional-licenses/:id", hasPermission('view_professionallicense'), ProfessionalLicenseController.get);
  route.post("/professional-licenses", hasPermission('create_professionallicense'), validateData.professionalLicenseValidate, ProfessionalLicenseController.save);
  route.put("/professional-licenses/:id", hasPermission('update_professionallicense'), validateData.professionalLicenseValidate, ProfessionalLicenseController.update);
  route.delete("/professional-licenses/:id", hasPermission('delete_professionallicense'), ProfessionalLicenseController.delete);

  //Matrix
  route.get(
    "/matrix/resource", ResourceController.countAllResourceWithResourceType
  );
  return route;
};
