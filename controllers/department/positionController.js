const { saveActionState } = require("../../utils/helper");
const {
    position,
    Sequelize
} = require("./../../models");

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await position.findAll();
        return res.status(200).json({
            data
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await position.findOne({
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
        let data = await position.findAll({
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
        let data = await position.create(body);
        // if(data){
        let us = "e1594d67-3aa2-429b-bb77-2e4ecc2124f8"
        await saveActionState(data.id, "position", "REGISTER", us, req, res)

        // }
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
        let data = await position.update(body, {
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
        let data = await position.destroy({
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

self.getParentDepartment = async(req, res) => {
    try {
        let data = await department.findOne({
            where: {
                parent_department_id: null
            }
        })

        if (data) {
            return res.json(data)
        }
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

self.getDepartmentPositions = async(req, res) => {
    try {
        let id = req.params.id

        let positions = await position.findAll({
            where: {
                department_id: id
            }
        })
        return res.json(positions)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = self;