const { User, Resource, Image, Sequelize } = require("../../models");
const path = require("path");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const paginationHelper = require("../utils/pagination-helper")
const fs = require("fs");

const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Image, req);

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
  getRecordById(Image, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Image.findAll({
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
//Save
self.save = async (req, res) => {
  try {
    const usr = await usrData.userData(req, res);
    if (!usr) {
      return res.status(400).send({ message: "resource id is empty" });
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
    const ll = await Image.create(imagee);
    if (!ll) {
      return res.status(500).send({ message: "Failed to create image" });
    }

    const { usrID } = usr;
    await actionHelper.saveActionState(
      ll.id,
      "resourceimage",
      "REGISTER",
      usrID,
      req,
      res
    );

    await Resource.update({ image_id: ll.id }, { where: { id } });

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
const prePath = path.join(__dirname, "..", "..", "public");

self.getImage = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Resource.findOne({
      where: {
        id: id,
      },
    });
    let img = await Image.findOne({
      where: {
        id: data.image_id,
      },
    });
    //let prePath = "/home/kaleb/Desktop/etcdp-backend-node/public"
    let conPath = prePath.concat(img.url);
    return res.download(conPath);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


self.update = async (req, res) => {
  const id = req.params.id;
  const file = req.files.image;

  if (!id) {
    return res.status(412).json({ message: "Can't get user id" });
  }

  const contentLength = parseInt(req.headers["content-length"]);
  const fileSizeInKB = Math.round((contentLength / 1024) * 100) / 100;

  try {
    const resourceData = await Resource.findOne({ where: { id } });
    const imageId = resourceData.image_id;

    if (imageId) {
      const resourceImageData = await Image.findOne({ where: { id: imageId } });
      const fc = path.join(prePath, resourceImageData.url);

      if (fs.existsSync(fc)) {
        fs.unlinkSync(fc);
      }
    }

    const ext = file.mimetype.split("/")[1];
    const rand = Math.floor(100000 + Math.random() * 900000);
    const parsedName = path.parse(file.name).name;
    const checkedNew = parsedName.concat(rand);
    const filePath = path.join(
      __dirname,
      "../../public",
      "images/resourceimages",
      `${checkedNew}.${ext}`
    );

    await file.mv(filePath);
    const filePathh = filePath.split("public").pop();

    await Image.update({ url: filePathh }, { where: { id: imageId } });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

self.delete = async (req, res) => {
  deleteRecord(Image, req, res);
};
module.exports = self;
