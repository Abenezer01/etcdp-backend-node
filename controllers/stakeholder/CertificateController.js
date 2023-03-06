const {
    certificate,
    Sequelize
} = require("../../models");

const Op = Sequelize.Op;
const dotenv = require('dotenv');
dotenv.config();
let self = {};
const paginate = require("../../utils/pagination");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require('../../utils/helper');
self.getAll = async(req, res, order) => {
    let { page, size } = req.query;
    //console.log("The page", page, size)
    if (page == null && size == null) {
        page = process.env.page,
            size = process.env.size
    }
    if (order == null) {
        order = process.env.order
    }
    const { limit, offset } = paginate.getPagination(page, size);
    certificate.findAndCountAll({
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
    //     let data = await certificate.findAll();
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
        let data = await certificate.findOne({
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
self.getCertificateWithStakeholderId = async(req, res) => {
    let id = req.params.id;
    let { page, size } = req.query;
    //console.log("The page", page, size)
    if (page == null && size == null) {
        page = process.env.page,
            size = process.env.size
    }
    const { limit, offset } = paginate.getPagination(page, size);
    certificate.findAndCountAll({
            limit,
            offset,
            where: {
                stakeholder_id: id
            }
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
    //     let data = await certificate.findAll({
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
        let data = await certificate.findAll({
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
            let data = await certificate.create(body);
            if (data) {
                let us = usr.usrID
                await saveActionState(data.id, "certificate", "REGISTER", us, req, res)
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
        let data = await certificate.update(body, {
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
        let data = await certificate.destroy({
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