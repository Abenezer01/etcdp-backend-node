const {
  Project,
  ProjectStakeholder,
  Stakeholder,
  ProjectTime,
  ProjectFinance,
  ProjectStatus,
  ProjectCategory,
  ProjectSubCategory,
  ProjectType,
  Status,
  ProjectReport,
  ProjectPlan,
  ProjectVariation,
  ProjectBond,
  ProjectExtensionTime,
  Payment,
  sequelize,
  Sequelize,
} = require("./../../models");
const moment = require("moment");
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const cipherHelper = require("../utils/cipher-helper");
const apiHelper = require("../utils/API-helper");
const paginationHelper = require("../utils/pagination-helper");
const { deleteRecord } = require("../utils/format-helper");
const { Socket } = require("../../utils/WebSocket");

let self = {};
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();


self.getAllCPMProject = async(req, res) => {
  try {

    const cpmProjects = await apiHelper.getExternalData("project");
    let projects = await Project.findAll();
    const mergedData = cpmProjects.concat(projects);
    
    return res.apiSuccess({
      data: mergedData
    });


    //Stakeholder
    // const cpmStakeholders = await apiHelper.getExternalData("stakeholder")
    // let stakeholders = await Stakeholder.findAll()
    // const mergedData = cpmStakeholders.concat(stakeholders)

    // return res.json(mergedData)

    //users
    // const cpmUsers = await apiHelper.getExternalData("user")
    // let users = await User.findAll()
    // const mergedData = cpmUsers.concat(users)

    // return res.json(mergedData)

  } catch (error) {
    return res.json({
      message: error.message
    });
  }
};

