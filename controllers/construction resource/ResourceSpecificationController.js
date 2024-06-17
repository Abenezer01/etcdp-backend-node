const { ResourceSpecification, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const paginationHelper = require("../utils/pagination-helper")
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const path = require("path");
const fs = require("fs");


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ResourceSpecification, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(ResourceSpecification, req, res);
};

self.getByResourceId = async (req, res) => {
  const { id } = req.params;
  let {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;
  const { limit, offset } = paginate.getPagination(page, size);

  if (order == null) {
    order = process.env.order;
  }

  try {
    const { count, rows } = await ResourceSpecification.findAndCountAll({
      limit,
      offset,
      where: { resource_id: id },
      order: [["created_at", "ASC"]],
      raw: true,
    });

    let newData = rows.map((item) => {
      return {
        ...item,
        image: item.image
          ? item.image.substr(item.image.lastIndexOf("/") + 1)
          : null,
      };
    });
    // const newData = rows.map(item => ( {...item, image: item.image.substr(item.image.lastIndexOf('/') + 1) }));
    const response = paginate.getPagingData(
      { rows: newData, count },
      page,
      limit
    );
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ResourceSpecification.findAll({
      where: {
        name: {
          [Op.like]: "%" + text + "%",
        },
      },
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const saveFile = async (file) => {
  const ext = file.mimetype.split("/")[1];
  const rand = Math.floor(100000 + Math.random() * 900000);
  const name = file.name;
  const parsedName = path.parse(name).name;
  const checkedNew = parsedName.concat(rand);
  const filePath = path.join(
    __dirname,
    "../../public",
    "images/resourcespecification",
    checkedNew + "." + `${ext}`
  );
  const filePathh = filePath.split("public").pop();
  await file.mv(filePath);
  return filePathh;
};

self.save = async (req, res) => {
  try {
    const { body } = req;
    const { files } = req;
    const usr = await usrData.userData(req, res);
    const promises = [];
    let pat;

    if (files) {
      const generatedFilePath = await saveFile(files.image);

      body.image = generatedFilePath;

      pat = path.join(
        __dirname,
        "../../public",
        "images/resourcespecification",
        generatedFilePath
      );
    }
    if (!files) {
      body.image = "";
    }

    if (usr) {
      const data = await ResourceSpecification.create(body);
      if (data) {
        promises.push(
          actionHelper.saveActionState(
            data.id,
            "ResourceSpecification",
            "REGISTER",
            usr.usrID,
            req,
            res
          )
        );
      }
      await Promise.all(promises);
      res.json(data);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// self.save = async(req, res) => {
//     try {
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
//         if (!file) {
//             body.image = ''
//         }

//         if (usr) {
//             let data = await ResourceSpecification.create(body);
//             if (data) {
//                 if (pat) {
//                     const filee = req.files.image
//                     filee.mv(pat, err => {
//                         if (err) return res.status(500).send(err)
//                             // res.redirect('/')
//                     })
//                 }
//                 let us = usr.usrID
//                 await actionHelper.saveActionState(data.id, "ResourceSpecification", "REGISTER", us, req, res)
//             }
//             return res.json(data)
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }
const prePath = path.join(__dirname, "..", "..", "public");
self.getImage = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ResourceSpecification.findOne({
      where: {
        id: id,
      },
    });
    let conPath = prePath.concat(data.image);
    return res.download(conPath);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.update = async (req, res) => {
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
        const { image } = await ResourceSpecification.findOne({
          where: { id },
        });
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
      await ResourceSpecification.update(body, { where: { id } });
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
//                 let data = await ResourceSpecification.findOne({
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

//             let data = await ResourceSpecification.update(body, {
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


self.delete = async (req, res) => {
  deleteRecord(ResourceSpecification, req, res);
};

module.exports = self;
