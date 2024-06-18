const {
  StudyPeriodCost,
  StakeholderStudyField,
  StudyField,
  Sequelize,
} = require("../../models");
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require("../../utils/helper");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StudyPeriodCost, req);

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
  getRecordById(StudyPeriodCost, req, res);
};
//include: ["StudyField", "studyprogram", "studylevel"],

self.getByHigherInstituteId = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;
  const { id } = req.params;
  const { limit, offset } = paginate.getPagination(page, size);
  let limiter = { limit, offset };
  page == -1 ? (limiter = {}) : limiter;
  StudyPeriodCost
    .findAndCountAll({
      limit: limiter.limit,
      offset: limiter.offset,
      order: [["created_at", order]],
      where: {
        higher_institute_id: id,
      },
      include: ["stakestudyfield", "studyprogram", "studylevel"],
    })
    .then(async (data) => {
      console.log("The data", data);
      let arr = [];
      for (let dat of data.rows) {
        //console.log("The id is: ", dat.stakestudyfield.studyfield_id)
        const studyData = await StudyField.findOne({
          where: {
            id: dat.stakestudyfield.studyfield_id,
          },
        });

        if (studyData) {
          //console.log("Study data", {...studyData.dataValues, ...dat.dataValues })
          arr.push({ StudyField: studyData.dataValues, ...dat.dataValues });
        }
      }
      //console.log("The array", arr)
      let newData = await Promise.all(
        arr.map(async (item) => {
          //console.log("The item id", item.dataValues);
          return {
            ...item,
            status: await actionHelper.getAction(item.id),
          };
        })
      );
      const response = paginate.getPagingData(
        { rows: newData, count: data.count },
        page,
        limit
      );
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};

self.getByStudyFieldId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { study_program_id: fieldId }
    const paginatedResult = await paginationHelper(StudyPeriodCost, req, whereCondition);

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

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StudyPeriodCost.findAll({
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

    let body = req.body;

    let studyData = await StakeholderStudyField.findOne({
      where: {
        id: body.stake_study_field_id,
      },
      include: ["StudyField"],
    });

    req.body.studyfield_id = studyData.studyFieldId

    saveRecord(StudyPeriodCost, req, res);
};


self.update = async (req, res) => {
  updateRecord(StudyPeriodCost, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StudyPeriodCost, req, res);
};

module.exports = self;
