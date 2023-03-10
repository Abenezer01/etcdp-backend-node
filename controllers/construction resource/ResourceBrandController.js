const {
    resourcebrand,
    Sequelize
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require('dotenv');
dotenv.config();
let self = {};
const path = require('path');
const fs = require('fs');
self.getAll = async(req, res) => {
    let { page, size, order } = req.query;
    //console.log("The page", page, size)
    if (page == null && size == null) {
        page = process.env.page,
            size = process.env.size
        console.log("The page", page, size)
    }
    if (order == null) {
        order = process.env.order
    }
    const { limit, offset } = paginate.getPagination(page, size);
    resourcebrand.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
        })
        .then(data => {
            const response = paginate.getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
}


self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await resourcebrand.findOne({
            where: {
                id: id
            }
        });
        data.image = data.image.substr(data.image.lastIndexOf('/') + 1)
        return res.status(200).json({
            data: (data) ? data : {}
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.getByResourceId = async(req, res) => {
    let id = req.params.id
    let { page, size, order } = req.query;
    //console.log("The page", page, size)
    if (page == null && size == null) {
        page = process.env.page,
            size = process.env.size
        console.log("The page", page, size)
    }
    if (order == null) {
        order = process.env.order
    }
    const { limit, offset } = paginate.getPagination(page, size);
    resourcebrand.findAndCountAll({
            limit,
            offset,
            where: {
                resource_id: id
            },
            order: [
                ['createdAt', order]
            ],
            raw: true
        })
        .then(data => {
            const newData = data.rows.map(item => {
                // console.log("The item attachement", )
                return {...item, image: item.image.substr(item.image.lastIndexOf('/') + 1) }
            })
            const response = paginate.getPagingData({ rows: newData, count: data.count }, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
}

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await resourcebrand.findAll({
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
        const file = req.files
        console.log("the file", file)
        let pat
        if (file) {

            const ext = req.files.image.mimetype.split("/")[1];
            let rand = Math.floor(100000 + Math.random() * 900000)
            var name = req.files.image.name;
            let parsedName = path.parse(name).name;
            checkedNew = parsedName.concat(rand);
            const filePath = path.join(__dirname, '../../public', 'images/resourcebrand', checkedNew + '.' +
                `${ext}`)
            console.log("The file path is ", filePath)
            var filePathh = filePath.split("public").pop();
            console.log("The file path is ", filePathh)
                //return res.send(filePathh)

            body.image = filePathh
            pat = filePath
        }
        if (!file) {
            body.image = ''
        }

        if (usr) {
            let data = await resourcebrand.create(body);
            if (data) {
                if (pat) {
                    const filee = req.files.image
                    filee.mv(pat, err => {
                        if (err) return res.status(500).send(err)
                            // res.redirect('/')
                    })
                }
                let us = usr.usrID
                await saveActionState(data.id, "resourcebrand", "REGISTER", us, req, res)
            }
            return res.json(data)
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const prePath = path.join(__dirname, '..', '..', 'public');
self.getImage = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await resourcebrand.findOne({
            where: {
                id: id
            }
        });
        let conPath = prePath.concat(data.image)
        return res.download(conPath)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.update = async(req, res) => {
    try {
        let id = req.params.id
        let usr = await usrData.userData(req, res)
        let body = req.body;
        const file = req.files
        console.log("the file", file)
        let pat
        if (file) {

            const ext = req.files.image.mimetype.split("/")[1];
            let rand = Math.floor(100000 + Math.random() * 900000)
            var name = req.files.image.name;
            let parsedName = path.parse(name).name;
            checkedNew = parsedName.concat(rand);
            const filePath = path.join(__dirname, '../../public', 'images/resourcebrand', checkedNew + '.' +
                `${ext}`)
            console.log("The file path is ", filePath)
            var filePathh = filePath.split("public").pop();
            console.log("The file path is ", filePathh)
                //return res.send(filePathh)

            body.image = filePathh
            pat = filePath
        }
        // if (!file) {
        //     body.image = ''
        // }

        if (usr) {
            if (pat) {
                const filee = req.files.image
                let data = await resourcebrand.findOne({
                    where: {
                        id: id
                    },
                });
                if (data.image) {
                    let f = "/home/kaleb/Desktop/etcdp-backend-node/public"
                    let fc = f + data.image

                    if (fs.existsSync(fc)) {
                        fs.unlink(fc, (err) => {
                            if (err) {
                                throw err;
                            }

                            console.log("Deleted File successfully.");
                        });
                    }


                }
                filee.mv(pat, err => {
                    if (err) return res.status(500).send(err)
                        // res.redirect('/')
                })
            }
            let data = await resourcebrand.update(body, {
                where: {
                    id: id
                },
            });
            return res.json({ message: "Success" })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await resourcebrand.destroy({
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