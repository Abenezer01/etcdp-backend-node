const {
  Department,
  Position,
  User,
  UserPosition,
  ActionState,
  Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, updateRecord, deleteRecord } = require('../utils/format-helper');
let master = require("../../config/master");

const { EtDatetime, ETC, BahireHasab, ConvertToEthiopic } = require('abushakir')

const i18n = require('i18n');
// const lang = 'en'
// i18n.configure({
//   locales: ['en','am', 'es'],
//   directory: __dirname + '/../../locales',
//   defaultLocale: lang?lang:'en',
//   queryParameter: 'lang',
//   cookie: 'locale',
//   updateFiles: false, // set this to true if you want i18n to create locale files for missing translations
// });
const Op = Sequelize.Op;

let self = {};


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Department, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};

self.get = async (req, res) => {
  getRecordById(Department, req, res);
};

self.update = async (req, res) => {
updateRecord(Department, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Department, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Department.findAll({
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
    let body = req.body;
    let data = await Department.create(body);

    let usr = await usrData.userData(req, res);

    if (data) {
      let roles = master.roleName;
      let pos;
      for (let name of roles) {
        if (name == "Admin") {
          pos = await Position.create({
            department_id: data.id,
            name: name,
            description: "discr",
            is_head: true,
          });
        } else {
          pos = await Position.create({
            department_id: data.id,
            name: name,
            description: "discr",
            is_head: false,
          });
        }

        if (pos) {
          await actionHelper.saveActionState(
            pos.id,
            "Position",
            "REGISTER",
            usr.usrID,
            req,
            res
          );
        } else {
          await Department.destroy({
            where: {
              id: data.id,
            },
          });
        }
      }
    }

    if (data) {
      await actionHelper.saveActionState(
        data.id,
        "department",
        "REGISTER",
        usr.usrID,
        req,
        res
      );
    }
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



self.getSubDepartments = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { parent_department_id: id }
    const paginatedResult = await paginationHelper(Department, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};

self.getParentDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    const whereCondition = { parent_department_id: null }
    const paginatedResult = await paginationHelper(Department, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};

self.getParentOrGivenId = async (req, res) => {
  try {
    let id = req.params.id;
    let data = null;
    if (id) {
      data = await Department.findOne({
        where: {
          id: id,
        },
      });
    } else {
      data = await Department.findOne({
        where: {
          parent_department_id: null,
        },
      });
    }
  

    res.apiSuccess({
      data: data,
      total: 1 // Assuming a single user is being returned
    }, {
      pageSize: 1,
      page: 1
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// self.getStructure = async (req, res) => {
//   try {
//     const departments = await Department.findAll();

//     const arr = await Promise.all(
//       departments.map(async (dept) => {
//         const userpos = await UserPosition.findAll({
//           attributes: ["user_id"],
//           where: { department_id: dept.id },
//         });
//         const userId = [...new Set(userpos.map((item) => item.user_id))].filter(
//           (n) => n
//         );

//         const staffs = await User.findAndCountAll({
//           where: {
//             id: {
//               [Op.in]: userId,
//             },
//           },
//         });

//         const pos = await Position.findOne({
//           where: { department_id: dept.id, is_head: true },
//         });

//         const uspos = pos
//           ? await UserPosition.findOne({ where: { position_id: pos.id } })
//           : null;

//         const head = uspos
//           ? await User.findOne({ where: { user_id: uspos.user_id } })
//           : null;

//         return {
//           id: dept.id,
//           parent_node_id: dept.parent_department_id,
//           name: dept.name,
//           head: head ? head : null,
//           staff_no: staffs.count,
//         };
//       })
//     );

//     return res.apiSuccess({
//       data: arr,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };


self.getDepartmentHead = async (req, res) => {
  let id = req.params.id;
  try {
    let data = await Department.findOne({
      where: {
        id: id,
      },
    });
    if (data) {
      let pos = await Position.findOne({
        where: {
          department_id: data.id,
          is_head: true,
        },
      });
      if (pos) {
        let userpos = await UserPosition.findOne({
          where: {
            position_id: pos.id,
          },
        });

        if (userpos) {
          let usr = await User.findOne({
            attributes: ["full_name", "first_name", "middle_name", "last_name"],
            where: {
              id: userpos.user_id,
            },
          });
          let temp = usr.toJSON();
          temp.position_name = pos.name;

          return res.json(temp);
        } else {
          return res.status(404).json({
            message: "User Position not found!",
          });
        }
      } else {
        return res.status(404).json({
          message: "Position not found!",
        });
      }
    } else {
      return res.status(404).json({
        message: "Department not found!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//to routing and bread crump

let all = [];
self.getToRoot = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Department.findAll();
    await self.getPath(data, id);


    res.apiSuccess({
      data: all,
      total: 1 // Assuming a single user is being returned
    });
  } catch (error) {
    console.error("Error:", error);
    res.apiError(error);
  }
};

self.getPath = async (arr, x) => {
  all = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id == x) {
      self.getPath(arr, arr[i].parent_department_id);
      if (arr[i].parent_department_id !== null) {
        let child = await Department.findOne({
          where: {
            id: arr[i].parent_department_id,
          },
        });
        all.push(child);
        // all.push(arr[i].parent_department_id);
      }
    }
  }
};

let children = [];
self.getAllChildren = async (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let dd = await Department.findAll({
      where: {
        parent_department_id: arr[i].id,
      },
    });
    if (dd.length > 0) {
      children.concat(dd);
      self.getChildren(dd);
    }
  }
  return children;
};

self.getDepartments = async (req, res) => {
  try {
    const id = req.params.id;
    let departments = [];

    if (id) {
      const parent = await Department.findOne({ where: { id } });
      if (!parent) {
        return res.status(404).json({ error: "Parent department not found" });
      }
      const children = await Department.findAll({ where: { parent_department_id: id } });
      const allChildren = await self.getAllChildren(children);
      departments = [parent, ...children, ...allChildren];
    } else {
      departments = await Department.findAll();
    }

    const arr = await Promise.all(
      departments.map(async (dept) => {
        const userpos = await UserPosition.findAll({
          attributes: ["user_id"],
          where: { department_id: dept.id },
        });
        const userId = [...new Set(userpos.map((item) => item.user_id))].filter((n) => n);

        const staffs = await User.findAndCountAll({
          where: { id: { [Op.in]: userId } },
        });

        const pos = await Position.findOne({
          where: { department_id: dept.id, is_head: true },
        });

        const uspos = pos ? await UserPosition.findOne({ where: { position_id: pos.id } }) : null;
        const head = uspos ? await User.findOne({ where: { user_id: uspos.user_id } }) : null;

        return {
          id: dept.id,
          parent_node_id: dept.parent_department_id,
          name: dept.name,
          head: head || null,
          staff_no: staffs.count,
        };
      })
    );

    const result = id ? arr.map((dept) =>
      dept.id === id ? { ...dept, parent_node_id: null } : dept
    ) : arr;

    return res.apiSuccess({
      data: result
    });

  } catch (error) {
    console.error("Error:", error);
    res.apiError(error);
  }
};


// self.getChildren = async (req, res) => {
//   let id = req.params.id;
//   try {
//     let parent = await Department.findOne({
//       where: {
//         id: id,
//       },
//     });
//     let data = await Department.findAll({
//       where: {
//         parent_department_id: id,
//       },
//     });
//     let all = await self.getAllChildren(data);
//     Array.prototype.push.apply(all, data);
//     all.unshift(parent);
//     let arr = [];
//     for (let dept of all) {
//       let posi = await UserPosition.findAll({
//         attributes: ["user_id"],
//         where: {
//           department_id: dept.id,
//         },
//       });

//       let userId = [...new Set(posi.map((item) => item.user_id))].filter(
//         (n) => n
//       );

//       let staffs = await User.findAndCountAll({
//         where: {
//           id: {
//             [Op.in]: userId,
//           },
//         },
//       });

//       let pos = await Position.findOne({
//         where: {
//           department_id: dept.id,
//           is_head: true,
//         },
//       });

//       const uspos = pos
//         ? await UserPosition.findOne({ where: { position_id: pos.id } })
//         : null;
//       const head = uspos
//         ? await User.findOne({ where: { user_id: uspos.user_id } })
//         : null;

//       arr.push({
//         id: dept.id,
//         parentNodeId: dept.parent_department_id,
//         name: dept.name,
//         head: head ? head : null,
//         staff_no: staffs.count,
//       });
//     }

//     // arr.find(department => department.id==id).parentNodeId=null
//     // return res.json(arr)
//     const container = arr.map((department) =>
//       department.id === id ? { ...department, parentNodeId: null } : department
//     );

//     return res.apiSuccess({
//       data: container,
//     });


//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

self.getDepartmentDashboad = async (req, res) => {
  try {
    let id = req.params.id;

    let departments = await Department.findAll({
      where: {
        parent_department_id: id,
      },
    });

    let positions = await Position.findAll({
      where: {
        department_id: id,
      },
    });

    let userpositions = await UserPosition.findAll({
      where: {
        department_id: id,
        is_primary: true,
      },
    });

    return res.json({
      departments: departments.length,
      positions: positions.length,
      users: userpositions.length,
    });
  } catch (error) {
    return res.status(500).jso({
      message: error.message,
    });
  }
};

self.translateString = async (str, translateTo) => {
  try {
    translate.engine = "libre";
    const translated_string = await translate(str, translateTo);
    return translated_string;
  } catch (error) {
    return {
      message: error.message,
    };
  }
};

self.test = async(req, res) => {
  try{
    
    const test = new ETC(2015, 10, 1);
    const testg = new Date(test.moment)

    // return res.json(testg)
    const me = new Date('2023-05-03').getTime()
    const gregorian1 = Date.now();
    const ethiopian1  = new EtDatetime(me);

    return res.json({
      me,
      gregorian1,
      ethiopian1
    })
    const ethiopian = new EtDatetime();
    const gregorian = new Date(ethiopian.moment);
    // const x = i18n.__('greeting');
    // return res.json(x)

    const now = new EtDatetime(); // => 2012-07-28 17:18:31.466
    const nowDate = now.date; // => {year: 2012, month: 7, day: 28}
    const nowTIme = now.time; // => {h: 17, m: 18, s: 31}
    
    // const covidFirstConfirmedEpoch = new EtDatetime(covidFirstConfirmed.moment);
    //

    const ethiopianCalendar = new ETC(2015, 10, 1);
///
    let months = ethiopianCalendar.monthDays(true, true); // Iterable Object of the given month
    let monthDays = ethiopianCalendar.monthDays(); // => [2012, 7, 1, 1]
    // [year, month, dateNumber, dateNameIndex], Monday as First weekday

    const nextmonth = ethiopianCalendar.nextMonth; // => ETC instance of nextMonth, same year
    const previousmonth = ethiopianCalendar.prevYear; // => ETC instance of prevYear, same month
    /**
     * Bahire Hasab Module [BahireHasab]
     */
    const bh = new BahireHasab(2016);
    //  let bh: BahireHasab = new BahireHasab(); // Get's the current year

    let evan = bh.getEvangelist(true); // => ሉቃስ

    let holiday = bh.getSingleBealOrTsom('ትንሳኤ'); // {month: ሚያዝያ, date: 20}

    const allFastings = bh.allAtswamat; // => List of All fasting and Movable holidays

    /**
     * Arabic or English number (1,2,3...) to Ethiopic or GE'EZ number Convertor
     */
    const testNums = [1, 10, 15, 20, 25, 78, 105, 333, 450, 600, 1000, 1001, 1010, 1056, 1200, 2013, 9999, 10000];
    let arr = []
    for (const num of testNums) {
      let eachConv = ConvertToEthiopic(num) // [፩, ፲, ፲፭, ፳, ፳፭, ፸፰, ፻፭, ፫፻፴፫, ፬፻፶, ፮፻, ፲፻, ፲፻፩, ፲፻፲, ፲፻፶፮, ፲፪፻, ፳፻፲፫, ፺፱፻፺፱, ፻፻]
      arr.push(eachConv)
    }

    return res.json({
      gc: new Date(gregorian1).toISOString(),
      ec: ethiopian1.toIso8601String(),
      ethiopian: ethiopian.toIso8601String(),
      gregorian: gregorian.toISOString(),
      now, 
      nowDate, 
      nowTIme, 
      ethiopianCalendar, 
      months, 
      monthDays, 
      nextmonth, 
      previousmonth, 
      bh, 
      evan, 
      holiday, 
      allFastings, 
      arr
  })
} catch (error) {
  return res.status(500).json({
    message: error.message
  })
}
}

module.exports = self;
