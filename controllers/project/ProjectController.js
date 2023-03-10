 const {
     project,
     actionstate,
     projectstakeholder,
     stakeholder,
     projecttime,
     projectfinance,
     Sequelize
 } = require("./../../models");

 const Op = Sequelize.Op;
 const usrData = require("../../utils/userDataFromToken");
 const { saveActionState } = require("../../utils/helper");
 let self = {};
 const paginate = require("../../utils/pagination");
 const dotenv = require('dotenv');
 dotenv.config();

 self.getAll = async(req, res) => {
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
     project.findAndCountAll({
             limit,
             offset,
             order: [
                 ['createdAt', order]
             ],
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
     // try {
     //     let data = await project.findAll();
     //     return res.json(data)

     // } catch (error) {
     //     res.status(500).json({
     //         message: error.message
     //     })
     // }
 }


 self.getProjectByTypeId = async(req, res) => {
     let { page, size, order } = req.query;
     const { projecttype_id, projectcategory_id, projectsubcategory_id } = req.body
     console.log("The body", req.body)
         //console.log("The page", page, size)
     if (page == null && size == null) {
         page = process.env.page,
             size = process.env.size
     }
     if (order == null) {
         order = process.env.order
     }
     const filter = () => {
         if (projectsubcategory_id) {
             return [{ projecttype_id: projecttype_id },
                 { projectcategory_id: projectcategory_id },
                 { projectsubcategory_id: projectsubcategory_id }
             ]
         }

         if (projectcategory_id) {
             return [{ projecttype_id: projecttype_id },
                 { projectcategory_id: projectcategory_id },
             ]

         }
         return [{ projecttype_id: projecttype_id }]
     }
     console.log("The filter", filter())
     const { limit, offset } = paginate.getPagination(page, size);
     project.findAndCountAll({
             limit,
             offset,
             order: [
                 ['createdAt', order]
             ],
             where: {
                 [Op.and]: filter()
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
     // try {
     //     let id = req.params.id;
     //     let data = await stakeholder.findAll({
     //         where: {
     //             stakeholdertype_id: id
     //         }
     //     });
     //     return res.status(200).json({
     //         data: (data) ? data : {}
     //     })
     // } catch (error) {
     //     res.status(500).json({
     //         message: error.message
     //     })
     // }
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
        let [clientStake, consultantStake, contractorStake, pro, finance, time] = await Promise.all([
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
            })
        ])


        let client = clientStake ? await self.getStakeholderName(clientStake.stakeholder_id): null
        let contractor = contractorStake ? await self.getStakeholderName(contractorStake.stakeholder_id): null
        let consultant = consultantStake ? await self.getStakeholderName(consultantStake.stakeholder_id): null


        return res.json({
            project_name : pro ? pro.name : null,
            client,
            contractor,
            consultant,
            main_contract_price_amount: finance ? finance.main_contract_price_amount: null,
            contract_signing_date: time ? time.contract_signing_date : null

        })
add


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

 module.exports = self;