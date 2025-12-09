const { ActionState, ActivityLog} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const self = {};



const { Op } = require("sequelize");

self.globalSearch = async(model, query, searchFields = []) => {
  try {
    if (!query || !searchFields || searchFields.length === 0) {
      return await model.findAll();
    }

    // Build dynamic OR conditions
    const conditions = searchFields.map(field => ({
      [field]: { [Op.like]: `%${query}%` }
    }));

    return await model.findAll({
      where: { [Op.or]: conditions }
    });

  } catch (error) {
    console.log("Search Error:", error);
    throw error;
  }
}


// self.saveActionState = async (model_id, model, action, user_id, req, res) => {
//   try {
//     let usr = await usrData.userData(req, res);
//     const act = await ActionState.create({
//       model_id,
//       model,
//       action,
//       user_id: user_id,
//       position_id: usr.position_id,
//       time: new Date(),
//     });
//     return act;

//     // if(act) {
//     //   let me = await actionHelper.notifyActor(act,'check', usr.usrID, usr.departmentID)
//     //   return me
//     // }
//   } catch (error) {
//     return {
//       message: error.message,
//     };
//   }
// };

// self.saveActivityLog = async (user_id, action, module, target_id, target_type, req, res) => {
//   try {
//     const activity = await ActivityLog.create({
//       user_id: user_id,
//       action,
//       module,
//       target_id,
//       target_type,
//       ip_address: req.ip,
//       user_agent: req.get('User-Agent'),
//     });
//     return activity;

//     // if(act) {
//     //   let me = await actionHelper.notifyActor(act,'check', usr.usrID, usr.departmentID)
//     //   return me
//     // }
//   } catch (error) {
//     return {
//       message: error.message,
//     };
//   }
// };
// self.getAction = async function (idd) {
//   try {
//     const data = await ActionState.findAll({
//       where: {
//         model_id: idd,
//       },
//     });

//     if (data) {
//       let states = [...new Set(data.map((item) => item.action))].filter(
//         (n) => n
//       );

//       let status = null;

//       if (states.includes("REJECT")) {
//         status = "REJECTED";
//       } else if (states.includes("AUTHORIZE")) {
//         status = "AUTHORIZED";
//       } else if (states.includes("APPROVE")) {
//         status = "APPROVED";
//       } else if (states.includes("CHECK")) {
//         status = "CHECKED";
//       } else if (states.includes("REGISTER")) {
//         status = "REGISTERED";
//       }

//       return status;
//     }
//   } catch (error) {
//     return error;
//   }
// };
module.exports = self;
