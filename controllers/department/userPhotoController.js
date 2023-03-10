const {
    photo,
    user,
    Sequelize
} = require("../../models");
const path = require('path');

const fs = require('fs');

const { saveActionState } = require("../../utils/helper");
const usrData = require("../../utils/userDataFromToken");
const paginate = require("../../utils/pagination");

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
        let usr = await usrData.userData(req, res)
        if (!usr) {
            return
        }
        let id = req.params.id;
        const file = req.files.upload
        if (!id) {
            return res.status(400).send({
                message: "User id is empty"

            })
        } else if (!file) {
            return res.status(400).send({
                message: " file is empty"

            })
        }
        const ext = req.files.upload.mimetype.split("/")[1];
        let rand = Math.floor(100000 + Math.random() * 900000)
        var name = req.files.upload.name;
        var newName = name.concat(rand)
        checkedNew = newName.split('.').join("");
        const filePath = path.join(__dirname, '../../public', 'images/user photo', checkedNew + '.' +
                `${ext}`)
            //console.log("The file path is ", filePath)
        var filePathh = filePath.split("public").pop();

        //console.log("The rand is: ", rand)
        let photoData
        photoo = { url: filePathh, type: "USER", model_id: id }
        photoData = await photo.create(photoo)
        if (photoData) {
            let usrID = usr.usrID
            saveActionState(photoData.id, "photo", "REGISTER", usrID, req, res)
        }
        file.mv(filePath, err => {
            if (err) return res.status(500).send(err)
                // res.redirect('/')
        })

        console.log("The photo id is: ", photoData.id)
        await user.update({
            photo_id: photoData.id
        }, {
            where: { id: id },
        })
        return res.status(200).send({
            message: photoData
        })


        // return res.json(data)


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

self.getUserPhoto = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await user.findOne({
            where: {
                id: id
            }
        });
        let img = await photo.findOne({
            where: {
                model_id: id
            },
            order: [
                ['createdAt', 'DESC']
            ]
        })

        let prePath = "/home/kaleb/Desktop/etcdp-backend-node/public"
        let conPath = prePath.concat(img.url)
        return res.download(conPath)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.update = async(req, res) => {
    let id = req.params.id;
    const file = req.files.upload
    if (!id) {
        return res.status(412).json({
            message: "Can't get user id"

        })
    }
    try {
        let userData = await user.findOne({
            attributes: ['photo_id'],
            include: [{
                model: photo,
                as: "photo"
            }],
            where: {
                id: id
            }
        });
        if (userData.photo.avatar) {
            if (fs.existsSync(userData.photo.avatar)) {
                fs.unlink(userData.photo.avatar, (err) => {
                    if (err) {
                        throw err;
                    }

                    console.log("Delete File successfully.");
                });
            }


        }
        const ext = req.files.upload.mimetype.split("/")[1];
        let rand = Math.floor(100000 + Math.random() * 900000)
        const filePath = path.join(__dirname, '../../public', 'images/user photo', rand + '.' +
                `${ext}`)
            //console.log("The file path is ", filePath)

        file.mv(filePath, err => {
            if (err) return res.status(500).send(err)
                // res.redirect('/')
        })
        await photo.update({
            avatar: filePath
        }, {
            where: { id: userData.photo_id },
        })
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