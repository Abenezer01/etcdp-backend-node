const {
    photo,
    user,
    Sequelize
} = require("../../models");
const path = require('path');

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await photo.findAll();
        return res.status(200).json({
            data
        })

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
        let data = await photo.findOne({
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
        let data = await photo.findAll({
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
        // let body = req.body;
        // let data = await photo.create(body);
        // return res.json(data)
        let id = req.params.id;
        const file = req.files.upload
        if (id == null) {
            return res.status(400).send({
                message: "User id is empty"

            })
        } else if (file == null) {
            return res.status(400).send({
                message: " file is empty"

            })
        }
        let rand = Math.floor(100000 + Math.random() * 900000)
        const filePath = path.join(__dirname, '../../public', 'images/user photo', rand + `${file.name}`)
        console.log("The file path is ", filePath)

        photoo = { avatar: filePath }
        console.log("The rand is: ", rand)
        let ll
        try {
            ll = await photo.create(photoo)
            file.mv(filePath, err => {
                if (err) return res.status(500).send(err)
                    // res.redirect('/')
            })
            console.log("The photo id is: ", ll.id)
            await user.update({
                photo_id: ll.id
            }, {
                where: { id: id },
            })
            return res.status(200).send({
                message: "Uploaded"
            })
        } catch (error) {
            return res.status(500).send({
                message: ll
            })
        }
        // let data = await user.create(avatar: filePath, {
        //     where: {
        //         id: id
        //     }
        // });
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
        let data = await photo.update(body, {
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
        let data = await photo.destroy({
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