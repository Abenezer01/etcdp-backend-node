// const {
//   ActionState,
//   Department,
//   Stakeholder
// } = require("../models");

// const filteredData = async (res, id, model) => {
//   // let other = await eval(model).findAll({
//   //     order: [['createdAt', 'DESC']],
//   //     where: {
//   //         department_id: {
//   //             [Op.in]: exist
//   //         }
//   //     },

//   // })

//   let mine = await eval(model).findAll({
//     where: {
//       department_id: id,
//     },
//   });
//   return res.json(mine);

//   // let otherArr = [];
//   // for (let da of other) {
//   //   let action = await ActionState.findOne({
//   //     where: {
//   //       model_id: da.id,
//   //       action: "APPROVE",
//   //     },
//   //   });
//   //   if (action) {
//   //     otherArr.push(da);
//   //   }
//   // }

//   // let data = [...mine, ...otherArr];
//   // return data;
// };

// module.exports = {
//   filteredData,
// };
