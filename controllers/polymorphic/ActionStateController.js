const {
  ActionState,
  User,
  Position,
  File,
  Sequelize,
} = require("../../models");

const Op = Sequelize.Op;

let self = {};
const usrData = require("../../utils/userDataFromToken");
const actorHelper = require("../utils/actor-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ActionState, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(ActionState, req, res);
};



self.check = async (req, res) => {
  try {

    let body = req.body;
    let id = body.model_id;
    let model = body.model;

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
        const errorResponse = {
          _links: {
            previousPage: null,
            nextPage: null
          },
          _warning: [],
          payload: [],
          _attributes: {},
          _errors: {
            message: ["already checked"]
          },
          _generated: new Date().toISOString()
        };
        return res.status(400).json(errorResponse);
      } else {

        let action = await ActionState.findOne({
            where: {
                model_id: id,
                action: "REGISTER",
                user_id: usr.usrID
            }
        });

        if (action) {

            const errorResponse = {
              _links: {
                previousPage: null,
                nextPage: null
              },
              _warning: [],
              payload: [],
              _attributes: {},
              _errors: {
                message: ["You are not allowed to check the data as you are the register"]
              },
              _generated: new Date().toISOString()
            };
            return res.status(422).json(errorResponse);
           
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
          await actorHelper.notifyActor(action,"approve", usr.usrID, usr.departmentID);
        }

        res.apiSuccess({
          data: action
        });

        
        }
      }
    }
  } catch (error) {
    res.apiError(error);
  }
};
self.approve = async (req, res) => {
  try {
    let body = req.body;
    let id = body.model_id;
    let model = body.model;


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

        const errorResponse = {
          _links: {
            previousPage: null,
            nextPage: null
          },
          _warning: [],
          payload: [],
          _attributes: {},
          _errors: {
            message: ["Already Approve!"]
          },
          _generated: new Date().toISOString()
        };
        return res.status(401).json(errorResponse);
    
      } else {
        let action = await ActionState.findAll({
            where: {
                model_id: id,
                action: {
                    [Op.in]: ["REGISTER", "CHECK"]
                },
                user_id: usr.usrID
            }
        });

        if (action.length !== 0) {

          const errorResponse = {
            _links: {
              previousPage: null,
              nextPage: null
            },
            _warning: [],
            payload: [],
            _attributes: {},
            _errors: {
              message: ["You can not approve as you either register or check the data!"]
            },
            _generated: new Date().toISOString()
          };
          return res.status(422).json(errorResponse);
           
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

          await actorHelper.notifyActor(action,"authorize", usr.usrID, usr.departmentID);
        }
        res.apiSuccess({
          data: action
        });
        }
      }
    }
  } catch (error) {
    res.apiError(error);
  }
};

self.reject = async (req, res) => {
  try {
    let usr = await usrData.userData(req, res);
    let body = req.body;
    let id = body.model_id;
    let model = body.model;

    if (usr) {
      let data = await ActionState.findOne({
        where: {
          id: id,
          action: "REJECT",
        },
      });
      if (data) {

        const errorResponse = {
          _links: {
            previousPage: null,
            nextPage: null
          },
          _warning: [],
          payload: [],
          _attributes: {},
          _errors: {
            message: ["Already Rejected!"]
          },
          _generated: new Date().toISOString()
        };
        return res.status(400).json(errorResponse);
      
      } else {
        let action = await ActionState.findAll({
            where: {
                model_id: id,
                action: {
                    [Op.in]: ["REGISTER", "CHECK", "APPROVE"]
                },
                user_id: usr.usrID
            }

        });

        if (action.length !== 0) {

            const errorResponse = {
              _links: {
                previousPage: null,
                nextPage: null
              },
              _warning: [],
              payload: [],
              _attributes: {},
              _errors: {
                message: ["You can not reject as you either register or check or approver the data!"]
              },
              _generated: new Date().toISOString()
            };
            return res.status(422).json(errorResponse);


        } else {
        let action = await ActionState.create({
          model: model.toLowerCase(),
          model_id: id,
          action: "REJECT",
          user_id: usr.usrID,
          position_id: usr.position_id,
          time: new Date(),
        });

        res.apiSuccess({
          data: action
        });
        }
      }
    }
  } catch (error) {
    res.apiError(error);
  }
};

self.authorize = async (req, res) => {
  try {
    let body = req.body;
    let id = body.model_id;
    let model = body.model;
    
    let usr = await usrData.userData(req, res);

    if (usr) {
      let data = await ActionState.findOne({
        where: {
          model_id: id,
          action: "AUTHORIZE",
        },
      });

      if (data) {

          const errorResponse = {
            _links: {
              previousPage: null,
              nextPage: null
            },
            _warning: [],
            payload: [],
            _attributes: {},
            _errors: {
              message: ["Already Authorized"]
            },
            _generated: new Date().toISOString()
          };
          return res.status(400).json(errorResponse);


      } else {
        let action = await ActionState.findAll({
            model_id: id,
            action: {
                [Op.in]: ["REGISTER", "CHECK", "APPROVE"]
            },
            user_id: usr.usrID

        });

        if (action.length !== 0) {

            const errorResponse = {
              _links: {
                previousPage: null,
                nextPage: null
              },
              _warning: [],
              payload: [],
              _attributes: {},
              _errors: {
                message: ["You can not approve as you either register or check or approver the data"]
              },
              _generated: new Date().toISOString()
            };
            return res.status(422).json(errorResponse);

        } else {

        let action = await ActionState.create({
          model: model.toLowerCase(),
          model_id: id,
          action: "AUTHORIZE",
          user_id: usr.usrID,
          position_id: usr.position_id,
          time: new Date(),
        });

        res.apiSuccess({
          data: action
        });
        }
      }
    }
  } catch (error) {
    res.apiError(error);
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

        element.registered_data = {
          ... register.toJSON(),
          "user": registerUser
        };
      }

      if (check) {
        const checkUser = await self.getUserData(check.user_id, check.id);
        // const checkedFiles = await self.getFileData(check.id, 'CHECK');
        element.checked_data = {
          ... check.toJSON(),
          "user": checkUser
          // files: checkedFiles.rows,
          // fileCount: checkedFiles.count,
        };
      }

      if (approve) {
        const approveUser = await self.getUserData(approve.user_id, approve.id);
        // const approvedFiles = await self.getFileData(approve.id, 'APPROVE');
        element.approved_data = {
          ... approve.toJSON(),
          "user": approveUser
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
        element.authorized_data = {
          ... authorize.toJSON(),
          "user": authorizeUser
          // files: authorizedFiles.rows,
          // fileCount: authorizedFiles.count,
        };
      }

      if (reject) {
        const rejectUser = await self.getUserData(reject.user_id, reject.id);
        // const rejectedFiles = await self.getFileData(reject.id, 'REJECT');
        element.rejectedData = {
          ... reject.toJSON(),
          "user": rejectUser
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
      // element.descripton;

      res.apiSuccess({
       
        data: {
          id, 
          status,
          "authorization_data": element
        }}
      );



    }
  } catch (error) {
    res.apiError(error);
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
  } catch (error) {
    res.apiError(error);
  }
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
