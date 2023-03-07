const {
    contactperson,
    Sequelize
} = require("../../models");
const { saveActionState } = require("../../utils/helper");
const usrData = require("../../utils/userDataFromToken");

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await contactperson.findAll();
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
        let data = await contactperson.findOne({
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
        let data = await contactperson.findAll({
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
        let data = await contactperson.create(body);

        if (data) {
            let usr = await usrData.userData(req, res)
            await saveActionState(data.id, "contactperson", "REGISTER", usr.usrID, req, res)
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
        let data = await contactperson.update(body, {
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
        let data = await contactperson.destroy({
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
        let data = await contactperson.findAll({
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