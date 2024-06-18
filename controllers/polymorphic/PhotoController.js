const {User, Photo, Sequelize } = require("../../models");
const path = require("path");

const fs = require("fs");

const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const usrData = require("../../utils/userDataFromToken");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');

const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Photo, req);

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
  getRecordById(Photo, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Photo.findAll({
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
    const userData = await usrData.userData(req, res);
    if (!userData) {
      return;
    }

    const id = req.params.id || "";
    const { upload } = req.files;

    if (!id) {
      return res.status(400).send({ message: "User id is empty" });
    }

    if (!upload) {
      return res.status(400).send({ message: "File is empty" });
    }

    const ext = upload.mimetype.split("/")[1];
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    const name = upload.name;
    const newName = `${name}${randomNumber}`;
    const checkedNew = newName.split(".").join("");
    const filePath = path.join(
      __dirname,
      "../../public",
      "images/Photo",
      `${checkedNew}.${ext}`
    );
    const filePathh = filePath.split("public").pop();

    const photoObject = { url: filePathh, type: req.body.type, model_id: id };
    const photoData = await Photo.create(photoObject);

    if (photoData) {
      const userID = userData.usrID;
      actionHelper.saveActionState(
        photoData.id,
        "Photo",
        "REGISTER",
        userID,
        req,
        res
      );
    }

    upload.mv(filePath, (err) => {
      if (err) return res.status(500).send(err);
    });

    res.apiSuccess({
      data: photoData
    })
  } catch (error) {
    res.apiError(error)
  }
};

const prePath = path.join(__dirname, "..", "..", "public");

self.servePhoto = async (req, res) => {
  try {
    const { id, type } = req.params;

    const img = await Photo.findOne({
      where: {
        [Op.and]: [{ model_id: id }, { type: type }],
      },
      order: [["created_at", "DESC"]],
    });
    // return res.send(img)
    if (!img) {
      return res.status(204).json(undefined);
    }
    const imagePath = path.join(prePath, img.url);
    //return res.send(imagePath)
    if (!imagePath) {
      return res.status(412).json({
        message: "Photo not found!",
      });
    }
    return res.sendFile(imagePath);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
self.serveMultiplePhoto = async (req, res) => {
  try {
    const { id, type } = req.params;

    const img = await Photo.findAll({
      where: {
        model_id: id,
      },
      order: [["created_at", "DESC"]],
    });
    let arr = [];
    for (const im of img) {
      arr.push({ id: im.id, path: im.url });
    }

    res.apiSuccess({
      data: arr
    })
    // for (i = 0; i < img.length; i++) {
    //     const imagePath = path.join(prePath, img[i].url);
    //     res.sendFile(imagePath);
    // }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
self.update = async (req, res) => {
  let id = req.params.id;
  const file = req.files.upload;
  if (!id) {
    return res.status(412).json({
      message: "Can't get user id",
    });
  }
  try {
    let userData = await User.findOne({
      attributes: ["photo_id"],
      include: [
        {
          model: Photo,
          as: "Photo",
        },
      ],
      where: {
        id: id,
      },
    });
    if (userData.Photo.avatar) {
      if (fs.existsSync(userData.Photo.avatar)) {
        fs.unlink(userData.Photo.avatar, (err) => {
          if (err) {
            throw err;
          }

          console.log("Delete File successfully.");
        });
      }
    }
    const ext = req.files.upload.mimetype.split("/")[1];
    let rand = Math.floor(100000 + Math.random() * 900000);
    const filePath = path.join(
      __dirname,
      "../../public",
      "images/user Photo",
      rand + "." + `${ext}`
    );
    //console.log("The file path is ", filePath)

    file.mv(filePath, (err) => {
      if (err) return res.status(500).send(err);
      // res.redirect('/')
    });
    await Photo.update(
      {
        avatar: filePath,
      },
      {
        where: { id: userData.photo_id },
      }
    );
    return res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.delete = async (req, res) => {
  deleteRecord(Photo, req, res);
};

module.exports = self;
