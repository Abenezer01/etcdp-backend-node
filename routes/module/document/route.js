
const DocumentController = require("../../../controllers/document/DocumentController");

const validateData = require("../../../middleware/validate/module/document/validate");
module.exports = function (express) {
  const route = express.Router();

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
