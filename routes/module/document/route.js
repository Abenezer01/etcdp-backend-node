const DocumentController = require("../../../controllers/document/DocumentController.js")
const validateData = require("../../../middleware/validate/module/document/validate")
module.exports = function(express) {
    const route = express.Router();

    //document route
    route.get("/document", DocumentController.getAll);
    route.get("/document/:id", DocumentController.get);
    route.get("/document/reference/:id", DocumentController.getMyFiles);
    route.get("/document_search", DocumentController.search);
    route.post("/document", validateData.documentValidate, DocumentController.save);
    route.put("/document/:id", validateData.documentValidate, DocumentController.update);
    route.delete("/document/:id", DocumentController.delete);

    return route;
};