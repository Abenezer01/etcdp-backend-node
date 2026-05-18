const DocumentController = require("../../../controllers/document/documentController");
const validateData = require("../../../middleware/validate/module/document/validate");
const hasPermission = require("../../../middleware/hasPermission");

module.exports = function (express) {
  const route = express.Router();

  //construction document registration controller
  route.get("/documents", hasPermission('view_document'), DocumentController.getAll);
  route.get("/documents/:id", hasPermission('view_document'), DocumentController.get);
  route.get("/binary/documents/:id", DocumentController.getdocument);
  route.get("/filter/documents", DocumentController.filter);
  route.get("/document_search", DocumentController.search);
  route.post(
    "/documents",
    hasPermission('create_document'),
    validateData.documentValidate,
    DocumentController.save
  );
  route.put(
    "/documents/:id",
    hasPermission('update_document'),
    validateData.documentUpdateValidate,
    DocumentController.update
  );
  route.delete("/documents/:id", hasPermission('delete_document'), DocumentController.delete);
  //summary
  route.get(
    "/matrix/document",
    DocumentController.countAllDocumentWithDocumentType
  );
  return route;
};
