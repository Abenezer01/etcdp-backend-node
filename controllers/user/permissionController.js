const {
    permission,
    rolepermission,
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
        let permissions = master.models 

        for(let per of permissions){

            await permission.create({
                name: per,
                model: per,
                module: "project"
            })
        }
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
		
		let rolePos = await rolepermission.findAll({
            where: {
                role_id: id 
            }
        })
		
        return res.json(rolePos)
		let ePermissions = await permission.findAll({
			where: {
				module:module
			}
		})


		if(ePermissions.length == 0){
			//if no permission under this module doesnt exist
			//return empty array []
			return res.json([])
		}

		let permissions = []
        
		for(let pos of rolePos){
			let per = await permission.findOne({
				where: {
					id:pos.permission_id,
					module:module
				}
			})

			if(per != null){
				permissions.push(per.name)
			}
			
		}
	
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
		
	}
	
}
module.exports = self;