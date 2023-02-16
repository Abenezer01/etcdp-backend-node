const {
    file,
    user,
    Sequelize
} = require("../../models");
const path = require('path');
const fs = require('fs');
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await file.findAll();
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
        let data = await file.findOne({
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
self.getMyFiles = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await file.findAll({
            where: {
                reference_id: id
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
        let data = await file.findAll({
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

    // let body = req.body;
    // let data = await file.create(body);
    // return res.json(data)
    let id = req.params.id;
    const filer = req.files.upload;
    const type = req.body.type;
    const title = req.body.title;
    const description = req.body.description;
    const referenceId = req.body.reference_id;
    const ext = req.files.upload.mimetype.split("/")[1];
    console.log("The file type is", ext)
    let rand = Math.floor(100000 + Math.random() * 900000)
    const filePath = path.join(__dirname, '../../public', 'documents', rand + '.' +
        `${ext}`)
    let document = {
        fileable_type: ext,
        title: title,
        url: filePath,
        type: type,
        description: description,
        extension: ext,
        reference_id: referenceId
    }


    try {
        let usr = await usrData.userData(req, res)
        let body = req.body;
        if (usr) {
            doc = await file.create(document)
            filer.mv(filePath, err => {
                if (err) return res.status(500).send(err)
                    // res.redirect('/')
            })
            if (doc) {
                let usrID = usr.usrID
                await saveActionState(doc.id, "document", "REGISTER", usrID)
            }
            return res.status(200).send({
                data: doc
            })
        }
    } catch (error) {
        console.log("The error", error)
        return res.status(500).send({
            message: error
        })
    }

}

self.update = async(req, res) => {
    let id = req.params.id;
    const filer = req.files.upload
    if (!id) {
        return res.status(412).json({
            message: "Can't get file id"

        })
    }
    try {

        let fileData = await file.findOne({
            where: {
                id: id
            }
        });
        if (fileData) {

            if (fs.existsSync(fileData.url)) {
                fs.unlink(fileData.url, (err) => {
                    if (err) {
                        throw err;
                    }

                    console.log("File deleted successfully.");
                });
            }


        }
        const ext = req.files.upload.mimetype.split("/")[1];
        let rand = Math.floor(100000 + Math.random() * 900000)
        const filePath = path.join(__dirname, '../../public', 'documents', rand + '.' +
                `${ext}`)
            //console.log("The file path is ", filePath)

        filer.mv(filePath, err => {
            if (err) return res.status(500).send(err)
                // res.redirect('/')
        })
        updatedFile = {
            type: req.body.type,
            title: req.body.title,
            description: req.body.description,
            url: filePath,
        }
        await file.update(
            updatedFile, {
                where: { id: id },
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
        let fileData = await file.findOne({
            where: {
                id: id
            }
        });
        if (fileData) {

            if (fs.existsSync(fileData.url)) {
                fs.unlink(fileData.url, (err) => {
                    if (err) {
                        throw err;
                    }

                    console.log("File deleted successfully.");
                });
            }


        }
        let data = await file.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: "Success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = self;
module.exports = self;