self.getAll = async (req, res) => {

  try {


    // let x = Socket.emitToUser("userId123", "event_name", { message: "Hello, user!" });

    // return res.json(x);


    const paginatedResult = await paginationHelper(Project, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};
self.getProjectByTypeId = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { projecttype_id, projectcategory_id, projectsubcategory_id } =
    req.body;
  try {
    const filter = [{ projecttype_id: projecttype_id }];
    if (projectcategory_id) {
      filter.push({ projectcategory_id: projectcategory_id });
    }
    if (projectsubcategory_id) {
      filter.push({ projectsubcategory_id: projectsubcategory_id });
    }

    const projectResult = await Project.findAll({
      where: {
        [Op.and]: filter,
      },
      raw: true,
    });

    let uf = [];
    for (const item of projectResult) {
      const projectID = item.id;
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

    let projects = await Promise.all(
      projectData.rows.map(self.getProjectStatus)
    );

    const projectTimeData = await ProjectTime.findAll({
      where: {
        project_id: {
          [Sequelize.Op.in]: uf,
        },
      },
      raw: true,
    });

    const finResult = projects.map((aElement) => {
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
        //moment().diff(commencement, "days") / contract_duration * 100
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

    //decrypt

    let pros = finalResult.map((item) => {
      item.name = cipherHelper.decrypt(item.name);
      return item;
    });
    const response = paginate.getPagingData(
      { rows: pros, count: projectData.count },
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

self.getProjectStatus = async (pro) => {
  const proStatus = await ProjectStatus.findOne({
    order: [["created_at", "DESC"]],
    where: { project_id: pro.id },
  });
  const stat = proStatus
    ? await Status.findOne({ where: { id: proStatus.status_id } })
    : null;
  return { ...pro, status: stat ? stat.title : null };
};

self.getProjectByTypeIdPast = async (req, res) => {

  try {
    const { projecttype_id, projectcategory_id, projectsubcategory_id } =
      req.body;
    const filter = [{ projecttype_id: projecttype_id }];
    if (projectcategory_id) {
      filter.push({ projectcategory_id: projectcategory_id });
    }
    if (projectsubcategory_id) {
      filter.push({ projectsubcategory_id: projectsubcategory_id });
    }

    const whereCondition = { [Op.and]: filter };
    const paginatedResult = await paginationHelper(Project, req, whereCondition);

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
  try {
    const { id } = req.params;

    let data = await Project.findOne({
      where: { id },
      include: [
        {
          model: ProjectCategory,
          as: "ProjectCategory",
          attributes: ["title"],
        },
        { 
          model: ProjectType, 
          as: "ProjectType", 
          attributes: ["title"] },
        {
          model: ProjectSubCategory,
          as: "ProjectSubcategory",
          attributes: ["title"],
        },
      ],
    });

    let stat = await ProjectStatus.findOne({
      order: [["created_at", "DESC"]],
      where: {
        project_id: id,
      },
      include: [{ model: Status, as: "status", attributes: ["title"] }],
    });

    data = data.toJSON();
    data.ProjectStatus = stat;

    return res.apiSuccess({
      data
    });

  } catch (error) {
    res.apiError(error);
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Project.findAll({
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
      let data = await Project.create(body);
      if (data) {
        let usrID = usr.usrID;
        data.department_id = usr.departmentID;
        await data.save();
        await actionHelper.saveActionState(
          data.id,
          "Project",
          "REGISTER",
          usrID,
          req,
          res
        );
        //add status
        let prostatus = await ProjectStatus.create({
          project_id: data.id,
          status_id: body.status_id,
        });
        if (prostatus) {
          await actionHelper.saveActionState(
            prostatus.id,
            "ProjectStatus",
            "REGISTER",
            usrID,
            req,
            res
          );
        }
      }
      
      return res.apiSuccess({
        data
      });
    }
  } catch (error) {
    res.apiError(error);
  }
};
self.update = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    await Project.update(body, {
      where: {
        id: id,
      },
    });

    const proStatus = await ProjectStatus.findOne({
      order: [["created_at", "DESC"]],
      where: { project_id: id },
    });
    let updatedStatus = await ProjectStatus.update(
      { status_id: body.status_id },
      {
        where: {
          id: proStatus.id,
        },
      }
    );

    return res.apiSuccess({
      data: updatedStatus
    });
    
  } catch (error) {
    res.apiError(error);
  }
};



self.delete = async (req, res) => {
  deleteRecord(Project, req, res);
};

self.getProjectDetail = async (req, res) => {
  let id = req.params.id;
  try {
    let [
      clientStake,
      consultantStake,
      contractorStake,
      pro,
      finance,
      time,
      proStatus,
    ] = await Promise.all([
      ProjectStakeholder.findOne({
        where: {
          project_id: id,
          title: "Client",
        },
      }),
      ProjectStakeholder.findOne({
        where: {
          project_id: id,
          title: "Consultant",
        },
      }),
      ProjectStakeholder.findOne({
        where: {
          project_id: id,
          title: "Contractor",
        },
      }),
      Project.findOne({
        where: {
          id: id,
        },
      }),
      ProjectFinance.findOne({
        where: {
          project_id: id,
        },
      }),
      ProjectTime.findOne({
        where: {
          project_id: id,
        },
      }),
      ProjectStatus.findOne({
        where: {
          project_id: id,
        },
      }),
    ]);

    let client = clientStake
      ? await self.getStakeholderName(clientStake.stakeholder_id)
      : null;
    let contractor = contractorStake
      ? await self.getStakeholderName(contractorStake.stakeholder_id)
      : null;
    let consultant = consultantStake
      ? await self.getStakeholderName(consultantStake.stakeholder_id)
      : null;

    let stat = proStatus
      ? await Status.findOne({ where: { id: proStatus.status_id } })
      : null;

    return res.apiSuccess({
      data: {
        project_name: pro ? pro.name : null,
        client,
        contractor,
        consultant,
        main_contract_price_amount: finance
          ? finance.main_contract_price_amount
          : null,
        time: time,
        project_status: stat ? stat.title : null,
      }
    });

  } catch (error) {
    res.apiError(error);
  }
};
self.getStakeholderName = async (id) => {
  try {
    let data = await Stakeholder.findOne({
      where: {
        id: id,
      },
    });

    return data ? data.trade_name : null;
  } catch (error) {
    return error;
  }
};

self.countAllProjectWithProjectCategory = async (req, res) => {
  try {
    let queryString =
      "SELECT projectcategories.title AS category, COALESCE(COUNT(projects.id), 0) AS total FROM projectcategories LEFT JOIN projectholders ON projectcategories.id = projects.projectcategory_id GROUP BY projectcategories.title;";
    let projectData = await sequelize.query(queryString, {
      type: sequelize.QueryTypes.SELECT,
    });

    return res.apiSuccess({
      data: projectData
    });
  } catch (error) {
    res.apiError(error);
  }
};

self.getProjectData = async (req, res) => {
  let id = req.params.id;
  try {
    let [pro, time, finance, clientStake, consultantStake, contractorStake] =
      await Promise.all([
        Project.findOne({
          where: {
            id: id,
          },
        }),
        ProjectTime.findOne({
          where: {
            project_id: id,
          },
        }),
        ProjectFinance.findOne({
          where: {
            project_id: id,
          },
        }),
        ProjectStakeholder.findOne({
          where: {
            project_id: id,
            title: "Client",
          },
        }),
        ProjectStakeholder.findOne({
          where: {
            project_id: id,
            title: "Consultant",
          },
        }),
        ProjectStakeholder.findOne({
          where: {
            project_id: id,
            title: "Contractor",
          },
        }),
      ]);

    let total_contract_price = finance
      ? finance.main_contract_price_amount
      : null;
    //return res.send(finance)
    let commencement_date = time ? time.commencement_date : null;
    let contract_duration = time ? time.original_contract_duration : null;
    let used_time = commencement_date
      ? moment().diff(commencement_date, "days")
      : null;

    let extensions = await ProjectVariation.findAll({
      where: {
        project_id: id,
      },
    });

    let extensionDays = extensions
      ? extensions.reduce((total, item) => total + item.extension_time, 0)
      : null;

    let completion_date = time
      ? moment(time.commencement_date).add(
          contract_duration + extensionDays,
          "days"
        )
      : null;

    let plans = await ProjectPlan.findAll({
      where: {
        project_id: id,
      },
    });

    let reports = await ProjectReport.findAll({
      where: {
        project_id: id,
      },
    });

    let earned_value = reports
      ? reports.reduce((total, item) => total + item.financial_performance, 0)
      : null;

    let actualCost = reports
      ? reports.reduce((total, item) => total + item.project_expense, 0)
      : null;
    let plannedFinance = plans
      ? plans.reduce((total, item) => total + item.financial_performance, 0)
      : null;

    let actualFinance = reports
      ? reports.reduce((total, item) => total + item.financial_performance, 0)
      : null;
    let spi =
      (actualFinance / (plannedFinance === 0 ? 1 : plannedFinance)) * 100;
    let cpi = (actualFinance / (actualCost === 0 ? 1 : actualCost)) * 100;

    let sv = actualFinance - plannedFinance;
    let cv = actualFinance - actualCost;

    let interims = await Payment.findAll({
      where: {
        project_id: id,
        type: "INTERIM_PAYMENT",
      },
    });
    let paid_ipc = interims
      ? interims.reduce((total, item) => total + item.net_payment, 0)
      : null;

    //stakeholders
    let client = clientStake
      ? await self.getStakeholderName(clientStake.stakeholder_id)
      : null;
    let contractor = contractorStake
      ? await self.getStakeholderName(contractorStake.stakeholder_id)
      : null;
    let consultant = consultantStake
      ? await self.getStakeholderName(consultantStake.stakeholder_id)
      : null;

    return res.apiSuccess({
      data: {
        name: pro.name,
        client,
        consultant,
        contractor,
        contract_duration: time ? time.original_contract_duration : null,
        total_contract_amount: total_contract_price,
        commencement_date,
        elapsed_time: used_time,
        completion_date,
        cpi,
        spi,
        cv,
        sv,
        paid_ipc,
        earned_revenue: earned_value,
        planned_revenue: plannedFinance,
        actual_cost: actualCost,
      }
    });
    
  } catch (error) {
    res.apiError(error);
  }
};


self.countAllProjectWithProjectType = async (req, res) => {
  try {
    let queryTypeString =
      "SELECT projecttypes.title AS name,projecttypes.id AS id, COALESCE(COUNT(projects.id), 0) AS total FROM projecttypes LEFT JOIN projects ON projecttypes.id = projects.projecttype_id GROUP BY projecttypes.title;";
    let projectTypeData = await sequelize.query(queryTypeString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let queryCategoryString =
      "SELECT projectcategories.title AS name,projectcategories.projecttype_Id AS typeID,projectcategories.id AS id, COALESCE(COUNT(projects.id), 0) AS total FROM projectcategories LEFT JOIN projects ON projectcategories.id = projects.projectcategory_id GROUP BY projectcategories.title,typeID,id;";
    let projectCategoryData = await sequelize.query(queryCategoryString, {
      type: sequelize.QueryTypes.SELECT,
    });
    let querySubCategoryString =
      "SELECT projectsubcategories.id AS id,projectsubcategories.title AS name,projectsubcategories.projectcategory_id AS category_id, COALESCE(COUNT(projects.id), 0) AS total FROM projectsubcategories LEFT JOIN projects ON projectsubcategories.id = projects.projectsubcategory_id GROUP BY projectsubcategories.title,category_id,id;";
    let projectSubCategoryData = await sequelize.query(querySubCategoryString, {
      type: sequelize.QueryTypes.SELECT,
    });
    const { count } = await Project.findAndCountAll();
    const Result = [];
    //let Result = {};
    const parent = {
      name: "Project",
      id: "382d79ee-2b9d-4919-a7ad-1ada61c1ab28",
      parentNodeId: null,
      total: count,
    };
    Result.push(parent);
    projectTypeData.forEach(objA => {
      const matchingCategories = projectCategoryData.filter(objB => objA.id === objB.typeID);
    
      matchingCategories.forEach(objB => {
        const category = {
          parentNodeId: objA.id,
          id: objB.id,
          name: objB.name,
          total: objB.total,
        };
        Result.push(category);
    
        const matchingSubCategories = projectSubCategoryData.filter(objC => objB.id === objC.category_id);
        matchingSubCategories.forEach(objC => {
          Result.push({
            parentNodeId: objB.id,
            id: objC.id,
            name: objC.name,
            total: objC.total,
          });
        });
      });
    
      const typeNewObj = {
        parentNodeId: parent.id,
        id: objA.id,
        name: objA.name,
        total: objA.total,
      };
      Result.push(typeNewObj);
    });

    return res.apiSuccess({
      data: Result
    });
  } catch (error) {
    res.apiError(error);
  }
};

self.getProjectAnalysis = async (req, res) => {
  let id = req.params.id;

  try {
    let plans = await ProjectPlan.findAll({
      where: {
        project_id: id,
      },
    });
    let reports = await ProjectReport.findAll({
      where: {
        project_id: id,
      },
    });

    let payments = await Payment.findAll({
      where: {
        project_id: id,
        type: "INTERIM_PAYMENT",
      },
    });

    let paid = payments.reduce((total, item) => total + item.amount, 0);

    let time = await ProjectTime.findOne({
      where: {
        project_id: id,
      },
    });

    let extensions = await ProjectExtensionTime.findAll({
      where: {
        project_id: id,
      },
    });
    let extension_days = extensions.reduce(
      (total, item) => total + item.number_of_days,
      0
    );

    let commencement_date = time ? time.commencement_date : null;

    let contract_duration = time ? time.original_contract_duration : null;
    let used_time = moment().diff(commencement_date, "days");

    let all_duration = extension_days + contract_duration;

    let repaid = payments.reduce(
      (total, item) => total + item.advance_repayment,
      0
    );

    let perBond = await ProjectBond.findOne({
      where: {
        project_id: id,
        type: "PERFORMANCE_BOND",
      },
    });

    let advBond = await ProjectBond.findOne({
      where: {
        project_id: id,
        type: "ADVANCE_BOND",
      },
    });

    let bidBond = await ProjectBond.findOne({
      where: {
        project_id: id,
        type: "BID_BOND",
      },
    });

    let performance_bond = null;
    let performanceDay = null;
    let performanceMessage = "";
    let advance_bond = null;
    let advanceMessage = "";
    let advanceDay = null;
    let bid_bond = null;
    let bidMessage = "";
    let bidDay = null;

    if (bidBond) {
      bid_bond = bidBond.amount;

      bidDay = moment().diff(bidBond.expire_date, "days");
      if (bidDay < 0) {
        bidMessage = "danger";
      } else if (bidDay < 40) {
        bidMessage = "warning";
      } else {
        bidMessage = "success";
      }
    }

    let bidStatus = {
      days: bidDay,
      status: bidMessage,
    };

    if (perBond) {
      performance_bond = perBond.amount;

      performanceDay = moment().diff(perBond.expire_date, "days");
      if (performanceDay < 0) {
        performanceMessage = "danger";
      } else if (performanceDay < 40) {
        performanceMessage = "warning";
      } else {
        performanceMessage = "success";
      }
    }

    let performanceStatus = {
      days: performanceDay,
      status: performanceMessage,
    };
    if (advBond) {
      advance_bond = advBond.amount;

      advanceDay = moment().diff(advBond.expire_date, "days");

      if (advanceDay < 0) {
        advanceMessage = "danger";
      } else if (advanceDay < 40) {
        advanceMessage = "warning";
      } else {
        advanceMessage = "success";
      }
    }
    let advanceStatus = {
      days: advanceDay,
      status: advanceMessage,
    };

    let physical = reports.reduce(
      (total, item) => total + item.physical_performance,
      0
    );

    let actualCost = reports.reduce(
      (total, item) => total + item.project_expense,
      0
    );
    let plannedFinance = plans.reduce(
      (total, item) => total + item.financial_performance,
      0
    );

    let actualFinance = reports.reduce(
      (total, item) => total + item.financial_performance,
      0
    );

    let spi =
      (actualFinance / (plannedFinance === 0 ? 1 : plannedFinance)) * 100;
    let cpi = (actualFinance / (actualCost === 0 ? 1 : actualCost)) * 100;

    let sv = actualFinance - plannedFinance;
    let cv = actualFinance - actualCost;

    let financeInfo = await ProjectFinance.findOne({
      where: {
        project_id: id,
      },
    });

    let contractPrice = financeInfo ? financeInfo.price_after_rebate : null;

    let supplementvarations = await ProjectVariation.findAll({
      where: {
        project_id: id,
      },
    });

    let variations = supplementvarations.filter(
      (item) => item.type === "VARIATION"
    );
    let supplements = supplementvarations.filter(
      (item) => item.type === "SUPPLEMENT"
    );
    let omissions = supplementvarations.filter(
      (item) => item.type === "OMISSION"
    );
    let specials = supplementvarations.filter((item) => item.type === "SPECIAL");

    let totalContractAmount =
      contractPrice +
      variations.reduce((total, item) => total + item.value, 0) +
      supplements.reduce((total, item) => total + item.value, 0) +
      specials.reduce((total, item) => total + item.value, 0) -
      omissions.reduce((total, item) => total + item.value, 0);

    
    return res.apiSuccess({
      data: {
        physical,
        financial: actualFinance,
        financial_percent:
          (actualFinance / (totalContractAmount === 0 ? 1 : totalContractAmount)) *
          100,
        paid,
        paid_percent:
          (paid / (totalContractAmount === 0 ? 1 : totalContractAmount)) * 100,
        time: used_time,
        time_percent: (used_time / (all_duration === 0 ? 1 : all_duration)) * 100,
        repaid: repaid,
        repaid_percent:
          (repaid / (totalContractAmount === 0 ? 1 : totalContractAmount)) * 100,
        performance_bond,
        performance_status: performanceStatus,
  
        advance_bond,
        advance_status: advanceStatus,
  
        bid_bond,
        bid_status: bidStatus,
  
        spi,
        cpi,
        sv,
        cv,
      }
    });

  } catch (error) {
    res.apiError(error);
  }
};

self.getFinancialNumbers = async (req, res) => {
  try {
    const { id } = req.params;

    const finance = await ProjectFinance.findOne({ where: { project_id: id } });
    const supplementvarations = await ProjectVariation.findAll({
      where: { project_id: id },
    });

    const filterSupplementVariations = (type) =>
      supplementvarations.filter((item) => item.type === type);

    const variations = filterSupplementVariations("VARIATION");
    const supplements = filterSupplementVariations("SUPPLEMENT");
    const omissions = filterSupplementVariations("OMISSION");
    const specials = filterSupplementVariations("SPECIAL");

    const variation_total = variations.reduce(
      (total, item) => total + item.amount,
      0
    );
    const supplement_total = supplements.reduce(
      (total, item) => total + item.amount,
      0
    );
    const special_total = specials.reduce(
      (total, item) => total + item.amount,
      0
    );
    const omission_total = omissions.reduce(
      (total, item) => total + item.amount,
      0
    );


    return res.apiSuccess({
      data: {
        main_contract_price_amount: finance
          ? finance.main_contract_price_amount
          : null,
        rebate: finance ? finance.rebate : null,
        price_after_rebate: finance ? finance.price_after_rebate : null,
        variation_total,
        supplement_total,
        special_total,
        omission_total,
      }
    });
   
  } catch (error) {
    res.apiError(error);
  }
};

self.getContractTimeAnalysis = async(req, res) => {
	let id = req.params.id; 
	try {
		
		let time = await ProjectTime.findOne({
			where: {
				project_id: id
			}
		});

		let plans = await ProjectPlan.findAll({
			where: {
				project_id: id
			}
		});

		let reports = await ProjectReport.findAll({
			where: {
				project_id: id
			}
		});
		
		let plannedRevenue = plans.reduce((total, item) => total+ item.financial_performance, 0);
		let actualRevenue = reports.reduce((total, item) => total + item.financial_performance, 0);
/**
 * completion_date: moment(time.commencement_date).add(total_time)
 */
		let extensions = await ProjectExtensionTime.findAll({
			where: {
				project_id: time.project_id
			}
		});

		let extension = extensions.reduce((total, item)=> total + item.number_of_days, 0);

		let totalTime = extension + time.original_contract_duration;
		let completion_time = moment(time.commencement_date).add(totalTime, "days");
		let remaining_day = completion_time.diff(moment(), "days");

		let status;
		if(remaining_day < 0){
			status = "OVERDUE";
		}else{
			if(remaining_day <=40 ){
				status = "ALERT";
			}else{
				status = "ACTIVE";
			}extension;
		}

    return res.apiSuccess({
      data : {
        contract_signing_date : time.contract_signing_date,
        site_handover_date: time.site_handover_date,
        mobilization_days: time.mobilization_days,
        commencement_date: time.commencement_date,
        contract_duration: time.original_contract_duration,
        extension_time : extension,
        extension_count: extensions.length,
        total_time: totalTime,
        completion_time,
        remaining_day,
        status,
        spi: (actualRevenue/(plannedRevenue === 0 ? 1:plannedRevenue)*100)
      }
    });
		
	} catch (error) {
		res.apiError(error);
	}
};
module.exports = self;
