const { ActionState } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const self = {};

self.saveActionState = async (model_id, model, action, user_id, req, res) => {
  try {
    let usr = await usrData.userData(req, res);
    const act = await ActionState.create({
      model_id,
      model,
      action,
      user_id: user_id,
      position_id: usr.position_id,
      time: new Date(),
    });
    return act;

    // if(act) {
    //   let me = await actionHelper.notifyActor(act,'check', usr.usrID, usr.departmentID)
    //   return me
    // }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
self.getAction = async function (idd) {
  try {
    const data = await ActionState.findAll({
      where: {
        model_id: idd,
      },
    });

    if (data) {
      let states = [...new Set(data.map((item) => item.action))].filter(
        (n) => n
      );

      let status = null;

      if (states.includes("REJECT")) {
        status = "REJECTED";
      } else if (states.includes("AUTHORIZE")) {
        status = "AUTHORIZED";
      } else if (states.includes("APPROVE")) {
        status = "APPROVED";
      } else if (states.includes("CHECK")) {
        status = "CHECKED";
      } else if (states.includes("REGISTER")) {
        status = "REGISTERED";
      }

      return status;
    }
  } catch (error) {
    return error;
  }
};
module.exports = self;
