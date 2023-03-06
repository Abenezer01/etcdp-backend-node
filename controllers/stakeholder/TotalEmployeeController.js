const {
    totalemployee,
    Sequelize
} = require("./../../models");
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
    totalemployee.findAndCountAll({
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
}
self.getTotalEmployeeAllYears = async(req, res) => {
    try {
        let data = await totalemployee.findAll({
            attributes: ["id", "nationality", "year"]
        });
        return res.json(data)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await totalemployee.findOne({
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
self.getTotalEmployeeWithStakeholderId = async(req, res) => {
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
    totalemployee.findAndCountAll({
            where: {
                stakeholder_id: id
            },
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
    //     let id = req.params.id;
    //     let data = await totalemployee.findAll({
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
        let data = await totalemployee.findAll({
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
        let stakeHolderId = body.stakeholder_id
        let totalEmployee = await totalemployee.findAll({
            where: {
                stakeholder_id: stakeHolderId
            }
        })
        let totalEmployeeData = totalEmployee
        console.log("Employee Data", totalEmployee)
        let tED = []
        for (i = 0; i < totalEmployeeData.length; i++) {
            var date = new Date(totalEmployeeData[i].year);
            let yy = date.getFullYear()
            let male = totalEmployeeData[i].male
            let female = totalEmployeeData[i].female
            let nationality = totalEmployeeData[i].nationality
            let stakeholder_id = totalEmployeeData[i].stakeholder_id
            tED.push({ year: yy, female: female, male: male, nationality: nationality, stakeholder_id: stakeholder_id })
        }
        console.log("The TED", tED)
        var bodDate = new Date(req.body.year);
        let newArr = []
        for (i = 0; i < tED.length; i++) {
            if (body.nationality == tED[i].nationality && bodDate.getFullYear() == tED[i].year && stakeHolderId == tED[i].stakeholder_id) {

                newArr.push(tED[i])

            }
        }
        console.log("Hey", newArr)
        if (newArr.length) {
            return res.status(400).json({ message: "There is duplicate data here, Please check your inputs!" })
        }
        if (usr) {
            let data = await totalemployee.create(body);
            if (data) {
                let us = usr.usrID
                    // let us = "e1594d67-3aa2-429b-bb77-2e4ecc2124f8"
                saveActionState(data.id, "totalemployee", "REGISTER", us, req, res)
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
        let data = await totalemployee.update(body, {
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
        let data = await totalemployee.destroy({
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