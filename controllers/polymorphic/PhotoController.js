const { photo, Sequelize } = require("../../models");
const path = require("path");

const fs = require("fs");

const actionHelper = require("../utils/action-helper");
const usrData = require("../../utils/userDataFromToken");
const paginate = require("../../utils/pagination");
const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    let data = await photo.findAll();
    return res.status(200).json({
      data,
    });
  } catch (error) {
    // if (err.message === 'Error') {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
    res.status(500).json({
      message: error.message,
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await photo.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await photo.findAll({
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
      "images/photo",
      `${checkedNew}.${ext}`
    );
    const filePathh = filePath.split("public").pop();

    const photoObject = { url: filePathh, type: req.body.type, model_id: id };
    const photoData = await photo.create(photoObject);

    if (photoData) {
      const userID = userData.usrID;
      actionHelper.saveActionState(
        photoData.id,
        "photo",
        "REGISTER",
        userID,
        req,
        res
      );
    }

    upload.mv(filePath, (err) => {
      if (err) return res.status(500).send(err);
    });

    console.log(`The photo id is: ${photoData.id}`);
    return res.status(200).send({ message: photoData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const prePath = path.join(__dirname, "..", "..", "public");

self.servePhoto = async (req, res) => {
  try {
    const { id, type } = req.params;

    const img = await photo.findOne({
      where: {
        [Op.and]: [{ model_id: id }, { type: type }],
      },
      order: [["createdAt", "DESC"]],
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

    const img = await photo.findAll({
      where: {
        model_id: id,
      },
      order: [["createdAt", "DESC"]],
    });
    let arr = [];
    for (const im of img) {
      arr.push({ id: im.id, path: im.url });
    }
    res.status(200).send(arr);
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
    let userData = await user.findOne({
      attributes: ["photo_id"],
      include: [
        {
          model: photo,
          as: "photo",
        },
      ],
      where: {
        id: id,
      },
    });
    if (userData.photo.avatar) {
      if (fs.existsSync(userData.photo.avatar)) {
        fs.unlink(userData.photo.avatar, (err) => {
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
      "images/user photo",
      rand + "." + `${ext}`
    );
    //console.log("The file path is ", filePath)

    file.mv(filePath, (err) => {
      if (err) return res.status(500).send(err);
      // res.redirect('/')
    });
    await photo.update(
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
  try {
    let id = req.params.id;
    let data = await photo.destroy({
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
