const {
    reply,
    user,
    Sequelize
} = require('../../models');
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await reply.findAll();
        return res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await reply.findOne({
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

self.save = async(req, res) => {
    try {
        let usr = await usrData.userData(req, res)
        let body = req.body;
        if (usr) {
            let data = await reply.create(body);
            return res.json(data)
            data.creator_id = usr.usrID
            await data.save()
            if (data) {
                let usrID = usr.usrID
                await saveActionState(data.id, "reply", "REGISTER", usrID, req, res)
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
        let data = await reply.update(body, {
            where: {
                id: id
            }
        });
        return res.status(200).json({ message: "Reply updated successfully" })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await reply.destroy({
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

self.getActionReplies = async(req, res) => {
    let id = req.params.id
    try {
        let data = await reply.findAll({
            where: {
                actionstate_id: id
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