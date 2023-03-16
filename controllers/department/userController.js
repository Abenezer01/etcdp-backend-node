const {
    user,
    address,
    actionstate,
    position,
    userposition,
    useremail,
    userphone,
    department,
    photo,
    role,
    sequelize,
    Sequelize
} = require("./../../models");
const bcrypt = require('bcrypt');
let validator = require("../../utils/validator");
const Op = Sequelize.Op;
const dotenv = require('dotenv');
dotenv.config();
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require('../../utils/helper');
const paginate = require("../../utils/pagination");

const jwt = require("jsonwebtoken");

let TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
let REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY
let TOKEN_MAX_AGE = process.env.TOKEN_MAX_AGE


let self = {};
self.getAlll = async(req, res) => {
        let userData = await user.findAll()

        console.log("The datas are", userData[0].id)
        let otherArr = []
        let dd
        var arr = [];
        //console.log("The other is", other)
        for (let act of userData) {
            dd = await actionstate.findOne({

                where: {
                    model_id: act.id,
                    action: 'REGISTER',
                    model: 'user'
                }
            })
            if (dd) {
                arr.push(act);
            }

        }
        let { page, size, order } = req.query;
        if (page == null && size == null) {
            page = process.env.page,
                size = process.env.size
        }
        if (order == null) {
            order = process.env.order
        }
        const { limit, offset } = paginate.getPagination(Number(page), Number(size));
        let usr = [];
        for (let ar of arr) {
            let ll = await user.findAndCountAll({
                attributes: ["id"],
                where: {
                    id: ar.id
                }
            })
            if (ll) {
                usr.push(ar);
            }

        }
        let uf = []
        for (let i = 0; i < usr.length; i++) {
            let usrID = usr[i].id;
            if (usrID) {
                uf.push(usrID);
            }

        }
        console.log("Hey", uf)
        let dat = await user.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', order]
            ],
            where: {
                id: {
                    [Sequelize.Op.in]: uf
                }
            }
        });
        const response = paginate.getPagingData(dat, page, limit);
        //console.log("Other array", usr[0].first_name)

        res.send(response)







    }
    // let one = "Ss"
    // let queryString = `SELECT * FROM users as U WHERE U.id=${one};`
