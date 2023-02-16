const {
    employeeeducation,
    totalemployee,
    Sequelize
} = require("../../models");
const paginate = require("../../utils/pagination");
const dotenv = require('dotenv');
dotenv.config();
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require('../../utils/helper');
let self = {};

self.getAll = async(req, res) => {
    let { page, size, order } = req.query;
    //console.log("The page", page, size)
    if (page == null && size == null) {
        page = process.env.page,
            size = process.env.size
    }
    if (order == null) {
        order = process.env.order
    }
    const { limit, offset } = paginate.getPagination(page, size);
    employeeeducation.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
        })
        .then(data => {
            const response = paginate.getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
    // try {
    //     let data = await employeeeducation.findAll();
    //     return res.json(data)

    // } catch (error) {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
}


self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await employeeeducation.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: (data) ? data : {}
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.getEmployeeEducationByStakeholderId = async(req, res) => {
    let { page, size, order } = req.query;
    let id = req.params.id;
    //console.log("The page", page, size)
    if (page == null && size == null) {
        page = process.env.page,
            size = process.env.size
    }
    if (order == null) {
        order = process.env.order
    }
    const { limit, offset } = paginate.getPagination(page, size);
    employeeeducation.findAndCountAll({
            limit,
            offset,
            where: {
                stakeholder_id: id
            },
            order: [
                ['createdAt', order]
            ],
            include: ["studylevel"],
        })
        .then(data => {
            const response = paginate.getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
    // try {
    //     let id = req.params.id;
    //     let data = await employeeeducation.findAll({
    //         where: {
    //             stakeholder_id: id
    //         }
    //     });
    //     return res.status(200).json({
    //         data: (data) ? data : {}
    //     })
    // } catch (error) {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
}

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await employeeeducation.findAll({
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
        let arr = body.arr



        let stakeHolderId = body.stakeholder_id

        if (usr) {
            let totalEmployee = await totalemployee.findOne({
                where: {
                    stakeholder_id: stakeHolderId
                }
            })
            console.log("The total employee", totalEmployee)

            let data = await employeeeducation.create(body);
            if (data) {

                let us = usr.usrID
                await saveActionState(data.id, "employeeeducation", "REGISTER", us)
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
        let data = await employeeeducation.update(body, {
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
        let data = await employeeeducation.destroy({
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