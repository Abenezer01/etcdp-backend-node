const { address, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
  try {
    let data = await address.findAll();
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.getWithItems = async (req, res) => {
  try {
    let data = await address.findAll({
      attributes: ["id", "name"],
      // include:[
      // 	{
      // 		model:item,
      // 		as:'items',
      // 		attributes:["id","name","price","stock"]
      // 	}
      // ]
    });
    return res.json({
      status: "ok",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error,
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await address.findOne({
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
self.getAddressByModelId = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await address.findAll({
      where: {
        model_id: id,
      },
      order: [["hq", "DESC"]],
    });
    let arr = [];
    for (i = 0; i < data.length; i++) {
      if (data[i].hq == true) {
        data[0] = data[i];
      }
    }
    return res.status(200).json(data ? data : []);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await address.findAll({
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
    let model_id = body.model_id;
    if (usr) {
      let usrID = usr.usrID;
      let hqData = await address.findAll({
        where: {
          model_id: model_id,
          hq: true,
        },
      });
      console.log("The hq data", hqData);
      if (!hqData.length) {
        body.hq = true;
        let hqBod = await address.create(body);
        if (hqBod) {
          await actionHelper.saveActionState(
            hqBod.id,
            "address",
            "REGISTER",
            usrID,
            req,
            res
          );
          return res.status(200).json({
            data: hqBod,
          });
        }
      }
      body.hq = false;
      let data = await address.create(body);
      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "address",
          "REGISTER",
          usrID,
          req,
          res
        );
        return res.json(data);
      }
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.update = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await address.update(body, {
      where: {
        id: id,
      },
    });
    return res.status(200).json({ message: "Address updated successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await address.destroy({
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
