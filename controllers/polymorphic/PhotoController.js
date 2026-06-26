const { User, Photo, Sequelize } = require("../../models");
const path = require("path");

const fs = require("fs");

const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const usrData = require("../../utils/userDataFromToken");
const { getRecordById, deleteRecord } = require("../utils/format-helper");

const Op = Sequelize.Op;

let self = {};
const ALLOWED_PHOTO_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
const ALLOWED_PHOTO_MIMES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];

const logPhotoUploadEvent = (level, message, details = {}) => {
  console[level](`[PhotoUpload] ${message}`, details);
};

const getSingleUpload = (req) => {
  if (!req.files || !req.files.upload) {
    return null;
  }

  if (Array.isArray(req.files.upload)) {
    return req.files.upload.length === 1 ? req.files.upload[0] : "MULTIPLE";
  }

  return req.files.upload;
};

const safeRemoveFile = (filePath) => {
  if (!filePath || !fs.existsSync(filePath)) {
    return;
  }

  try {
    fs.unlinkSync(filePath);
  } catch (error) {
    logPhotoUploadEvent("warn", "Failed to remove photo during cleanup", {
      filePath,
      error: error.message,
    });
  }
};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Photo, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
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

    const { type, model_id } = req.body;
    const upload = getSingleUpload(req);

    if (!upload) {
      logPhotoUploadEvent("warn", "Photo upload rejected because no file was provided", {
        userId: userData.usrID,
        modelId: model_id,
        type,
      });
      return res.apiError("File is empty", 400);
    }

    if (upload === "MULTIPLE") {
      logPhotoUploadEvent("warn", "Photo upload rejected because multiple files were provided", {
        userId: userData.usrID,
        modelId: model_id,
        type,
      });
      return res.apiError("Only single file upload is supported.", 400);
    }

    const extension = path.extname(upload.name).toLowerCase();
    if (!ALLOWED_PHOTO_EXTENSIONS.includes(extension) || !ALLOWED_PHOTO_MIMES.includes(upload.mimetype)) {
      logPhotoUploadEvent("warn", "Photo upload rejected because file type is not allowed", {
        userId: userData.usrID,
        modelId: model_id,
        type,
        fileName: upload.name,
        extension,
        mimetype: upload.mimetype,
      });
      return res.apiError("Unsupported photo type", 415);
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
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    logPhotoUploadEvent("info", "Starting photo upload", {
      userId: userData.usrID,
      modelId: model_id,
      type,
      originalName: upload.name,
      targetPath: filePath,
      mimetype: upload.mimetype,
      size: upload.size,
    });

    await upload.mv(filePath);

    let photoData;

    try {
      photoData = await Photo.create({
        title: checkedNew,
        url: filePathh,
        type: type,
        model_id: model_id
      });
    } catch (error) {
      safeRemoveFile(filePath);
      throw error;
    }

    if (photoData) {
      const userID = userData.usrID;
      await actionHelper.saveActionState(
        photoData.id,
        "Photo",
        "REGISTER",
        userID,
        req,
        res
      );
    }

    logPhotoUploadEvent("info", "Photo upload completed", {
      userId: userData.usrID,
      photoId: photoData.id,
      modelId: model_id,
      type,
      storedPath: filePath,
    });

    res.apiSuccess({
      data: photoData
    });
  } catch (error) {
    logPhotoUploadEvent("error", "Photo upload failed", {
      modelId: req.body.model_id,
      type: req.body.type,
      error: error.message,
    });
    res.apiError(error);
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
    res.apiError(error);
  }
};
self.serveMultiplePhoto = async (req, res) => {

  try {
    const { id } = req.params;

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
    });
    // for (i = 0; i < img.length; i++) {
    //     const imagePath = path.join(prePath, img[i].url);
    //     res.sendFile(imagePath);
    // }
  } catch (error) {
    res.apiError(error);
  }
};
self.update = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    logPhotoUploadEvent("warn", "Photo update rejected because photo id is missing");
    return res.apiError("Can't get photo id", 412);
  }
  try {
    const file = getSingleUpload(req);

    if (!file) {
      logPhotoUploadEvent("warn", "Photo update rejected because no file was provided", {
        photoId: id,
      });
      return res.apiError("File is empty", 400);
    }

    if (file === "MULTIPLE") {
      logPhotoUploadEvent("warn", "Photo update rejected because multiple files were provided", {
        photoId: id,
      });
      return res.apiError("Only single file upload is supported.", 400);
    }

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
    if (!userData || !userData.Photo) {
      logPhotoUploadEvent("warn", "Photo update rejected because the related photo was not found", {
        photoId: id,
      });
      return res.apiError("Photo not found", 404);
    }

    if (userData.Photo.avatar) {
      if (fs.existsSync(userData.Photo.avatar)) {
        fs.unlink(userData.Photo.avatar, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    }

    const extension = path.extname(file.name).toLowerCase();
    if (!ALLOWED_PHOTO_EXTENSIONS.includes(extension) || !ALLOWED_PHOTO_MIMES.includes(file.mimetype)) {
      logPhotoUploadEvent("warn", "Photo update rejected because file type is not allowed", {
        photoId: id,
        fileName: file.name,
        extension,
        mimetype: file.mimetype,
      });
      return res.apiError("Unsupported photo type", 415);
    }

    const ext = file.mimetype.split("/")[1];
    let rand = Math.floor(100000 + Math.random() * 900000);
    const filePath = path.join(
      __dirname,
      "../../public",
      "images/user Photo",
      rand + "." + `${ext}`
    );
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    logPhotoUploadEvent("info", "Starting photo update", {
      photoId: userData.photo_id,
      userId: id,
      targetPath: filePath,
      mimetype: file.mimetype,
      size: file.size,
    });

    await file.mv(filePath);

    const [updated] = await Photo.update({ avatar: filePath }, {
      where: { id: userData.photo_id },
    });

    if (updated) {
      const updatedData = await Photo.findOne({ where: { id: userData.photo_id } });
      logPhotoUploadEvent("info", "Photo update completed", {
        photoId: userData.photo_id,
        userId: id,
      });
      return res.apiSuccess({
        data: updatedData
      });
    }

    logPhotoUploadEvent("warn", "Photo update did not modify any records", {
      photoId: userData.photo_id,
      userId: id,
    });
    return res.apiError("Photo update failed", 500);

  } catch (error) {
    logPhotoUploadEvent("error", "Photo update failed", {
      photoId: id,
      error: error.message,
    });
    return res.apiError(error);
  }
};

self.delete = async (req, res) => {
  deleteRecord(Photo, req, res);
};

module.exports = self;
