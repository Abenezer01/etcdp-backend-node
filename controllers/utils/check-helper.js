// const { actionstate } = require("../../models");
// const usrData = require("../../utils/userDataFromToken");
// const crypto = require("crypto");
// const notificationHelper = require("./notification-helper");
// const { permissionModules } = require("../../config/master");
// const self = {};
// self.findChecker = async (model) => {
//   try {
//     let usr = await usrData.userData(req, res);

//     let pos = await position.findAll({
//         where: {
//             department_id: usr.departmentID
//         }
//     })

//     let x = await pos.map((item) => {
//         let per = await permission.findOne({
//             where: {
//                 name:   `check_${model}`
//             }
//         })

//         if(pos){
//             let posper = await positionpermission.findOne({
//                 where: {
//                     position_id: item.id,
//                     permission_id: per.id
//                 }
//             })
//             if(pos){
//                 return item.id
//             }
//         }
        
//     })
//     const act = await actionstate.create({
//       model_id,
//       model,
//       action,
//       user_id: user_id,
//       position_id: usr.position_id,
//       time: new Date(),
//     });
//     return act;


//   } catch (error) {
//     return {
//       message: error.message,
//     };
//   }
// };
// module.exports = self;
