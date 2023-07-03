const { projectplan, file, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { rows, count } = await projectplan.findAndCountAll({
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
self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);
  try {
    const data = await projectplan.findAndCountAll({
      limit,
      offset,
      where: { project_id: id },
      order: [["createdAt", order]],
    });
    // console.log("The data", data.rows);
    // let planID = [];
    // for (let l of data.rows) {
    //   planID.push(l.id);
    // }
    // let fle = await file.findAll({
    //   where: {
    //     reference_id: {
    //       [Sequelize.Op.in]: planID,
    //     },
    //   },
    //   raw: true,
    // });
    // const finalResult = data.rows.map((aElement) => {
    //   const matchingBElements = fle.filter(
    //     (bElement) => bElement.reference_id === aElement.id
    //   );

    //   if (matchingBElements.length > 0) {
    //     return {
    //       ...aElement.dataValues,
    //       file: matchingBElements,
    //     };
    //   }

    //   return aElement;
    // });

    // return res.json(finalResult);
    const response = paginate.getPagingData(data, page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await projectplan.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: data ? data : {},
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
    let data = await projectplan.findAll({
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
    let found  = await projectplan.findOne({
      where: {
        project_id: body.project_id,
        year: body.year,
        quarter: body.quarter
      }
    })


    if(found) {
      return res.status(422).json({
        message: "Plan aready exist!"
      })
    }

    var date = new Date(body.start);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    body.end = lastDay;
    

    if (usr) {
     
      let data = await projectplan.create(body);

      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "projectplan",
          "REGISTER",
          usrID,
          req,
          res
        );
      }
      let fle = await file.findAll({
        where: {
          id: {
            [Sequelize.Op.in]: body.file_ids,
          },
        },
        raw: true,
      });
      console.log("The fle", body.file_type);
      const fileData = fle.map((f) => ({
        reference_id: data.id,
        title: f.title,
        url: f.url,
        type: body.file_type,
        description: f.description,
        extension: f.extension,
        size: f.size,
      }));
      //return res.send(fileData);
      for (const dataa of fileData) {
        let f = await file.create(dataa);
        await actionHelper.saveActionState(
          f.id,
          "file",
          "REGISTER",
          usrID,
          req,
          res
        );
      }

      //console.log("The ll", ll);
      return res.json(data);
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
    let data = await projectplan.update(body, {
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

self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await projectplan.destroy({
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

self.getProjectYearlyPlans = async (req, res) => {
  const { id, year } = req.params;
  try {
    let plans = await projectplan.findAll({
      where: {
        project_id: id,
        year: year,
      },
      include: {
        model: file,
        as: "file",
      },
    });

    return res.json(plans);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = self;
