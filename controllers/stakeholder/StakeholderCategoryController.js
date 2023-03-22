const { saveActionState } = require("../../utils/helper");
const {
    stakecategory,
    stakesubcategory,
    stakeholdertype,
    Sequelize
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const paginate = require("../../utils/pagination");
const dotenv = require('dotenv');
dotenv.config();
const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);

    try {
        const { rows, count } = await stakecategory.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            include: [{
                model: stakesubcategory,
                as: 'stakesubcategories',
                attributes: ['title'],
                required: false,
            }, ],
        });

        const response = paginate.getPagingData({ rows, count }, page, limit, count);

        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: 'An error occurred while retrieving data.',
        });
    }
}

self.getAllCatByTypeId = async(req, res) => {
        const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;
        const { id } = req.params
        const { limit, offset } = paginate.getPagination(page, size);

        try {
            const { rows, count } = await stakecategory.findAndCountAll({
                limit,
                offset,
                order: [
                    ['createdAt', order]
                ],
                include: [{
                    model: stakesubcategory,
                    as: 'stakesubcategories',
                    required: false,
                }, ],
                where: {
                    stakeholdertypeId: id
                }
            });

            const response = paginate.getPagingData({ rows, count }, page, limit, count);

            res.send(response);
        } catch (err) {
            console.error(err);
            res.status(500).send({
                message: 'An error occurred while retrieving data.',
            });
        }
    }
    // self.getCatByTypeId = async(req, res) => {
    //     let id = req.params
    //     const data = await stakecategory.findAll({


//         where: {
//             id: id
//         },

//     });
//     return res.send(data)
//     const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;
//     //const id = req.params
//     const { limit, offset } = paginate.getPagination(page, size);

//     try {
//         const { rows, count } = await stakecategory.findAndCountAll({


//             where: {
//                 stakeholdertypeId: id
//             },

//         });
//         //return res.send(rows)
//         const response = paginate.getPagingData({ rows, count }, page, limit, count);

//         res.send(response);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({
//             message: err.message,
//         });
//     }
// }

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await stakecategory.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: data ? data : {}
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
        let data = await stakecategory.findAll({
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
        let usr = await usrData.userData(req, res)
        let body = req.body;
        if (usr) {
            let data = await stakecategory.create(body);
            if (data) {
                let us = usr.usrID
                await saveActionState(data.id, "stakecategory", "REGISTER", us, req, res)
            }
            return res.json(data)
        }
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
        let data = await stakecategory.update(body, {
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: "Success"
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
        let data = await stakecategory.destroy({
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