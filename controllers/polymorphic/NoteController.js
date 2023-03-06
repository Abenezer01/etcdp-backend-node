const {
    note,
    user,
    Sequelize
} = require('../../models');
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await note.findAll();
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
        let data = await note.findOne({
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
            let data = await note.create(body);
            data.user_id = usr.usrID 
            await data.save()
            if (data) {
                let usrID = usr.usrID
                await saveActionState(data.id, "note", "REGISTER", usrID)
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
        let data = await note.update(body, {
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
        let data = await note.destroy({
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


self.getNoteByModelId = async(req, res) => {
	let id = req.params.id 
	try {
		let data = await note.findAll({
			// include: [
			// 	{
			// 		model: file,
			// 		as: 'files'
			// 	}
			// ],
			where: {
				model_id: id
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