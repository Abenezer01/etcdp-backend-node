const { Role, RolePermission, Permission, ActionState, Sequelize } = require("../../models");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");

const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const { act } = require("react");

const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Role, req);

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
  getRecordById(Role, req, res);
};

self.save = async (req, res) => {
  saveRecord(Role, req, res);
};

self.update = async (req, res) => {
  updateRecord(Role, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Role, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Role.findAll({
      where: {
        name: {
          [Op.like]: "%" + text + "%",
        },
      },
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


self.givePermission = async (req, res) => {
  let id = req.params.id;

  try {
    let body = req.body;
    let permissions = body.permissions;
    let rol = await Role.findOne({
      where: {
        id: id,
      },
    });

    for (let per of permissions) {
      if (per.is_selected) {
        await RolePermission.findOrCreate({
          where: {
            permission_id: per.id,
            role_id: rol.id,
          },
        });
      } else {
        await RolePermission.destroy({
          where: {
            permission_id: per.id,
          },
        });
      }
    }

    return res.json({
      message: "permissions are given to a Role ",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.defaultRole = async (req, res) => {
  try {

    
    const usr = await usrData.userData(req, res);  

    let rolename = "Viewer";

    let role = await Role.create({
        name: rolename,
        description: "Viewer Role"
    });

    if (role) {
      
      await actionHelper.saveActivityLog(
            usr.usrID, "create", "center", role.id, "role", req, res
      )

      await actionHelper.saveActionState(
                role.id,
                "role",
                "REGISTER",
                usr.usrID,
                req,
                res
              );

      
    
      let actions  = ["view"];
      // let actions  = ["view", "create", "update", "delete", "approve", "check", "authorize"];
      for (let action of actions) {
        let permissions = await Permission.findAll({
          where: {
            name: {
              [Op.like]: `${action}%`
            },
            module: {
               [Op.notIn]: ["center", "masterdata"]
             }
          }
        });

        // let permissions = await Permission.findAll({
        //   where: {
        //     name: {
        //       [Op.like]: `${action}%`
        //     },
        //     module: {
        //       [Op.notIn]: ["center", "masterdata"]
        //     }
        //   }
        // });


        for (let per of permissions) {
          await RolePermission.create({
              permission_id: per.id,
              role_id: role.id
          });
        }
      }
    }
    
    return res.json(role)

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


self.defaultRoleAdmin = async (req, res) => {
  try {

    
    const usr = await usrData.userData(req, res);  

    let rolename = "SUPER-ADMIN-ROLE";

    let role = await Role.create({
        name: rolename,
        description: "Super Admin Role"
    });

    if (role) {
      
      await actionHelper.saveActivityLog(
            usr.usrID, "create", "center", role.id, "role", req, res
      )

      await actionHelper.saveActionState(
                role.id,
                "role",
                "REGISTER",
                usr.usrID,
                req,
                res
              );

      
    
      let actions  = ["view", "create", "update", "delete"];
      for (let action of actions) {
        let permissions = await Permission.findAll({
          where: {
            name: {
              [Op.like]: `${action}%`
            },
            module: {
              [Op.in]: ["center", "masterdata"]
             }
          }
        });

        for (let per of permissions) {
          await RolePermission.create({
              permission_id: per.id,
              role_id: role.id
          });
        }
      }

      //second

      let actionss  = ["view"];
      for (let action of actionss) {
        let permissions = await Permission.findAll({
          where: {
            name: {
              [Op.like]: `${action}%`
            },
            module: {
              [Op.notIn]: ["center", "masterdata"]
             }
          }
        });

        for (let per of permissions) {
          await RolePermission.create({
              permission_id: per.id,
              role_id: role.id
          });
        }
      }

    }
    
    return res.json(role)

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = self;
