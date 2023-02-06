const {
    stakeholder,
    actionstate,
    department,
    Sequelize
} = require("./../../models");

const {saveActionState, getChildren} = require('../../utils/helper');
const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        // let us = req.decoded	
        let us = {
            id: "e1594d67-3aa2-429b-bb77-2e4ecc2124f8",
            department_id: "5ba1e51c-469f-4487-bc44-e9c986aded73"
        }	

        
        let department_id = us.department_id 

        let exist = await getChildren(department_id)

		let other = await stakeholder.findAll({
			order: [['createdAt', 'DESC']],
			where: {
				department_id: {
                [Op.in]: exist
                }
			},
			
		})
        let mine = await stakeholder.findAll({
            where: {
                department_id
            }
        })
        
        let otherArr = []
        for(let da of other){
            let action = await actionstate.findOne({
                where: {
                    model_id: da.id,
                    action: "APPROVE"
                }
            })
            if(action){
                otherArr.push(da)
            }
        }

        let data = mine.concat(otherArr)
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
        let data = await stakeholder.findOne({
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
        let data = await stakeholder.findAll({
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
        let data = await stakeholder.create(body);
        if(data) {
            let us = "e1594d67-3aa2-429b-bb77-2e4ecc2124f8"
            saveActionState(data.id, "stakeholder", "REGISTER", us)
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
        let data = await stakeholder.update(body, {
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: "Stakeholder information has been updated successfully"
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
        let data = await stakeholder.destroy({
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