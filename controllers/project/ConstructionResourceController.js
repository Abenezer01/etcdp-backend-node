const {
    constructionresource,
    resource,
    Sequelize
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require('dotenv');
dotenv.config();
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
    constructionresource.findAndCountAll({
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
    //     let data = await constructionresource.findAll();
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
        let data = await constructionresource.findOne({
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

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await constructionresource.findAll({
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
            let data = await constructionresource.create(body);
            if (data) {
                let usrID = usr.usrID
                await saveActionState(data.id, "constructionresource", "REGISTER", usrID)
            }
            return res.json(data)
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.getByProjectId = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await constructionresource.findAll({
            where: {
                project_id: id
            },
            //include: { model: resource, as: 'resource', attributes: ['title', 'measurement_unit', ''] },
            include: { model: resource, as: 'resource' },
        });
        return res.status(200).json({
            data: (data) ? data : []
        })
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
        let data = await constructionresource.update(body, {
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
        let data = await constructionresource.destroy({
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