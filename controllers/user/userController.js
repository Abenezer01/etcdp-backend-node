const {
    user,
    address,
    actionstate,
    position,
    photo,
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
let self = {};
self.getAll = async(req, res) => {
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
    //console.log("The page", page, size)
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







    // self.getAll = async(req, res) => {

    //     let { page, size, order } = req.query;
    //     // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    //     //console.log("The page", page, size)
    //     if (page == null && size == null) {
    //         page = process.env.page,
    //             size = process.env.size,
    //             console.log("The page", page, size)
    //     }
    //     if (order == null) {
    //         order = process.env.order
    //     }
    //     let { limit, offset } = paginate.getPagination(page, size);
    //     console.log("The limit and offset", limit, offset)
    //     if (page == 0 && limit == 0) {
    //         limit = null
    //         offset = null
    //     }
    //     userr = await user.findAndCountAll({
    //             limit,
    //             offset,
    //             order: [
    //                 ['createdAt', order]
    //             ],
    //             include: [{
    //                 model: position,
    //                 as: "position",
    //             }, {
    //                 model: photo,
    //                 as: "photo"
    //             }],
    //             // LIMIT: 10,
    //             // OFFSET: 1,

    //         }).then(data => {
    //             console.log("The datas are", data.rows.length)
    //             let otherArr = []
    //                 //console.log("The other is", other)
    //             for (let i = 0; i < data.rows.length; i++) {
    //                 let action = actionstate.findOne({
    //                     where: {
    //                         model_id: data.rows[i].id,
    //                         action: "APPROVE"
    //                     }
    //                 })
    //                 if (action) {
    //                     otherArr.push(data)
    //                     console.log("Other array", data.rows)
    //                 }
    //             }

    //             //let dataa = mine.concat(otherArr)

    //             //const response = paginate.getPagingData(data, page, limit);
    //             res.send(data);

    //         })
    //         .catch(err => {
    //             res.status(500).send({
    //                 message: err.message || "Some error occurred while retrieving data."
    //             });
    //         });;















    //console.log("The user", userr)
    // 

    //     let size = Number(req.query.page)
    //     let page = Number(req.query.size)
    //     let limit = getPagination(size, page).limit
    //     let offset = getPagination(size, page).offset
    //     console.log("The limit is: ", limit, page)

    //     try {
    //         exports.findAll = (req, res) => {
    //   const { page, size, title } = req.query;
    //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    //   const { limit, offset } = getPagination(page, size);

    //   Tutorial.findAndCountAll({ where: condition, limit, offset })
    //     .then(data => {
    //       const response = getPagingData(data, page, limit);
    //       res.send(response);
    //     })
    //     .catch(err => {
    //       res.status(500).send({
    //         message:
    //           err.message || "Some error occurred while retrieving tutorials."
    //       });
    //     });
    // };

    //         let data = await user.findAll({
    //             limit: limit,
    //             offset: offset,
    //             include: [{
    //                 model: address,
    //                 as: "address"
    //             }, {
    //                 model: position,
    //                 as: "position",
    //             }, {
    //                 model: photo,
    //                 as: "photo"
    //             }],


    //         })

    //         return res.status(200).json({
    //             data: data
    //         })

    //     } catch (error) {
    //         // if (err.message === 'Error') {
    //         //     res.status(500).json({
    //         //         message: error.message
    //         //     })
    //         // }
    //         res.status(500).json({
    //             message: error.message
    //         })
    //     }
}

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await user.findOne({
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


    // let validationRule = {
    //     first_name: 'required',
    //     email: 'required|email',
    // };
    try {
        // await validator(usr, validationRule, {}, (error, status) => {

        //     if (!status) {
        //         return res.status(412)
        //             .send({
        //                 success: false,
        //                 message: 'Validation failed',
        //                 data: error
        //             });
        //     }


        // }).catch(error => console.log("Hi",
        //     error))
        const salt = await bcrypt.genSalt(10);
        var usr = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            middle_name: req.body.middle_name,
            email: (req.body.email).toLowerCase(),
            phone: req.body.phone,
            gender: req.body.gender,
            marital_status: req.body.marital_status,
            partner_name: req.body.partner_name,
            birth_date: req.body.birth_date,
            position_id: req.body.position_id,
            revision_no: req.body.revision_no,
            password: await bcrypt.hash(req.body.password, salt)
        };
        created_user = await user.create(usr);
        if (created_user) {
            let usr = await usrData.userData(req, res)
            let us = usr.usrID
                // let us = "e1594d67-3aa2-429b-bb77-2e4ecc2124f8"
            saveActionState(created_user.id, "user", "REGISTER", us)
        }


        return res.json(created_user)
    } catch (err) {
        let er = err.errors
        console.log("The error is ", er)

        res.status(500).json({
            message: err.message
        })


    }
    // try {


    //     // let validation = new Validator(usr, rules);
    //     // validation.passes(); // true
    //     // if (validation.fails()) {
    //     //     return res.status(400).json({
    //     //         message: validation.errors.get('email')
    //     //     })
    //     // } // false
    //     console.log("Hey Kal")
    //     created_user = await user.create(usr);


    //     return res.json(created_user)
    // } catch (error) {
    //     let er = error.errors
    //     console.log("The error is ", er)

    //     res.status(500).json({

    //         message: er
    //     })


    // }
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


module.exports = self;