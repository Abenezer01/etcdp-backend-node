const { operationlocation, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
self.getAll = async(req, res) => {
    let { page, size, order } = req.query;
    //console.log("The page", page, size)
    if (page == null && size == null) {
        (page = process.env.page), (size = process.env.size);
        console.log("The page", page, size);
    }
    if (order == null) {
        order = process.env.order;
    }
    const { limit, offset } = paginate.getPagination(page, size);
    operationlocation
        .findAndCountAll({
            limit,
            offset,
            order: [
                ["createdAt", order]
            ],
        })
        .then((data) => {
            const response = paginate.getPagingData(data, page, limit);
            res.send(response);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data.",
            });
        });
    // try {

    //     let data = await operationlocation.findAll();
    //     return res.json(data)

    // } catch (error) {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
};

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await operationlocation.findOne({
            where: {
                id: id,
            },
        });
        return res.status(200).json({
            data: data ? data : {},
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
self.getByStakeholderId = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await operationlocation.findAll({
            where: {
                stakeholder_id: id,
            },
        });
        return res.status(200).json({
            data: data ? data : [],
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await operationlocation.findAll({
            where: {
                name: {
                    [Op.like]: "%" + text + "%",
                },
            },
        });
        return res.json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.save = async(req, res) => {
    try {
        let usr = await usrData.userData(req, res);
        let body = req.body.opLocation;
        if (usr) {
            let us = usr.usrID;
            let arr = [];
            for (i = 0; i < body.length; i++) {
                let data = await operationlocation.create(body[i]);
                await saveActionState(data.id, "operationlocation", "REGISTER", us);
                arr.push(data);
            }
            return res.json(arr);
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
self.update = async(req, res) => {
    try {
        let usr = await usrData.userData(req, res);
        let body = req.body.opLocation;
        if (usr) {
            for (i = 0; i < body.length; i++) {
                await operationlocation.update(body[i], {
                    where: {
                        id: body[i].id,
                    },
                });
            }
            return res.status(200).json({
                message: "Success",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await operationlocation.destroy({
            where: {
                id: id,
            },
        });
        return res.json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = self;