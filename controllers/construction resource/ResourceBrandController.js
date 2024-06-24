const { ResourceBrand, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const { deleteRecord } = require("../utils/format-helper");
const paginationHelper = require("../utils/pagination-helper");
const dotenv = require("dotenv");
dotenv.config();
let self = {};
const path = require("path");
const fs = require("fs");
const prePath = path.join(__dirname, "..", "..", "public");

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ResourceBrand, req);

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
  try {
    let id = req.params.id;
    let data = await ResourceBrand.findOne({
      where: {
        id: id,
      },
    });
    data.image = data.image.substr(data.image.lastIndexOf("/") + 1);

    res.apiSuccess({
      data: data,
      total: 1 // Assuming a single user is being returned
    });
  } catch (error) {
    res.apiError(error);
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

  if (order === null) {
    order = process.env.order;
  }

  try {
    const { count, rows } = await ResourceBrand.findAndCountAll({
      limit,
      offset,
      where: { resource_id: id },
      order: [["created_at", order]],
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
    res.apiError(error);
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
    let pat;
    if (file) {
      const ext = req.files.image.mimetype.split("/")[1];
      let rand = Math.floor(100000 + Math.random() * 900000);
      var name = req.files.image.name;
      let parsedName = path.parse(name).name;
      let checkedNew = parsedName.concat(rand);
      const filePath = path.join(
        __dirname,
        "../../public",
        "images/ResourceBrand",
        checkedNew + "." + `${ext}`
      );
      var filePathh = filePath.split("public").pop();
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
            if (err) {return res.status(500).send(err);}
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

self.delete = async (req, res) => {
  deleteRecord(ResourceBrand, req, res);
};

module.exports = self;
