const AddressController = require("../../../controllers/polymorphic/AddressController.js")
const validateData = require("../../../middleware/validate/module/polymorphic/validate")
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

    return route;
};