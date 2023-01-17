const {
    stakecategory,
    stakesubcategory,
    stakeholdertype,
    Sequelize
} = require("./../../models");

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await stakecategory.findAll({
            include: [{
                model: stakesubcategory,
                as: 'stakesubcategories',
                required: false,
            }, ],

        });

        return res.json(data)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.getAllCatByTypeId = async(req, res) => {
    let id = req.params.id;
    try {
        let data = await stakecategory.findAll({
            include: [{
                model: stakesubcategory,
                as: 'stakesubcategories',
                required: false,
            }, ],
            where: {
                stakeholdertypeId: id
            }
        });

        return res.json(data ? data : [])

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
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