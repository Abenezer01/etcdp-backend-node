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
            data: data
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
self.getMyFilteredFiles = async(req, res) => {
    try {
        let id = req.query.id;
        let projectType = req.query.project_type;
        let data = await file.findAll({
            where: {
                reference_id: id,
                project_type: projectType
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
self.getFilesByModelAndType = async(req, res) => {
    try {

        const { id, type } = req.query
        let data = await file.findAll({
            where: {
                reference_id: id,
                type: type
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

    const id = req.params.id;
    const filer = req.files.upload;
    const type = req.body.type;
    const description = req.body.description;
    const referenceId = req.body.reference_id;
    const fileabletype = req.body.fileable_type;
    const projectType = req.body.project_type;

    const ext = filer.mimetype.split("/")[1];
    console.log("The file type is", ext);

    const rand = Math.floor(100000 + Math.random() * 900000);
    const parsedName = path.parse(filer.name).name;
    const checkedNew = `${parsedName}-${rand}`;
    const filePath = path.join(__dirname, "../../public/files", `${checkedNew}.${ext}`);
    const filePathh = filePath.split("public").pop();

    const { size } = filer;
    const fileSizeInKB = size / 1024;
    const approxNum = Math.round(fileSizeInKB);
    const docSize = approxNum;

    const document = {
        fileable_type: fileabletype,
        title: checkedNew,
        url: filePathh,
        type,
        description,
        extension: ext,
        reference_id: referenceId,
        project_type: projectType,
        size: docSize,
    };

    try {
        const usr = await usrData.userData(req, res);
        if (usr) {
            const doc = await file.create(document);
            filer.mv(filePath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });

            if (doc) {
                const usrID = usr.usrID;
                await saveActionState(doc.id, "file", "REGISTER", usrID, req, res);
            }

            return res.status(200).send({ data: doc });
        }
    } catch (error) {
        console.log("The error", error);
        return res.status(500).send({ message: error });
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
        var name = req.files.upload.name;
        let parsedName = path.parse(name).name;
        checkedNew = parsedName.concat(rand);
        const filePath = path.join(__dirname, '../../public', 'files', checkedNew + '.' +
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