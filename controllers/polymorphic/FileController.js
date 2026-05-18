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
let self = {};

// 1. Define strict security constants
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png', '.docx', '.doc'];
const ALLOWED_MIMES = [
  'application/pdf', 
  'image/jpeg', 
  'image/png', 
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword'
];



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
  
  const { id, project_type} = req.query;
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
  if (!req.files || !req.files.upload) {
      return res.apiError("No file uploaded.");
  }

  try {

  const filer = req.files.upload;


// 2. Validate Extension (Client-side bypass check)
  const extt = path.extname(filer.name).toLowerCase();
  if (!ALLOWED_EXTENSIONS.includes(extt)) {
    return res.apiError(`Forbidden file type: ${extt}`);
  }

  // 3. VALIDATE CONTENT (Prevents XSS in SVG/HTML disguised as JPG)
  // We check the first few bytes of the file buffer
  
  const typeBuffer = await FileType.fromBuffer(filer.data);
  if (!typeBuffer || !ALLOWED_MIMES.includes(typeBuffer.mime)) {
    return res.apiError("File content mismatch. The file content does not match its extension.");
  }


  const type = req.body.type;
  const description = req.body.description;
  const referenceId = req.body.reference_id;
  const fileabletype = req.body.fileable_type;
  const projectType = req.body.project_type;

  // 🔐 Generate secure random filename
    const ext = path.extname(filer.name) || `.${filer.mimetype.split("/")[1]}`;
    const storedName = crypto.randomBytes(16).toString("hex") + ext;

    // 🔒 PRIVATE STORAGE PATH (IMPORTANT)
    const uploadDir = "/home/deploy/data/files";

    // Ensure directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const absolutePath = path.join(uploadDir, storedName);

    // File size
    const fileSizeInKB = filer.size / 1024;
    const docSize = Math.round(fileSizeInKB);

    // 🧠 IMPORTANT CHANGE:
    // - url now stores INTERNAL PATH (not public URL)
    // - client will NEVER see this
    const document = {
      fileable_type: fileabletype,
      title: filer.name, // original name
      url: absolutePath, // 🔒 internal path
      type,
      description,
      extension: ext.replace(".", ""),
      reference_id: referenceId,
      project_type: projectType,
      size: docSize,
    };

    const usr = await usrData.userData(req, res);
    if (!usr) return;

    // Save file to disk FIRST (safer)
    await filer.mv(absolutePath);

    // Save DB record
    const doc = await File.create(document);

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
      
      res.apiSuccess({
        data: doc
      });
  
  } catch (error) {
    res.apiError(error);
  }
};

self.update = async (req, res) => {
  let id = req.params.id;
  const filer = req.files.upload;
  if (!id) {
    return res.status(412).json({
      message: "Can't get File id",
    });
  }
  try {
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
    const ext = req.files.upload.mimetype.split("/")[1];
    let rand = Math.floor(100000 + Math.random() * 900000);
    var name = req.files.upload.name;
    let parsedName = path.parse(name).name;
    let checkedNew = parsedName.concat(rand);
    const filePath = path.join(
      __dirname,
      "../../public",
      "files",
      checkedNew + "." + `${ext}`
    );
    //console.log("The File path is ", filePath)

    filer.mv(filePath, (err) => {
      if (err) {return res.status(500).send(err);}
      // res.redirect('/')
    });
    let updatedFile = {
      type: req.body.type,
      title: req.body.title,
      description: req.body.description,
      url: filePath,
    };


    const [updated] = await File.update(updatedFile, {
        where: { id },
    });

    if (updated) {
      const updatedData = await File.findOne({ where: { id } });
      return res.apiSuccess({
        data: updatedData
      });
    }

  } catch (error) {
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
