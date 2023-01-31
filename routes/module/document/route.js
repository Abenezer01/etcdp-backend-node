const DocumentController = require("../../../controllers/document/DocumentController.js")
const middleware = require("../../../middleware/middleware")
module.exports = function(express) {
    const route = express.Router();

    //document route
    route.get("/document", DocumentController.getAll);
    route.get("/document/:id", DocumentController.get);
    route.get("/document/reference/:id", DocumentController.getMyFiles);
    route.get("/document_search", DocumentController.search);
    route.post("/document", DocumentController.save);
    route.put("/document/:id", DocumentController.update);
    route.delete("/document/:id", DocumentController.delete);

    return route;
};