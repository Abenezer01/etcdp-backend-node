const { ResourceBrand, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const path = require("path");
const fs = require("fs");
const prePath = path.join(__dirname, "..", "..", "public");
self.getAll = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { rows, count } = await ResourceBrand.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", order]],
    });

    const response = paginate.getPagingData(
      { rows, count },
      page,
      limit,
      count
    );

    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message || "An error occurred while retrieving data.",
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ResourceBrand.findOne({
      where: {
        id: id,
      },
    });
    data.image = data.image.substr(data.image.lastIndexOf("/") + 1);
    return res.status(200).json({
      data: data ? data : {},
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
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
    const { count, rows } = await ResourceBrand.findAndCountAll({
      limit,
      offset,
      where: { resource_id: id },
      order: [["createdAt", order]],
      raw: true,
    });

    const newData = rows.map((item) => ({
      ...item,
      image: item.image.substr(item.image.lastIndexOf("/") + 1),
    }));
    const response = paginate.getPagingData(
      { rows: newData, count },
      page,
      limit
    );
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ResourceBrand.findAll({
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
self.save = async (req, res) => {
  try {
    let usr = await usrData.userData(req, res);
    let body = req.body;
    const file = req.files;
    console.log("the file", file);
    let pat;
    if (file) {
      const ext = req.files.image.mimetype.split("/")[1];
      let rand = Math.floor(100000 + Math.random() * 900000);
      var name = req.files.image.name;
      let parsedName = path.parse(name).name;
      checkedNew = parsedName.concat(rand);
      const filePath = path.join(
        __dirname,
        "../../public",
        "images/ResourceBrand",
        checkedNew + "." + `${ext}`
      );
      console.log("The file path is ", filePath);
      var filePathh = filePath.split("public").pop();
      console.log("The file path is ", filePathh);
      //return res.send(filePathh)

      body.image = filePathh;
      pat = filePath;
    }
    if (!file) {
      body.image = "";
    }

    if (usr) {
      let data = await ResourceBrand.create(body);
      if (data) {
        if (pat) {
          const filee = req.files.image;
          filee.mv(pat, (err) => {
            if (err) return res.status(500).send(err);
            // res.redirect('/')
          });
        }
        let us = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "ResourceBrand",
          "REGISTER",
          us,
          req,
          res
        );
      }
      return res.json(data);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.getImage = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ResourceBrand.findOne({
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
    const id = req.params.id;
    const userData = await usrData.userData(req, res);
    const { body, files } = req;
    const file = files && files.image;

    if (userData) {
      if (file) {
        const ext = file.mimetype.split("/")[1];
        const rand = Math.floor(100000 + Math.random() * 900000);
        const { name } = file;
        const parsedName = path.parse(name).name;
        const checkedNew = parsedName.concat(rand);
        const filePath = path.join(
          __dirname,
          "../../public/images/ResourceBrand",
          checkedNew + "." + ext
        );
        const filePathh = filePath.split("public").pop();
        body.image = filePathh;
        await file.mv(filePath);

        const data = await ResourceBrand.findOne({ where: { id } });
        if (data.image) {
          const fc = path.join(__dirname, "../../public", data.image);
          if (fs.existsSync(fc)) {
            fs.unlink(fc, (err) => {
              if (err) {
                throw err;
              }
              console.log("Deleted File successfully.");
            });
          }
        }
      }

      await ResourceBrand.update(body, { where: { id } });
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
//             const filePath = path.join(__dirname, '../../public', 'images/ResourceBrand', checkedNew + '.' +
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
//                 let data = await ResourceBrand.findOne({
//                     where: {
//                         id: id
//                     },
//                 });
//                 if (data.image) {
//                     let f = "/home/kaleb/Desktop/etcdp-backend-node/public"
//                     let fc = f + data.image

//                     if (fs.existsSync(fc)) {
//                         fs.unlink(fc, (err) => {
//                             if (err) {
//                                 throw err;
//                             }

//                             console.log("Deleted File successfully.");
//                         });
//                     }

//                 }
//                 filee.mv(pat, err => {
//                     if (err) return res.status(500).send(err)
//                         // res.redirect('/')
//                 })
//             }
//             let data = await ResourceBrand.update(body, {
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
  try {
    let id = req.params.id;
    let data = await ResourceBrand.destroy({
      where: {
        id: id,
      },
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = self;
