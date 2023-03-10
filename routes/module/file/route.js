const FileController = require("../../../controllers/file/FileController")
const validateData = require("../../../middleware/validate/module/file/validate")
module.exports = function(express) {
    const route = express.Router();

    //file route
    route.get("/file", FileController.getAll);
    route.get("/file/:id", FileController.get);
    route.get("/file/reference/:id", FileController.getMyFiles);
    route.get("/filter/file", validateData.filterValidate, FileController.getMyFilteredFiles);
    route.get("/file_search", FileController.search);
    route.post("/file", validateData.fileValidate, FileController.save);
    route.put("/file/:id", validateData.fileValidate, FileController.update);
    route.delete("/file/:id", FileController.delete);

    return route;
};