const {
    user,
    address,
    position,
    photo,
    Sequelize
} = require("./../../models");
const bcrypt = require('bcrypt');
let validator = require("../../utils/validator");
const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await user.findAndCountAll({
            include: [{
                model: address,
                as: "address"
            }, {
                model: position,
                as: "position",
            }, {
                model: photo,
                as: "photo"
            }],
            // LIMIT: 10,
            // OFFSET: 1,

        });
        return res.status(200).json({
            data: data
        })

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
            address_id: req.body.address_id,
            revision_no: req.body.revision_no,
            password: await bcrypt.hash(req.body.password, salt)
        };
        created_user = await user.create(usr);


        return res.json(created_user)
    } catch (err) {
        let er = err.errors[0].message
        console.log("The error is ", er)

        res.status(500).json({
            success: false,
            error: er
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