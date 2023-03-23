const { saveActionState } = require("../../utils/helper");
const {
    projectvariation,
    projectextensiontime,
    Sequelize
} = require("./../../models");
const usrData = require("../../utils/userDataFromToken");
const Op = Sequelize.Op;
const dotenv = require('dotenv');
const paginate = require("../../utils/pagination");
dotenv.config();
let self = {};

self.getAll = async(req, res) => {
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);

    try {
        const { rows, count } = await projectvariation.findAndCountAll({
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
        const data = await projectvariation.findAndCountAll({
            limit,
            offset,
            where: { project_id: id },
            order: [
                ['createdAt', order]
            ],
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
        let data = await projectvariation.findOne({
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
        await projectvariation.findAll({
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
        let data = await projectvariation.findAll({
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
            let data = await projectvariation.create(body);
            if (data) {
                let usrID = usr.usrID
                await saveActionState(data.id, "projectvariation", "REGISTER", usrID, req, res)

                let extension_days = data.number_of_days 
                if(extension_days > 0) {
                    let extension = await projectextensiontime.create({
                        title: `${data.type} extension`,
                        project_id: data.project_id,
                        number_of_days: extension_days,
                        reason: data.type
                    })
                    if(extension) {
                        data.extension_time_id = extension.id 
                        await data.save()
                        await saveActionState(extension.id, "projectextensiontime", "REGISTER", usrID, req, res)
                    }
			}
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
        let data = await projectvariation.update(body, {
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
        let data = await projectvariation.destroy({
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