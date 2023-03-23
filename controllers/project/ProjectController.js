 const {
     project,
     actionstate,
     projectstakeholder,
     stakeholder,
     projecttime,
     projectfinance,
     projectstatus,
     status,
     projectreport,
     projectplan,
     projectvariation,
     payment,
     sequelize,
     Sequelize
 } = require("./../../models");
 const moment = require('moment');
 const Op = Sequelize.Op;
 const usrData = require("../../utils/userDataFromToken");
 const { saveActionState } = require("../../utils/helper");
 let self = {};
 const paginate = require("../../utils/pagination");
 const dotenv = require('dotenv');
 dotenv.config();

 const { notify } = require("../../utils/Notify");

 self.getAll = async(req, res) => {
     // test notification
     //send status

     let pro = await project.findOne({
         where: {
             id: "0fdbc117-d374-4f9d-86fa-cdb708cca67f"
         }
     })

     notify("REGISTER", "new project is added. check it", "project", "00a340e3-431a-489f-a859-6d0c9d15e894", pro.id, "descr")

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

     try {
         const { rows, count } = await project.findAndCountAll({
             limit,
             offset,
             order: [
                 ['createdAt', order]
             ]
         });

         const response = paginate.getPagingData({ rows, count }, page, limit, count);

         res.send(response);
     } catch (err) {
         console.error(err);
         res.status(500).send({
             message: 'An error occurred while retrieving data.',
         });
     }
 }
 self.getProjectByTypeId = async(req, res) => {
     const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;
     const { projecttype_id, projectcategory_id, projectsubcategory_id } = req.body
     const { id } = req.params;
     try {
         const filter = [{ projecttype_id: projecttype_id }]
         if (projectcategory_id) {
             filter.push({ projectcategory_id: projectcategory_id })
         }
         if (projectsubcategory_id) {
             filter.push({ projectsubcategory_id: projectsubcategory_id })
         }

         const projectResult = await project.findAll({
             where: {
                 [Op.and]: filter
             },
             raw: true
         });







         let uf = []
         for (const item of projectResult) {
             const projectID = item.id;
             if (projectID) {
                 uf.push(projectID);
             }
         }

         let reportData = await projectreport.findAll({
             where: {
                 project_id: {
                     [Sequelize.Op.in]: uf
                 }
             }
         });
         let planData = await projectplan.findAll({
             where: {
                 project_id: {
                     [Sequelize.Op.in]: uf
                 }
             }
         });
         const groupedReportData = reportData.reduce((acc, item) => {
             const { project_id, financial_performance, project_expense, type } = item;
             acc[project_id] = acc[project_id] || { project_id, financial_performance: 0, project_expense: 0 };
             acc[project_id].financial_performance += financial_performance;
             acc[project_id].project_expense += project_expense;
             return acc;
         }, {});
         const groupedPlanData = planData.reduce((acc, item) => {
             const { project_id, financial_performance, project_expense } = item;
             acc[project_id] = acc[project_id] || { project_id, financial_performance: 0, project_expense: 0 };
             acc[project_id].financial_performance += financial_performance;
             acc[project_id].project_expense += project_expense;
             return acc;
         }, {});
         const reportResult = Object.values(groupedReportData);
         const planResult = Object.values(groupedPlanData);

         const result = reportResult.map((reportItem) => {
            const planItem = planResult.find((item) => item.project_id === reportItem.project_id);
            if (planItem) {
                const sv = reportItem.financial_performance - planItem.financial_performance;
                const cv = reportItem.financial_performance - reportItem.project_expense;
                const cpi = reportItem.project_expense !== 0 ? (reportItem.financial_performance / reportItem.project_expense) * 100 : 0;
                const spi = planItem.financial_performance !== 0 ? (reportItem.financial_performance / planItem.financial_performance) * 100 : 0;
                return {
                    "project_id": reportItem.project_id,
                    "sv": sv,
                    "cv": cv,
                    "cpi": cpi,
                    "spi": spi,
                };
            }
        })

         const filteredResult = result.filter((item) => item);



         const { limit, offset } = paginate.getPagination(page, size);

         const projectData = await project.findAndCountAll({
             limit,
             offset,
             where: {
                 id: {
                     [Sequelize.Op.in]: uf
                 }
             },
             order: [
                 ['createdAt', order]
             ],
             raw: true
         });

        
         let projects = await Promise.all(projectData.rows.map(self.getProjectStatus));
           
         const projectTimeData = await projecttime.findAll({
             where: {
                 project_id: {
                     [Sequelize.Op.in]: uf
                 }
             },
             raw: true
         });

         const finResult = projects.map(aElement => {
             const matchingBElement = filteredResult.find(bElement => bElement.project_id === aElement.id);
             if (matchingBElement) {
                 return {
                     ...aElement,
                     cv: matchingBElement.cv,
                     sv: matchingBElement.sv,
                     cpi: matchingBElement.cpi,
                     spi: matchingBElement.spi
                 };
             }
             return aElement;
         });
         const finalResult = finResult.map(aElement => {
             const matchingBElement = projectTimeData.find(bElement => bElement.project_id === aElement.id);

             if (matchingBElement) {
                 //console.log("the matching", matchingBElement.original_contract_duration)
                 console.log("The total date", moment().diff(matchingBElement.commencement_date, 'days'))
                     //moment().diff(commencement, 'days') / contract_duration * 100
                 return {
                     ...aElement,
                     used_time: (moment().diff(matchingBElement.commencement_date, 'days') / matchingBElement.original_contract_duration) * 100
                 };
             }
             return aElement;
         });

         const response = paginate.getPagingData({ rows: finalResult, count: projectData.count }, page, limit);

         res.send(response);
     } catch (error) {
         res.status(500).send({
             message: error.message || 'Some error occurred while retrieving data.',
         });
     }
 }

 self.getProjectStatus = async (pro) => {
    const proStatus = await projectstatus.findOne({
      order: [['createdAt', 'DESC']],
      where: { project_id: pro.id }
    });
    const stat = proStatus ? await status.findOne({ where: { id: proStatus.status_id } }) : null;
    return { ...pro, status: stat ? stat.title : null };
  }
 self.getProjectByTypeIdPast = async(req, res) => {
     const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;
     const { projecttype_id, projectcategory_id, projectsubcategory_id } = req.body
     const filter = [{ projecttype_id: projecttype_id }]
     if (projectcategory_id) {
         filter.push({ projectcategory_id: projectcategory_id })
     }
     if (projectsubcategory_id) {
         filter.push({ projectsubcategory_id: projectsubcategory_id })
     }
     const { limit, offset } = paginate.getPagination(page, size);

     try {
         const result = await project.findAndCountAll({
             limit,
             offset,
             order: [
                 ['createdAt', order]
             ],
             where: {
                 [Op.and]: filter
             },
         });

         const pagingData = paginate.getPagingData(result, page, limit);
         res.send(pagingData);
     } catch (err) {
         res.status(500).send({
             message: err.message || "Some error occurred while retrieving data."
         });
     }
 }


 self.getAlll = async(req, res) => {
     try {
         let usr = await usrData.userData(req, res)
             //test
         let us = {
             id: usr.usrID,
             department_id: usr.departmentID
         }
         let department_id = us.department_id

         let exist = await getChildren(department_id)

         let other = await project.findAll({
             order: [
                 ['createdAt', 'DESC']
             ],
             where: {
                 department_id: {
                     [Op.in]: exist
                 }
             },

         })

         let mine = await project.findAll({
             where: {
                 department_id
             }
         })

         let otherArr = []
         for (let da of other) {
             let action = await actionstate.findOne({
                 where: {
                     model_id: da.id,
                     action: "APPROVE"
                 }
             })
             if (action) {
                 otherArr.push(da)
             }
         }

         let data = mine.concat(otherArr)
         return res.json(data)

     } catch (error) {
         res.status(500).json({
             message: error.message
         })
     }
 }
 self.getArr = async(arr) => {
     try {
         const otherArr = await Promise.all(arr.map(async da => {
             const action = await actionstate.findOne({
                 where: {
                     model_id: da.id,
                     action: "APPROVE"
                 }
             })

             if (action) return da;
         }));

         return otherArr.filter(x => x);
     } catch (error) {
         return {
             message: error.message
         }
     }
 }



 self.get = async(req, res) => {
     try {
         let id = req.params.id;
         let data = await project.findOne({
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

 self.search = async(req, res) => {
     try {
         let text = req.query.text;
         let data = await project.findAll({
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
         if (usr) {
             let data = await project.create(body);
             if (data) {
                 let usrID = usr.usrID
                 data.department_id = usr.departmentID
                 await data.save()
                 await saveActionState(data.id, "project", "REGISTER", usrID, req, res)
             }
             // let arr = [{ name: "Client", id: body.clientId }, { name: "Consultant", id: body.consultantId }, { name: "Contractor", id: body.contractorId }]
             // for (let i = 0; i < arr.length; i++) {
             //     let body = { project_id: data.id, stakeholder_id: arr[i].id, title: arr[i].name }
             //     projectstakeholder.create(body)

             // }
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
         let data = await project.update(body, {
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
         let data = await project.destroy({
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


 self.getProjectDetail = async(req, res) => {
    let id = req.params.id
    try {
        let [clientStake, consultantStake, contractorStake, pro, finance, time, proStatus] = await Promise.all([
            projectstakeholder.findOne({
                where: {
                    project_id: id,
                    title: "Client"
                }
            }),
            projectstakeholder.findOne({
                where: {
                    project_id: id,
                    title: "Consultant"
                }
            }),
            projectstakeholder.findOne({
                where: {
                    project_id: id,
                    title: "Contractor"
                }
            }),
            project.findOne({
                where: {
                    id: id
                }
            }),
            projectfinance.findOne({
                where: {
                    project_id: id
                }
            }),
            projecttime.findOne({
                where: {
                    project_id:id
                }
            }),
            projectstatus.findOne({
                where: {
                    project_id: id
                }
            })
        ])


         let client = clientStake ? await self.getStakeholderName(clientStake.stakeholder_id) : null
         let contractor = contractorStake ? await self.getStakeholderName(contractorStake.stakeholder_id) : null
         let consultant = consultantStake ? await self.getStakeholderName(consultantStake.stakeholder_id) : null

        let stat = proStatus ? await status.findOne({where: {id: proStatus.status_id}}) : null

        return res.json({
            project_name : pro ? pro.name : null,
            client,
            contractor,
            consultant,
            main_contract_price_amount: finance ? finance.main_contract_price_amount: null,
            time: time,
            project_status: stat? stat.title: null

        })


     } catch (error) {
         return res.json({
             message: error.messge
         })
     }
 }
 self.getStakeholderName = async(id) => {
     try {
         let data = await stakeholder.findOne({
             where: {
                 id: id
             }
         })

         return data ? data.trade_name : null
     } catch (error) {
         return {
             message: error.message
         }
     }
 }

 self.countAllProjectWithProjectType = async(req, res) => {

     try {
         let queryString = "SELECT projecttypes.title AS type, COALESCE(COUNT(projects.id), 0) AS total FROM projecttypes LEFT JOIN projects ON projecttypes.id = projects.projecttype_id GROUP BY projecttypes.title;"
         let projectData = await sequelize.query(
             queryString, { type: sequelize.QueryTypes.SELECT }
         );

         res.send(projectData)
     } catch (error) {
         res.status(500).json({
             message: error.message
         })

     }
 }
self.countAllProjectWithProjectCategory = async(req, res) => {

     try {
         let queryString = "SELECT projectcategories.title AS category, COALESCE(COUNT(projects.id), 0) AS total FROM projectcategories LEFT JOIN projectholders ON projectcategories.id = projects.projectcategory_id GROUP BY projectcategories.title;"
         let projectData = await sequelize.query(
             queryString, { type: sequelize.QueryTypes.SELECT }
         );

         res.send(projectData)
     } catch (error) {
         res.status(500).json({
             message: error.message
         })

     }
 }


self.getProjectData = async(req, res)=> {

	let id = req.params.id 
	try {

        // const projectData = await project.findOne({
        //     where: {
        //       id: id,
        //     },
        //     include: [
        //       {
        //         model: projecttime,
        //       },
        //       {
        //         model: projectfinance,
        //       },
        //       {
        //         model: projectstakeholder,
        //         where: { title: ["Client", "Consultant", "Contractor"] },
        //       },
        //       {
        //         model: projectvariation,
        //       },
        //       {
        //         model: projectplan,
        //       },
        //       {
        //         model: projectreport,
        //       },
        //       {
        //         model: projectstatus,
        //       },
        //       {
        //         model: payment,
        //         where: { type: "INTERIM_PAYMENT" },
        //       },
        //     ],
        //   });

        //   return res.json(projectData)
		
		
        let [pro, time, finance, clientStake, consultantStake, contractorStake] = await Promise.all([
            project.findOne({
                where: {
                    id: id,
                }
            }),
            projecttime.findOne({
                where:{
                    project_id: id
                }
            }),
            projectfinance.findOne({
                where:{
                    project_id: id
                }
            }),
            projectstakeholder.findOne({
                where: {
                    project_id: id,
                    title: "Client"
                }
            }),
            projectstakeholder.findOne({
                where: {
                    project_id: id,
                    title: "Consultant"
                }
            }),
            projectstakeholder.findOne({
                where: {
                    project_id: id,
                    title: "Contractor"
                }
            })
    
        ])




		let totalContractPrice = finance.main_contract_value

		let commencement_date = time.commencement_date 
		let contract_duration = time.original_contract_duration
		let used_time = moment().diff(commencement_date, 'days')

        let extensions = await projectvariation.findAll({
            where: {
                project_id: id
            }
        })
		

		let extensionDays = extensions.reduce((total, item) => total + item.extension_time, 0)
		
		let completion_date = moment(time.commencement_date).add((contract_duration + extensionDays), 'days')
		

        let plans = await projectplan.findAll({
            where: {
                project_id: id
            }
        })

        let reports = await projectreport.findAll({
            where: {
                project_id: id
            }
        })
		
		let earned_value = reports.reduce((total, item) => total + item.financial_performance, 0)

		let actualCost = reports.reduce((total, item) => total + item.project_expense, 0)
		let plannedFinance = plans.reduce((total, item) => total + item.financial_performance,0 )

		let actualFinance = reports.reduce((total, item) => total + item.financial_performance, 0)
		let spi = (actualFinance/(plannedFinance ==0 ? 1 : plannedFinance)) *100;
        let cpi = (actualFinance/(actualCost ==0 ? 1 : actualCost)) *100;

		let sv = (actualFinance - plannedFinance)
		let	cv =  (actualFinance - actualCost)

		let interims = await  payment.findAll({
            where: {
                project_id: id,
                type: "INTERIM_PAYMENT"
            }
        })
		let paid_ipc = interims.reduce((total, item) => total + item.net_payment, 0)




         let client = clientStake ? await self.getStakeholderName(clientStake.stakeholder_id) : null
         let contractor = contractorStake ? await self.getStakeholderName(contractorStake.stakeholder_id) : null
         let consultant = consultantStake ? await self.getStakeholderName(consultantStake.stakeholder_id) : null

		return res.json({
			name: pro.name,
			client,
			consultant,
			contractor,
			contract_duration: time.contract_duration,
			total_contract_amount: totalContractPrice,
			commencement_date,
			elapsed_time:used_time,
			completion_date,
			earned_value,
			cpi,
			spi,
			cv,
			sv,
			paid_ipc,
			planned_financial: plannedFinance,
			actual_cost:actualCost
		})

	} catch (error) {
		return res.status(500).json({
			message: error.message
		})
	}
}

 module.exports = self;