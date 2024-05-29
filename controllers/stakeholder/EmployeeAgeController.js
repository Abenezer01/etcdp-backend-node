const { TotalEmployee, EmployeeAge, Sequelize } = require("../../models");

const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
const usrData = require("../../utils/userDataFromToken");
const { saveActionState, getChildren } = require("../../utils/helper");
const actionHelper = require("../utils/action-helper");
let self = {};
const uuid = require("uuid");
self.getAll = async (req, res) => {
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);

  try {
    const { rows, count } = await EmployeeAge.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", order]],
    });

    const response = paginate.getPagingData(
      { rows, count },
      page,
      limit,
      count
    );

    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await EmployeeAge.findOne({
      where: {
        id: id,
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
self.getEmployeeAgeByStakeholderId = async (req, res) => {
  const { id } = req.params;
  const {
    page = process.env.page,
    size = process.env.size,
    order = process.env.order,
  } = req.query;

  const { limit, offset } = paginate.getPagination(page, size);
  try {
    const data = await EmployeeAge.findAndCountAll({
      limit,
      offset,
      where: { stakeholder_id: id },
      order: [["createdAt", order]],
      include: ["agelevel"],
    });

    const response = paginate.getPagingData(data, page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
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
    //let ssyy = []
    console.log("The array", arr[0].stakeholder_id);

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

      const bodDate = new Date(req.body.year);

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

    let us = usr.usrID;
    let body = req.body;
    const arr = body.empAgeArr;
    //let ssyy = []
    console.log("The array", arr[0].stakeholder_id);

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
  try {
    let id = req.params.id;
    let data = await EmployeeAge.destroy({
      where: {
        id: id,
      },
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = self;
