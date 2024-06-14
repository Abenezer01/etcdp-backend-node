const {
  ProjectReport,
  ProjectPlan,
  File,
  MonthlyReport,
  Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(ProjectReport, req);

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
  getRecordById(ProjectPlan, req, res);
};

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id }

    const includeOptions = [
      { model: File, as: 'file' } // Example association
    ];
   

    const paginatedResult = await paginationHelper(ProjectReport, req, whereCondition, includeOptions);

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

self.getByProjectIdAndPopulate = async (req, res) => {
  const { id } = req.params;
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);
  try {
    const data = await ProjectReport.findAndCountAll({
      limit,
      offset,
      where: { project_id: id },
      order: [["created_at", order]],

      include: ["ProjectPlan"],
    });
    let totalReportProfitOrLoss = 0;
    let totalReportProjectExpense = 0;
    let totalReportSubtotalExpense = 0;
    let totalReportManPower = 0;
    let totalReportDirectLabour = 0;
    let totalReportIndirectLabour = 0;
    let totalReportMaterial = 0;
    let totalReportMachinery = 0;
    let totalReportOtherExpense = 0;
    let totalReportSubContractorCost = 0;
    let totalReportFinancialPerformance = 0;
    let totalReportPhysicalPerformance = 0;
    let totalReportCostDueToRework = 0;
    let totalReportoverHeadCost = 0;

    //Plan
    let totalPlanProfitOrLoss = 0;
    let totalPlanProjectExpense = 0;
    let totalPlanSubtotalExpense = 0;
    let totalPlanManPower = 0;
    let totalPlanDirectLabour = 0;
    let totalPlanIndirectLabour = 0;
    let totalPlanMaterial = 0;
    let totalPlanMachinery = 0;
    let totalPlanOtherExpense = 0;
    let totalPlanSubContractorCost = 0;
    let totalPlanFinancialPerformance = 0;
    let totalPlanPhysicalPerformance = 0;
    let totalPlanCostDueToRework = 0;
    let totalPlanoverHeadCost = 0;
    let arr = [];

    data.rows.forEach((item) => {
      console.log("Parse", Number(item.ProjectPlan.sub_total_expense));
      //Report
      totalReportProfitOrLoss += Number(item.profit_or_loss);
      totalReportProjectExpense += Number(item.projectexpense);
      totalReportSubtotalExpense += Number(item.sub_total_expense);
      totalReportManPower += item.manpower;
      totalReportDirectLabour += item.direct_labour;
      totalReportIndirectLabour += item.indirect_labour;
      totalReportMaterial += item.material;
      totalReportMachinery += item.machinery;
      totalReportOtherExpense += item.other_expense;
      totalReportSubContractorCost += item.sub_contractor_cost;
      totalReportFinancialPerformance += item.financial_performance;
      totalReportPhysicalPerformance += item.physical_performance;
      totalReportCostDueToRework += item.cost_due_to_rework;
      totalReportoverHeadCost += item.over_head_cost;
      //Plan
      totalPlanProfitOrLoss += item.ProjectPlan.profit_or_loss;
      totalPlanProjectExpense += item.ProjectPlan.projectexpense;
      totalPlanSubtotalExpense += Number(item.ProjectPlan.sub_total_expense);
      totalPlanManPower += item.ProjectPlan.manpower;
      totalPlanDirectLabour += item.ProjectPlan.direct_labour;
      totalPlanIndirectLabour += item.ProjectPlan.indirect_labour;
      totalPlanMaterial += item.ProjectPlan.material;
      totalPlanMachinery += item.ProjectPlan.machinery;
      totalPlanOtherExpense += item.ProjectPlan.other_expense;
      totalPlanSubContractorCost += item.ProjectPlan.sub_contractor_cost;
      totalPlanFinancialPerformance += item.ProjectPlan.financial_performance;
      totalPlanPhysicalPerformance += item.ProjectPlan.physical_performance;
      totalPlanCostDueToRework += item.ProjectPlan.cost_due_to_rework;
      totalPlanoverHeadCost += item.ProjectPlan.over_head_cost;
    });
    //return res.send(totalProfitOrLoss)
    // arr.forEach((item) => {
    //     totalReportProfitOrLoss += item.ProfitOrLoss
    // });
    // return res.send(arr)
    // const newData = rows.map(item => ({...item}));

    const response = {
      Report: {
        totalProfitOrLoss: totalReportProfitOrLoss,
        totalProjectExpense: totalReportProjectExpense,
        totalSubtotalExpense: totalReportSubtotalExpense,
        totalManPower: totalReportManPower,
        totalDirectLabour: totalReportDirectLabour,
        totalIndirectLabour: totalReportIndirectLabour,
        totalMaterial: totalReportMaterial,
        totalMachinery: totalReportMachinery,
        totalOtherExpense: totalReportOtherExpense,
        totalSubContractorCost: totalReportSubContractorCost,
        totalFinancialPerformance: totalReportFinancialPerformance,
        totalPhysicalPerformance: totalReportPhysicalPerformance,
        totalCostDueToWork: totalReportCostDueToRework,
        totalOverHeadCost: totalReportoverHeadCost,
      },
      Plan: {
        totalProfitOrLoss: totalPlanProfitOrLoss,
        totalProjectExpense: totalPlanProjectExpense,
        totalPlanSubtotalExpense: totalPlanSubtotalExpense,
        totalManPower: totalPlanManPower,
        totalDirectLabour: totalPlanDirectLabour,
        totalIndirectLabour: totalPlanIndirectLabour,
        totalMaterial: totalPlanMaterial,
        totalMachinery: totalPlanMachinery,
        totalOtherExpense: totalPlanOtherExpense,
        totalSubContractorCost: totalPlanSubContractorCost,
        totalFinancialPerformance: totalPlanFinancialPerformance,
        totalPhysicalPerformance: totalPlanPhysicalPerformance,
        totalCostDueToWork: totalPlanCostDueToRework,
        totalOverHeadCost: totalPlanoverHeadCost,
      },
    };

    res.send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  }
};
self.getByMonthlyId = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ProjectReport.findOne({
      where: {
        monthlyreport_id: id,
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
    let data = await ProjectReport.findAll({
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
    var date = new Date(body.start);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    body.end = lastDay;
    if (usr) {
      let plan = await ProjectPlan.findOne({
        where: {
          id: body.projectplan_id,
        },
      });
      if (!plan) {
        return res.status(409).json({
          message: "Plan doesn't exist!",
        });
      }
      let data = await ProjectReport.create(body);

      if (data) {
        let usrID = usr.usrID;
        await actionHelper.saveActionState(
          data.id,
          "ProjectReport",
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
      const fileData = fle.map((f) => ({
        reference_id: data.id,
        title: f.title,
        url: f.url,
        type: body.file_type,
        description: f.description,
        extension: f.extension,
        size: f.size,
      }));

      for (const data of fileData) {
        let f = await file.create(data);
        await actionHelper.saveActionState(
          f.id,
          "file",
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
  updateRecord(ProjectReport, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(ProjectReport, req, res);
};

self.getMonthlyProjectReport = async (req, res) => {
  let id = req.params.id;
  let year = req.params.year;
  let quarter = req.params.quarter;

  try {
    let data = null;
    let report = null;
    let usr = await usrData.userData(req, res);

    let plan = await ProjectPlan.findOne({
      where: {
        project_id: id,
        year: year,
        quarter: quarter,
      },
      include: {
        model: file,
        as: "file",
      },
    });

    if (!plan) {
      return res.status(404).json({
        message: "There is no plan data",
      });
    } else {
      data = await MonthlyReport.findOne({
        where: {
          project_id: id,
          year: year,
          quarter: quarter,
        },
      });

      if (!data) {
        data = await MonthlyReport.create({
          project_id: id,
          year: year,
          quarter: quarter,
        });

        report = await ProjectReport.findOne({
          where: {
            projectplan_id: data.id,
          },
        });

        await actionHelper.saveActionState(
          data.id,
          "MonthlyReport",
          "REGISTER",
          usr.usrID,
          req,
          res
        );
      }

      report = await ProjectReport.findOne({
        where: {
          projectplan_id: plan.id,
        },
        include: {
          model: file,
          as: "file",
        },
      });

      return res.json({
        data,
        plan,
        report,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.getProjectYearlyReports = async (req, res) => {
  const { id, year } = req.params;
  try {
    let reports = await ProjectReport.findAll({
      where: {
        project_id: id,
        year: year,
      },
      include: {
        model: file,
        as: "file",
      },
    });

    return res.json(reports);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = self;
