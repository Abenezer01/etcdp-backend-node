const {
    resourcespecification,
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
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);

    try {
        const { rows, count } = await resourcespecification.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
        });

        const response = paginate.getPagingData({ rows, count }, page, limit, count);

        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: 'An error occurred while retrieving data.',
        });
    }
}


self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await resourcespecification.findOne({
            where: {
                id: id
            }
        });
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
    const { id } = req.params;
    let { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;
    const { limit, offset } = paginate.getPagination(page, size);

    if (order == null) {
        order = process.env.order;
    }

    try {
        const { count, rows } = await resourcespecification.findAndCountAll({
            limit,
            offset,
            where: { resource_id: id },
            order: [
                ['createdAt', order]
            ],
            raw: true
        });

        const newData = rows.map(item => ({...item, image: item.image.substr(item.image.lastIndexOf('/') + 1) }));
        const response = paginate.getPagingData({ rows: newData, count }, page, limit);
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Some error occurred while retrieving data." });
    }
};
self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await resourcespecification.findAll({
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
            const filePath = path.join(__dirname, '../../public', 'images/resourcespecification', checkedNew + '.' +
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
            let data = await resourcespecification.create(body);
            if (data) {
                if (pat) {
                    const filee = req.files.image
                    filee.mv(pat, err => {
                        if (err) return res.status(500).send(err)
                            // res.redirect('/')
                    })
                }
                let us = usr.usrID
                await saveActionState(data.id, "resourcespecification", "REGISTER", us, req, res)
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
        let data = await resourcespecification.findOne({
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
        const { id } = req.params;
        const usr = await usrData.userData(req, res);
        let { body } = req;
        const { files } = req;

        if (files) {
            const { mimetype } = files.image;
            const ext = mimetype.split("/")[1];
            const rand = Math.floor(100000 + Math.random() * 900000);
            const { name } = files.image;
            const parsedName = path.parse(name).name;
            const checkedNew = parsedName.concat(rand);
            const filePath = path.join(
                __dirname,
                "../../public",
                "images",
                "resourcespecification",
                `${checkedNew}.${ext}`
            );
            const filePathh = filePath.split("public").pop();
            body.image = filePathh;
            const pat = filePath;

            if (usr) {
                const { image } = await resourcespecification.findOne({ where: { id } });
                if (image) {
                    const fc = path.join(__dirname, "../../public", image);
                    if (fs.existsSync(fc)) {
                        fs.unlink(fc, (err) => {
                            if (err) throw err;
                            console.log("Deleted File successfully.");
                        });
                    }
                }

                files.image.mv(pat, (err) => {
                    if (err) return res.status(500).send("Hello", err);
                });
            }
        }

        if (usr) {
            await resourcespecification.update(body, { where: { id } });
            return res.json({ message: "Success" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// self.updatee = async(req, res) => {
//     try {
//         let id = req.params.id
//         let usr = await usrData.userData(req, res)
//         let body = req.body;
//         const file = req.files
//         console.log("the file", file)
//         let pat
//         if (file) {

//             const ext = req.files.image.mimetype.split("/")[1];
//             let rand = Math.floor(100000 + Math.random() * 900000)
//             var name = req.files.image.name;
//             let parsedName = path.parse(name).name;
//             checkedNew = parsedName.concat(rand);
//             const filePath = path.join(__dirname, '../../public', 'images/resourcespecification', checkedNew + '.' +
//                 `${ext}`)
//             console.log("The file path is ", filePath)
//             var filePathh = filePath.split("public").pop();
//             console.log("The file path is ", filePathh)
//                 //return res.send(filePathh)

//             body.image = filePathh
//             pat = filePath
//         }
//         // if (!file) {
//         //     body.image = ''
//         // }

//         if (usr) {
//             if (pat) {
//                 const filee = req.files.image
//                 let data = await resourcespecification.findOne({
//                     where: {
//                         id: id
//                     },
//                 });
//                 if (data.image) {
//                     let f = "/home/kaleb/Desktop/etcdp-backend-node/public"
//                     let fc = f + data.image
//                     console.log("The fc", fc)
//                     if (fs.existsSync(fc)) {
//                         fs.unlink(fc, (err) => {
//                             if (err) {
//                                 throw err;
//                             }

//                             console.log("Deleted File successfully.");
//                         });
//                     }


//                 }
//                 console.log("The pat", pat)
//                 filee.mv(pat, err => {
//                     if (err) return res.status(500).send("Hello", err)
//                         // res.redirect('/')
//                 })
//             }

//             let data = await resourcespecification.update(body, {
//                 where: {
//                     id: id
//                 },
//             });
//             return res.json({ message: "Success" })
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await resourcespecification.destroy({
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