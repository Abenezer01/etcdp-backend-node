const {

    Note, 
    Stakeholder, 
    StakeholderType, 
    StakeCategory, 
    StakeSubCategory, 
    Project, 
    ProjectType, 
    ProjectCategory, 
    ProjectSubCategory, 
    Document, 
    DocumentType, 
    DocumentCategory, 
    DocumentSubCategory, 
    Resource, 
    ResourceType, 
    ResourceCategory, 
    ResourceSubCategory, 
    Department, 
    ProjectTime, 
    ProjectFinance, 
    ProjectVariation, 
    ProjectPlan, 
    ProjectReport, 
    Address, 
    ActionState,

    Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { mainanalysismodules } = require("../../config/master");
const actionHelper = require("../utils/action-helper");
const apiHelper = require("../utils/API-helper")
const departmentHelper = require("../utils/department-helper");

const Op = Sequelize.Op;

const moment = require("moment");
const { saveActionState } = require("../utils/action-helper");

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
                [`${moduleArr[2]}_id`]:  Model.id,
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
                        model: Department,
                        as: "Department",
                    }, ],
                });

                const countByName = catestake.reduce((acc, obj) => {
                    const department_id = obj.department_id;

                    acc[obj.Department.name] = (acc[department_id] || 0) + 1;
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

self.getChildren = async(id) => {
    try {
        let parent = await Department.findOne({
            where: {
                id: id,
            },
        });
        let data = await Department.findAll({
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
                        model: Department,
                        as: "Department",
                    }, ],
                });

                const countByName = catestake.reduce((acc, obj) => {
                    const department_id = obj.department_id;

                    acc[obj.Department.name] = (acc[department_id] || 0) + 1;
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

      let rootdepartment = await Department.findOne({
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


self.getProjectGeneralFinancialAnalysis = async(req, res) => {
    try {
        let projecttypes = await projecttype.findAll()

        let arr  = []
        for(let type of projecttypes) {
            let projects = await project.findAll({
                where: {
                    projecttype_id: type.id
                }
            })

            let proIDs = projects.map((item)=> item.id).filter(n=>n)

            //main contract finance

            let maincontractpriceamount = await projectfinance.findAll({
                where: {
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            })

            const maincontractpricetotal  = maincontractpriceamount.reduce((total, item) => total + item.main_contract_price_amount, 0);


            
            arr.push({
                id: type.id,
                name: type.title,
                main_contract: maincontractpricetotal
            })


        }

        return res.json(arr)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getProjectTypeCategoriesFinancialAnalysis = async(req, res) => {
    let {id} = req.params
    try {
        let projectcategories = await projectcategory.findAll({
            where: {
                projecttype_id: id
            }
        })


        let arr  = []

        for(let category of projectcategories) {
            let projects = await project.findAll({
                where: {
                    projectcategory_id: category.id
                }
            })

            let proIDs = projects.map((item)=> item.id).filter(n=>n)

            //main contract finance

            let maincontractpriceamount = await projectfinance.findAll({
                where: {
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            })

            const maincontractpricetotal  = maincontractpriceamount.reduce((total, item) => total + item.main_contract_price_amount, 0);


            
            arr.push({
                id: category.id,
                name: category.title,
                main_contract: maincontractpricetotal
            })


        }

        return res.json(arr)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
self.getProjectTypeFinancialInformation = async(req, res) => {
    try {

        let {id} = req.params

        let projects = await project.findAll({
            where: {
                projecttype_id: id
            }
        })

        
        let proIDs = projects.map((item)=> item.id).filter(n=>n)

        let maincontractpriceamount = await projectfinance.findAll({
            where: {
                project_id: {
                    [Op.in]: proIDs
                }
            }
        })

        const maincontractpricetotal  = maincontractpriceamount.reduce((total, item) => total + item.main_contract_price_amount, 0);


        let variationsupplements = await projectvariation.findAll({
            where: {
                project_id: {
                    [Op.in]: proIDs
                }
            }
        })
        
        
        
        const filterSupplementVariations = (type) => variationsupplements.filter((item) => item.type === type);
        
        const variations = filterSupplementVariations("VARIATION");
        const supplements = filterSupplementVariations("SUPPLEMENT");
        const omissions = filterSupplementVariations("OMISSION");
        // const specials = filterSupplementVariations("SPECIAL");
        
        const variation_total = variations.reduce((total, item) => total + item.amount, 0);
        const supplement_total = supplements.reduce((total, item) => total + item.amount, 0);
        const omission_total = omissions.reduce((total, item) => total + item.amount, 0);
        // const special_total = specials.reduce((total, item) => total + item.amount, 0);

        let totalcontractamount = maincontractpricetotal + variation_total + supplement_total - omission_total
        
        
        return res.json({
            total_contract_amount: totalcontractamount,
            main_contract: maincontractpricetotal,
            supplement: supplement_total,
            variation: variation_total,
            omission: omission_total
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getProjectTypeFinancialInformationDepartments = async(req, res) => {
    
    let id = req.params.id;

    try {

        let usr = await usrData.userData(req, res);

        let departments = await self.getChildren(usr.departmentID);

        let modulecategory = await projectcategory.findOne({
            where: {
                id: id,
            },
        });

        let models = await project.findAll({
            where: {
                projectcategory_id: modulecategory.id,
            },
        });


        let series = []
        series = await Promise.all(departments.map((dept) => {
            const departmentprojects = models.filter((model) => model.department_id === dept.id);
            let proIDs = departmentprojects.map((item)=> item.id).filter(n=>n)

            let maincontractpriceamount = projectfinance.findAll({
                where: {
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            })

        
            const maincontractpricetotal  = 0 
            if(maincontractpriceamount.length > 0){
                maincontractpriceamount.reduce((total, test) => total + test.main_contract_price_amount, 0);

            }


            let variationsupplements = projectvariation.findAll({
                where: {
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            })

            const variations = variationsupplements.length > 0 ? variationsupplements.filter((item) => item.type === "VARIATION") : []
            const supplements = variationsupplements.length > 0 ? variationsupplements.filter((item) => item.type === "SUPPLEMENT") : []
            const omissions = variationsupplements.length > 0? variationsupplements.filter((item) => item.type === "OMISSION") : []

            const variation_total = variations.length >0 ? variations.reduce((total, item) => total + item.amount, 0) : 0;
            const supplement_total = supplements.length > 0 ? supplements.reduce((total, item) => total + item.amount, 0) : 0;
            const omission_total =omissions.length >0 ? omissions.reduce((total, item) => total + item.amount, 0) : 0;


            return {
                name: dept.name,
                main_contract_price: maincontractpricetotal,
                supplement: supplement_total, 
                variation: variation_total,
                omission: omission_total
            }
            }))


            let seriesArr = [
                {
                    name: "Main Contract Price",
                    data: series.map((item)=> item.main_contract_price)
                },
                {
                   name: "Supplement",
                   data: series.map((item)=> item.supplement)
                },
                {
                    name: "Variation",
                    data: series.map((item)=> item.variation)
                },
                {
                    name: "Omission",
                    data: series.map((item)=> item.omission)
                }
            ]

        
        
        return res.status(200).json({
            data: seriesArr,
            departments: [...new Set(departments.map((item) => item.name))].filter(
                (n) => n
            ),

        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
    });
  
    }
}

self.getProjectCategoryLocationInformation = async(req, res) => {
    try {

        let {id} = req.params

        let projects = await project.findAll({
            where: {
                projectcategory_id: id
            }
        })

        let arr = []

        for(let pro of projects){
            let proaddress =  await address.findOne({
                where: {
                    model_id: pro.id
                }
            })
            if(proaddress){

                arr.push([
                    proaddress.easting,
                    proaddress.northing,
                    pro.id
                ])
            }
        }

        return res.json(arr)


    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

//stakeholder
self.getStakeholderCategoryLocationInformation = async(req, res) => {
    try {

        // let {id} = req.params

        // let stakeholders = await stakeholder.findAll({
        //     where: {
        //         stakecategory_id: id
        //     }
        // })


        // let stakeIDs = stakeholders.map((item)=> item.id).filter(n=>n)

        // let stakeholdersslocations = await address.findAll({
        //     where: {
        //         model_id: {
        //             [Op.in]: stakeIDs
        //         }
        //     }
        // })

        // let locations = stakeholdersslocations.map(obj => [obj.easting, obj.northing]);

        let {id} = req.params

        let stakeholders = await stakeholder.findAll({
            where: {
                stakecategory_id: id
            }
        })

        let arr = []

        for(let stake of stakeholders){
            let stakeaddress =  await address.findOne({
                where: {
                    model_id: stake.id
                }
            })
            if(stakeaddress){

                arr.push([
                    stakeaddress.easting,
                    stakeaddress.northing,
                    stake.id
                ])
            }
        }

        return res.json(arr)
        
        return res.json(locations)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


self.getProjectYearlyFinancialPlan = async(req, res) => {
    try {
        let {id, year} = req.params

        

        let projects = await project.findAll({
            where: {
                projecttype_id: id
            }
        })


        let proIDs = projects.map((item)=> item.id)



        let plans = await projectreport.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }

            }
        })

        let plansArr = await Promise.all(
            plans.map(async(plan) => {
                let action = await actionstate.findOne({
                    where: {
                        model_id: plan.id
                    },
                    order: [["created_at", "DESC"]]
                })

                let temp = plan.toJSON()
                temp.action = action.action
                return temp
                
            })
        )

        let planstatus = ["REGISTER", "CHECK", "APPROVE", "AUTHORIZE"]

        let quarters  = [1, 2, 3, 4]

        let statusArr = planstatus.map((status) => {
            let eachStatusArr = plansArr.filter((plan)=> plan.action===status)
        
            let quarterArr = quarters.map((qua) => {
                let each = eachStatusArr.filter((b) => b.quarter===qua.toString())
                return each.length
            })
            return {
                name: status,
                data: quarterArr
            }
        })

        return res.json(statusArr)

        
    } catch (error) {
        return res.status(500).json({
            message: error.mesage
        })
    }
}

self.getProjectYearlyFinancialReport = async(req, res) => {
    try {
        let {id, year} = req.params

        let projects = await project.findAll({
            where: {
                projecttype_id: id
            }
        })


        let proIDs = projects.map((item)=> item.id)



        let reports = await projectreport.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }

            }
        })

        let reportsArr = await Promise.all(
            reports.map(async(report) => {
                let action = await actionstate.findOne({
                    where: {
                        model_id: report.id
                    },
                    order: [["created_at", "DESC"]]
                })

                let temp = report.toJSON()
                temp.action = action.action
                return temp
                
            })
        )

        let reportstatus = ["REGISTER", "CHECK", "APPROVE", "AUTHORIZE"]

        let quarters  = [1, 2, 3, 4]

        let statusArr = reportstatus.map((status) => {
            let eachStatusArr = reportsArr.filter((report)=> report.action===status)
        
            let quarterArr = quarters.map((qua) => {
                let each = eachStatusArr.filter((b) => b.quarter===qua.toString())
                return each.length
            })
            return {
                name: status,
                data: quarterArr
            }
        })

        return res.json(statusArr)

        
    } catch (error) {
        return res.status(500).json({
            message: error.mesage
        })
    }
}

self.getProjectYearlyPerformance = async(req, res) => {
    try {
        let {id,year, attr} = req.params
        let cpm = req.query.cpm
        if(cpm==Boolean(true)){
            const cpmplans = await apiHelper.getExternalData('plan')
            const cpmreports = await apiHelper.getExternalData('report')


            plans = cpmplans.filter((item) => item.year === year.toString())
            reports = cpmreports.filter((item) => item.year === year.toString())

            let months  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

            let planned = months.map((month) => {
                let eachArr = plans.filter((plan)=> plan.month===month.toString())
                
                let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0)
                
                return attrValue
            })

            let actual = months.map((month) => {
                let eachArr = reports.filter((report)=> report.month===month.toString())
                
                let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0)
                
                return attrValue
            })

            let performanceArr = [
                {
                    name: 'Planned',
                    data: planned
                },
                {
                    name: 'Actual',
                    data: actual
                }
            ]

            return res.json(performanceArr)
        }else{
            
       
            let projects = await project.findAll({
                where: {
                    projecttype_id: id
                }
            })

            let proIDs = projects.map((item)=> item.id)

            let plans = await projectplan.findAll({
                where: {
                    year: Number(year),
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            })

            let reports = await projectreport.findAll({
                where: {
                    year: Number(year),
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            })


            let quarters  = [1, 2, 3, 4]

            let planned = quarters.map((qua) => {
                let eachArr = plans.filter((plan)=> plan.quarter===qua.toString())
                
                let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0)
                
                return attrValue
            })

            let actual = quarters.map((qua) => {
                let eachArr = reports.filter((report)=> report.quarter===qua.toString())
                
                let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0)
                
                return attrValue
            })

            let performanceArr = [
                {
                    name: 'Planned',
                    data: planned
                },
                {
                    name: 'Actual',
                    data: actual
                }
            ]

            return res.json(performanceArr)
        }

        
    } catch (error) {
        return res.status(500).json({
            message: error.mesage
        })
    }
}

self.getProjectAnnualCostAndScheduleVariances = async(req, res) => {
    try {

        let {id, year} = req.params

        let projects = await project.findAll({
            where: {
                projecttype_id: id
            }
        })

        let proIDs = projects.map((item)=> item.id)

        let plans = await projectplan.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }
            }
        })


        const cpmplans = await apiHelper.getExternalData('plan')
        // cpmplans = cpmsplans.filter((item) => item.year === year.toString())

        plans = plans.concat(cpmplans)

        let reports = await projectreport.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }
            }
        })


        const cpmreports = await apiHelper.getExternalData('report')
        // cpmreports = cpmreports.filter((item) => item.year === year.toString())


        reports = reports.concat(cpmreports)

        let quarters  = [1, 2, 3, 4]

        let allVariances = quarters.map((qua) => {
            let eachPlannedArr = plans.filter((plan)=> plan.quarter===qua.toString())
            let eachReportArr = reports.filter((report)=> report.quarter===qua.toString())
            
            let actualFinance = eachReportArr.reduce((total, item)=> total+item.financial_performance, 0)
            let plannedFinance = eachPlannedArr.reduce((total, item)=> total+item.financial_performance, 0)
            let actualCost = eachReportArr.reduce((total, item)=> total+item.projectexpense, 0)


            let spi = (actualFinance / (plannedFinance == 0 ? 1 : plannedFinance)) * 100;
            let cpi = (actualFinance / (actualCost == 0 ? 1 : actualCost)) * 100;

            let sv = actualFinance - plannedFinance;
            let cv = actualFinance - actualCost;
            
            return {
                spi,cpi, sv, cv
            }
        })



        let spi = allVariances.map((item)=> item.spi)
        let cpi = allVariances.map((item)=> item.cpi)


        let sv = allVariances.map((item)=> item.sv)
        let cv = allVariances.map((item)=> item.cv)

        let spi_cpi = [
            {
                name: "spi",
                data: spi
            },
            {
                name: "cpi",
                data: cpi
            }]
         let sv_cv = [
            {
                name: "sv",
                data: sv
            },
            {
                name: "cv",
                data: cv
            }
        ]

        return res.json({
            spi_cpi,
            sv_cv
        })

        
    } catch (error) {
        return res.status(500).json({
            message: error.mesage
        })
    }
}

self.getAllProjectAnnualFinancial = async(req, res) => {
    try {
        let {id,year, attr} = req.params


        // let projects = await project.findAll({
        //     where: {
        //         projecttype_id: id
        //     }
        // })

        // let proIDs = projects.map((item)=> item.id)

        // let plans = await projectplan.findAll({
        //     where: {
        //         year: Number(year),
        //         project_id: {
        //             [Op.in]: proIDs
        //         }
        //     }
        // })

        // let reports = await projectreport.findAll({
        //     where: {
        //         year: Number(year),
        //         project_id: {
        //             [Op.in]: proIDs
        //         }
        //     }
        // })

        const cpmplans = await apiHelper.getExternalData('plan')
        const cpmreports = await apiHelper.getExternalData('report')


        plans = cpmplans.filter((item) => item.year === year.toString())
        reports = cpmreports.filter((item) => item.year === year.toString())

        let months  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

        let planned = months.map((month) => {
            let eachArr = plans.filter((plan)=> plan.month===month.toString())
            
            let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0)
            
            return attrValue
        })

        let actual = months.map((month) => {
            let eachArr = reports.filter((report)=> report.month===month.toString())
            
            let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0)
            
            return attrValue
        })

        let performanceArr = [
            {
                name: 'Planned',
                data: planned
            },
            {
                name: 'Actual',
                data: actual
            }
        ]

        return res.json(performanceArr)

        
    } catch (error) {
        return res.status(500).json({
            message: error.mesage
        })
    }
}



module.exports = self;