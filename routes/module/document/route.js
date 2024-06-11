const DocumentTypeController = require("../../../controllers/document/DocumentTypeController");
const DocumentCategoryController = require("../../../controllers/document/DocumentCategoryController");
const DocumentSubCategoryController = require("../../../controllers/document/DocumentSubCategoryController");
const DocumentController = require("../../../controllers/document/DocumentController");

const validateData = require("../../../middleware/validate/module/document/validate");
module.exports = function (express) {
  const route = express.Router();

  //construction document type controller
  route.get("/document-types", DocumentTypeController.getAll);
  route.get("/document-types/:id", DocumentTypeController.get);
  route.get("/document-type_search", DocumentTypeController.search);
  route.post(
    "/document-types",
    validateData.documentTypeValidate,
    DocumentTypeController.save
  );
  route.put(
    "/document-types/:id",
    validateData.documentTypeValidate,
    DocumentTypeController.update
  );
  route.delete("/document-types/:id", DocumentTypeController.delete);
  //construction document category controller
  route.get("/document-categories", DocumentCategoryController.getAll);
  route.get("/document-categories/:id", DocumentCategoryController.get);
  route.get(
    "/type/document-categories/:id",
    DocumentCategoryController.getCRCBydocumentTypeId
  );
  route.get("/document-category_search", DocumentCategoryController.search);
  route.post(
    "/document-categories",
    validateData.documentCategoryValidate,
    DocumentCategoryController.save
  );
  route.put(
    "/document-categories/:id",
    validateData.documentCategoryValidate,
    DocumentCategoryController.update
  );
  route.delete("/document-categories/:id", DocumentCategoryController.delete);
  //construction document subcategory controller
  route.get("/document-subcategories", DocumentSubCategoryController.getAll);
  route.get("/document-subcategories/:id", DocumentSubCategoryController.get);
  route.get(
    "/document-subcategory_search",
    DocumentSubCategoryController.search
  );
  route.post(
    "/document-subcategories",
    validateData.documentSubCategoryValidate,
    DocumentSubCategoryController.save
  );
  route.put(
    "/document-subcategories/:id",
    validateData.documentSubCategoryValidate,
    DocumentSubCategoryController.update
  );
  route.delete(
    "/document-subcategories/:id",
    DocumentSubCategoryController.delete
  );
  //construction document registration controller
  route.get("/documents", DocumentController.getAll);
  route.get("/documents/:id", DocumentController.get);
  route.get("/binary/documents/:id", DocumentController.getdocument);
  route.get("/filter/documents", DocumentController.filter);
  route.get("/document_search", DocumentController.search);
  route.post(
    "/document",
    validateData.documentValidate,
    DocumentController.save
  );
  route.put(
    "/documents/:id",
    validateData.documentUpdateValidate,
    DocumentController.update
  );
  route.delete("/documents/:id", DocumentController.delete);
  //summary
  route.get(
    "/matrix/documents",
    DocumentController.countAllDocumentWithDocumentType
  );
  return route;
};
