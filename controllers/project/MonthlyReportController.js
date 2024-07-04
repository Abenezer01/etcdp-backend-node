const { ProjectPlan, MonthlyReport } = require("./../../models");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, updateRecord, deleteRecord } = require("../utils/format-helper");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");


let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(MonthlyReport, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.get = async(req, res) => {
    getRecordById(MonthlyReport, req, res);
};

self.save = async(req, res) => {
    try {
        let body = req.body;

        let existing = await MonthlyReport.findOne({
            where: {
                project_id: body.project_id,
                year: body.year,
                quarter: body.quarter,
                is_submitted: false,
            },
        });

        if (existing) {
            return res.status(302).json({
                message: "Data already found!",
            });
        } else {
            let data = await MonthlyReport.create(body);
            if (data) {
                let usr = await usrData.userData(req, res);
                if (usr) {
                    await actionHelper.saveActionState(
                        data.id,
                        "MonthlyReport",
                        "REGISTER",
                        usr.usrID,
                        req,
                        res
                    );
                }
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
    updateRecord(MonthlyReport, req, res);
};
  
self.delete = async (req, res) => {
    deleteRecord(MonthlyReport, req, res);
};

self.getMonthlyProjectReport = async(req, res) => {
    let id = req.params.id;
    let year = req.params.year;
    let quarter = req.params.quarter;

    try {
        let data = null;

        let plan = await ProjectPlan.findOne({
            where: {
                project_id: id,
                year: year,
                quarter: quarter,
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
                let us = req.decoded;

                await actionHelper.saveActionState(
                    data.id,
                    "MonthlyReport",
                    "REGISTER",
                    us.id,
                    req,
                    res
                );
            }

            return res.apiSuccess({
                data: data
            });
        }
    } catch (error) {
        return res.apiError(error);
    }
};

module.exports = self;