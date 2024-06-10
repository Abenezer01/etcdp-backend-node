const AddressController = require("../../../controllers/polymorphic/AddressController.js");

const validateData = require("../../../middleware/validate/module/polymorphic/validate");

const ActionStateController = require("../../../controllers/polymorphic/ActionStateController.js");
const ReplyController = require("../../../controllers/polymorphic/ReplyController.js");
const NoteController = require("../../../controllers/polymorphic/NoteController.js");
const PhotoController = require("../../../controllers/polymorphic/PhotoController.js");
const ModelMenuController = require("../../../controllers/polymorphic/ModelMenuController.js");
const NotificationController = require("../../../controllers/polymorphic/NotificationController.js");
const FileController = require("../../../controllers/polymorphic/FileController");
const middleware = require("../../../middleware/middleware");

module.exports = function (express) {
  const route = express.Router();

  //address route
  route.get("/addresses", AddressController.getAll);
  route.get("/addresses/:id", AddressController.get);
  route.get("/addresses/model/:id", AddressController.getAddressByModelId);
  route.get("/address_search", AddressController.search);
  route.post("/addresses", validateData.addressValidate, AddressController.save);
  route.put(
    "/addresses/:id",
    validateData.addressValidate,
    AddressController.update
  );
  route.delete("/addresses/:id", AddressController.delete);

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
  route.get("/photos", PhotoController.getAll);
  route.post("/photos/:id", validateData.photoValidate, PhotoController.save);
  route.get("/photos/:type/:id", PhotoController.servePhoto);
  route.get("/multiple/photos/:id", PhotoController.serveMultiplePhoto);
  route.put("/photos/:id", validateData.photoValidate, PhotoController.update);
  route.delete("/photos/:id", PhotoController.delete);
  //File
  route.get("/files", FileController.getAll);
  route.get("/files/:id", FileController.get);
  route.get("/files/reference/:id", FileController.getMyFiles);
  route.get(
    "/filter/files",
    validateData.filterValidate,
    FileController.getMyFilteredFiles
  );
  route.get(
    "/file/filter/type_model",
    validateData.filterValidate,
    FileController.getFilesByModelAndType
  );
  route.get("/file_search", FileController.search);
  route.post("/files", validateData.fileValidate, FileController.save);
  route.put("/files/:id", validateData.fileValidate, FileController.update);
  route.delete("/files/:id", FileController.delete);
  route.get("/link-files/:model/:id", FileController.linkfiles);

  //reply
  route.get("/replies", ReplyController.getAll);
  route.get("/replies/:id", ReplyController.get);
  route.post("/replies", validateData.replyValidate, ReplyController.save);
  route.put("/replies/:id", ReplyController.update);
  route.delete("/replies/:id", ReplyController.delete);
  route.get("/action-replies/:id", ReplyController.getActionReplies);

  //note

  route.get("/notes", NoteController.getAll);
  route.get("/notes/:id", NoteController.get);
  route.post("/notes", validateData.noteValidate, NoteController.save);
  route.put("/notes/:id", NoteController.update);
  route.delete("/notes/:id", NoteController.delete);
  route.get("/model-notes/:id", NoteController.getNoteByModelId);

  // route.get("/address/:id", AddressController.get);
  // route.get("/address-searches", AddressController.search);
  // route.post("/address", AddressController.save);
  // route.put("/address/:id", AddressController.update);
  // route.delete("/address/:id", AddressController.delete);
  //Model Menu

  route.get("/model-menus", ModelMenuController.getAll);
  route.get("/model-menus/:id", ModelMenuController.get);
  route.post(
    "/model-menus",
    validateData.modelMenuValidate,
    ModelMenuController.save
  );
  route.put("/model-menus/:id", ModelMenuController.update);
  route.delete("/model-menus/:id", ModelMenuController.delete);
  route.get(
    "/module-model-menus/:id",
    ModelMenuController.getModelMenuByModule
  );

  route.get("/module-models/:module", ModelMenuController.getModuleExtraModels);

  route.put(
    "/module-type-models-update/:id",
    ModelMenuController.editModuleTypeModels
  );

  route.get("/notifications/:limit/:page_no", NotificationController.getAll);
  route.get(
    "/unread-notifications/:count",
    NotificationController.unreadNotification
  );
  route.post("/notifications/:id", NotificationController.get);

  return route;
};
