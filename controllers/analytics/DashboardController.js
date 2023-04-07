const {
    note,
    stakeholder,
    stakeholdertype,
    stakecategory,
    stakesubcategory,
    project,
    projecttype,
    projectcategory,
    projectsubcategory,
    document,
    documenttype,
    documentcategory,
    documentsubcategory,
    resource,
    resourcetype,
    resourcecategory,
    resourcesubcategory,
    department,
    projecttime,

    Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { mainanalysismodules } = require("../../config/master");
const actionHelper = require("../utils/action-helper");
const departmentHelper = require("../utils/department-helper");

const Op = Sequelize.Op;

const moment = require("moment");

let self = {};

self.getGeneralAnalysis = async(req, res) => {
    try {
        let module = req.params.module;
        let id = req.params.id;

        // let encrypted = await encrypt(module)
        // return res.json({
        //     encrypted,
        //     decrypted: await decrypt(encrypted)
        // })

        const moduleArr = mainanalysismodules[module];

        const Model = moduleArr[0];
        const TypeModel = moduleArr[1];
        const CategoryModel = moduleArr[2];

        let moduletype = await eval(TypeModel).findOne({
            where: {
                id: id,
            },
        });

        let stake = await eval(Model).findAndCountAll({
            where: {
                [`${moduleArr[1]}_id`]: moduletype.id,
            },
        });

        // let str = `${moduleArr[1]}_id`

        let categories = await eval(CategoryModel).findAll({
            where: {
                [`${moduleArr[1]}_id`]: moduletype.id,
            },
        });

        let categoryelement = {};

        if (categories.length > 0) {
            for (let category of categories) {
                let catestake = await eval(Model).findAll({
                    where: {
                        [`${moduleArr[2]}_id`]: category.id,
                    },
                });

                categoryelement[category.title] = catestake.length;
            }
        }

        let first = {
            title: moduletype.title,
            list: categoryelement,
            count: stake.count,
        };

        return res.status(200).json(first);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.getGeneralAnalysisCategory = async(req, res) => {
    try {
        let module = req.params.module;
        let id = req.params.id;

        const moduleArr = mainanalysismodules[module];

        const Model = moduleArr[0];
        const CategoryModel = moduleArr[2];
        const SubCategoryModel = moduleArr[3];

        let modulecategory = await eval(CategoryModel).findOne({
            where: {
                id: id,
            },
        });

        if (!modulecategory) {
            return res.status(404).json({
                message: `${module} category not found`,
            });
        }

        let stake = await eval(Model).findAndCountAll({
            where: {
                [`${moduleArr[2]}_id`]: modulecategory.id,
            },
        });

        // let str = `${moduleArr[1]}_id`

        let subcategories = await eval(SubCategoryModel).findAll({
            where: {
                [`${moduleArr[2]}_id`]: modulecategory.id,
            },
        });

        let subcategoryelement = {};

        if (subcategories.length > 0) {
            for (let subcategory of subcategories) {
                let catestake = await eval(Model).findAll({
                    where: {
                        [`${moduleArr[3]}_id`]: subcategory.id,
                    },
                });

                subcategoryelement[subcategory.title] = catestake.length;
            }
        }

        let first = {
            title: modulecategory.title,
            list: subcategoryelement,
            count: stake.count,
        };

        return res.status(200).json(first);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.getGeneralAnalysisDepartments = async(req, res) => {
    let module = req.params.module;
    let id = req.params.id;

    try {
        const moduleArr = mainanalysismodules[module];

        const Model = moduleArr[0];
        const TypeModel = moduleArr[1];
        const CategoryModel = moduleArr[2];
        let usr = await usrData.userData(req, res);

        let departments = await self.getChildren(usr.departmentID);

        let moduletype = await eval(TypeModel).findOne({
            where: {
                id: id,
            },
        });

        let stake = await eval(Model).findAndCountAll({
            where: {
                [`${moduleArr[1]}_id`]: moduletype.id,
            },
        });

        // let str = `${moduleArr[1]}_id`

        let categories = await eval(CategoryModel).findAll({
            where: {
                [`${moduleArr[1]}_id`]: moduletype.id,
            },
        });

        let categoryelement = [];

        if (categories.length > 0) {
            for (let category of categories) {
                let catestake = await eval(Model).findAll({
                    where: {
                        [`${moduleArr[2]}_id`]: category.id,
                    },
                    include: [{
                        model: department,
                        as: "department",
                    }, ],
                });

                const countByName = catestake.reduce((acc, obj) => {
                    const department_id = obj.department_id;

                    acc[obj.department.name] = (acc[department_id] || 0) + 1;
                    return acc;
                }, {});

                //   const filteredData = data.filter(item => !["EtCDP", "TEST"].includes(item.name));
                let existing = Object.keys(countByName);
                const filteredData = departments.filter(
                    (item) => !existing.includes(item.name)
                );
                const nameFiltered = filteredData.map((item) => item.name);

                let remainingObj = {};

                nameFiltered.forEach((element) => {
                    remainingObj[element] = 0;
                });
                const mergedObj = Object.assign({}, countByName, remainingObj);

                let deptObj = {};

                deptObj["name"] = category.title;
                deptObj["count"] = catestake.length;
                deptObj["data"] =
                    Object.keys(mergedObj).length === 0 ? 0 : Object.values(mergedObj);

                categoryelement.push(deptObj);
            }
        }

        first = {
            title: moduletype.title,
            series: categoryelement,
            departments: [...new Set(departments.map((item) => item.name))].filter(
                (n) => n
            ),
            count: stake.count,
        };

        return res.status(200).json(first);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

let children = [];
self.getAllChildren = async(arr) => {
    for (var i = 0; i < arr.length; i++) {
        let dd = await department.findAll({
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

self.getChildren = async(id) => {
    try {
        let parent = await department.findOne({
            where: {
                id: id,
            },
        });
        let data = await department.findAll({
            where: {
                parent_department_id: id,
            },
        });
        let all = await self.getAllChildren(data);
        Array.prototype.push.apply(all, data);
        all.unshift(parent);

        return all;
    } catch (error) {
        return {
            message: error.message,
        };
    }
};

self.getGeneralAnalysisDepartmentsByCategory = async(req, res) => {
    let module = req.params.module;
    let id = req.params.id;

    try {
        const moduleArr = mainanalysismodules[module];

        const Model = moduleArr[0];
        const CategoryModel = moduleArr[2];
        const SubCategoryModel = moduleArr[3];
        let usr = await usrData.userData(req, res);

        let departments = await self.getChildren(usr.departmentID);

        let modulecategory = await eval(CategoryModel).findOne({
            where: {
                id: id,
            },
        });

        let stake = await eval(Model).findAndCountAll({
            where: {
                [`${moduleArr[1]}_id`]: modulecategory.id,
            },
        });

        let subcategories = await eval(SubCategoryModel).findAll({
            where: {
                [`${moduleArr[1]}_id`]: modulecategory.id,
            },
        });

        let subcategoryelement = {};

        if (subcategories.length > 0) {
            for (let subcategory of subcategories) {
                let catestake = await eval(Model).findAll({
                    where: {
                        [`${moduleArr[3]}_id`]: subcategory.id,
                    },
                    include: [{
                        model: department,
                        as: "department",
                    }, ],
                });

                const countByName = catestake.reduce((acc, obj) => {
                    const department_id = obj.department_id;

                    acc[obj.department.name] = (acc[department_id] || 0) + 1;
                    return acc;
                }, {});

                let existing = Object.keys(countByName);
                const filteredData = departments.filter(
                    (item) => !existing.includes(item.name)
                );
                const nameFiltered = filteredData.map((item) => item.name);

                let remainingObj = {};

                nameFiltered.forEach((element) => {
                    remainingObj[element] = 0;
                });
                const mergedObj = Object.assign({}, countByName, remainingObj);

                let deptObj = {};
                deptObj["count"] = catestake.length;
                deptObj["departments"] =
                    Object.keys(mergedObj).length === 0 ? 0 : Object.values(mergedObj);
                subcategoryelement[subcategory.title] =
                    Object.keys(deptObj).length === 0 ? 0 : deptObj;
            }
        }

        let first = {
            title: modulecategory.title,
            list: subcategoryelement,
            departments: [...new Set(departments.map((item) => item.name))].filter(
                (n) => n
            ),
            count: stake.count,
        };

        return res.status(200).json(first);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.getModuleTypesAnalysis = async(req, res) => {
    let module = req.params.module;
    try {
        const moduleArr = mainanalysismodules[module];
        const Model = moduleArr[0];

        const TypeModel = moduleArr[1];

        let moduletype = await eval(TypeModel).findAll();

        let year = moment().year();
        let last_year = year - 1;

        // return res.json(moment().year())

        let arr = await Promise.all(
            moduletype.map(async(item) => {
                let model = await eval(Model).findAndCountAll({
                    where: {
                        [`${moduleArr[1]}_id`]: item.id,
                    },
                });

                let this_year_model = await eval(Model).findAndCountAll({
                    where: {
                        [`${moduleArr[1]}_id`]: item.id,
                        createdAt: {
                            [Op.gte]: new Date(year, 0, 1), // Start of the year
                            [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                        },
                    },
                });
                let last_year_model = await eval(Model).findAndCountAll({
                    where: {
                        [`${moduleArr[1]}_id`]: item.id,
                        createdAt: {
                            [Op.gte]: new Date(last_year, 0, 1), // Start of the year
                            [Op.lt]: new Date(last_year + 1, 0, 1), // Start of the next year
                        },
                    },
                });

                let temp = item.toJSON();
                temp["total"] = model.count;
                temp["this_year"] = this_year_model.count;
                temp["last_year"] = last_year_model.count;
                return temp;
            })
        );

        return res.json(arr);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


self.getStakeholderTypesAnalysis = async(req, res) => {
    let module = req.params.module;
    try {

        let stakeholdertypes = await stakeholdertype.findAll();

        let year = moment().year();
        let last_year = year - 1;

        // return res.json(moment().year())

        let arr = await Promise.all(
            stakeholdertypes.map(async(item) => {
                let model = await stakeholder.findAndCountAll({
                    where: {
                        stakeholdertype_id: item.id,
                    },
                });

                let this_year_model = await stakeholder.findAndCountAll({
                    where: {
                        stakeholdertype_id: item.id,
                        license_issued_date: {
                            [Op.gte]: new Date(year, 0, 1), // Start of the year
                            [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                        },
                    },
                });
                let last_year_model = await stakeholder.findAndCountAll({
                    where: {
                        stakeholdertype_id: item.id,
                        license_issued_date: {
                            [Op.gte]: new Date(last_year, 0, 1), // Start of the year
                            [Op.lt]: new Date(last_year + 1, 0, 1), // Start of the next year
                        },
                    },
                });

                let temp = item.toJSON();
                temp["total"] = model.count;
                temp["this_year"] = this_year_model.count;
                temp["last_year"] = last_year_model.count;
                return temp;
            })
        );

        return res.json(arr);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.getProjectTypesAnalysis = async(req, res) => {
    let module = req.params.module;
    try {

        let projecttypes = await projecttype.findAll();

        let year = moment().year();
        let last_year = year - 1;

        // return res.json(moment().year())

        let arr = await Promise.all(
            projecttypes.map(async(item) => {
                let model = await project.findAndCountAll({
                    where: {
                        projecttype_id: item.id,
                    }
                });

                let this_year_model = await project.findAndCountAll({
                    where: {
                        projecttype_id: item.id
                    },
                    include: [{
                        model: projecttime,
                        where: {
                            commencement_date: {
                                [Op.gte]: new Date(year, 0, 1), // Start of the year
                                [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                            }
                        }
                    }]
                });
                let last_year_model = await project.findAndCountAll({
                    where: {
                        projecttype_id: item.id
                    },
                    include: [{
                        model: projecttime,
                        where: {
                            commencement_date: {
                                [Op.gte]: new Date(last_year, 0, 1), // Start of the year
                                [Op.lt]: new Date(last_year + 1, 0, 1), // Start of the next year
                            }
                        }
                    }]
                });

                let temp = item.toJSON();
                temp["total"] = model.count;
                temp["this_year"] = this_year_model.count;
                temp["last_year"] = last_year_model.count;
                return temp;
            })
        );

        return res.json(arr);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.getResourceTypesAnalysis = async(req, res) => {
    let module = req.params.module;
    try {
        let resourcetypes = await projecttype.findAll();

        let year = moment().year();
        let last_year = year - 1;

        // return res.json(moment().year())

        let arr = await Promise.all(
            resourcetypes.map(async(item) => {
                let model = await resource.findAndCountAll({
                    where: {
                        resourcetype_id: item.id,
                    },
                });

                let this_year_model = await resource.findAndCountAll({
                    where: {
                        resourcetype_id: item.id,
                        createdAt: {
                            [Op.gte]: new Date(year, 0, 1), // Start of the year
                            [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                        },
                    },
                });
                let last_year_model = await resource.findAndCountAll({
                    where: {
                        resourcetype_id: item.id,
                        createdAt: {
                            [Op.gte]: new Date(last_year, 0, 1), // Start of the year
                            [Op.lt]: new Date(last_year + 1, 0, 1), // Start of the next year
                        },
                    },
                });

                let temp = item.toJSON();
                temp["total"] = model.count;
                temp["this_year"] = this_year_model.count;
                temp["last_year"] = last_year_model.count;
                return temp;
            })
        );

        return res.json(arr);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};



self.getDocumentTypesAnalysis = async(req, res) => {
    let module = req.params.module;
    try {
        let documenttypes = await documenttype.findAll();

        let year = moment().year();
        let last_year = year - 1;

        // return res.json(moment().year())

        let arr = await Promise.all(
            documenttypes.map(async(item) => {
                let model = await document.findAndCountAll({
                    where: {
                        documenttype_id: item.id,
                    },
                });

                let this_year_model = await document.findAndCountAll({
                    where: {
                        documenttype_id: item.id,
                        createdAt: {
                            [Op.gte]: new Date(year, 0, 1), // Start of the year
                            [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                        },
                    },
                });
                let last_year_model = await document.findAndCountAll({
                    where: {
                        documenttype_id: item.id,
                        createdAt: {
                            [Op.gte]: new Date(last_year, 0, 1), // Start of the year
                            [Op.lt]: new Date(last_year + 1, 0, 1), // Start of the next year
                        },
                    },
                });

                let temp = item.toJSON();
                temp["total"] = model.count;
                temp["this_year"] = this_year_model.count;
                temp["last_year"] = last_year_model.count;
                return temp;
            })
        );

        return res.json(arr);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};




self.getModuleEachTypesAnalysis = async(req, res) => {
    try {
        let module = req.params.module;
        let id = req.params.id;

        const moduleArr = mainanalysismodules[module];

        const Model = moduleArr[0];
        const TypeModel = moduleArr[1];

        let moduletype = await eval(TypeModel).findOne({
            where: {
                id: id,
            },
        });

        const currentYear = moment().year();
        const yearArray = Array.from({ length: 5 },
            (_, index) => currentYear - (4 - index)
        );

        const queries = yearArray.map(async(yr) => {
            const stake = await eval(Model).findAndCountAll({
                where: {
                    [`${moduleArr[1]}_id`]: moduletype.id,
                    createdAt: {
                        [Op.gte]: new Date(yr, 0, 1), // Start of the year
                        [Op.lt]: new Date(yr + 1, 0, 1), // Start of the next year
                    },
                },
            });

            return [yr, stake ? stake.count : 0];
        });

        const results = await Promise.all(queries);

        const obj = Object.fromEntries(results);
        return res.json({
            years: Object.keys(obj),
            series: Object.values(obj),
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.getModuleEachCategoriesAnalysis = async(req, res) => {
    try {
        let module = req.params.module;
        let id = req.params.id;

        const moduleArr = mainanalysismodules[module];

        const Model = moduleArr[0];
        const CategoryModel = moduleArr[2];

        let modulecategory = await eval(CategoryModel).findOne({
            where: {
                id: id,
            },
        });

        const currentYear = moment().year();
        const yearArray = Array.from({ length: 5 },
            (_, index) => currentYear - (4 - index)
        );

        const queries = yearArray.map(async(yr) => {
            const stake = await eval(Model).findAndCountAll({
                where: {
                    [`${moduleArr[2]}_id`]: modulecategory.id,
                    createdAt: {
                        [Op.gte]: new Date(yr, 0, 1), // Start of the year
                        [Op.lt]: new Date(yr + 1, 0, 1), // Start of the next year
                    },
                },
            });

            return [yr, stake ? stake.count : 0];
        });

        const results = await Promise.all(queries);

        const obj = Object.fromEntries(results);
        return res.json({
            years: Object.keys(obj),
            series: Object.values(obj),
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.getCategoriesByTypeId = async(req, res) => {
    try {
        let module = req.params.module;
        let id = req.params.id;

        const moduleArr = mainanalysismodules[module];
        const CategoryModel = moduleArr[2];

        let modulecategories = await eval(CategoryModel).findAll({
            where: {
                [`${moduleArr[1]}_id`]: id,
            },
        });

        return res.json(modulecategories);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.getSubCategoriesByModuleCategoryId = async(req, res) => {
    try {
        let module = req.params.module;
        let id = req.params.id;

        const moduleArr = mainanalysismodules[module];
        const SubCategoryModel = moduleArr[3];

        let modulesubcategories = await eval(SubCategoryModel).findAll({
            where: {
                [`${moduleArr[2]}_id`]: id,
            },
        });

        return res.json(modulesubcategories);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.getGeneralAnalysisSubCategoryDepartments = async (req, res) => {

    let {module, id} = req.params
    try {
      const [Model, , , SubCategoryModel] = mainanalysismodules[module];
  
      const { departmentID } = await usrData.userData(req, res);

      let rootdepartment = await department.findOne({
        where: {
            id: departmentID
        }
      })
      let departments = await departmentHelper.getChildren(departmentID);
      departments.unshift(rootdepartment)
  
      const modulesubcategory = await eval(SubCategoryModel).findOne({ where: { id } });
  
      const models = await eval(Model).findAll({
        where: {
          [`${SubCategoryModel}_id`]: modulesubcategory.id,
        },
      });
      
      const series = departments.map((dept) => {
        const value = models.filter((model) => model.department_id === dept.id);
        return value.length > 0 ? value.length : 0;
      });
      const deptmap = departments.map((dept) => dept.name);
  
      const data = {
        series,
        departments: deptmap,
      };
  
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
}



  
module.exports = self;