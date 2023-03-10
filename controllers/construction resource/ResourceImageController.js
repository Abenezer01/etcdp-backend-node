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
    //Save
self.save = async(req, res) => {
    try {
        const usr = await usrData.userData(req, res);
        if (!usr) {
            return res.status(400).send({ message: "resource id is empty" });;
        }

        const { id } = req.params;
        const reqimage = req.files.image || {};

        if (!id) {
            return res.status(400).send({ message: "resource id is empty" });
        }

        if (!reqimage) {
            return res.status(400).send({ message: "file is empty" });
        }

        const ext = reqimage.mimetype.split("/")[1];
        const rand = Math.floor(100000 + Math.random() * 900000);
        const { name } = reqimage;
        const parsedName = path.parse(name).name;
        const checkedNew = parsedName.concat(rand);
        const filePath = path.join(
            __dirname,
            "../../public",
            "images/resourceimages",
            `${checkedNew}.${ext}`
        );
        const filePathh = filePath.split("public").pop();
        const pat = filePath;

        const imagee = { url: filePathh };
        const ll = await image.create(imagee);
        if (!ll) {
            return res.status(500).send({ message: "Failed to create image" });
        }

        const { usrID } = usr;
        await saveActionState(ll.id, "resourceimage", "REGISTER", usrID, req, res);

        await resource.update({ image_id: ll.id }, { where: { id } });

        const file = req.files.image;
        file.mv(pat, (err) => {
            if (err) {
                return res.status(500).send(err);
            }
        });

        return res.status(200).json({ data: ll });
    } catch (error) {
        console.log("The error is", error);
        res.status(500).json({ message: error.message });
    }
};
const prePath = path.join(__dirname, '..', '..', 'public');

self.getImage = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await resource.findOne({
            where: {
                id: id
            }
        });
        let img = await image.findOne({
                where: {
                    id: data.image_id
                }
            })
            //let prePath = "/home/kaleb/Desktop/etcdp-backend-node/public"
        let conPath = prePath.concat(img.url)
        return res.download(conPath)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// self.updatee = async(req, res) => {
//     let id = req.params.id;
//     const file = req.files.image
//     if (!id) {
//         return res.status(412).json({
//             message: "Can't get user id"

//         })
//     }
//     let contentLength = parseInt(req.headers['content-length']);
//     fileSizeinKB = Math.round(parseInt(contentLength) / 1024 * 100) / 100;
//     let approx = Math.round(fileSizeinKB);
//     //return res.status(200).json(approx)
//     try {
//         let resourceData = await resource.findOne({
//             where: {
//                 id: id
//             }
//         });
//         let image_id = resourceData.image_id
//         if (image_id) {
//             let resourceImageData = await image.findOne({
//                 where: {
//                     id: image_id
//                 }
//             })
//             let f = "/home/kaleb/Desktop/etcdp-backend-node/public"
//             let fc = f + resourceImageData.url
//             if (fs.existsSync(fc)) {
//                 fs.unlink(fc, (err) => {
//                     if (err) {
//                         throw err;
//                     }

//                     console.log("Deleted File successfully.");
//                 });
//             }


//         }
//         const ext = req.files.image.mimetype.split("/")[1];
//         let rand = Math.floor(100000 + Math.random() * 900000)
//         var name = req.files.image.name;
//         let parsedName = path.parse(name).name;
//         checkedNew = parsedName.concat(rand);
//         const filePath = path.join(__dirname, '../../public', 'images/resourceimages', checkedNew + '.' +
//                 `${ext}`)
//             //console.log("The file path is ", filePath)

//         file.mv(filePath, err => {
//             if (err) return res.status(500).send(err)
//                 // res.redirect('/')
//         })
//         var filePathh = filePath.split("public").pop();
//         await image.update({
//             url: filePathh
//         }, {
//             where: { id: image_id },
//         })
//         return res.status(200).json({
//             message: "Success"
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

self.update = async(req, res) => {
    const id = req.params.id;
    const file = req.files.image;

    if (!id) {
        return res.status(412).json({ message: "Can't get user id" });
    }

    const contentLength = parseInt(req.headers['content-length']);
    const fileSizeInKB = Math.round(contentLength / 1024 * 100) / 100;

    try {
        const resourceData = await resource.findOne({ where: { id } });
        const imageId = resourceData.image_id;

        if (imageId) {
            const resourceImageData = await image.findOne({ where: { id: imageId } });
            const fc = path.join(prePath, resourceImageData.url);

            if (fs.existsSync(fc)) {
                fs.unlinkSync(fc);
            }
        }

        const ext = file.mimetype.split("/")[1];
        const rand = Math.floor(100000 + Math.random() * 900000);
        const parsedName = path.parse(file.name).name;
        const checkedNew = parsedName.concat(rand);
        const filePath = path.join(__dirname, "../../public", "images/resourceimages", `${checkedNew}.${ext}`);

        await file.mv(filePath);
        const filePathh = filePath.split("public").pop();

        await image.update({ url: filePathh }, { where: { id: imageId } });

        return res.status(200).json({ message: "Success" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

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