// middleware/authorize.js
const usrData = require("../utils/userDataFromToken");

const { Position, RolePermissionView, Permission, RolePermission} = require("../models");

const hasPermission = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      // 1. Get user position from the decoded JWT (populated by your auth middleware)

      const usr = await usrData.userData(req, res);

      const positionId = usr.position_id;

      // 2. Lookup the position and include its permissions
      const pos = await Position.findOne({
        where: { id: positionId }
      });


      if (!pos) {
        return res.status(403).json({ message: "Role not found." });
      }

      RolePermissionView.removeAttribute('id');
      let data = await RolePermissionView.findAll({
        where: {
          role_id: pos.role_id
        }
      })

    let permissions = data.map(d => d.permission_name);

    //   let data = await RolePermission.findAll({
    //     where: {
    //       role_id: pos.role_id
    //     },
    //     include: [ 
    //       {
    //         model: Permission,
    //         as: "permission",
    //         attributes: ["name"],
    //       },
    //     ],
    //   });


    // // iwante a list of names
    // let permissions = data.map(d => d.permission.name);

    // return res.json(permissions)

   if (!permissions.includes(requiredPermission)) {

        const errorResponse = {
        _links: { previousPage: null, nextPage: null },
        _warning: [],
        payload: [],
        _attributes: {},
        _errors: {
          message: ['Access Denied: Missing permission']
          // message: [`Access Denied: Missing permission ${requiredPermission}`]
        },
        _generated: new Date().toISOString()
      };
      return res.status(403).json(errorResponse);
      }

      next();
    } catch (error) {
      res.status(500).json({ message: "Authorization Error", error: error.message });
    }
  };
};

module.exports = hasPermission;