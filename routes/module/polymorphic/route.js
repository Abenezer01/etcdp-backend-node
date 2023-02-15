const AddressController = require("../../../controllers/polymorphic/AddressController.js")

const validateData = require("../../../middleware/validate/module/polymorphic/validate")

const ActionStateController = require("../../../controllers/polymorphic/ActionStateController.js")
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
    route.post("/check/:model/:id", validateData.actionStateValidate, ActionStateController.check);
    route.post("/approve/:model/:id", validateData.actionStateValidate, ActionStateController.approve);
    route.post("/authorize/:model/:id", validateData.actionStateValidate, ActionStateController.authorize);
    route.post("/reject/:model/:id", validateData.actionStateValidate, ActionStateController.reject);

    // route.get("/address/:id", AddressController.get);
    // route.get("/address-search", AddressController.search);
    // route.post("/address", AddressController.save);
    // route.put("/address/:id", AddressController.update);
    // route.delete("/address/:id", AddressController.delete);

    return route;
};