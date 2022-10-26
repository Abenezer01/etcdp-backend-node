
const AddressController = require("./../controllers/master/AddressController.js")

module.exports = function(express) {
	const route = express.Router();

	//brands route
	route.get("/address",AddressController.getAll);
	route.get("/address/:id",AddressController.get);
	route.get("/address_search",AddressController.search);
	route.post("/address",AddressController.save);
	route.put("/address/:id",AddressController.update);
	route.delete("/address/:id",AddressController.delete);
	route.get("/address_with_items",AddressController.getWithItems);

	return route;
};