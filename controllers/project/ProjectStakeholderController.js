const {
  projectstakeholder,
  stakeholder,
  projectreport,
  projectplan,
  project,
  projecttime,
  Sequelize,
} = require("../../models");
const moment = require("moment");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
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
    const { rows, count } = await projectstakeholder.findAndCountAll({
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
      message: "An error occurred while retrieving data.",
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
    const data = await projectstakeholder.findAndCountAll({
      limit,
      offset,
      where: { project_id: id },
      order: [["createdAt", order]],
      include: { model: stakeholder, as: "stakeholder" },
    });

    const response = paginate.getPagingData(data, page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  }
};

self.getByStakeholderId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await projectstakeholder.findAll({
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

    let reportData = await projectreport.findAll({
      where: {
        project_id: {
          [Sequelize.Op.in]: uf,
        },
      },
    });
    let planData = await projectplan.findAll({
      where: {
        project_id: {
          [Sequelize.Op.in]: uf,
        },
      },
    });
    const groupedReportData = reportData.reduce((acc, item) => {
      const { project_id, financial_performance, project_expense, type } = item;
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

    const {
      page = process.env.page,
      size = process.env.size,
      order = process.env.order,
    } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);

    const projectData = await project.findAndCountAll({
      limit,
      offset,
      where: {
        id: {
          [Sequelize.Op.in]: uf,
        },
      },
      order: [["createdAt", order]],
      raw: true,
    });
    const projectTimeData = await projecttime.findAll({
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
        console.log(
          "The total date",
          moment().diff(matchingBElement.commencement_date, "days")
        );
        //moment().diff(commencement, 'days') / contract_duration * 100
        return {
          ...aElement,
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
  try {
    let id = req.params.id;
    let data = await projectstakeholder.findOne({
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
    let data = await projectstakeholder.findAll({
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
    if (usr) {
      let data = await projectstakeholder.create(body);
      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "projectstakeholder",
          "REGISTER",
          usrID,
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

self.update = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await projectstakeholder.update(body, {
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
    let data = await projectstakeholder.destroy({
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
