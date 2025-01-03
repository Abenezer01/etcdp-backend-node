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
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {

    const whereCondition = { };

    const includeOptions = [
      { 
        model: StakeholderStudyField, 
        as: "stakeholderstudyfield",
        include: [
          {
            model: StudyField,
            as: "studyfield"
          }, 
        ]
      },
    ];
    const paginatedResult = await paginationHelper(StudyPeriodCost, req, whereCondition, includeOptions);

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
  page === -1 ? (limiter = {}) : limiter;
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
      let arr = [];
      for (let dat of data.rows) {
        const studyData = await StudyField.findOne({
          where: {
            id: dat.stakestudyfield.studyfield_id,
          },
        });

        if (studyData) {
          arr.push({ StudyField: studyData.dataValues, ...dat.dataValues });
        }
      }
      let newData = await Promise.all(
        arr.map(async (item) => {
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
    const whereCondition = { study_program_id: id };
    const paginatedResult = await paginationHelper(StudyPeriodCost, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
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
    saveRecord(StudyPeriodCost, req, res);
};


self.update = async (req, res) => {
  updateRecord(StudyPeriodCost, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(StudyPeriodCost, req, res);
};

module.exports = self;
