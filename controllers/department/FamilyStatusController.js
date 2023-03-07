const {
    familystatus,
    Sequelize
} = require("../../models");
const { saveActionState } = require("../../utils/helper");
const usrData = require("../../utils/userDataFromToken");

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await familystatus.findAll();
        return res.json(data)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await familystatus.findOne({
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

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await familystatus.findAll({
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
        let data = await familystatus.create(body);

        if (data) {
            let usr = await usrData.userData(req, res)
            await saveActionState(data.id, "familystatus", "REGISTER", usr.usrID, req, res)
        }

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
        let data = await familystatus.update(body, {
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
        let data = await familystatus.destroy({
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
self.getByUserId = async(req, res) => {
    try {
        let id = req.params.id
        let data = await familystatus.findAll({
            where: {
                user_id: id
            }
        })

        return res.json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = self;