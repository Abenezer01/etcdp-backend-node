const AddressController = require("../../../controllers/polymorphic/AddressController.js")
const middleware = require("../../../middleware/middleware")
module.exports = function(express) {
    const route = express.Router();

    //address route
    route.get("/address", AddressController.getAll);
    route.get("/address/:id", AddressController.get);
    route.get("/address_search", AddressController.search);
    route.post("/address", AddressController.save);
    route.put("/address/:id", AddressController.update);
    route.delete("/address/:id", AddressController.delete);

    return route;
};