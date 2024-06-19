const { Department } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const crypto = require("crypto");
const self = {};

let children = []
self.getAllChildren = async(arr) => {

	for(var i=0; i<arr.length; i++){
		let dd = await Department.findAll({
			where: {
				parent_department_id: arr[i].id
			}
		})
		if(dd.length > 0){
			children.concat(dd)
			self.getChildren(dd)
		}
	}
	return children;
}

self.getChildren = async(id) => {

	try {
		let data = await Department.findAll({
			where: {
				parent_department_id: id
			}
		})

		let all = await self.getAllChildren(data)
        const mergedArr = data.concat(all)
		return mergedArr;

	} catch (error) {
		return {
			message: error.message
		}
	}
}
module.exports = self;


// self.getAllChildren = async (arr) => {
//   let children = [];

//   for (let i = 0; i < arr.length; i++) {
//     const dd = await Department.findAll({
//       where: {
//         parent_department_id: arr[i].id,
//       },
//     });

//     if (dd.length > 0) {
//       children = children.concat(dd);
//       const grandChildren = await self.getAllChildren(dd);
//       children = children.concat(grandChildren);
//     }
//   }

//   return children;
// };

// self.getChildren = async (id) => {
//   try {
//     const data = await Department.findAll({
//       where: {
//         parent_department_id: id,
//       },
//     });

//     const allChildren = await self.getAllChildren(data);
//     const mergedArr = data.concat(allChildren);

//     return mergedArr;
//   } catch (error) {
//     return {
//       message: error.message,
//     };
//   }
// };
