const {
    stakecategory,
    stakesubcategory,
    stakeholdertype,
    Sequelize
} = require("./../../models");
const paginate = require("../../utils/pagination");
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
    let { limit, offset } = paginate.getPagination(page, size);
    offset = null
    console.log("The limit and offset", limit, offset)

    stakecategory.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            include: [{
                model: stakesubcategory,
                as: 'stakesubcategories',
                required: false,
            }, ],
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
    //     let data = await stakecategory.findAll({
    //         include: [{
    //             model: stakesubcategory,
    //             as: 'stakesubcategories',
    //             required: false,
    //         }, ],

    //     });

    //     return res.json(data)

    // } catch (error) {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
}
self.getAllCatByTypeId = async(req, res) => {
    let id = req.params.id;
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
    stakecategory.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            include: [{
                model: stakesubcategory,
                as: 'stakesubcategories',
                required: false,
            }, ],
            where: {
                stakeholdertypeId: id
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
    //     let data = await stakecategory.findAll({
    //         include: [{
    //             model: stakesubcategory,
    //             as: 'stakesubcategories',
    //             required: false,
    //         }, ],
    //         where: {
    //             stakeholdertypeId: id
    //         }
    //     });

    //     return res.json(data ? data : [])

    // } catch (error) {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
}
self.getCatByTypeId = async(req, res) => {
    let id = req.params.id;
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

    stakecategory.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            where: {
                stakeholdertypeId: id
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
    //     let data = await stakecategory.findAll({
    //         include: [{
    //             model: stakesubcategory,
    //             as: 'stakesubcategories',
    //             required: false,
    //         }, ],
    //         where: {
    //             stakeholdertypeId: id
    //         }
    //     });

    //     return res.json(data ? data : [])

    // } catch (error) {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
}

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await stakecategory.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: data ? data : {}
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
        let data = await stakecategory.findAll({
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
        let body = req.body;
        let data = await stakecategory.create(body);
        return res.json(data)
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
        let data = await stakecategory.update(body, {
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
        let data = await stakecategory.destroy({
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