const {
    studyperiodcost,
    stakeholderstudyfield,
    studyfield,
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
    studyperiodcost.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', 'ASC']
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
    //     let data = await studyperiodcost.findAll();
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
            let data = await studyperiodcost.findOne({
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
    //include: ["studyfield", "studyprogram", "studylevel"],
self.getByHigherInstituteId = async(req, res) => {
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
    studyperiodcost.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            where: {
                higher_institute_id: id
            },
            include: ["stakestudyfield", "studyprogram", "studylevel"],

        })
        .then(async data => {
            console.log("The data", data)
            let arr = [];
            for (let dat of data.rows) {
                //console.log("The id is: ", dat.stakestudyfield.studyfield_id)
                const studyData = await studyfield.findOne({
                    where: {
                        id: dat.stakestudyfield.studyfield_id
                    }
                });

                if (studyData) {
                    //console.log("Study data", {...studyData.dataValues, ...dat.dataValues })
                    arr.push({ studyfield: studyData.dataValues, ...dat.dataValues })
                }

            }
            //console.log("The array", arr)

            const response = paginate.getPagingData({ rows: arr, count: data.count }, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
}


self.getByHigherInstituteIdd = async(req, res) => {
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
    studyperiodcost.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            where: {
                higher_institute_id: id
            },
            include: ["stakestudyfield", "studyfield", "studyprogram", "studylevel"],
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
self.getByStudyFieldId = async(req, res) => {
    try {
        let fieldId = req.params.id;
        let data = await studyperiod.findAll({
            where: {
                study_program_id: fieldId
            }
        });
        return res.status(200).json({
            data: (data) ? data : {}
        })
    } catch (error) {
        console.log("The error is", error)
        res.status(500).json({
            message: error.message
        })
    }
}
self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await studyperiodcost.findAll({
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
        let studyFieldId = body.stake_study_field_id
        let studyData = await stakeholderstudyfield.findOne({
            where: {
                id: studyFieldId
            },
            include: ["studyfield"]
        });
        //console.log("Study data", studyData.studyfield_id)
        //body.study_field_id = studyData.studyfield_id
        let da = {
            higher_institute_id: body.higher_institute_id,
            stake_study_field_id: body.stake_study_field_id,
            description: body.description,
            study_program_id: body.study_program_id,
            studylevel_id: body.studylevel_id,
            total_month: body.total_month,
            study_cost: body.study_cost,
            studyfield_id: studyData.studyfield_id
        }
        if (usr) {
            let data = await studyperiodcost.create(da);
            if (data) {
                let us = usr.usrID
                await saveActionState(data.id, "studyperiodcost", "REGISTER", us, req, res)
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
        let id = req.params.id
        let body = req.body;
        let data = await studyperiodcost.update(body, {
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: "success"
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
        let data = await studyperiodcost.destroy({
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