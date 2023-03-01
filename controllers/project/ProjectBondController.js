const { saveActionState } = require("../../utils/helper");
const {
    projectbond,
    Sequelize
} = require("./../../models");
const paginate = require("../../utils/pagination");
const usrData = require("../../utils/userDataFromToken");
const dotenv = require('dotenv');
dotenv.config();
const Op = Sequelize.Op;

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
    projectbond.findAndCountAll({
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

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await projectbond.findOne({
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
self.getByProjectType = async(req, res) => {
    try {
        let { type, project_id } = req.query;
        if (!project_id) {
            res.status(400).json({ message: "Can't get project_id at param" })
        }
        if (!type) {
            res.status(400).json({ message: "Can't get type value at param" })
        }
        await projectbond.findAll({
            where: {
                type: type,
                project_id: project_id
            }
        }).then(function(datas) {
            return res.json({
                data: datas
            });
        }).catch(function(error) {
            console.log(error);
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await projectbond.findAll({
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
            let data = await projectbond.create(body);
            if (data) {
                let usrID = usr.usrID
                await saveActionState(data.id, "projectbond", "REGISTER", usrID)
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
        let data = await projectbond.update(body, {
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
        let data = await projectbond.destroy({
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