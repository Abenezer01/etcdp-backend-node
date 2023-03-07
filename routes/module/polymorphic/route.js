const AddressController = require("../../../controllers/polymorphic/AddressController.js")

const validateData = require("../../../middleware/validate/module/polymorphic/validate")

const ActionStateController = require("../../../controllers/polymorphic/ActionStateController.js")
const ReplyController = require("../../../controllers/polymorphic/ReplyController.js")
const NoteController = require("../../../controllers/polymorphic/NoteController.js")
const ModelMenuController = require("../../../controllers/polymorphic/ModelMenuController.js")
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
    route.put("/check/:model/:id", ActionStateController.check);
    route.put("/approve/:model/:id", ActionStateController.approve);
    route.put("/authorize/:model/:id", ActionStateController.authorize);
    route.put("/reject/:model/:id", ActionStateController.reject);
    // route.put("/reject/:model/:id", validateData.actionStateValidate, ActionStateController.reject);
    route.get("/model-action-data/:id", ActionStateController.getModelAction);

    //reply

    route.get("/reply", ReplyController.getAll);
    route.get("/reply/:id", ReplyController.get);
    route.post("/reply", ReplyController.save);
    route.put("/reply/:id", ReplyController.update);
    route.delete("/reply/:id", ReplyController.delete);
    route.get("/action-replies/:id", ReplyController.getActionReplies);

    //note 

    route.get("/note", NoteController.getAll);
    route.get("/note/:id", NoteController.get);
    route.post("/note", NoteController.save);
    route.put("/note/:id", NoteController.update);
    route.delete("/note/:id", NoteController.delete);
    route.get("/model-notes/:id", NoteController.getNoteByModelId);

    //Model Menu

    route.get("/model-menu", ModelMenuController.getAll);
    route.get("/model-menu/:id", ModelMenuController.get);
    route.post("/model-menu", ModelMenuController.save);
    route.put("/model-menu/:id", ModelMenuController.update);
    route.delete("/model-menu/:id", ModelMenuController.delete);
    route.get("/module-model-menus/:id", ModelMenuController.getModelMenuByModule);
    

    



    // route.get("/address/:id", AddressController.get);
    // route.get("/address-search", AddressController.search);
    // route.post("/address", AddressController.save);
    // route.put("/address/:id", AddressController.update);
    // route.delete("/address/:id", AddressController.delete);

    return route;
};