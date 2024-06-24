const { TotalEmployee, EmployeeAge, AgeLevel, Sequelize } = require("../../models");

const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, deleteRecord } = require("../utils/format-helper");
let self = {};
const uuid = require("uuid");



self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(EmployeeAge, req);

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
  getRecordById(EmployeeAge, req, res);
};

self.getEmployeeAgeByStakeholderId = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { stakeholder_id: id };

    const includeOptions = [
      { model: AgeLevel, as: "agelevel" } // Example association
    ];
   

    const paginatedResult = await paginationHelper(EmployeeAge, req, whereCondition, includeOptions);

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
    let data = await EmployeeAge.findAll({
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

    let us = usr.usrID;
    let body = req.body;
    const arr = body.empAgeArr;

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

      const registeredData = await EmployeeAge.findAll({
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
        return res.status(409).json({
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
        const savedData = await EmployeeAge.bulkCreate(arr);
        let resultIds = savedData
          .map((obj) => obj.id)
          .sort()
          .join("");

        const sharedUuid = uuid.v5(resultIds, uuid.NIL);
        await actionHelper.saveActionState(
          sharedUuid,
          "EmployeeAge",
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
    const arr = body.empAgeArr;

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

      if (arr2.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          let body = {
            id: arr[i].id,
            stakeholder_id: arr[i].stakeholder_id,
            year: arr[i].year,
            domain: arr[i].domain,
            agelevel_id: arr[i].agelevel_id,
            department_name: arr[i].department_name,
            male: arr[i].male,
            female: arr[i].female,
            nationality: arr[i].nationality,
          };
          if (body) {
            await EmployeeAge.update(body, {
              where: {
                id: body.id,
              },
            });
          }
        }
        return res.status(200).json({ message: "success" });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


self.delete = async (req, res) => {
  deleteRecord(EmployeeAge, req, res);
};

module.exports = self;
