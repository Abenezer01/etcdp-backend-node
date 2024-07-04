const { EmployeeEducation, TotalEmployee, StudyLevel, Sequelize } = require("../../models");
const dotenv = require("dotenv");
dotenv.config();
const Op = Sequelize.Op;
const usrData = require("../../utils/userDataFromToken");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, deleteRecord } = require("../utils/format-helper");
const actionHelper = require("../utils/action-helper");
let self = {};
const uuid = require("uuid");

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(EmployeeEducation, req);

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
  getRecordById(EmployeeEducation, req, res);
};

self.getEmployeeEducationByStakeholderId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { stakeholder_id: id };

    const includeOptions = [
      { model: StudyLevel, as: "studylevel" } // Example association
    ];
   

    const paginatedResult = await paginationHelper(EmployeeEducation, req, whereCondition, includeOptions);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await EmployeeEducation.findAll({
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

self.getCollectionOfData = async (req, res) => {
  let registeredData = await EmployeeEducation.findAll();

  let rD = [];
  for (let i = 0; i < registeredData.length; i++) {
    var date = new Date(registeredData[i].year);
    let yy = date.getFullYear();
    let male = registeredData[i].male;
    let female = registeredData[i].female;
    let nationality = registeredData[i].nationality;
    let stakeholder_id = registeredData[i].stakeholder_id;
    rD.push({
      year: yy,
      female: female,
      male: male,
      nationality: nationality,
      stakeholder_id: stakeholder_id,
    });
  }
  // const filteredfrmDBArr = [];
  const result = rD.reduce((acc, curr) => {
    const { year, nationality } = curr;
    // const filtered = rD.filter((item) => item.year === year && item.nationality === nationality);

    const key = `${year}, ${nationality}`;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(curr);

    return acc;
  }, {});
  res.send(result);
};
self.save = async (req, res) => {
  try {
    let usr = await usrData.userData(req, res);

    let us = usr.usrID;
    let body = req.body;

    const arr = body.empEduArr;

    let stakeHolderId = arr[0].stakeholder_id;
    if (usr) {
      let totalEmployee = await TotalEmployee.findAll({
        where: {
          stakeholder_id: stakeHolderId,
        },
      });

      let totalEmployeeData = totalEmployee;

      if (!totalEmployeeData) {
        return res.status(400).json({
          message: "There is no total employee data with this stakeholder id",
        });
      }

      let reqBodyArr = arr.map((item) => {
        const date = new Date(item.year);
        const yy = date.getFullYear();

        return {
          year: yy,
          female: item.female,
          male: item.male,
          nationality: item.nationality,
          stakeholder_id: item.stakeholder_id,
        };
      });

      const filteredReqBodyArr = reqBodyArr.reduce((acc, item) => {
        let existingItem = acc.find(
          (i) => i.nationality === item.nationality && i.year === item.year
        );

        if (existingItem) {
          existingItem.male += item.male;
          existingItem.female += item.female;
        } else {
          acc.push(item);
        }

        return acc;
      }, []);

      const ssyy = totalEmployeeData.map((employee) => {
        const date = new Date(employee.year);
        const year = date.getFullYear();
        const { male, female, nationality } = employee;
        return { year, male, female, nationality };
      });
      const filteredfrmDBArr = ssyy.reduce((acc, item) => {
        let existingItem = acc.find(
          (i) => i.nationality === item.nationality && i.year === item.year
        );

        if (existingItem) {
          existingItem.male += item.male;
          existingItem.female += item.female;
        } else {
          acc.push(item);
        }

        return acc;
      }, []);
      const diffDataYear = filteredReqBodyArr
        .map((obj) => obj.year)
        .filter((year) => !filteredfrmDBArr.some((obj) => obj.year === year));

      const diffDataNational = filteredReqBodyArr
        .map((obj) => obj.nationality)
        .filter(
          (nationality) =>
            !filteredfrmDBArr.some((obj) => obj.nationality === nationality)
        );

      if (diffDataYear.length || diffDataNational.length) {
        let missingYears = diffDataYear.length ? `${diffDataYear} years` : "";
        let missingNationalities = diffDataNational.length
          ? `${diffDataNational} nationalities`
          : "";
        let bod = `Sorry! ${missingYears} ${
          missingYears && missingNationalities ? "and" : ""
        } ${missingNationalities} are not registered at total employee data with this stakeholder`;
        return res.status(400).json({ message: bod });
      }

      const registeredData = await EmployeeEducation.findAll({
        where: {
          stakeholder_id: stakeHolderId,
        },
      });

      const rD = registeredData.map((data) => ({
        year: new Date(data.year).getFullYear(),
        male: data.male,
        female: data.female,
        nationality: data.nationality,
        stakeholder_id: data.stakeholder_id,
      }));

      // const bodDate = new Date(req.body.year);

      const newArr = filteredReqBodyArr.filter((item) => {
        return rD.some(
          (data) =>
            data.nationality === item.nationality &&
            data.year === item.year &&
            data.stakeholder_id === item.stakeholder_id
        );
      });

      if (newArr.length) {
        return res.status(410).json({
          message:
            "There is already registered data the same with your input data!",
        });
      }

      //return res.send(matchingData)
      const arr2 = [];

      filteredReqBodyArr.forEach((reqBody) => {
        const match = filteredfrmDBArr.find((dbEntry) => {
          return (
            reqBody.year === dbEntry.year &&
            reqBody.nationality === dbEntry.nationality
          );
        });

        if (!match) {
          return res.status(412).json({ message: "Not matched" });
        }

        let messages = [];
        if (reqBody.male !== match.male) {
          messages.push(
            `Sorry the ${reqBody.nationality} nationality total male employee in ${reqBody.year} year was ${match.male} but your total male is ${reqBody.male}!`
          );
        }
        if (reqBody.female !== match.female) {
          messages.push(
            `Sorry the ${reqBody.nationality} nationality total female employee in ${reqBody.year} year was ${match.female} but your total female is ${reqBody.female}!`
          );
        }
        if (messages.length > 0) {
          const combinedMessage = messages.join(
            "\n".repeat(messages.length > 1 ? 1 : 0)
          );
          return res.status(412).json({ message: combinedMessage });
        } else {
          const data = reqBody;
          //delete data.id;
          arr2.push(data);
        }
      });

      if (arr2.length > 0) {
        const savedData = await EmployeeEducation.bulkCreate(arr);

        let resultIds = savedData
          .map((obj) => obj.id)
          .sort()
          .join("");

        const sharedUuid = uuid.v5(resultIds, uuid.NIL);
        await actionHelper.saveActionState(
          sharedUuid,
          "EmployeeEducation",
          "REGISTER",
          us,
          req,
          res
        );
        return res.status(200).json({ data: savedData });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
self.update = async (req, res) => {
  try {
    let usr = await usrData.userData(req, res);
    let body = req.body;
    const arr = body.empEduArr;
    //let ssyy = []

    let stakeHolderId = arr[0].stakeholder_id;
    // return res.send(stakeHolderId)
    if (usr) {
      let totalEmployee = await TotalEmployee.findAll({
        where: {
          stakeholder_id: stakeHolderId,
        },
      });

      let totalEmployeeData = totalEmployee;
      //console.log("The data", totalEmployeeData);

      if (!totalEmployeeData) {
        return res.status(400).json({
          message: "There is no total employee data with this stakeholder id",
        });
      }

      let reqBodyArr = arr.map((item) => {
        const date = new Date(item.year);
        const yy = date.getFullYear();

        return {
          year: yy,
          female: item.female,
          male: item.male,
          nationality: item.nationality,
          stakeholder_id: item.stakeholder_id,
        };
      });

      const filteredReqBodyArr = reqBodyArr.reduce((acc, item) => {
        let existingItem = acc.find(
          (i) => i.nationality === item.nationality && i.year === item.year
        );

        if (existingItem) {
          existingItem.male += item.male;
          existingItem.female += item.female;
        } else {
          acc.push(item);
        }

        return acc;
      }, []);

      const ssyy = totalEmployeeData.map((employee) => {
        const date = new Date(employee.year);
        const year = date.getFullYear();
        const { male, female, nationality } = employee;
        return { year, male, female, nationality };
      });
      const filteredfrmDBArr = ssyy.reduce((acc, item) => {
        let existingItem = acc.find(
          (i) => i.nationality === item.nationality && i.year === item.year
        );

        if (existingItem) {
          existingItem.male += item.male;
          existingItem.female += item.female;
        } else {
          acc.push(item);
        }

        return acc;
      }, []);
      const diffDataYear = filteredReqBodyArr
        .map((obj) => obj.year)
        .filter((year) => !filteredfrmDBArr.some((obj) => obj.year === year));

      const diffDataNational = filteredReqBodyArr
        .map((obj) => obj.nationality)
        .filter(
          (nationality) =>
            !filteredfrmDBArr.some((obj) => obj.nationality === nationality)
        );

      if (diffDataYear.length || diffDataNational.length) {
        let missingYears = diffDataYear.length ? `${diffDataYear} years` : "";
        let missingNationalities = diffDataNational.length
          ? `${diffDataNational} nationalities`
          : "";
        let bod = `Sorry! ${missingYears} ${
          missingYears && missingNationalities ? "and" : ""
        } ${missingNationalities} are not registered at total employee data with this stakeholder`;
        return res.status(400).json({ message: bod });
      }

      const arr2 = [];

      filteredReqBodyArr.forEach((reqBody) => {
        const match = filteredfrmDBArr.find((dbEntry) => {
          return (
            reqBody.year === dbEntry.year &&
            reqBody.nationality === dbEntry.nationality
          );
        });

        if (!match) {
          return res.status(412).json({ message: "Not matched" });
        }

        let messages = [];
        if (reqBody.male !== match.male) {
          messages.push(
            `Sorry the ${reqBody.nationality} nationality total male employee in ${reqBody.year} year was ${match.male} but your total male is ${reqBody.male}!`
          );
        }
        if (reqBody.female !== match.female) {
          messages.push(
            `Sorry the ${reqBody.nationality} nationality total female employee in ${reqBody.year} year was ${match.female} but your total female is ${reqBody.female}!`
          );
        }
        if (messages.length > 0) {
          const combinedMessage = messages.join(
            "\n".repeat(messages.length > 1 ? 1 : 0)
          );
          return res.status(412).json({ message: combinedMessage });
        } else {
          const data = reqBody;
          //delete data.id;
          arr2.push(data);
        }
      });

      let container = [];
      if (arr2.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          let body = {
            id: arr[i].id,
            stakeholder_id: arr[i].stakeholder_id,
            year: arr[i].year,
            domain: arr[i].domain,
            studylevel_id: arr[i].studylevel_id,
            department_name: arr[i].department_name,
            male: arr[i].male,
            female: arr[i].female,
            nationality: arr[i].nationality,
          };
          if (body) {
            
            const [updated] = await EmployeeEducation.update(body, {
              where: { id: body.id },
            });
        
            if (updated) {
              const updatedData = await EmployeeEducation.findOne({ where: { id: body.id } });
              container.push(updatedData);
            }
          }
        }

        return res.apiSuccess({
          data: container
        });
      }
    }
  } catch (error) {
    return res.apiError(error);
  }
};


self.delete = async (req, res) => {
  deleteRecord(EmployeeEducation, req, res);
};

module.exports = self;
