const {
    permission,
    rolepermission,
    positionpermission,
    Sequelize
} = require("../../models");
const { saveActionState } = require("../../utils/helper");
const master = require("./../../config/master")

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await permission.findAll();
        return res.json(data)

    } catch (error) {
        // if (err.message === 'Error') {
        //     res.status(500).json({
        //         message: error.message
        //     })
        // }
        res.status(500).json({
            message: error.message
        })
    }
}


self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await permission.findOne({
            where: {
                id: id
            }
        });
        if(data){
            let us = "e1594d67-3aa2-429b-bb77-2e4ecc2124f8"
            saveActionState(data.id, "permission", "REGISTER", us)
        }
        return res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await permission.findAll({
            where: {
                name: {
                    [Op.like]: "%" + text + "%"
                }
            }
        });
        return res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.save = async(req, res) => {
    try {
        let body = req.body;
        let data = await permission.create(body);
        return res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.update = async(req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await permission.update(body, {
            where: {
                id: id
            }
        });
        return res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await permission.destroy({
            where: {
                id: id
            }
        });
        return res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.initPermission = async(req, res) => {
    try {
        const { permissionModules, actions } = master;
        const permissionPromises = [];

        for (const action of actions) {
            for (const module of permissionModules) {
                permissionPromises.push(permission.create({
                    name: `${action}_${module}`,
                    module: module
                }));
            }
        }

        await Promise.all(permissionPromises.flatMap(p => p));

        return res.json("test")


    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}   

self.getModels = async (req, res) => {
	try {
        let models = master.models
        return res.json(models)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getPermissionsByModule = async(req, res) => {
    try {
        let module = req.params.module
        let data = await permission.findAll({
            where: {
                module: module
            }
        })
        return res.json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
self.getGroupedPermissions = async (req, res) => {
	
	let id = req.params.id
	let module = req.params.module

	try {

        const [rolePos, ePermissions] = await Promise.all([
            rolepermission.findAll({ where: { role_id: id } }),
            permission.findAll({ where: { module: module } })
        ])
		

		if(ePermissions.length == 0){
			//if no permission under this module doesnt exist
			//return empty array []
			return res.json([])
		}

		let permissions = rolePos
        .filter((pos) => pers.some((per) => per.id == pos.permission_id))
        .map((pos) => pers.find((per) => per.id == pos.permission_id).name)

        
	
		let newArray = []
		for(let per of ePermissions){
			if(permissions.includes(per.name)){
				newArray.push({
					id: per.id,
				    name: per.name,
					model: per.model,
					module: per.module,
					is_selected: true,
					createdAt: per.createdAt,
					updatedAt: per.updatedAt
				})
			}else{
				newArray.push({
					id: per.id,
				    name: per.name,
					model: per.model,
					module: per.module,
					is_selected: false,
					createdAt: per.createdAt,
					updatedAt: per.updatedAt
				})

			}
		}


			let arr = []
		
			let pers = await permission.findAll({
				where: {
					module: module
				}
			})
			
			let model = models.models

			for(let mod of model){
				let x = pers.filter((item)=> item.model==mod)
				if(x.length != 0){

					let newArray = []
					for(let per of x){
						if(permissions.includes(per.name)){
							newArray.push({
								id: per.id,
								name: per.name,
								model: per.model,
								module: per.module,
								is_selected: true,
								createdAt: per.createdAt,
								updatedAt: per.updatedAt
							})
						}else{
							newArray.push({
								id: per.id,
								name: per.name,
								model: per.model,
								module: per.module,
								is_selected: false,
								createdAt: per.createdAt,
								updatedAt: per.updatedAt
							})

						}
					}
					
					// return res.json(newArray)
					if(newArray.length !=0){
						let ele = {
							model: mod,
							permissions: newArray
						}
						// ele[mod] =newArray 
						arr.push(ele)
					}
				}	
			}
			
		return res.json(arr)

	} catch (error) {
		 return res.status(500).json({
            message: error.message
         })
	}
	
}
self.getPermissionModules = async(req, res) => {
    try {
        let modules = master.permissionModules
        return res.json(modules)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getPermissionsByAction = async(req, res) => {

    const { id, action }  = req.params

	try {

        const ePermissions = await permission.findAll({
            where: {
                name: {
                    [Op.like]: `%${action}%`
                }
            }
        });
    
        const newObj = {};
    
        const modules = master.modules;
    
        await Promise.all(modules.map(async (cat) => {
            const newArr = await Promise.all(ePermissions
                .filter(per => per.category === cat)
                .map(async (per) => {
                    const pos = await positionpermission.findOne({
                        where: {
                            position_id: id,
                            permission_id: per.id
                        }
                    });
    
                    return {
                        id:per.id,
                        name: per.name,
                        module: per.module,
                        category: per.category,
                        is_selected: Boolean(pos),
                        createdAt: per.createdAt,
                        updatedAt: per.updatedAt
                    };
                })
            );
            newObj[cat] = newArr;
        }));
    
        return res.json(newObj);
	
	} catch (error) {
		 return res.status(500).json({
            message: error.message
         })
	}
}

self.assignPositionPermissions = async(req, res) => {
    try {
        //optimize it one more
        const { permissions } = req.body;
        let data = []
        for(let per of permissions) {
            if(per.is_selected){
                let exists = await positionpermission.findOne({
                    where: {
                        position_id: per.position_id,
                        permission_id: per.id
                    }
                })
                if(!exists){
                    let temp = await positionpermission.create({
                        position_id: per.position_id,
                        permission_id: per.id
                    })
                    data.push(temp)
                }
            }else{

                let exists = await positionpermission.findOne({
                    where: {
                        position_id: per.position_id,
                        permission_id: per.id
                    }
                })
                if(exists){
                    let temp = await positionpermission.delete({
                       where: {
                        id: exists.id
                       }
                    })
                    data.push(temp)
                }
            }
            
        }
          
        return res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = self;