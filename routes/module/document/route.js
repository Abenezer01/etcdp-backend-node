const documentTypeController = require("../../../controllers/document/documentTypeController")
const DocumentCategoryController = require("../../../controllers/document/documentCategoryController")
const DocumentSubCategoryController = require("../../../controllers/document/documentSubCategoryController")
const DocumentController = require("../../../controllers/document/documentController")

const validateData = require("../../../middleware/validate/module/document/validate")
module.exports = function(express) {
    const route = express.Router();

    //construction document type controller
    route.get("/document-type", documentTypeController.getAll);
    route.get("/document-type/:id", documentTypeController.get);
    route.get("/document-type_search", documentTypeController.search);
    route.post("/document-type", validateData.documentTypeValidate, documentTypeController.save);
    route.put("/document-type/:id", validateData.documentTypeValidate, documentTypeController.update);
    route.delete("/document-type/:id", documentTypeController.delete);
    //construction document category controller
    route.get("/document-category", DocumentCategoryController.getAll);
    route.get("/document-category/:id", DocumentCategoryController.get);
    route.get("/type/document-category/:id", DocumentCategoryController.getCRCBydocumentTypeId);
    route.get("/document-category_search", DocumentCategoryController.search);
    route.post("/document-category", validateData.documentCategoryValidate, DocumentCategoryController.save);
    route.put("/document-category/:id", validateData.documentCategoryValidate, DocumentCategoryController.update);
    route.delete("/document-category/:id", DocumentCategoryController.delete);
    //construction document subcategory controller
    route.get("/document-subcategory", DocumentSubCategoryController.getAll);
    route.get("/document-subcategory/:id", DocumentSubCategoryController.get);
    route.get("/document-subcategory_search", DocumentSubCategoryController.search);
    route.post("/document-subcategory", validateData.documentSubCategoryValidate, DocumentSubCategoryController.save);
    route.put("/document-subcategory/:id", validateData.documentSubCategoryValidate, DocumentSubCategoryController.update);
    route.delete("/document-subcategory/:id", DocumentSubCategoryController.delete);
    //construction document registration controller
    route.get("/document", DocumentController.getAll);
    route.get("/document/:id", DocumentController.get);
    route.get("/binary/document/:id", DocumentController.getdocument);
    route.get("/filter/document", DocumentController.filter);
    route.get("/document_search", DocumentController.search);
    route.post("/document", validateData.documentValidate, DocumentController.save);
    route.put("/document/:id", validateData.documentUpdateValidate, DocumentController.update);
    route.delete("/document/:id", DocumentController.delete);

    return route;
};