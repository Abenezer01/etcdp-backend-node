const {
  ProjectReport,
  ProjectPlan,
  File,
  MonthlyReport,
  Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, updateRecord, deleteRecord } = require("../utils/format-helper");
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
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(ProjectPlan, req, res);
};

self.getByProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { project_id: id };

    const includeOptions = [
      { model: File, as: "file" } // Example association
    ];
   

    const paginatedResult = await paginationHelper(ProjectReport, req, whereCondition, includeOptions);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
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

      include: ["projectplan"],
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
    // let arr = [];
    
    data.rows.forEach((item) => {
      // console.log("Parse", Number(item.ProjectPlan.sub_total_expense));
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
      totalPlanProfitOrLoss += item.projectplan.profit_or_loss;
      totalPlanProjectExpense += item.projectplan.projectexpense;
      totalPlanSubtotalExpense += Number(item.projectplan.sub_total_expense);
      totalPlanManPower += item.projectplan.manpower;
      totalPlanDirectLabour += item.projectplan.direct_labour;
      totalPlanIndirectLabour += item.projectplan.indirect_labour;
      totalPlanMaterial += item.projectplan.material;
      totalPlanMachinery += item.projectplan.machinery;
      totalPlanOtherExpense += item.projectplan.other_expense;
      totalPlanSubContractorCost += item.projectplan.sub_contractor_cost;
      totalPlanFinancialPerformance += item.projectplan.financial_performance;
      totalPlanPhysicalPerformance += item.projectplan.physical_performance;
      totalPlanCostDueToRework += item.projectplan.cost_due_to_rework;
      totalPlanoverHeadCost += item.projectplan.over_head_cost;
    });

    const response = {
      report: {
        total_profit_or_loss: totalReportProfitOrLoss,
        total_project_expense: totalReportProjectExpense,
        total_subtotal_expense: totalReportSubtotalExpense,
        total_man_power: totalReportManPower,
        total_direct_labour: totalReportDirectLabour,
        total_indirect_labour: totalReportIndirectLabour,
        total_material: totalReportMaterial,
        total_machinery: totalReportMachinery,
        total_other_expense: totalReportOtherExpense,
        total_sub_contractor_cost: totalReportSubContractorCost,
        total_financial_performance: totalReportFinancialPerformance,
        total_physical_performance: totalReportPhysicalPerformance,
        total_cost_due_to_rework: totalReportCostDueToRework,
        total_over_head_cost: totalReportoverHeadCost,
      },
      plan: {
        total_profit_or_loss: totalPlanProfitOrLoss,
        total_project_expense: totalPlanProjectExpense,
        total_subtotal_expense: totalPlanSubtotalExpense,
        total_man_power: totalPlanManPower,
        total_direct_labour: totalPlanDirectLabour,
        total_indirect_labour: totalPlanIndirectLabour,
        total_material: totalPlanMaterial,
        total_machinery: totalPlanMachinery,
        total_other_expense: totalPlanOtherExpense,
        total_sub_contractor_cost: totalPlanSubContractorCost,
        total_financial_performance: totalPlanFinancialPerformance,
        total_physical_performance: totalPlanPhysicalPerformance,
        total_cost_due_to_rework: totalPlanCostDueToRework,
        total_over_head_cost: totalPlanoverHeadCost,
      },
    };
    

    return res.apiSuccess({data: response});
  } catch (error) {
    return res.apiError({
      error: error.message
    })
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
    let usrID = usr.usrID;
    let body = req.body;

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

      body.type = plan.type;
      body.year = plan.year;
      body.quarter = plan.quarter
      body.start = plan.start;
      body.end = plan.end
    
      let data = await ProjectReport.create(body);

      if (data) {
        
        await actionHelper.saveActionState(
          data.id,
          "ProjectReport",
          "REGISTER",
          usrID,
          req,
          res
        );

        if(body.file_ids){
          let fle = await File.findAll({
            where: {
              id: {
                [Sequelize.Op.in]: body.file_ids,
              },
            },
            raw: true,
          });
          
          if(fle){

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
              let f = await File.create(data);
              await actionHelper.saveActionState(
                f.id,
                "file",
                "REGISTER",
                usrID,
                req,
                res
              );
            }
          }
        }
      }

      return res.apiSuccess({data});
    }
  } catch (error) {
    res.apiError(error);
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
  let {year, quarter} = req.query.filter;

  try {
    let data = null;
    let report = null;
    let usr = await usrData.userData(req, res);

    let plan = await ProjectPlan.findOne({
      where: {
        project_id: id,
        year, year,
        quarter: quarter
      },
      include: {
        model: File,
        as: "file",
      }
    });

    if (!plan) {

        const errorResponse = {
          _links: {
            previousPage: null,
            nextPage: null
          },
          _warning: [],
          payload: [],
          _attributes: {},
          _errors: {
            message: ["There is no Plan data"]
          },
          _generated: new Date().toISOString()
        };
        return res.status(404).json(errorResponse);
    
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
          model: File,
          as: "file",
        },
      });

      return res.apiSuccess({data: {data, plan, report}})
    }
  } catch (error) {
    return res.apiError(error);
  }
};

self.getProjectYearlyReports = async (req, res) => {
  const { id, year } = req.params;
  try {
    const whereCondition = { 
      project_id: id,
      year: year
     };

    const includeOptions = [
      { model: File, as: "file" } // Example association
    ];
  
    const paginatedResult = await paginationHelper(ProjectReport, req, whereCondition, includeOptions);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};


// get project reports by project plan id 


module.exports = self;
