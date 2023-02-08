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

    route.get("/address-search", AddressController.search);
    route.post("/address", AddressController.save);
    route.put("/address/:id", AddressController.update);

    route.delete("/address/:id", AddressController.delete);

    //address route
    route.get("/action-state", ActionStateController.getAll);
    route.get("/check/:model/:id", ActionStateController.check);
    route.get("/approve/:model/:id", ActionStateController.approve);
    route.get("/authorize/:model/:id", ActionStateController.authorize);
    route.get("/reject/:model/:id", ActionStateController.reject);

    // route.get("/address/:id", AddressController.get);
    // route.get("/address-search", AddressController.search);
    // route.post("/address", AddressController.save);
    // route.put("/address/:id", AddressController.update);
    // route.delete("/address/:id", AddressController.delete);

    return route;
};