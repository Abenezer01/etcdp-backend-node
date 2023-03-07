const {
    modelmenu,
    Sequelize
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");

const Op = Sequelize.Op;
const dotenv = require('dotenv');
dotenv.config();

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await modelmenu.findAll()
        return res.json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await modelmenu.findOne({
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
self.getByProjectId = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await modelmenu.findOne({
            where: {
                project_id: id
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
        let data = await modelmenu.findAll({
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
            let existing = await modelmenu.findOne({
                where: body
            })
            if(existing){
                return res.status(302).json({
                    message: "This model menu already existed!"
                })
            }else{
                let data = await modelmenu.create(body);
                if (data) {
                    let usrID = usr.usrID
                    await saveActionState(data.id, "modelmenu", "REGISTER", usrID, req, res)
                }
                return res.json(data)
            }
            
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
        let data = await modelmenu.update(body, {
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
        let data = await modelmenu.destroy({
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

self.getModelMenuByModule = async(req, res) => {
    let id = req.params.id
    try {
        let data = await modelmenu.findAll({
            where: {
                module_type_id:id
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