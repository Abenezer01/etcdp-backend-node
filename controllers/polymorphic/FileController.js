const {
  File,
  EmployeeEducation,
  EmployeeAge,
  WorkExperience,
  Sequelize,
} = require("../../models");
const path = require("path");
const fs = require("fs");
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById } = require("../utils/format-helper");
const crypto = require("crypto");
const FileType = require('file-type');
const dotenv = require("dotenv");
dotenv.config();

let self = {};

// 1. Define strict security constants
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png', '.docx', '.doc', '.xlsx', '.xls', '.csv', '.ods'];
const ALLOWED_MIMES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
  'text/csv',
  'application/vnd.oasis.opendocument.spreadsheet'
];

const uploadDir = process.env.UPLOAD_STORAGE_DIR;

const logFileUploadEvent = (level, message, details = {}) => {
  console[level](`[FileUpload] ${message}`, details);
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

const ensureUploadDirectory = (dirPath) => {
  if (!dirPath) {
    throw new Error("UPLOAD_STORAGE_DIR is not configured");
  }

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const safeRemoveFile = (filePath) => {
  if (!filePath || !path.isAbsolute(filePath) || !fs.existsSync(filePath)) {
    return;
  }

  try {
    fs.unlinkSync(filePath);
  } catch (error) {
    logFileUploadEvent("warn", "Failed to remove file during cleanup", {
      filePath,
      error: error.message,
    });
  }
};


self.getAll = async (req, res) => {
  try {


    const paginatedResult = await paginationHelper(File, req);

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
  getRecordById(File, req, res);
};

self.getMyFiles = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { reference_id: id };
    const paginatedResult = await paginationHelper(File, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};


self.getMyFilteredFiles = async (req, res) => {

  const { id, project_type } = req.query;
  try {
    const whereCondition = {
      reference_id: id,
      project_type: project_type,
    };
    const paginatedResult = await paginationHelper(File, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.save = async (req, res) => {
  try {
    const filer = getSingleUpload(req);

    if (!filer) {
      logFileUploadEvent("warn", "Upload rejected because no file was provided", {
        bodyType: req.body.type,
        referenceId: req.body.reference_id,
      });
      return res.apiError("No file uploaded.", 400);
    }

    if (filer === "MULTIPLE") {
      logFileUploadEvent("warn", "Upload rejected because multiple files were provided", {
        bodyType: req.body.type,
        referenceId: req.body.reference_id,
      });
      return res.apiError("Only single file upload is supported.", 400);
    }

    const extt = path.extname(filer.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extt)) {
      logFileUploadEvent("warn", "Upload rejected because extension is not allowed", {
        fileName: filer.name,
        extension: extt,
        mimetype: filer.mimetype,
      });
      return res.apiError(`Forbidden file type: ${extt}`, 415);
    }

    const typeBuffer = filer.tempFilePath
      ? await FileType.fromFile(filer.tempFilePath)
      : await FileType.fromBuffer(filer.data);
    if (!typeBuffer || !ALLOWED_MIMES.includes(typeBuffer.mime)) {
      logFileUploadEvent("warn", "Upload rejected because file content validation failed", {
        fileName: filer.name,
        extension: extt,
        detectedMime: typeBuffer ? typeBuffer.mime : null,
        providedMime: filer.mimetype,
      });
      return res.apiError("File content mismatch. The file content does not match its extension.", 415);
    }

    const type = req.body.type;
    const description = req.body.description;
    const referenceId = req.body.reference_id;
    const fileabletype = req.body.fileable_type;
    const projectType = req.body.project_type;

    const ext = path.extname(filer.name) || `.${filer.mimetype.split("/")[1]}`;
    const storedName = crypto.randomBytes(16).toString("hex") + ext;
    ensureUploadDirectory(uploadDir);

    const absolutePath = path.join(uploadDir, storedName);

    // File size
    const fileSizeInKB = filer.size / 1024;
    const docSize = Math.round(fileSizeInKB);

    const document = {
      fileable_type: fileabletype,
      title: filer.name,
      url: absolutePath,
      type,
      description,
      extension: ext.replace(".", ""),
      reference_id: referenceId,
      project_type: projectType,
      size: docSize,
    };

    const usr = await usrData.userData(req, res);
    if (!usr) return;

    logFileUploadEvent("info", "Starting file upload", {
      userId: usr.usrID,
      referenceId,
      fileableType: fileabletype,
      projectType,
      originalName: filer.name,
      storedName,
      size: filer.size,
      mimetype: filer.mimetype,
    });

    await filer.mv(absolutePath);

    let doc;

    try {
      doc = await File.create(document);
    } catch (error) {
      safeRemoveFile(absolutePath);
      throw error;
    }

    if (doc) {
      const usrID = usr.usrID;

      await actionHelper.saveActionState(
        doc.id,
        "File",
        "REGISTER",
        usrID,
        req,
        res
      );
    }

    logFileUploadEvent("info", "File upload completed", {
      userId: usr.usrID,
      fileId: doc.id,
      referenceId,
      storedPath: absolutePath,
    });

    res.apiSuccess({
      data: doc
    });

  } catch (error) {
    logFileUploadEvent("error", "File upload failed", {
      bodyType: req.body.type,
      referenceId: req.body.reference_id,
      fileableType: req.body.fileable_type,
      error: error.message,
    });
    res.apiError(error);
  }
};

self.update = async (req, res) => {
  let id = req.params.id;

  if (!id) {
    logFileUploadEvent("warn", "File update rejected because file id is missing");
    return res.apiError("Can't get File id", 412);
  }

  try {
    const filer = getSingleUpload(req);

    if (!filer) {
      logFileUploadEvent("warn", "File update rejected because no file was provided", {
        fileId: id,
      });
      return res.apiError("No file uploaded.", 400);
    }

    if (filer === "MULTIPLE") {
      logFileUploadEvent("warn", "File update rejected because multiple files were provided", {
        fileId: id,
      });
      return res.apiError("Only single file upload is supported.", 400);
    }

    const extt = path.extname(filer.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extt)) {
      logFileUploadEvent("warn", "File update rejected because extension is not allowed", {
        fileId: id,
        fileName: filer.name,
        extension: extt,
      });
      return res.apiError(`Forbidden file type: ${extt}`, 415);
    }

    const typeBuffer = filer.tempFilePath
      ? await FileType.fromFile(filer.tempFilePath)
      : await FileType.fromBuffer(filer.data);

    if (!typeBuffer || !ALLOWED_MIMES.includes(typeBuffer.mime)) {
      logFileUploadEvent("warn", "File update rejected because file content validation failed", {
        fileId: id,
        fileName: filer.name,
        detectedMime: typeBuffer ? typeBuffer.mime : null,
        providedMime: filer.mimetype,
      });
      return res.apiError("File content mismatch. The file content does not match its extension.", 415);
    }

    let fileData = await File.findOne({
      where: {
        id: id,
      },
    });

    if (!fileData) {
      logFileUploadEvent("warn", "File update rejected because the file record was not found", {
        fileId: id,
      });
      return res.apiError("File not found", 404);
    }

    ensureUploadDirectory(uploadDir);

    const ext = path.extname(filer.name) || `.${filer.mimetype.split("/")[1]}`;
    const storedName = crypto.randomBytes(16).toString("hex") + ext;
    const filePath = path.join(uploadDir, storedName);
    const previousPath = fileData.url;

    logFileUploadEvent("info", "Starting file update", {
      fileId: id,
      originalName: filer.name,
      storedName,
      previousPath,
    });

    await filer.mv(filePath);

    let updatedFile = {
      type: req.body.type || fileData.type,
      title: req.body.title || filer.name,
      description: req.body.description,
      url: filePath,
      extension: ext.replace(".", ""),
      size: Math.round(filer.size / 1024),
    };

    let updated = 0;

    try {
      [updated] = await File.update(updatedFile, {
        where: { id },
      });
    } catch (error) {
      safeRemoveFile(filePath);
      throw error;
    }

    if (updated) {
      if (previousPath !== filePath) {
        safeRemoveFile(previousPath);
      }

      const updatedData = await File.findOne({ where: { id } });
      logFileUploadEvent("info", "File update completed", {
        fileId: id,
        storedPath: filePath,
      });
      return res.apiSuccess({
        data: updatedData
      });
    }

    safeRemoveFile(filePath);
    logFileUploadEvent("warn", "File update did not modify any records", {
      fileId: id,
    });
    return res.apiError("File update failed", 500);
  } catch (error) {
    logFileUploadEvent("error", "File update failed", {
      fileId: id,
      error: error.message,
    });
    return res.apiError(error);
  }
};

self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let fileData = await File.findOne({
      where: {
        id: id,
      },
    });
    if (fileData) {
      if (fs.existsSync(fileData.url)) {
        fs.unlink(fileData.url, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    }
    await File.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.linkfiles = async (req, res) => {
  let { model, id } = req.params;
  try {
    let data = null;
    switch (model) {
      case "EmployeeEducation":
        data = await EmployeeEducation.findOne({
          where: {
            id: id,
          },
        });
        break;
      case "EmployeeAge":
        data = await EmployeeAge.findOne({
          where: {
            id: id,
          },
        });
        break;
      case "WorkExperience":
        data = await WorkExperience.findOne({
          where: {
            id: id,
          },
        });
        break;

      default:
        return res.status(404).json("Unknown model");
    }

    if (!data) {
      return res.json({
        message: "Not found",
      });
    }

    const { stakeholder_id, year, nationality } = data;

    const models = await eval(model).findAll({
      where: {
        stakeholder_id,
        year,
        nationality,
        id: {
          [Op.ne]: data.id,
        },
      },
    });
    if (models.length === 0) {
      return res.json({
        message: "No models found",
      });
    }

    const files = await File.findAll({
      where: {
        reference_id: id,
      },
    });

    if (files.length === 0) {
      return res.json({
        message: "No files uploaded",
      });
    }

    for (const model of models) {
      for (const doc of files) {
        let exists = await File.findOne({
          where: {
            reference_id: model.id,
            url: doc.url,
          },
        });
        if (!exists) {
          let fileobj = {
            title: doc.title,
            url: doc.url,
            type: doc.type,
            description: doc.description,
            extension: doc.extension,
            reference_id: model.id,
            size: doc.size,
          };
          await File.create(fileobj);
        }
      }
    }

    return res.json({
      message: "Files linked successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// using the file id download 

// self.download = async (req, res) => {
//   let { id } = req.params;
//   try {
//     let fileData = await File.findOne({
//       where: {
//         id: id,
//       },
//     });

//     if (!fileData) {
//       return res.status(404).json({
//         message: "File not found",
//       });
//     }

//     // implement rate limiter 
//     const filePath = path.join(__dirname, "../../public", fileData.url);
//     if (!fs.existsSync(filePath)) {
//       return apiError({
//         message: "File not found",
//         code: "FILE_NOT_FOUND",
//         status: 404,
//       }); 
//     }
//     // SECURITY HEADERS
//     // Forces the browser to download the file instead of opening it
//     // This prevents any embedded JS in an SVG/HTML from executing
//     res.setHeader('Content-Security-Policy', "default-src 'none'");
//     res.setHeader('X-Content-Type-Options', 'nosniff');
//     res.setHeader('X-Frame-Options', 'DENY');
//     res.setHeader('Content-Disposition', `attachment; filename=${fileData.title}`);
//     res.setHeader('Content-Type', 'application/octet-stream');

//     res.download(filePath);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// self.download = async (req, res) => {
//   let { id } = req.params;
//   try {
//     let fileData = await File.findOne({ where: { id: id } });

//     if (!fileData) return res.status(404).json({ message: "File not found" });

//     const filePath = fileData.url; 

//     if (!fs.existsSync(filePath)) {
//       return res.status(404).json({ message: "Physical file not found" });
//     }

//     // 1. Prepare the Extension and Filename
//     // Remove leading dot if it exists in DB, then add it back once
//     const rawExt = fileData.extension || "";
//     const cleanExt = rawExt.replace(/^\./, ""); 
//     let fileNameWithExt = fileData.title;

//     // Force the extension onto the title if it's missing
//     if (!fileNameWithExt.toLowerCase().endsWith(`.${cleanExt.toLowerCase()}`)) {
//       fileNameWithExt = `${fileNameWithExt}.${cleanExt}`;
//     }

//     // 2. SECURITY & DOWNLOAD HEADERS
//     // We use 'application/force-download' to stop the browser from trying to preview
//     res.setHeader('Content-Type', 'application/force-download');

//     // CRITICAL: The filename must be in quotes inside Content-Disposition
//     // We use encodeURIComponent to handle spaces/special characters
//     // const encodedName = encodeURIComponent(fileNameWithExt);

//     // This allows the Frontend to see the filename header
//     res.setHeader('Access-6-Expose-Headers', 'Content-Disposition');
//     res.setHeader('Content-Disposition', `attachment; filename="${fileNameWithExt}"`);


//     // res.setHeader('Content-Disposition', `attachment; filename="${fileNameWithExt}"; filename*=UTF-8''${encodedName}`);

//     res.setHeader('Content-Security-Policy', "default-src 'none'");
//     res.setHeader('X-Content-Type-Options', 'nosniff');

//     // 3. SEND THE FILE
//     // We use res.sendFile instead of res.download here because we 
//     // have already manually set the perfect headers above.
//     res.sendFile(filePath, (err) => {
//       if (err) {
//         if (!res.headersSent) {
//           return res.status(500).json({ message: "Error transferring file" });
//         }
//       }
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

self.download = async (req, res) => {
  const { id } = req.params;

  try {
    const fileData = await File.findOne({
      where: { id },
    });

    if (!fileData) {

      return res.apiError({
        message: "File not found",
        code: "FILE_NOT_FOUND",
        status: 404
      });
    }

    // 🔒 Internal absolute path stored directly in DB
    const filePath = fileData.url;

    // Prevent path traversal / invalid paths
    if (!filePath || !path.isAbsolute(filePath)) {
      return res.status(400).json({
        message: "Invalid file path",
      });
    }

    // File existence check
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        message: "File not found on disk",
      });
    }

    // 🔐 SECURITY HEADERS
    // Prevent browser execution/rendering
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'none'; sandbox"
    );

    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-Download-Options", "noopen");
    res.setHeader("Cross-Origin-Resource-Policy", "same-origin");

    // Force safe download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${encodeURIComponent(fileData.title)}"`
    );

    // Always serve as binary
    res.setHeader("Content-Type", "application/octet-stream");

    // Optional: file size
    const stat = fs.statSync(filePath);
    res.setHeader("Content-Length", stat.size);

    // Stream file safely
    const stream = fs.createReadStream(filePath);

    stream.on("error", (err) => {
      console.error(err);

      if (!res.headersSent) {
        return res.status(500).json({
          message: "Error reading file",
        });
      }
    });

    stream.pipe(res);

  } catch (error) {
    return apiError(error)
  }
};

//show uploaded images api

self.showImages = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await File.findOne({
      where: {
        reference_id: id,
      },
    });
    return res.json(data);
  }

  catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.viewImage = async (req, res) => {
  let { id } = req.params;
  try {
    const fileData = await File.findOne({ where: { id: id } });

    if (!fileData) return res.status(404).send("Not found");

    const filePath = fileData.url; // /home/deploy/data/files/image.png

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("File not found on disk");
    }

    // 1. Determine the correct MIME type based on the extension
    const mimeType = `image/${fileData.extension.replace('.', '')}`;

    // 2. Set headers for viewing, not downloading
    res.setHeader('Content-Type', mimeType);
    res.setHeader('Content-Disposition', 'inline'); // 'inline' tells browser to show it

    // 3. Security headers (keep these!)
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours

    // 4. Send the file
    res.sendFile(filePath);

  } catch (error) {
    res.status(500).send("Error rendering image");
  }
};


module.exports = self;
