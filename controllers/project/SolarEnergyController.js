const { saveActionState } = require("../../utils/helper");
const {
    solarenergy,
    Sequelize
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const Op = Sequelize.Op;
const dotenv = require('dotenv');
dotenv.config();
const paginate = require("../../utils/pagination");
let self = {};

self.getAll = async(req, res) => {
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);

    try {
        const { rows, count } = await solarenergy.findAndCountAll({
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
self.getByProjectId = async(req, res) => {
    const { id } = req.params;
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);
    try {
        const data = await solarenergy.findAndCountAll({
            limit,
            offset,
            where: { project_id: id },
            order: [
                ['createdAt', order]
            ],
            //include: { model: roadsegment, as: 'roadsegment', attributes: ['id', 'name'] }
        });

        const response = paginate.getPagingData(data, page, limit);
        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving data.',
        });
    }
};
self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await solarenergy.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await solarenergy.findAll({
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
            let data = await solarenergy.create(body);
            if (data) {
                let usrID = usr.usrID
                await saveActionState(data.id, "solarenergy", "REGISTER", usrID, req, res)
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
        let data = await solarenergy.update(body, {
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

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await solarenergy.destroy({
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