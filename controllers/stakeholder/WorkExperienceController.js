const {
    TotalEmployee,
    WorkExperience,
    ExperienceLevel,
    Sequelize
} = require("../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, deleteRecord } = require("../utils/format-helper");
const uuid = require("uuid");
let self = {};



self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(WorkExperience, req);

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
    getRecordById(WorkExperience, req, res);
};


self.getWorkExperienceByStakeholderId = async (req, res) => {
    const { id } = req.params;
    try {
      const whereCondition = { stakeholder_id: id };
  
      const includeOptions = [
        { model: ExperienceLevel, as: "experiencelevel" } // Example association
      ];
     
      const paginatedResult = await paginationHelper(WorkExperience, req, whereCondition, includeOptions);
  
      // Use the response formatter to send the success response
      res.apiSuccess({
        data: paginatedResult.data,
        total: paginatedResult.total,
      }, paginatedResult.pagination);
  
    } catch (error) {
      res.apiError(error);
    }
};

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await WorkExperience.findAll({
            where: {
                name: {
                    [Op.like]: "%" + text + "%"
                }
            }
        });
        return res.json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

self.save = async(req, res) => {
    try {

        let usr = await usrData.userData(req, res);

        let us = usr.usrID;
        let body = req.body;
        let arr = body.empWorkArr;
        let ssyy = [];


        let stakeHolderId = arr[0].stakeholder_id;

        if (usr) {
            let totalEmployee = await TotalEmployee.findAll({
                where: {
                    stakeholder_id: stakeHolderId
                }
            });
            let totalEmployeeData = totalEmployee;
            if (!totalEmployeeData.length) {
                return res.status(400).json({
                    message: "There is no total employee data with this stakeholder id"
                });
            }
            let reqBodyArr = [];
            for (let i = 0; i < arr.length; i++) {
                var date = new Date(arr[i].year);
                let yy = date.getFullYear();
                let male = Number(arr[i].male);
                let female = Number(arr[i].female);
                let nationality = arr[i].nationality;
                let stakeholder_id = arr[i].stakeholder_id;
                reqBodyArr.push({ year: yy, female: female, male: male, nationality: nationality, stakeholder_id: stakeholder_id });
            }
            const filteredReqBodyArr = [];
            for (let i = 0; i < reqBodyArr.length; i++) {
                let existingIndex = -1;
                for (let j = 0; j < filteredReqBodyArr.length; j++) {
                    if (reqBodyArr[i].nationality === filteredReqBodyArr[j].nationality && reqBodyArr[i].year === filteredReqBodyArr[j].year) {
                        existingIndex = j;
                        break;
                    }
                }

                if (existingIndex === -1) {
                    filteredReqBodyArr.push(reqBodyArr[i]);
                } else {
                    filteredReqBodyArr[existingIndex].male += reqBodyArr[i].male,
                        filteredReqBodyArr[existingIndex].female += reqBodyArr[i].female;
                }
            }
            for (let i = 0; i < totalEmployeeData.length; i++) {
                date = new Date(totalEmployeeData[i].year);
                let yy = date.getFullYear();
                let male = Number(totalEmployeeData[i].male);
                let female = Number(totalEmployeeData[i].female);
                let nationality = totalEmployeeData[i].nationality;
                ssyy.push({ year: yy, female: female, male: male, nationality: nationality });
            }
            const filteredfrmDBArr = [];
            for (let i = 0; i < ssyy.length; i++) {
                let existingIndex = -1;
                for (let j = 0; j < filteredfrmDBArr.length; j++) {
                    if (ssyy[i].nationality === filteredfrmDBArr[j].nationality && ssyy[i].year === filteredfrmDBArr[j].year) {
                        existingIndex = j;
                        break;
                    }
                }

                if (existingIndex === -1) {
                    filteredfrmDBArr.push(ssyy[i]);
                } else {
                    // Number(filteredfrmDBArr[existingIndex].male) += Number(ssyy[i].male),
                    // Number(filteredfrmDBArr[existingIndex].female) += Number(ssyy[i].female)

                    filteredfrmDBArr[existingIndex].male = Number(filteredfrmDBArr[existingIndex].male) + Number(ssyy[i].male);
                    filteredfrmDBArr[existingIndex].female = Number(filteredfrmDBArr[existingIndex].female) + Number(ssyy[i].female);

                }
            }
            let diffDataYear = [];
            let diffDataNational = [];
            for (let i = 0; i < filteredReqBodyArr.length; i++) {
                let existingIndex = -1;
                for (let j = 0; j < filteredfrmDBArr.length; j++) {
                    if (filteredReqBodyArr[i].year === filteredfrmDBArr[j].year) {
                        existingIndex = j;
                        break;
                    }

                }

                if (existingIndex === -1) {
                    diffDataYear.push(filteredReqBodyArr[i].year);
                } else {
                    //to do
                }
            }
            for (let i = 0; i < filteredReqBodyArr.length; i++) {
                let existingIndex = -1;
                for (let j = 0; j < filteredfrmDBArr.length; j++) {
                    if (filteredReqBodyArr[i].nationality === filteredfrmDBArr[j].nationality) {
                        existingIndex = j;
                        break;
                    }

                }

                if (existingIndex === -1) {
                    diffDataNational.push(filteredReqBodyArr[i].nationality);
                } else {
                    //todo
                }   
            }
            // console.log("Hey", diffDataNational);
            if (diffDataYear.length) {
                let bod = `Sorry! ${diffDataYear} years are not registered at total employee data with this staleholder`;
                return res.status(400).json({ "message": bod });
            }
            if (diffDataNational.length) {
                let bod = `Sorry! ${diffDataNational} nationality are not registered at total employee data with this staleholder`;
                return res.status(400).json({ "message": bod });
            }

            let registeredData = await WorkExperience.findAll({
                where: {
                    stakeholder_id: stakeHolderId
                }
            });

            let rD = [];
            for (let i = 0; i < registeredData.length; i++) {
                date = new Date(registeredData[i].year);
                let yy = date.getFullYear();
                let male = registeredData[i].male;
                let female = registeredData[i].female;
                let nationality = registeredData[i].nationality;
                let stakeholder_id = registeredData[i].stakeholder_id;
                rD.push({ year: yy, female: female, male: male, nationality: nationality, stakeholder_id: stakeholder_id });
            }
            // console.log("The rD", rD)
            // console.log("Bod", filteredReqBodyArr)
            // var bodDate = new Date(req.body.year);
            let newArr = [];
            if (rD.length) {
                for (let i = 0; i < filteredReqBodyArr.length; i++) {


                    let ss = rD.find(item => item.nationality === filteredReqBodyArr[i].nationality && item.year === filteredReqBodyArr[i].year && item.stakeholder_id === filteredReqBodyArr[i].stakeholder_id);
                    // console.log("The ss", filteredReqBodyArr[i]);
                    if (ss) {
                        newArr.push(ss);
                    }


                }
            }
            if (newArr.length) {
                return res.status(400).json({ message: "There is already registered data the same with your input data!" });
            }
            var arr2 = [];
            for (let i = 0; i < filteredReqBodyArr.length; i++) {
                for (let j = 0; j < filteredfrmDBArr.length; j++) {

                    if (filteredReqBodyArr[i].year === filteredfrmDBArr[j].year && filteredReqBodyArr[i].nationality === filteredfrmDBArr[j].nationality) {
                        if (filteredReqBodyArr[i].male !== filteredfrmDBArr[j].male) {
                            let bod = `Sorry! the ${filteredReqBodyArr[i].nationality} nationality total male employee in ${filteredReqBodyArr[i].year} year was ${filteredfrmDBArr[j].male} but your total male is ${filteredReqBodyArr[i].male}`;
                            return res.status(400).json({ "message": bod });
                        } else if (filteredReqBodyArr[i].female !== filteredfrmDBArr[j].female) {
                            let bod = `Sorry! the ${filteredReqBodyArr[i].nationality} nationality total female employee in ${filteredReqBodyArr[i].year} year was ${filteredfrmDBArr[j].female} but your total female is ${filteredReqBodyArr[i].female}`;
                            return res.status(400).json({ "message": bod });
                        } else {
                           
                            for (i = 0; i < arr.length; i++) {
                                let body = {
                                    stakeholder_id: arr[i].stakeholder_id,
                                    year: arr[i].year,
                                    domain: arr[i].domain,
                                    experiencelevel_id: arr[i].experiencelevel_id,
                                    department_name: arr[i].department_name,
                                    male: arr[i].male,
                                    female: arr[i].female,
                                    nationality: arr[i].nationality
                                };
                                if (body) {
                                    let data = await WorkExperience.create(body);
                                    arr2.push(data);
                                }
                            }
                                let resultIds = arr2
                                        .map((obj) => obj.id)
                                        .sort()
                                        .join("");

                                        const sharedUuid = uuid.v5(resultIds, uuid.NIL);
                                        await actionHelper.saveActionState(
                                        sharedUuid,
                                        "WorkExperience",
                                        "REGISTER",
                                        us,
                                        req,
                                        res
                                        );
                            return res.status(200).json({ data: arr2,model_id:sharedUuid });
                        }
                    }

                }
            }
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
self.update = async(req, res) => {
    try {

        let usr = await usrData.userData(req, res);
        let body = req.body;
        let arr = body.empWorkArr;
        let ssyy = [];


        let stakeHolderId = arr[0].stakeholder_id;

        if (usr) {
            let totalEmployee = await TotalEmployee.findAll({
                where: {
                    stakeholder_id: stakeHolderId
                }
            });
            let totalEmployeeData = totalEmployee;
            if (!totalEmployeeData.length) {
                return res.status(400).json({
                    message: "There is no total employee data with this stakeholder id"
                });
            }
            // let array = arr;
            let reqBodyArr = [];
            for (let i = 0; i < arr.length; i++) {
                var date = new Date(arr[i].year);
                let yy = date.getFullYear();
                let male = arr[i].male;
                let female = arr[i].female;
                let nationality = arr[i].nationality;
                reqBodyArr.push({ year: yy, female: female, male: male, nationality: nationality });
            }
            //console.log("Array2", reqBodyArr)
            const filteredReqBodyArr = [];
            for (let i = 0; i < reqBodyArr.length; i++) {
                let existingIndex = -1;
                for (let j = 0; j < filteredReqBodyArr.length; j++) {
                    if (reqBodyArr[i].nationality === filteredReqBodyArr[j].nationality && reqBodyArr[i].year === filteredReqBodyArr[j].year) {
                        existingIndex = j;
                        break;
                    }
                }

                if (existingIndex === -1) {
                    filteredReqBodyArr.push(reqBodyArr[i]);
                } else {
                    filteredReqBodyArr[existingIndex].male += reqBodyArr[i].male,
                        filteredReqBodyArr[existingIndex].female += reqBodyArr[i].female;
                }
            }
            for (let i = 0; i < totalEmployeeData.length; i++) {
                date = new Date(totalEmployeeData[i].year);
                let yy = date.getFullYear();
                let male = totalEmployeeData[i].male;
                let female = totalEmployeeData[i].female;
                let nationality = totalEmployeeData[i].nationality;
                ssyy.push({ year: yy, female: female, male: male, nationality: nationality });
            }
            // result2 = 
            const filteredfrmDBArr = [];
            for (let i = 0; i < ssyy.length; i++) {
                let existingIndex = -1;
                for (let j = 0; j < filteredfrmDBArr.length; j++) {
                    if (ssyy[i].nationality === filteredfrmDBArr[j].nationality && ssyy[i].year === filteredfrmDBArr[j].year) {
                        existingIndex = j;
                        break;
                    }
                }

                if (existingIndex === -1) {
                    filteredfrmDBArr.push(ssyy[i]);
                } else {
                    filteredfrmDBArr[existingIndex].male += ssyy[i].male,
                        filteredfrmDBArr[existingIndex].female += ssyy[i].female;
                }
            }

            let diffDataYear = [];
            let diffDataNational = [];
            for (let i = 0; i < filteredReqBodyArr.length; i++) {
                let existingIndex = -1;
                for (let j = 0; j < filteredfrmDBArr.length; j++) {
                    if (filteredReqBodyArr[i].year === filteredfrmDBArr[j].year) {
                        existingIndex = j;
                        break;
                    }

                }

                if (existingIndex === -1) {
                    diffDataYear.push(filteredReqBodyArr[i].year);
                } else {
                    //to do
                }
            }
            for (let i = 0; i < filteredReqBodyArr.length; i++) {
                let existingIndex = -1;
                for (let j = 0; j < filteredfrmDBArr.length; j++) {
                    if (filteredReqBodyArr[i].nationality === filteredfrmDBArr[j].nationality) {
                        existingIndex = j;
                        break;
                    }

                }

                if (existingIndex === -1) {
                    diffDataNational.push(filteredReqBodyArr[i].nationality);
                } else {
                    //to do
                }
            }
            if (diffDataYear.length) {
                let bod = `Sorry! ${diffDataYear} years are not registered at total employee data with this staleholder`;
                return res.status(400).json({ "message": bod });
            }
            if (diffDataNational.length) {
                let bod = `Sorry! ${diffDataNational} nationality are not registered at total employee data with this staleholder`;
                return res.status(400).json({ "message": bod });
            }

            let registeredData = await WorkExperience.findAll({
                where: {
                    stakeholder_id: stakeHolderId
                }
            });

            let rD = [];
            for (let i = 0; i < registeredData.length; i++) {
                date = new Date(registeredData[i].year);
                let yy = date.getFullYear();
                let male = registeredData[i].male;
                let female = registeredData[i].female;
                let nationality = registeredData[i].nationality;
                let stakeholder_id = registeredData[i].stakeholder_id;
                rD.push({ year: yy, female: female, male: male, nationality: nationality, stakeholder_id: stakeholder_id });
            }

            // var arr2 = [];
            for (let i = 0; i < filteredReqBodyArr.length; i++) {
                for (let j = 0; j < filteredfrmDBArr.length; j++) {

                    if (filteredReqBodyArr[i].year === filteredfrmDBArr[j].year && filteredReqBodyArr[i].nationality === filteredfrmDBArr[j].nationality) {
                        if (filteredReqBodyArr[i].male !== filteredfrmDBArr[j].male) {
                            let bod = `Sorry! the ${filteredReqBodyArr[i].nationality} nationality total male employee in ${filteredReqBodyArr[i].year} year was ${filteredfrmDBArr[j].male} but your total male is ${filteredReqBodyArr[i].male}`;
                            return res.status(400).json({ "message": bod });
                        } else if (filteredReqBodyArr[i].female !== filteredfrmDBArr[j].female) {
                            let bod = `Sorry! the ${filteredReqBodyArr[i].nationality} nationality total female employee in ${filteredReqBodyArr[i].year} year was ${filteredfrmDBArr[j].female} but your total female is ${filteredReqBodyArr[i].female}`;
                            return res.status(400).json({ "message": bod });
                        } else {

                            let container = [];
                            for (i = 0; i < arr.length; i++) {
                                let body = {
                                    id: arr[i].id,
                                    stakeholder_id: arr[i].stakeholder_id,
                                    year: arr[i].year,
                                    domain: arr[i].domain,
                                    agelevel_id: arr[i].agelevel_id,
                                    department_name: arr[i].department_name,
                                    male: arr[i].male,
                                    female: arr[i].female,
                                    nationality: arr[i].nationality
                                };
                                if (body) {

                                    const [updated] = await WorkExperience.update(body, {
                                        where: { id: body.id },
                                      });
                                  
                                      if (updated) {
                                        const updatedData = await WorkExperience.findOne({ where: { id: body.id } });
                                        container.push(updatedData);
                                      }
                                }
                            }
                            return res.apiSuccess({
                                data: container
                            });
                        }
                    }

                }
            }
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


  
self.delete = async (req, res) => {
    deleteRecord(WorkExperience, req, res);
};


module.exports = self;