const {
    user,
    resource,
    image,
    Sequelize
} = require("../../models");
const path = require('path');
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper")
const fs = require('fs');


const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await image.findAll();
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
        let data = await image.findOne({
            where: {
                id: id
            },

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
        let data = await image.findAll({
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
        if (usr) {
            // let body = req.body;
            // let data = await image.create(body);
            // return res.json(data)
            let id = req.params.id;
            const reqFile = req.files
            if (reqFile) {
                let file = req.files.image
                if (id == null) {
                    return res.status(400).send({
                        message: "resource id is empty"

                    })
                } else if (file == null) {
                    return res.status(400).send({
                        message: " file is empty"

                    })
                }
                const ext = req.files.image.mimetype.split("/")[1];
                let rand = Math.floor(100000 + Math.random() * 900000)
                var name = req.files.image.name;
                let parsedName = path.parse(name).name;
                checkedNew = parsedName.concat(rand);
                const filePath = path.join(__dirname, '../../public', 'images/resourceimages', checkedNew + '.' +
                    `${ext}`)
                console.log("The file path is ", filePath)
                var filePathh = filePath.split("public").pop();
                console.log("The file path is ", filePathh)
                    //return res.send(filePathh)
                let pat = filePath

                let imagee = { url: filePathh }
                    //console.log("The rand is: ", rand)
                let ll
                try {
                    if (usr) {
                        ll = await image.create(imagee);
                        if (ll) {
                            if (pat) {
                                const filee = req.files.image
                                filee.mv(pat, err => {
                                    if (err) return res.status(500).send(err)
                                        // res.redirect('/')
                                })
                            }
                            let us = usr.usrID
                            await saveActionState(ll.id, "resourceimage", "REGISTER", us)
                            await resource.update({
                                image_id: ll.id
                            }, {
                                where: { id: id },
                            })

                        }
                        return res.status(200).json({
                            data: ll
                        })
                    }

                } catch (error) {
                    console.log("The error is", error)
                    return res.status(500).send({
                        message: error
                    })
                }
                // let data = await user.create(avatar: filePath, {
                //     where: {
                //         id: id
                //     }
                // });
                return res.json(data)
            } else {
                return res.status(402).json("Can't get any file")
            }
        }

    } catch (error) {
        console.log("The error is", error)
        res.status(500).json({
            message: error.message
        })
    }
}

self.update = async(req, res) => {
    let id = req.params.id;
    const file = req.files.image
    if (!id) {
        return res.status(412).json({
            message: "Can't get user id"

        })
    }
    let contentLength = parseInt(req.headers['content-length']);
    fileSizeinKB = Math.round(parseInt(contentLength) / 1024 * 100) / 100;
    let approx = Math.round(fileSizeinKB);
    //return res.status(200).json(approx)
    try {
        let resourceData = await resource.findOne({
            where: {
                id: id
            }
        });
        let image_id = resourceData.image_id
        if (image_id) {
            let resourceImageData = await image.findOne({
                where: {
                    id: image_id
                }
            })
            let f = "/home/kaleb/Desktop/etcdp-backend-node/public"
            let fc = f + resourceImageData.url
            if (fs.existsSync(fc)) {
                fs.unlink(fc, (err) => {
                    if (err) {
                        throw err;
                    }

                    console.log("Deleted File successfully.");
                });
            }


        }
        const ext = req.files.image.mimetype.split("/")[1];
        let rand = Math.floor(100000 + Math.random() * 900000)
        var name = req.files.image.name;
        let parsedName = path.parse(name).name;
        checkedNew = parsedName.concat(rand);
        const filePath = path.join(__dirname, '../../public', 'images/resourceimages', checkedNew + '.' +
                `${ext}`)
            //console.log("The file path is ", filePath)

        file.mv(filePath, err => {
            if (err) return res.status(500).send(err)
                // res.redirect('/')
        })
        var filePathh = filePath.split("public").pop();
        await image.update({
            url: filePathh
        }, {
            where: { id: image_id },
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
        let data = await image.destroy({
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