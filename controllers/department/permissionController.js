const {
    permission,
    Sequelize
} = require("../../models");
const { saveActionState } = require("../../utils/helper");

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await permission.findAll();
        return res.json(data)

    } catch (error) {
        // if (err.message === 'Error') {
        //     res.status(500).json({
        //         message: error.message
        //     })
        // }
        res.status(500).json({
            message: error.message
        })
    }
}


self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await permission.findOne({
            where: {
                id: id
            }
        });
        if (data) {
            let us = "e1594d67-3aa2-429b-bb77-2e4ecc2124f8"
            saveActionState(data.id, "permission", "REGISTER", us)
        }
        return res.status(200).json({
            data: data
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
        let data = await permission.findAll({
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
        let data = await permission.create(body);
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
        let data = await permission.update(body, {
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
        let data = await permission.destroy({
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