self.getAll = async(req, res) => {

    let data = await user.findAll()

    return res.json(data)
        // let one = "12c85269-9dc5-4e89-8d47-62719baea7ed"
        // let queryString = `SELECT first_name FROM users as U WHERE U.id='${one}';`
    let queryString = "SELECT *  FROM users as U JOIN actionstates as A WHERE U.id=A.model_id AND A.action='REGISTER';"
    let userData = await sequelize.query(
        queryString, { type: sequelize.QueryTypes.SELECT }
    );

    console.log("The user is", userData)




    res.send(userData)
}

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await user.findOne({
            where: {
                id: id
            }
        });

        if (data) {
            let usEmail = await useremail.findOne({
                where: {
                    user_id: data.id,
                    is_primary: true
                }
            })

            let usPhone = await userphone.findOne({
                where: {
                    user_id: data.id,
                    is_primary: true
                }
            })

            let temp = data.toJSON()
            temp.email = usEmail ? usEmail.email : null
            temp.phone = usPhone ? usPhone.phone : null
            return res.json(temp)

        }


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.search = async(req, res) => {
    try {
        let text = req.params.key;
        let data = await user.findAll({
            where: {

                first_name: {
                    like: '%' + text + '%'
                },
                // middle_name: {
                //     like: '%' + text + '%'
                // },
                // last_name: {
                //    like: "%" + text + "%"
                // },
                // first_name: {
                //    like: "%" + text + "%"
                // },
                // email: {
                //    like: "%" + text + "%"
                // },
                // phone: {
                //    like: "%" + text + "%"
                // }
            }
        });
        return res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.save = async(req, res) => {
    try {
        let body = req.body
        const salt = await bcrypt.genSalt(10);
        var usr = {
            first_name: body.first_name,
            last_name: body.last_name,
            middle_name: body.middle_name,

            gender: body.gender,
            marital_status: body.marital_status,
            partner_name: body.partner_name,
            birth_date: body.birth_date,
            revision_no: body.revision_no,
            // password: await bcrypt.hash(body.password, salt)
        };
        created_user = await user.create(usr);

        if (created_user) {
            let usr = await usrData.userData(req, res)
            await saveActionState(created_user.id, "user", "REGISTER", usr.usrID, req, res)
                //create position
            let usemail = await useremail.create({
                user_id: created_user.id,
                email: body.email,
                is_primary: true
            })

            if (usemail) {
                saveActionState(usemail.id, "useremail", "REGISTER", usr.usrID, req, res)

                let usphone = await userphone.create({
                    user_id: created_user.id,
                    phone: body.phone,
                    is_primary: true
                })

                if (usphone) {

                    if (usphone) {
                        saveActionState(usphone.id, "userphone", "REGISTER", usr.usrID, req, res)
                    }

                    let pos = await position.findOne({
                        where: {
                            id: body.position_id
                        }
                    })
                    if (pos) {
                        let uspos = await userposition.create({
                            user_id: created_user.id,
                            department_id: pos.department_id,
                            position_id: body.position_id,
                            is_primary: true
                        })

                        if (uspos) {
                            saveActionState(uspos.id, "userposition", "REGISTER", usr.usrID, req, res)
                        }
                    }
                }


            }
        }


        return res.json(created_user)


    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

}


self.update = async(req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await user.update(body, {
            where: {
                id: id
            }
        });
        return res.status(200).json({ message: "User updated succesfully" })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await user.destroy({
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

self.getDepartmentUsers = async(req, res) => {
    try {
        let id = req.params.id
            //demo

        // let data = await user.findAll({
        //     where: {
        //         department_id: 
        //     }
        // })
        //correct one

        let pos = await userposition.findAll({
            attributes: ["user_id"],
            where: {
                department_id: id
            }
        })

        let userId = [...new Set(pos.map((item) => item.user_id))].filter(n => n)

        let users = await user.findAll({
            where: {
                id: {
                    [Op.in]: userId
                }
            }
        })

        return res.json(users)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.assignPosition = async(req, res) => {
    try {
        let body = req.body
        let existing = await userposition.findOne({
            where: {
                user_id: body.user_id,
                position_id: body.position_id
            }
        })

        if (existing) {
            if (existing.status) {
                return res.status(302).json({
                    message: "User Already assigned this position"
                })
            } else {

                await userposition.update({ status: true }, {
                    where: {
                        id: existing.id
                    }
                })
                return res.status(200).json({
                    message: "Position enabled!"
                })
            }
        } else {
            let pos = await position.findOne({
                where: {
                    id: body.position_id
                }
            })
            let data = await userposition.create(body)
            data.status = true
            data.department_id = pos.department_id
            await data.save()

            return res.status(200).json(data)
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.dePosition = async(req, res) => {
    try {
        let id = req.params.id
        let data = await userposition.findOne({
            where: {
                id: id
            }
        })

        if (data) {
            if (data.status) {
                let updated = await userposition.update({ status: false }, {
                    where: {
                        id: id
                    }
                });
                if (updated) {
                    return res.json({
                        message: "User Position is Disable"
                    })
                }

            } else {
                return res.status(302).json({
                    message: "Already Disabled!"
                })
            }
        } else {
            return res.status(404).json({
                message: "User Position is not Found!"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


self.switchAccount = async(req, res) => {

    try {
        let body = req.body
        let usr = await usrData.userData(req, res)
            //position_id === userposition_id
        const userpos = await userposition.findOne({
            where: {
                id: body.position_id
            }
        })
        const pos = await position.findOne({ where: { id: userpos.position_id } })

        const account = await user.findOne({
            where: { id: usr.usrID },
            include: [
                { model: photo, as: "photo" },
                { model: userposition, as: "positions" },
            ],
        });

        // let usrRole = await role.findOne({ where: { id: pos.role_id } })
        const usEmail = await useremail.findOne({
            where: { user_id: account.id, is_primary: true }
        })

        const usPhone = await userphone.findOne({
            where: { user_id: account.id, is_primary: true },
        })


        let { id, first_name, middle_name, last_name, gender } = account;
        let { email } = usEmail || {};
        let { phone } = usPhone || {};

        let replyUser = {
            id,
            first_name,
            middle_name,
            last_name,
            email,
            phone,
            gender,
            position_id: userpos ? userpos.position_id : null,
            position_name: pos ? pos.name : null,
            // role: usrRole.name,
            avatar: account.photo.url,
        };

        try {

            let accessToken = null
            let refreshToken = null
            let us = { id: account.id, department_id: userpos.department_id, position_id: userpos.position_id };

            accessToken = jwt.sign(us,
                TOKEN_KEY, {
                    expiresIn: "100h"
                }
            );
            refreshToken = jwt.sign(us,
                REFRESH_TOKEN_KEY, {
                    expiresIn: "100h"
                }
            );
            // update refresh token
            await user.update({ refresh_token: refreshToken }, { where: { id: id } });
            return res.status(200).json({
                userData: replyUser,
                accessToken: accessToken,
                refreshToken: refreshToken
            });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }


    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

self.getAllUserPositions = async(req, res) => {
    try {
        let { id } = req.params;

        let data = await userposition.findAll({
            where: { user_id: id },
            include: [
                { model: position, attributes: ['name'] },
                { model: department, attributes: ['name'] }
            ]
        });

        if (!data || data.length === 0) {
            return res.json([]);
        }

        let arr = await Promise.all(data.map(async usrpos => {
            let temp = usrpos.toJSON();
            let [pos, dept] = await Promise.all([
                usrpos.getPosition(),
                usrpos.getDepartment()
            ]);
            temp.position_name = pos ? pos.name : null;
            temp.department_name = dept ? dept.name : null;
            return temp;
        }));

        return res.json(arr);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// self.addContactPerson = async(req, res) => {
//     try {
//         let data = await 
//     } catch (error) {
//     }
// }

module.exports = self
