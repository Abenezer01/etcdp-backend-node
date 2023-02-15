const {
    graduate,
    stakeholderstudyfield,
    Sequelize
} = require("../../models");

const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require('dotenv');
dotenv.config();
let self = {};
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require('../../utils/helper');
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
    graduate.findAndCountAll({
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
    //     let data = await graduate.findAll();
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
        let data = await graduate.findOne({
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
    graduate.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            where: {
                higher_institute_id: id
            },
            include: ["studyfield", "studyprogram", "studylevel", "studyperiod", "agelevel"]
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

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await graduate.findAll({
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
            studyfield_id: studyData.studyfield_id,
            study_period_id: body.studylevel_id,
            male: body.male,
            female: body.female,
            year: body.year,
            agelevel_id: body.agelevel_id,
        }
        if (usr) {
            let data = await graduate.create(da);
            if (data) {
                let us = usr.usrID
                    // let us = "e1594d67-3aa2-429b-bb77-2e4ecc2124f8"
                saveActionState(data.id, "graduate", "REGISTER", us)
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
        let data = await graduate.update(body, {
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
        let data = await agelevel.destroy({
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