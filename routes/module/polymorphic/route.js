const AddressController = require("../../../controllers/polymorphic/AddressController.js")

const validateData = require("../../../middleware/validate/module/polymorphic/validate")

const ActionStateController = require("../../../controllers/polymorphic/ActionStateController.js")
const ReplyController = require("../../../controllers/polymorphic/ReplyController.js")
const NoteController = require("../../../controllers/polymorphic/NoteController.js")
const PhotoController = require("../../../controllers/polymorphic/PhotoController.js")
const ModelMenuController = require("../../../controllers/polymorphic/ModelMenuController.js")
const NotificationController = require("../../../controllers/polymorphic/NotificationController.js")
const FileController = require("../../../controllers/polymorphic/FileController")
const middleware = require("../../../middleware/middleware")

module.exports = function(express) {
    const route = express.Router();

    //address route
    route.get("/address", AddressController.getAll);
    route.get("/address/:id", AddressController.get);
    route.get("/address/model/:id", AddressController.getAddressByModelId);
    route.get("/address_search", AddressController.search);
    route.post("/address", validateData.addressValidate, AddressController.save);
    route.put("/address/:id", validateData.addressValidate, AddressController.update);
    route.delete("/address/:id", AddressController.delete);

    //action state route
    route.get("/action-state", ActionStateController.getAll);
    route.get("/action-state/:id", ActionStateController.get);
    route.get("/action/:id", ActionStateController.getLast);
    route.put("/check/:model/:id", ActionStateController.check);
    route.put("/approve/:model/:id", ActionStateController.approve);
    route.put("/authorize/:model/:id", ActionStateController.authorize);
    route.put("/reject/:model/:id", ActionStateController.reject);
    // route.put("/reject/:model/:id", validateData.actionStateValidate, ActionStateController.reject);
    route.get("/model-action-data/:id", ActionStateController.getModelAction);
    //Photo
    route.post("/photo/:id", validateData.photoValidate, PhotoController.save);
    route.get("/photo/:type/:id", PhotoController.servePhoto);
    route.get("/multiple/photo/:id", PhotoController.serveMultiplePhoto);
    route.put("/photo/:id", validateData.photoValidate, PhotoController.update);
    route.delete("/photo/:id", PhotoController.delete);
    //File
    route.get("/file", FileController.getAll);
    route.get("/file/:id", FileController.get);
    route.get("/file/reference/:id", FileController.getMyFiles);
    route.get("/filter/file", validateData.filterValidate, FileController.getMyFilteredFiles);
    route.get("/file/filter/type_model", validateData.filterValidate, FileController.getFilesByModelAndType);
    route.get("/file_search", FileController.search);
    route.post("/file", validateData.fileValidate, FileController.save);
    route.put("/file/:id", validateData.fileValidate, FileController.update);
    route.delete("/file/:id", FileController.delete);
    //reply
    route.get("/reply", ReplyController.getAll);
    route.get("/reply/:id", ReplyController.get);
    route.post("/reply", validateData.replyValidate, ReplyController.save);
    route.put("/reply/:id", ReplyController.update);
    route.delete("/reply/:id", ReplyController.delete);
    route.get("/action-replies/:id", ReplyController.getActionReplies);

    //note 

    route.get("/note", NoteController.getAll);
    route.get("/note/:id", NoteController.get);
    route.post("/note", validateData.noteValidate, NoteController.save);
    route.put("/note/:id", NoteController.update);
    route.delete("/note/:id", NoteController.delete);
    route.get("/model-notes/:id", NoteController.getNoteByModelId);






    // route.get("/address/:id", AddressController.get);
    // route.get("/address-search", AddressController.search);
    // route.post("/address", AddressController.save);
    // route.put("/address/:id", AddressController.update);
    // route.delete("/address/:id", AddressController.delete);
    //Model Menu

    route.get("/model-menu", ModelMenuController.getAll);
    route.get("/model-menu/:id", ModelMenuController.get);
    route.post("/model-menu", validateData.modelMenuValidate, ModelMenuController.save);
    route.put("/model-menu/:id", ModelMenuController.update);
    route.delete("/model-menu/:id", ModelMenuController.delete);
    route.get("/module-model-menus/:id", ModelMenuController.getModelMenuByModule);

    route.get("/module-models/:module", ModelMenuController.getModuleExtraModels);

    route.put("/module-type-models-update/:id", ModelMenuController.editModuleTypeModels);


    route.get("/notification/:limit/:page_no", NotificationController.getAll);
    route.get("/unread-notification/:count", NotificationController.unreadNotification);
    route.get("/notification/:id", NotificationController.get);



    return route;
};