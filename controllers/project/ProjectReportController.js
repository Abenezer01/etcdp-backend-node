const {
    projectreport,
    projectplan,
    file,
    monthlyreport,
    Sequelize
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require('dotenv');
dotenv.config();
let self = {};

self.getAll = async(req, res) => {
    let { page, size, order } = req.query;
    if (page == null && size == null) {
        page = process.env.page,
            size = process.env.size
    }
    if (order == null) {
        order = process.env.order
    }
    const { limit, offset } = paginate.getPagination(page, size);
    projectreport.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            include: ["projectplan"]
        })
        .then(data => {
            const response = paginate.getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
}


self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await projectreport.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: (data) ? data : {}
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.getByProjectId = async(req, res) => {
    let id = req.params.id
    let { page, size, order } = req.query;
    //console.log("The page", page, size)
    if (page == null && size == null) {
        page = process.env.page,
            size = process.env.size
    }
    if (order == null) {
        order = process.env.order
    }
    const { limit, offset } = paginate.getPagination(page, size);
    projectreport.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', 'ASC']
            ],
            where: {
                project_id: id
            },
            include: {
                model: file,
                as: "file"
            }

        })
        .then(data => {

            const response = paginate.getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
}
self.getByProjectIdAndPopulate = async(req, res) => {
    const { id } = req.params;
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);
    try {
        const data = await projectreport.findAndCountAll({
            limit,
            offset,
            where: { project_id: id },
            order: [
                ['createdAt', order]
            ],

            include: ["projectplan"]
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
            console.log("Parse", Number(item.projectplan.sub_total_expense))
                //Report
            totalReportProfitOrLoss += Number(item.profit_or_loss)
            totalReportProjectExpense += Number(item.projectexpense)
            totalReportSubtotalExpense += Number(item.sub_total_expense)
            totalReportManPower += item.manpower
            totalReportDirectLabour += item.direct_labour
            totalReportIndirectLabour += item.indirect_labour
            totalReportMaterial += item.material
            totalReportMachinery += item.machinery
            totalReportOtherExpense += item.other_expense
            totalReportSubContractorCost += item.sub_contractor_cost
            totalReportFinancialPerformance += item.financial_performance
            totalReportPhysicalPerformance += item.physical_performance
            totalReportCostDueToRework += item.cost_due_to_rework
            totalReportoverHeadCost += item.over_head_cost
                //Plan
            totalPlanProfitOrLoss += item.projectplan.profit_or_loss
            totalPlanProjectExpense += item.projectplan.projectexpense
            totalPlanSubtotalExpense += Number(item.projectplan.sub_total_expense)
            totalPlanManPower += item.projectplan.manpower
            totalPlanDirectLabour += item.projectplan.direct_labour
            totalPlanIndirectLabour += item.projectplan.indirect_labour
            totalPlanMaterial += item.projectplan.material
            totalPlanMachinery += item.projectplan.machinery
            totalPlanOtherExpense += item.projectplan.other_expense
            totalPlanSubContractorCost += item.projectplan.sub_contractor_cost
            totalPlanFinancialPerformance += item.projectplan.financial_performance
            totalPlanPhysicalPerformance += item.projectplan.physical_performance
            totalPlanCostDueToRework += item.projectplan.cost_due_to_rework
            totalPlanoverHeadCost += item.projectplan.over_head_cost
        });
        //return res.send(totalProfitOrLoss)
        // arr.forEach((item) => {
        //     totalReportProfitOrLoss += item.ProfitOrLoss
        // });
        // return res.send(arr)
        // const newData = rows.map(item => ({...item}));


        const response = {
            "Report": {
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
                totalOverHeadCost: totalReportoverHeadCost
            },
            "Plan": {
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
                totalOverHeadCost: totalPlanoverHeadCost
            }
        }

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving data.',
        });
    }
}
self.getByMonthlyId = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await projectreport.findOne({
            where: {
                monthlyreport_id: id,
            }
        });
        return res.status(200).json({
            data: (data) ? data : {}
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await projectreport.findAll({
            where: {
                name: {
                    [Op.like]: "%" + text + "%"
                }
            }
        });
        return res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.save = async(req, res) => {
    try {
        let usr = await usrData.userData(req, res)
        let body = req.body;
        var date = new Date(body.start);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        body.end = lastDay
        if (usr) {
            let plan = await projectplan.findOne({
                where: {
                    id: body.projectplan_id
                }
            })
            if (!plan) {
                return res.status(409).json({
                    message: "Plan doesn't exist!"
                })
            }
            let data = await projectreport.create(body);

            if (data) {
                let usrID = usr.usrID
                await saveActionState(data.id, "projectreport", "REGISTER", usrID, req, res)
            }
            return res.json(data)
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.update = async(req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await projectreport.update(body, {
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: "Success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await projectreport.destroy({
            where: {
                id: id
            }
        });
        return res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.getMonthlyProjectReport = async(req, res) => {
    let id = req.params.id
    let year = req.params.year
    let quarter = req.params.quarter

    try {
        let data = null
        let report = null
        let usr = await usrData.userData(req, res)

        let plan = await projectplan.findOne({
            where: {
                project_id: id,
                year: year,
                quarter: quarter
            },
            include: {
                model: file,
                as: "file"
            }
        })


        
      
        if (!plan) {
            return res.status(404).json({
                message: "There is no plan data"
            })
        } else {
           

            data = await monthlyreport.findOne({
                where: {
                    project_id: id,
                    year: year,
                    quarter: quarter
                }
            })


            if (!data) {


                data = await monthlyreport.create({
                    project_id: id,
                    year: year,
                    quarter: quarter
                })

                report = await projectreport.findOne({
                    where: {
                        projectplan_id: data.id
                    }
                })


                await saveActionState(data.id, "monthlyreport", "REGISTER", usr.usrID, req, res)
            }

            report = await projectreport.findOne({
                where: {
                    projectplan_id: plan.id
                },
                include: {
                    model: file,
                    as: "file"
                }
            })


            return res.json({
                data,
                plan,
                report
            })
        }




    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


module.exports = self;