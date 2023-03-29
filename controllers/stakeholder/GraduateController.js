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
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);

    try {
        const { rows, count } = await graduate.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
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
    const { id } = req.params;
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);
    try {
        const data = await graduate.findAndCountAll({
            limit,
            offset,
            where: { higher_institute_id: id },
            order: [
                ['createdAt', order]
            ],
            include: ["studyfield", "studyprogram", "studylevel", "studyperiod", "agelevel"]
        });
        // if (!data) {
        //     return res.status(200).send("No data found")
        // }
        const response = paginate.getPagingData(data, page, limit);
        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving data.',
        });
    }
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
        console.log("Study data", studyData.studyfield_id)
        let ii = studyData.studyfield_id
            //body.study_field_id = studyData.studyfield_id
        let da = {
                higher_institute_id: body.higher_institute_id,
                stake_study_field_id: body.stake_study_field_id,
                description: body.description,
                study_program_id: body.study_program_id,
                studylevel_id: body.studylevel_id,
                studyfield_id: ii,
                study_period_id: body.study_period_id,
                male: body.male,
                female: body.female,
                year: body.year,
                nationality: body.nationality,
                agelevel_id: body.agelevel_id,
            }
            //console.log("The final data", da)

        if (usr) {
            let data = await graduate.create(da);
            if (data) {
                let us = usr.usrID
                await saveActionState(data.id, "graduate", "REGISTER", us, req, res)
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
        let data = await graduate.destroy({
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