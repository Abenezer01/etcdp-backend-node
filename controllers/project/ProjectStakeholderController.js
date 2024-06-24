const {
  ProjectStakeholder,
  Stakeholder,
  ProjectReport,
  ProjectPlan,
  Project,
  ProjectTime,
  Sequelize,
} = require("../../models");
const moment = require("moment");
const cipherHelper = require("../utils/cipher-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");

const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ProjectStakeholder, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id };

    const includeOptions = [
      { model: Stakeholder, as: "stakeholder" } // Example association
    ];
   
    const paginatedResult = await paginationHelper(ProjectStakeholder, req, whereCondition, includeOptions);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};



self.getByStakeholderId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ProjectStakeholder.findAll({
      where: { stakeholder_id: id },
      raw: true,
    });
    let uf = [];
    for (const item of data) {
      const projectID = item.project_id;
      if (projectID) {
        uf.push(projectID);
      }
    }

    let reportData = await ProjectReport.findAll({
      where: {
        project_id: {
          [Sequelize.Op.in]: uf,
        },
      },
    });
    let planData = await ProjectPlan.findAll({
      where: {
        project_id: {
          [Sequelize.Op.in]: uf,
        },
      },
    });
    const groupedReportData = reportData.reduce((acc, item) => {
      const { project_id, financial_performance, project_expense } = item;
      acc[project_id] = acc[project_id] || {
        project_id,
        financial_performance: 0,
        project_expense: 0,
      };
      acc[project_id].financial_performance += financial_performance;
      acc[project_id].project_expense += project_expense;
      return acc;
    }, {});
  
    const groupedPlanData = planData.reduce((acc, item) => {
      const { project_id, financial_performance, project_expense } = item;
      acc[project_id] = acc[project_id] || {
        project_id,
        financial_performance: 0,
        project_expense: 0,
      };
      acc[project_id].financial_performance += financial_performance;
      acc[project_id].project_expense += project_expense;
      return acc;
    }, {});
   
    const reportResult = Object.values(groupedReportData);
    const planResult = Object.values(groupedPlanData);
    
    const result = reportResult.map((reportItem) => {
      const planItem = planResult.find(
        (item) => item.project_id === reportItem.project_id
      );
      if (planItem) {
        const sv =
          reportItem.financial_performance - planItem.financial_performance;
        const cv =
          reportItem.financial_performance - reportItem.project_expense;
        const cpi =
          reportItem.project_expense !== 0
            ? (reportItem.financial_performance / reportItem.project_expense) *
            100
            : 0;
        const spi =
          planItem.financial_performance !== 0
            ? (reportItem.financial_performance /
              planItem.financial_performance) *
            100
            : 0;

        return {
          project_id: reportItem.project_id,
          sv: sv,
          cv: cv,
          cpi: cpi,
          spi: spi,
        };
      }
    });
   
    const filteredResult = result.filter((item) => item);
   // return res.json(filteredResult)
    const {
      page = process.env.page,
      size = process.env.size,
      order = process.env.order,
    } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);

    const projectData = await Project.findAndCountAll({
      limit,
      offset,
      where: {
        id: {
          [Sequelize.Op.in]: uf,
        },
      },
      order: [["created_at", order]],
      raw: true,
    });


    // return res.json(final)
    const projectTimeData = await ProjectTime.findAll({
      where: {
        project_id: {
          [Sequelize.Op.in]: uf,
        },
      },
      raw: true,
    });

    const finResult = projectData.rows.map((aElement) => {
      const matchingBElement = filteredResult.find(
        (bElement) => bElement.project_id === aElement.id
      );
      if (matchingBElement) {
        return {
          ...aElement,
          cv: matchingBElement.cv,
          sv: matchingBElement.sv,
          cpi: matchingBElement.cpi,
          spi: matchingBElement.spi,
        };
      }
      return aElement;
    });
    const finalResult = finResult.map((aElement) => {
      const matchingBElement = projectTimeData.find(
        (bElement) => bElement.project_id === aElement.id
      );

      if (matchingBElement) {
        //console.log("the matching", matchingBElement.original_contract_duration)
        // console.log(
        //   "The total date",
        //   moment().diff(matchingBElement.commencement_date, "days")
        // );
        //moment().diff(commencement, 'days') / contract_duration * 100
        return {
          ...aElement,
          name: cipherHelper.decrypt(aElement.name),
          used_time:
            (moment().diff(matchingBElement.commencement_date, "days") /
              matchingBElement.original_contract_duration) *
            100,
        };
      }
      return aElement;
    });

    const response = paginate.getPagingData(
      { rows: finalResult, count: projectData.count },
      page,
      limit
    );

    res.send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  }
};

self.get = async (req, res) => {
  getRecordById(ProjectStakeholder, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await ProjectStakeholder.findAll({
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
  saveRecord(ProjectStakeholder, req, res);
};

self.update = async (req, res) => {
  updateRecord(ProjectStakeholder, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProjectStakeholder, req, res);
};

module.exports = self;
