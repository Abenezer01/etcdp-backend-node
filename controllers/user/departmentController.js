const { saveActionState } = require("../../utils/helper");
const {
    department,
    position,
    user,
    userposition,
    Sequelize
} = require("./../../models");

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await department.findAll();
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
        let data = await department.findOne({
            where: {
                id: id
            }
        });
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
        let data = await department.findAll({
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
        let data = await department.create(body);
        if(data){
            let us = "e1594d67-3aa2-429b-bb77-2e4ecc2124f8"
            saveActionState(data.id, "department", "REGISTER", us)
            
            let pos = await position.create({
                department_id: data.id,
                name: `Head of ${data.name}`,
                description: "discr",
                is_head: true,
                role_id:"03963640-6675-4c68-a073-25ac309abd74"
            })
            saveActionState(pos.id, "position", "REGISTER", us)
        }
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
        let data = await department.update(body, {
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: "Department updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await department.destroy({
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
self.getSubDepartments = async(req, res) => {
	try {
		let id = req.params.id 
		let data = await department.findAll({
			where: {
				parent_department_id: id
			}
		})
		return res.json(data)
	} catch (error) {
		return res.status(500).json({
			message: error.message
		})
	}
}
self.getParentDepartment = async(req, res) => {
    try {
        let data = await department.findOne({
            where: {
                parent_department_id: null
            }
        })

        if(data){
           return res.json(data)
        }
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

self.getParentOrGivenId = async(req, res) => {
    try {
        let id = req.params.id 
        let data = null
        if(id){
            data = await department.findOne({
                where: {
                    id: id
                }
            })
        }else{
            data = await department.findOne({
                where: {
                    parent_department_id: null
                }
            })
        }
        return res.json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getStructure = async(req, res) => {
	try {
		// let us = req.decoded 

        // let us = {
        //     id: "",
        //     department_id: 
        // }
		let departments = await department.findAll({
			// where: {
			// 	company_id: us.company_id 
			// }
		})
		let arr = []
		for(let dept of departments){
            let posi = await userposition.findAll({
                attributes: ["user_id"],
                where: {
                    department_id: dept.id
                }
            })
    
            let userId = [ ...new Set(posi.map((item)=> item.user_id))].filter(n=>n)
            
            let staffs = await user.findAndCountAll({
                where: {
                    id: {
                        [Op.in]: userId
                    }
                }
            })


            let pos = await position.findOne({
				where: {
					department_id: dept.id,
					is_head: true
				}
			})

			
			let head = null 
			if(pos){
				head = await user.findOne({
					where: {
						position_id: pos.id
					}
				})
			}
			arr.push({
				id: dept.id,
				parentNodeId: dept.parent_department_id,
				name: dept.name,
				head: head? head: null,
				staff_no: staffs.count
			})

		}
		
		return res.json(arr)
	} catch (error) {
		return res.status(500).json({
			message: error.message
		})
	}
}

self.getDepartmentHead = async(req, res) => {
    let id = req.params.id 
    try {
        let data = await department.findOne({
            where: {
                id: id
            }
        })
        if(data) {
            let pos = await position.findOne({
                where: {
                    department_id: data.id,
                    is_head: true
                }
            })
            if(pos){
                let userpos = await userposition.findOne({
                    where: {
                        position_id: pos.id
                    }
                })

                if(userpos){
                    let usr = await user.findOne({
                        where: {
                            id: userpos.user_id
                        }
                    })

                    return res.json(usr)
                }else{
                    return res.status(404).json({
                        message: "User Position not found!"
                    })
                }
            }else{
                return res.status(404).json({
                    message: "Position not found!"
                })
            }
        }else{
            return res.status(404).json({
                message: "Department not found!"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

//to routing and bread crump

let all = []
self.getToRoot = async(req, res) => {
	try {
		let id = req.params.id 
		let data = await department.findAll()
		await self.getPath(data, id)
		return res.json(all)
	} catch (error) {
		return res.status(500).json({
			message: error.message
		})
	}
}

self.getPath = async (arr, x) => {
	all = []
    for(var i=0; i<arr.length; i++){
        if(arr[i].id== x){
            self.getPath(arr, arr[i].parent_department_id);
            if(arr[i].parent_department_id !== null){
					let child = await department.findOne({
						where: {
							id: arr[i].parent_department_id
						}
					})
			        all.push(child);
			        // all.push(arr[i].parent_department_id);
            }
            

        }
    }

}

module.exports = self;