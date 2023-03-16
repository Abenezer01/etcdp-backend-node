const {
    department,
    position,
    user,
    userposition,
    actionstate,
    Sequelize
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
let master = require("../../config/master");


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

        let usr = await usrData.userData(req, res)

        if (data) {
                let roles = master.roleName 
                let pos
                for(let name of roles){
                    if(name == "Admin"){
                        pos = await position.create({
                            department_id: data.id,
                            name: name,
                            description: "discr",
                            is_head: true,
                        })
                    }else{
                        pos = await position.create({
                            department_id: data.id,
                            name: name,
                            description: "discr",
                            is_head: false,
                        })
                    }

                    if(pos){
                        await saveActionState(pos.id, "position", "REGISTER", usr.usrID, req, res)
                        
                    }else{
                        await department.destroy({
                            where: {
                                id: data.id
                            }
                        })
                    }
                        
                }
            }

        if(data){
            await saveActionState(data.id, "department", "REGISTER", usr.usrID, req, res)
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

        if (data) {
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
        if (id) {
            data = await department.findOne({
                where: {
                    id: id
                }
            })
        } else {
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

        const departments = await department.findAll();

        const arr = await Promise.all(
            departments.map(async(dept) => {
                const userpos = await userposition.findAll({
                    attributes: ["user_id"],
                    where: { department_id: dept.id },
                });
                const userId = [...new Set(userpos.map((item) => item.user_id))].filter((n) => n);

                const staffs = await user.findAndCountAll({
                    where: {
                        id: {
                            [Op.in]: userId
                        }
                    },
                });

                const pos = await position.findOne({
                    where: { department_id: dept.id, is_head: true },
                });

                const head = pos ? await user.findOne({ where: { position_id: pos.id } }) : null;

                return {
                    id: dept.id,
                    parentNodeId: dept.parent_department_id,
                    name: dept.name,
                    head: head ? head : null,
                    staff_no: staffs.count,
                };
            })
        );

        return res.json(arr);

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
        if (data) {
            let pos = await position.findOne({
                where: {
                    department_id: data.id,
                    is_head: true
                }
            })
            if (pos) {
                let userpos = await userposition.findOne({
                    where: {
                        position_id: pos.id
                    }
                })

                if (userpos) {
                    let usr = await user.findOne({
                        attributes: ['full_name', 'first_name', 'middle_name', 'last_name'],
                        where: {
                            id: userpos.user_id
                        }
                    })
                    let temp = usr.toJSON()
                    temp.position_name = pos.name

                    return res.json(temp)
                } else {
                    return res.status(404).json({
                        message: "User Position not found!"
                    })
                }
            } else {
                return res.status(404).json({
                    message: "Position not found!"
                })
            }
        } else {
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

self.getPath = async(arr, x) => {
    all = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == x) {
            self.getPath(arr, arr[i].parent_department_id);
            if (arr[i].parent_department_id !== null) {
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

let children = []
self.getAllChildren = async(arr) => {

    for (var i = 0; i < arr.length; i++) {
        let dd = await department.findAll({
            where: {
                parent_department_id: arr[i].id
            }
        })
        if (dd.length > 0) {
            children.concat(dd)
            self.getChildren(dd)
        }
    }
    return children;
}

self.getChildren = async(req, res) => {
    let id = req.params.id
    try {
        let parent = await department.findOne({
            where: {
                id: id
            }
        })
        let data = await department.findAll({
            where: {
                parent_department_id: id
            }
        })
        let all = await self.getAllChildren(data)
        Array.prototype.push.apply(all, data);
        all.unshift(parent)
        let arr = []
        for (let dept of all) {
            let posi = await userposition.findAll({
                attributes: ["user_id"],
                where: {
                    department_id: dept.id
                }
            })

            let userId = [...new Set(posi.map((item) => item.user_id))].filter(n => n)

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
            if (pos) {
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
                head: head ? head : null,
                staff_no: staffs.count
            })
        }

        // arr.find(department => department.id==id).parentNodeId=null
        // return res.json(arr)
        const container = arr.map(department =>
            department.id === id ? {...department, parentNodeId: null } : department
        );
        return res.json(container)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getDepartmentDashboad = async(req, res) => {
    try {


        let id = req.params.id

        let departments = await department.findAll({
            where: {
                parent_department_id: id
            }
        })

        let positions = await position.findAll({
            where: {
                department_id: id
            }
        })



        let userpositions = await userposition.findAll({
            where: {
                department_id: id,
                is_primary: true
            }
        })


        return res.json({
            departments: departments.length,
            positions: positions.length,
            users: userpositions.length
        })

    } catch (error) {
        return res.status(500).jso({
            message: error.message
        })
    }
}

module.exports = self;