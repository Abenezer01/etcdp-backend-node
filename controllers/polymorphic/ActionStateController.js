const {
  ActionState,
  Note,
  User,
  UserPosition,
  Position,
  File,
  Sequelize,
} = require("../../models");

const Op = Sequelize.Op;

let self = {};
const usrData = require("../../utils/userDataFromToken");
const actorHelper = require("../utils/actor-helper")
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ActionState, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(ActionState, req, res);
};



self.check = async (req, res) => {
  try {
    let id = req.params.id;
    let model = req.params.model;

    let usr = await usrData.userData(req, res);

    if (usr) {
      let data = await ActionState.findOne({
        where: {
          model_id: id,
          model: model,
          action: "CHECK",
        },
      });

      if (data) {
        return res.status(400).json({
          message: "already checked!",
        });
      } else {
        let action = await ActionState.findOne({
            where: {
                model_id: id,
                action: "REGISTER",
                user_id: usr.usrID
            }
        })

        if (action) {
            return res.status(422).json({
                message: 'You are not allowed to check the data as you are the register'
            })
        } else {
        let action = await ActionState.create({
          model_id: id,
          model: model,
          action: "CHECK",
          user_id: usr.usrID,
          position_id: usr.position_id,
          time: new Date(),
        });

        if(action){
          await actorHelper.notifyActor(action,'approve', usr.usrID, usr.departmentID)
        }

        return res.json(action);
        }
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
self.approve = async (req, res) => {
  try {
    let id = req.params.id;
    let model = req.params.model;
    let usr = await usrData.userData(req, res);

    if (usr) {
      let data = await ActionState.findOne({
        where: {
          model_id: id,
          model: model,
          action: "APPROVE",
        },
      });
      if (data) {
        return res.status(400).json({
          message: "Already Approve!",
        });
      } else {
        let action = await ActionState.findAll({
            where: {
                model_id: id,
                action: {
                    [Op.in]: ['REGISTSER', 'CHECK']
                },
                user_id: usr.usrID
            }
        })

        if (action.length != 0) {
            return res.status(422).json({
                message: 'You can not approve as you either register or check the data'
            })
        } else {
        let action = await ActionState.create({
          model: model.toLowerCase(),
          model_id: id,
          action: "APPROVE",
          user_id: usr.usrID,
          position_id: usr.position_id,
          time: new Date(),
        });
        if(action){

          await actorHelper.notifyActor(action,'authorize', usr.usrID, usr.departmentID)
        }
        return res.status(200).json(action);
        }
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.reject = async (req, res) => {
  try {
    let usr = await usrData.userData(req, res);
    let id = req.params.id;
    let model = req.params.model;

    let us = {
      id: usr.usrID,
    };
    if (usr) {
      let data = await ActionState.findOne({
        where: {
          id: id,
          action: "REJECT",
        },
      });
      if (data) {
        return res.status(400).json({
          message: "Already Rejected",
        });
      } else {
        let action = await ActionState.findAll({
            where: {
                model_id: id,
                action: {
                    [Op.in]: ['REGISTER', 'CHECK', "APPROVE"]
                },
                user_id: us.id
            }

        })

        if (action.length != 0) {
            return res.status(422).json({
                message: 'You can not approve as you either register or check or approver the data'
            })
        } else {
        let action = await ActionState.create({
          model: model.toLowerCase(),
          model_id: id,
          action: "REJECT",
          user_id: us.id,
          position_id: usr.position_id,
          time: new Date(),
        });

        return res.status(200).json(action);
        }
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.authorize = async (req, res) => {
  try {
    let id = req.params.id;
    let model = req.params.model;
    let usr = await usrData.userData(req, res);

    if (usr) {
      let data = await ActionState.findOne({
        where: {
          model_id: id,
          action: "AUTHORIZE",
        },
      });

      if (data) {
        return res.status(400).json({
          message: "Already Authorized",
        });
      } else {
        let action = await ActionState.findAll({
            model_id: id,
            action: {
                [Op.in]: ['REGISTSER', 'CHECK', "APPROVE"]
            },
            user_id: us.id

        })

        if (action.length != 0) {
            return res.status(422).json({
                message: 'You can not approve as you either register or check or approver the data'
            })
        } else {

        let action = await ActionState.create({
          model: model.toLowerCase(),
          model_id: id,
          action: "AUTHORIZE",
          user_id: usr.usrID,
          position_id: usr.position_id,
          time: new Date(),
        });

        return res.status(200).json(action);
        }
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


self.getModelAction = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await ActionState.findAll({
      where: {
        model_id: id,
      },
    });

    if (data) {
      const register = data.find((item) => item.action === "REGISTER");
      const check = data.find((item) => item.action === "CHECK");
      const approve = data.find((item) => item.action === "APPROVE");
      const reject = data.find((item) => item.action === "REJECT");
      const authorize = data.find((item) => item.action === "AUTHORIZE");

      const element = {};

      if (register) {
        const registerUser = await self.getUserData(
          register.user_id,
          register.id
        );
        element.registeredData = {
          by: register.user_id,
          user: registerUser,
          time: register.time,
        };
      }

      if (check) {
        const checkUser = await self.getUserData(check.user_id, check.id);
        // const checkedFiles = await self.getFileData(check.id, 'CHECK');
        element.checkedData = {
          by: check.user_id,
          user: checkUser,
          time: check.time,
          // files: checkedFiles.rows,
          // fileCount: checkedFiles.count,
        };
      }

      if (approve) {
        const approveUser = await self.getUserData(approve.user_id, approve.id);
        // const approvedFiles = await self.getFileData(approve.id, 'APPROVE');
        element.approvedData = {
          by: approve.user_id,
          user: approveUser,
          time: approve.time,
          //     files: approvedFiles.rows,
          //     fileCount: approvedFiles.count,
        };
      }

      if (authorize) {
        const authorizeUser = await self.getUserData(
          authorize.user_id,
          authorize.id
        );
        // const authorizedFiles = await self.getFileData(authorize.id, 'AUTHORIZE');
        element.authorizedData = {
          by: authorize.user_id,
          user: authorizeUser,
          time: authorize.time,
          // files: authorizedFiles.rows,
          // fileCount: authorizedFiles.count,
        };
      }

      if (reject) {
        const rejectUser = await self.getUserData(reject.user_id, reject.id);
        // const rejectedFiles = await self.getFileData(reject.id, 'REJECT');
        element.rejectedData = {
          by: reject.user_id,
          user: rejectUser,
          time: reject.time,
          // files: rejectedFiles.rows,
          // fileCount: rejectedFiles.count,
        };
      }

      // do something with element object

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

      element.id = id;
      element.status = status;
      element.descripton;

      return res.json(element);
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.getUserData = async (userId, actionId) => {
  const userObj = await User.findOne({
    attributes: {
      exclude: ["password", "refresh_token"],
    },
    where: {
      id: userId,
    },
  });

  if (!userObj) {
    return null;
  }

  const temp = userObj.toJSON();

  let action = await ActionState.findOne({
    where: {
      id: actionId,
    },
    include: [
      {
        model: Position,
        as: "Position",
      },
    ],
  });

  const primaryPosition = action.Position;
  if (primaryPosition) {
    temp.position_name = primaryPosition.name;
  }

  return temp;
};

self.getFileData = async (fileableId, fileType) => {
  const files = await File.findAndCountAll({
    where: {
      fileable_id: fileableId,
      file_type: fileType,
    },
  });

  return files;
};

self.getLast = async (req, res) => {
  let id = req.params.id;
  try {
    let data = await ActionState.findAll({
      where: {
        model_id: id,
      },
    });

    return res.json(data.length);
  } catch (error) {}
};


self.save = async (req, res) => {
  saveRecord(ActionState, req, res);
};

self.update = async (req, res) => {
  updateRecord(ActionState, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ActionState, req, res);
};
module.exports = self;
