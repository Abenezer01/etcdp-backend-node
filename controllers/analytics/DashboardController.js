const {
    Stakeholder,
    StakeholderType,
    StakeholderCategory,
    StakeholderSubCategory,
    Project,
    ProjectType,
    ProjectCategory,
    ProjectSubCategory,
    Document,
    DocumentType,
    Resource,
    ResourceType,
    Department,
    ProjectTime,
    ProjectFinance,
    ProjectVariation,
    ProjectPlan,
    ProjectReport,
    Address,
    ActionState,
    ResourcePrice,
    Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { mainanalysismodules } = require("../../config/master");
const apiHelper = require("../utils/API-helper");
const departmentHelper = require("../utils/department-helper");
const { parseParams } = require("../../utils/request/param-hanlder");

const { Op, fn, col, literal } = require("sequelize");

// const Op = Sequelize.Op;

const moment = require("moment");
const { where } = require("sequelize");

let self = {};


self.getCategoryStat = async(req, res) => {
    let type_id = req.params.id
    let department_id = req.params.department_id
    const module = req.params.module;


    const moduleArr = mainanalysismodules[module];
    const Model = moduleArr[0];
    const TypeModel = moduleArr[1];
    const CategoryModel = moduleArr[2];

    let modulecategories = await eval(CategoryModel).findAll({
        where: {
            [`${moduleArr[1]}_id`.toLowerCase()]: type_id
        }
    })


    let models = await eval(Model).findAll({
        where: {
            [`${moduleArr[1]}_id`.toLowerCase()]: type_id
        }
    })

    let arr = []
    for ( let module of modulecategories) {

        let models = await eval(Model).findAll({
            where: {
                [`${moduleArr[2]}_id`.toLowerCase()]: module.id
            }
        })
        arr.push({
            key: module.title,
            label: module.title,
            value: models.length
        })
    }

    payload =  {
    "total": models.length,
    "items": arr
  }

    return res.apiSuccess({
        data: payload
    })
}


self.getSubCategoryStat = async(req, res) => {
    let category_id = req.params.id
    let department_id = req.params.department_id
    const module = req.params.module;


    const moduleArr = mainanalysismodules[module];
    const Model = moduleArr[0];
    const TypeModel = moduleArr[1];
    const CategoryModel = moduleArr[2];
    const SubCategoryModel = moduleArr[3];

    let modulesubcategories = await eval(SubCategoryModel).findAll({
        where: {
            [`${moduleArr[2]}_id`.toLowerCase()]: category_id
        }
    })


    let models = await eval(Model).findAll({
        where: {
            [`${moduleArr[2]}_id`.toLowerCase()]: category_id
        }
    })

    let arr = []
    for ( let module of modulesubcategories) {

        let models = await eval(Model).findAll({
            where: {
                [`${moduleArr[3]}_id`.toLowerCase()]: module.id
            }
        })
        arr.push({
            key: module.title,
            label: module.title,
            value: models.length
        })
    }

    payload =  {
    "total": models.length,
    "items": arr
  }

    return res.apiSuccess({
        data: payload
    })
}


//  summary types with their total counts 
// [{
//    type:xx,
//    count:xx,
// },.............]

self.getStakeholderTypeSummary = async (req, res) => {
    try {


        const usr = await usrData.userData(req, res);

        const module = req.params.module;
        const moduleArr = mainanalysismodules[module];
        const Model = moduleArr[0];
        const TypeModel = moduleArr[1];

        let moduletypes = await eval(TypeModel).findAll({
            order: [
                ["title", "ASC"]
            ]
        });


        let arr = []
        for (moduletype of moduletypes) {

            let models = await eval(Model).findAndCountAll({
                where: {
                    [`${moduleArr[1]}_id`]: moduletype.id,
                    department_id: usr.departmentID
                },
            });


            arr.push({
                name: moduletype.title,
                count: models.count
            })
        }

        return res.apiSuccess({
            data: arr
        })
    } catch (error) {
        res.apiError(error);
    }
};

self.getResourcePriceIndex = async (req, res) => {
    try {
        let { resource_id, baseYear } = req.query;

        if (!resource_id) {
            return res.apiError("resource_id is required");
        }
        baseYear = baseYear || new Date().getFullYear();

        // ✅ Get user departments
        const usr = await usrData.userData(req, res);
        const departments = await self.getChildren(usr.departmentID);

        if (!departments || departments.length === 0) {
            return res.apiSuccess({ data: { labels: [], data: [] } });
        }

        // ✅ Get all ResourcePrice for this resource filtered by departments
        const departmentIds = departments.map(d => d.id);

        const prices = await ResourcePrice.findAll({
            where: {
                resource_id,
                department_id: { [Op.in]: departmentIds }
            },
            attributes: [
                "department_id",
                [fn("EXTRACT", literal("YEAR FROM price_date")), "year"],
                [fn("AVG", col("unit_price")), "avg_price"]
            ],
            group: ["department_id", literal("EXTRACT(YEAR FROM price_date)")],
            raw: true
        });

        if (!prices || prices.length === 0) {
            return res.apiSuccess({ data: { labels: [], data: [] } });
        }

        // ✅ Collect all years
        const years = [...new Set(prices.map(p => p.year))].sort((a, b) => a - b);
        const labels = years;

        // ✅ Compute base year averages per department
        const baseYearPrices = {};
        departments.forEach(dept => {
            const deptBasePrices = prices.filter(p => p.department_id === dept.id && Number(p.year) === Number(baseYear));
            if (deptBasePrices.length > 0) {
                const avgBase = deptBasePrices.reduce((sum, p) => sum + parseFloat(p.avg_price || 0), 0) / deptBasePrices.length;
                baseYearPrices[dept.id] = avgBase;
            }
        });

        // ✅ Build series per department
        const dataSeries = departments.map(dept => {
            const deptPrices = prices.filter(p => p.department_id === dept.id);
            const deptBase = baseYearPrices[dept.id] || 1; // fallback if no base year price

            const data = labels.map(year => {
                const yearPrices = deptPrices.filter(p => Number(p.year) === Number(year));
                if (yearPrices.length === 0) return 0;
                const avgYear = yearPrices.reduce((sum, p) => sum + parseFloat(p.avg_price || 0), 0) / yearPrices.length;
                return Number(((avgYear / deptBase) * 100).toFixed(2));
            });

            return {
                label: dept.name,
                data
            };
        });

        return res.apiSuccess({
            data: {
                labels,
                data: dataSeries
            }
        });

    } catch (error) {
        console.error("Error in getResourcePriceIndex:", error);
        return res.apiError(error.message || "Failed to calculate resource price index");
    }
};
self.getResourceInflationRate = async (req, res) => {
    try {
        let { resource_id } = req.query;

        if (!resource_id) {
            return res.apiError("resource_id is required");
        }
        // baseYear = baseYear || new Date().getFullYear();

        // ✅ Get user and departments
        const usr = await usrData.userData(req, res);
        const departments = await self.getChildren(usr.departmentID);

        if (!departments || departments.length === 0) {
            return res.apiSuccess({ data: { labels: [], data: [] } });
        }

        const departmentIds = departments.map(d => d.id);

        // ✅ Fetch yearly average prices per department
        const prices = await ResourcePrice.findAll({
            where: {
                resource_id,
                department_id: { [Op.in]: departmentIds },
            },
            attributes: [
                "department_id",
                [fn("EXTRACT", literal("YEAR FROM price_date")), "year"],
                [fn("AVG", col("unit_price")), "avg_price"],
            ],
            group: ["department_id", literal("EXTRACT(YEAR FROM price_date)")],
            raw: true,
        });

        if (!prices || prices.length === 0) {
            return res.apiSuccess({ data: { labels: [], data: [] } });
        }

        // ✅ Collect all years sorted
        const years = [...new Set(prices.map(p => p.year))].sort((a, b) => a - b);
        if (years.length < 2) {
            return res.apiSuccess({ data: { labels: years, data: [] } });
        }

        // ✅ Compute inflation per department
        const dataSeries = departments.map(dept => {
            const deptPrices = prices
                .filter(p => p.department_id === dept.id)
                .sort((a, b) => a.year - b.year);

            if (deptPrices.length < 2) {
                return { label: dept.name, data: [] };
            }

            // Convert to price index relative to first available year
            const basePrice = parseFloat(deptPrices[0].avg_price) || 1;
            const indexes = deptPrices.map(p => (parseFloat(p.avg_price) / basePrice) * 100);

            // Compute inflation between consecutive years
            const inflationRates = [];
            for (let i = 1; i < indexes.length; i++) {
                const prev = indexes[i - 1];
                const curr = indexes[i];
                const inflation = ((curr - prev) / prev) * 100;
                inflationRates.push(Number(inflation.toFixed(2)));
            }

            return {
                label: dept.name,
                data: inflationRates,
            };
        });

        // ✅ Labels start from the 2nd year (since inflation is year-over-year)
        const labels = years.slice(1);

        return res.apiSuccess({
            data: {
                labels,
                data: dataSeries,
            },
        });

    } catch (error) {
        console.error("Error in getResourceInflationRate:", error);
        return res.apiError(error.message || "Failed to calculate inflation rates");
    }
};



self.getGeneralAnalysis = async (req, res) => {
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

        return res.apiSuccess({
            data: first
        });

    } catch (error) {
        res.apiError(error);
    }
};

self.getGeneralAnalysisCategory = async (req, res) => {

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
        const categoryId = `${moduleArr[2]}_id`.toLowerCase();

        let stake = await eval(Model).findAndCountAll({
            where: {
                [categoryId]: id,
            },
        });

        let subcategories = await eval(SubCategoryModel).findAll({
            where: {
                [categoryId]: modulecategory.id,
            },
        });

        const subcategoryId = `${moduleArr[3]}_id`.toLowerCase();

        let subcategoryelement = {};

        if (subcategories.length > 0) {
            for (let subcategory of subcategories) {
                let catestake = await eval(Model).findAll({
                    where: {
                        [subcategoryId]: subcategory.id,
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

        return res.apiSuccess({
            data: first
        });

    } catch (error) {
        res.apiError(error);
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

self.getChildren = async (id) => {
    try {
        // 1. Get the parent department
        let parent = await Department.findOne({
            where: { id: id },
        });

        if (!parent) {
            // Handle case where parent department is not found
            return [];
        }

        // 2. Get the immediate children
        let directChildren = await Department.findAll({
            where: { parent_department_id: id },
        });

        // 3. Initialize a brand NEW array with immediate children to accumulate ALL descendants.
        // ✅ The crucial 'Always Start Fresh' array!
        let allDepartments = [...directChildren];

        // 4. Start the recursive search. This helper will FILL the 'allDepartments' array.
        //    (You must define the helper function below!)
        
        //this one is to add all the grand children too, but they are not need for the dashboard graphs
        // so you want all dont change it here. do a separate function or refarctor the code appropiately
        // await self._findAllChildrenRecursive(directChildren, allDepartments);

        // 5. Add the parent department to the very front of the final list
        allDepartments.unshift(parent);

        // 6. Return the complete, fresh, non-accumulated list
        return allDepartments;

    } catch (error) {
        console.error('Error in getChildren:', error);
        // Returning an array on error is safer than returning an object in this context
        return [];
    }
};

// This helper should be defined near your other self methods.

self._findAllChildrenRecursive = async (departmentsToProcess, accumulatedResults) => {

    // Iterate through the departments passed in (the current level)
    for (const dept of departmentsToProcess) {

        // Find the next level of children
        const directChildren = await Department.findAll({
            where: {
                parent_department_id: dept.id,
            },
        });

        // If children are found...
        if (directChildren.length > 0) {
            // ✅ Fix: Use the spread operator to push the new results directly into the fresh array
            accumulatedResults.push(...directChildren);

            // Recurse on the new batch of children
            await self._findAllChildrenRecursive(directChildren, accumulatedResults);
        }
    }
};

self.getDepartmentDistributionPerCategory = async (req, res) => {
    let module = req.params.module;
    let id = req.params.id;

    try {
        const moduleArr = mainanalysismodules[module];
        const Model = moduleArr[0];
        const CategoryModel = moduleArr[2];
        const SubCategoryModel = moduleArr[3];
        let usr = await usrData.userData(req, res);

        // Get departments under the user's department
        let departments = await self.getChildren(usr.departmentID);

        // Get the category
        let modulecategory = await eval(CategoryModel).findOne({
            where: { id },
        });

        if (!modulecategory) {
            return res.apiError("Category not found");
        }

        const typeId = `${moduleArr[1]}_id`.toLowerCase();

        // FIX: compare the field to the actual id value
        let stake = await eval(Model).findAndCountAll({
            where: { [typeId]: id },
        });

        const categoryId = `${moduleArr[2]}_id`.toLowerCase();

        let subcategories = await eval(SubCategoryModel).findAll({
            where: { [categoryId]: modulecategory.id },
        });

        let subcategoryelement = {};
        const subcategoryId = `${moduleArr[3]}_id`.toLowerCase();

        if (subcategories.length > 0) {
            for (let subcategory of subcategories) {
                let catestake = await eval(Model).findAll({
                    where: { [subcategoryId]: subcategory.id },
                    include: [
                        {
                            model: Department,
                            as: "department",
                            attributes: ["id", "name"],
                        },
                    ],
                });

                // FIX: safely access department name
                const countByName = catestake.reduce((acc, obj) => {
                    const dept = obj.department;
                    if (dept && dept.name) {
                        acc[dept.name] = (acc[dept.name] || 0) + 1;
                    }
                    return acc;
                }, {});

                // Get missing departments (those not in countByName)
                const existingNames = Object.keys(countByName);
                const missingDepartments = departments
                    .filter((d) => !existingNames.includes(d.name))
                    .map((d) => d.name);

                // Add missing departments with zero count
                const remainingObj = Object.fromEntries(
                    missingDepartments.map((name) => [name, 0])
                );

                // Merge both objects
                const mergedObj = { ...countByName, ...remainingObj };

                // Prepare data
                subcategoryelement[subcategory.title] = {
                    count: catestake.length,
                    departments: Object.values(mergedObj),
                };
            }
        }

        const first = {
            title: modulecategory.title,
            list: subcategoryelement,
            departments: [
                ...new Set(departments.map((item) => item.name)),
            ].filter(Boolean),
            count: stake.count,
        };

        return res.apiSuccess({ data: first });
    } catch (error) {
        console.error(error);
        res.apiError(error);
    }
};


self.getModuleTypesAnalysis = async (req, res) => {

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
            moduletype.map(async (item) => {
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


self.getStakeholderTypesAnalysis = async (req, res) => {

    try {

        let stakeholdertypes = await StakeholderType.findAll();

        let year = moment().year();
        let last_year = year - 1;

        // return res.json(moment().year())

        let arr = await Promise.all(
            stakeholdertypes.map(async (item) => {
                let model = await Stakeholder.findAndCountAll({
                    where: {
                        stakeholdertype_id: item.id,
                    },
                });

                let this_year_model = await Stakeholder.findAndCountAll({
                    where: {
                        stakeholdertype_id: item.id,
                        license_issued_date: {
                            [Op.gte]: new Date(year, 0, 1), // Start of the year
                            [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                        },
                    },
                });
                let last_year_model = await Stakeholder.findAndCountAll({
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

        return res.apiSuccess({
            data: arr
        });
    } catch (error) {
        res.apiError(error);
    }
};

self.getProjectTypesAnalysis = async (req, res) => {
    try {

        let projecttypes = await ProjectType.findAll();

        let year = moment().year();
        let last_year = year - 1;

        // return res.json(moment().year())

        let arr = await Promise.all(
            projecttypes.map(async (item) => {
                let model = await Project.findAndCountAll({
                    where: {
                        projecttype_id: item.id,
                    }
                });

                let this_year_model = await Project.findAndCountAll({
                    where: {
                        projecttype_id: item.id
                    },
                    include: [{
                        model: ProjectTime,
                        where: {
                            commencement_date: {
                                [Op.gte]: new Date(year, 0, 1), // Start of the year
                                [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                            }
                        }
                    }]
                });
                let last_year_model = await Project.findAndCountAll({
                    where: {
                        projecttype_id: item.id
                    },
                    include: [{
                        model: ProjectTime,
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

        return res.apiSuccess({
            data: arr
        });
    } catch (error) {
        res.apiError(error);
    }
};

self.getResourceTypesAnalysis = async (req, res) => {

    try {
        let resourcetypes = await ResourceType.findAll();

        let year = moment().year();
        let last_year = year - 1;

        // return res.json(moment().year())

        let arr = await Promise.all(
            resourcetypes.map(async (item) => {
                let model = await Resource.findAndCountAll({
                    where: {
                        resourcetype_id: item.id,
                    },
                });

                let this_year_model = await Resource.findAndCountAll({
                    where: {
                        resourcetype_id: item.id,
                        created_at: {
                            [Op.gte]: new Date(year, 0, 1), // Start of the year
                            [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                        },
                    },
                });
                let last_year_model = await Resource.findAndCountAll({
                    where: {
                        resourcetype_id: item.id,
                        created_at: {
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

        return res.apiSuccess({
            data: arr
        });
    } catch (error) {
        res.apiError(error);
    }
};



self.getDocumentTypesAnalysis = async (req, res) => {

    try {
        let documenttypes = await DocumentType.findAll();

        let year = moment().year();
        let last_year = year - 1;

        // return res.json(moment().year())

        let arr = await Promise.all(
            documenttypes.map(async (item) => {
                let model = await Document.findAndCountAll({
                    where: {
                        documenttype_id: item.id,
                    },
                });

                let this_year_model = await Document.findAndCountAll({
                    where: {
                        documenttype_id: item.id,
                        created_at: {
                            [Op.gte]: new Date(year, 0, 1), // Start of the year
                            [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                        },
                    },
                });
                let last_year_model = await Document.findAndCountAll({
                    where: {
                        documenttype_id: item.id,
                        created_at: {
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

        return res.apiSuccess(arr);

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};




self.getModuleEachTypesAnalysis = async (req, res) => {

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

        const queries = yearArray.map(async (yr) => {
            const stake = await eval(Model).findAndCountAll({
                where: {
                    [`${moduleArr[1]}_id`]: moduletype.id,
                    created_at: {
                        [Op.gte]: new Date(yr, 0, 1), // Start of the year
                        [Op.lt]: new Date(yr + 1, 0, 1), // Start of the next year
                    },
                },
            });

            return [yr, stake ? stake.count : 0];
        });

        const results = await Promise.all(queries);

        const obj = Object.fromEntries(results);

        return res.apiSuccess({
            data: {
                years: Object.keys(obj),
                series: Object.values(obj)
            }
        });
    } catch (error) {
        res.apiError(error);
    }
};

self.getModuleEachCategoriesAnalysis = async (req, res) => {

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

        const categoryId = `${moduleArr[2]}_id`.toLowerCase();

        const queries = yearArray.map(async (yr) => {

            const stake = await eval(Model).findAndCountAll({
                where: {
                    [categoryId]: modulecategory.id,
                    created_at: {
                        [Op.gte]: new Date(yr, 0, 1), // Start of the year
                        [Op.lt]: new Date(yr + 1, 0, 1), // Start of the next year
                    },
                },
            });

            return [yr, stake ? stake.count : 0];
        });

        const results = await Promise.all(queries);

        const obj = Object.fromEntries(results);

        return res.apiSuccess({
            data: {
                years: Object.keys(obj),
                series: Object.values(obj),
            }
        });
    } catch (error) {
        res.apiError(error);
    }
};

self.getCategoriesByTypeId = async (req, res) => {
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

        return res.apiSuccess({
            data: modulecategories
        });
    } catch (error) {
        res.apiError(error);
    }
};

self.getSubCategoriesByModuleCategoryId = async (req, res) => {
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

        return res.apiSuccess({ data: modulesubcategories });

    } catch (error) {
        res.apiError(error);
    }
};

// self.getDepartmentDistributionPerType = async (req, res) => {
//     let module = req.params.module;
//     let id = req.params.id;

//     try {
//         const moduleArr = mainanalysismodules[module];

//         const Model = moduleArr[0];
//         const TypeModel = moduleArr[1];
//         const CategoryModel = moduleArr[2];
//         let usr = await usrData.userData(req, res);

//         let departments = await self.getChildren(usr.departmentID);

//         let moduletype = await eval(TypeModel).findOne({
//             where: {
//                 id: id,
//             },
//         });

//         if(!moduletype){
//             return res.apiError({
//                 message: `${module} type not found`
//             }, 404)
//         }

//         const typeId = `${moduleArr[1]}_id`.toLowerCase();
//         let stake = await eval(Model).findAndCountAll({
//             where: {
//                 [typeId]: moduletype.id,
//             },
//         });

//         let categories = await eval(CategoryModel).findAll({
//             where: {
//                 [typeId]: moduletype.id,
//             },
//         });

//         let categoryelement = [];
//         let categoryId = `${moduleArr[2]}_id`;

//         if (categories.length > 0) {
//             for (let category of categories) {
//                 let catestake = await eval(Model).findAll({
//                     where: {
//                         [categoryId]: category.id,
//                     },
//                     include: [{
//                         model: Department,
//                         as: "department",
//                     },],
//                 });

//                 // --- FIX STARTS HERE ---
//                 const countByName = catestake.reduce((acc, obj) => {
//                     // Check if department association exists to avoid "reading name of null"
//                     if (obj.department && obj.department.name) {
//                         const deptName = obj.department.name;
//                         // Use the name as the key for both lookup and storage
//                         acc[deptName] = (acc[deptName] || 0) + 1;
//                     }
//                     return acc;
//                 }, {});

//                 let existingNames = Object.keys(countByName);

//                 // Identify departments that have 0 records
//                 const filteredData = departments.filter(
//                     (item) => !existingNames.includes(item.name)
//                 );

//                 const nameFiltered = filteredData.map((item) => item.name);

//                 let remainingObj = {};
//                 nameFiltered.forEach((element) => {
//                     remainingObj[element] = 0;
//                 });
                
//                 // Merge found counts with the zero-count departments
//                 const mergedObj = Object.assign({}, countByName, remainingObj);

//                 let deptObj = {};
//                 deptObj["name"] = category.title;
//                 deptObj["count"] = catestake.length;
                
//                 // Ensure data points match the order of the global 'departments' list
//                 // This ensures the chart bars align with the labels
//                 deptObj["data"] = departments.map(d => mergedObj[d.name] || 0);

//                 categoryelement.push(deptObj);
//                 // --- FIX ENDS HERE ---
//             }
//         }

//         const first = {
//             title: moduletype.title,
//             series: categoryelement,
//             departments: [...new Set(departments.map((item) => item.name))].filter(
//                 (n) => n
//             ),
//             count: stake.count,
//         };

//         return res.apiSuccess({
//             data: first
//         });

//     } catch (error) {
//         res.apiError(error);
//     }
// };



self.getDepartmentDistributionPerType = async (req, res) => {
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
            where: { id: id },
        });

        if (!moduletype) {
            return res.apiError({ message: `${module} type not found` }, 404);
        }

        // --- NEW STATUS FILTER LOGIC ---
        let statusFilter = {}; 
        if (module === 'infrastructure' || module === 'project') {
            const operator = (module === 'infrastructure') ? '=' : '<>';
            
            statusFilter = {
                id: {
                    [Op.in]: literal(`(
                        SELECT ps.project_id
                        FROM projectstatuses ps
                        JOIN ProjectMasterData s ON s.id = ps.status_id
                        WHERE s.title ${operator} 'Completed'
                        AND ps.created_at = (
                            SELECT MAX(ps2.created_at)
                            FROM projectstatuses ps2
                            WHERE ps2.project_id = ps.project_id
                        )
                    )`)
                }
            };
        }

        const typeId = `${moduleArr[1]}_id`.toLowerCase();
        
        // Total count filtered by status for Projects/Infrastructure
        let stake = await eval(Model).findAndCountAll({
            where: {
                [typeId]: moduletype.id,
                ...statusFilter // Only adds conditions if module is Project/Infrastructure
            },
        });

        let categories = await eval(CategoryModel).findAll({
            where: {
                [typeId]: moduletype.id,
            },
        });

        let categoryelement = [];
        let categoryId = `${moduleArr[2]}_id`;

        if (categories.length > 0) {
            for (let category of categories) {
                let catestake = await eval(Model).findAll({
                    where: {
                        [categoryId]: category.id,
                        ...statusFilter // Only adds conditions if module is Project/Infrastructure
                    },
                    include: [{
                        model: Department,
                        as: "department",
                    }],
                });

                // --- DATA AGGREGATION ---
                const countByName = catestake.reduce((acc, obj) => {
                    if (obj.department && obj.department.name) {
                        const deptName = obj.department.name;
                        acc[deptName] = (acc[deptName] || 0) + 1;
                    }
                    return acc;
                }, {});

                let existingNames = Object.keys(countByName);
                const filteredData = departments.filter(
                    (item) => !existingNames.includes(item.name)
                );

                let remainingObj = {};
                filteredData.forEach((item) => {
                    remainingObj[item.name] = 0;
                });
                
                const mergedObj = Object.assign({}, countByName, remainingObj);

                let deptObj = {
                    name: category.title,
                    count: catestake.length,
                    data: departments.map(d => mergedObj[d.name] || 0)
                };

                categoryelement.push(deptObj);
            }
        }

        const result = {
            title: moduletype.title,
            series: categoryelement,
            departments: [...new Set(departments.map((item) => item.name))].filter(n => n),
            count: stake.count,
        };

        return res.apiSuccess({ data: result });

    } catch (error) {
        res.apiError(error);
    }
};

self.getDepartmentDistributionPerSubCategory = async (req, res) => {
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
            where: { id: id },
        });

        if (!modulecategory) {
            return res.apiError({ message: `${module} category not found` }, 404);
        }

        // --- DYNAMIC FILTER LOGIC ---
        // We initialize an empty object. It only fills up if the module is Project or Infrastructure.
        let statusFilter = {}; 
        
        if (module === 'infrastructure' || module === 'project') {
            const operator = (module === 'infrastructure') ? '=' : '<>';
            
            statusFilter = {
                id: {
                    [Op.in]: literal(`(
                        SELECT ps.project_id
                        FROM projectstatuses ps
                        JOIN ProjectMasterData s ON s.id = ps.status_id
                        WHERE s.title ${operator} 'Completed'
                        AND ps.created_at = (
                            SELECT MAX(ps2.created_at)
                            FROM projectstatuses ps2
                            WHERE ps2.project_id = ps.project_id
                        )
                    )`)
                }
            };
        }

        const categoryId = `${moduleArr[2]}_id`.toLowerCase();
        
        // Use spread operator (...) to merge statusFilter. 
        // If statusFilter is {}, it does nothing.
        let modelcount = await eval(Model).findAndCountAll({
            where: {
                [categoryId]: modulecategory.id,
                ...statusFilter 
            },
        });

        let subcategories = await eval(SubCategoryModel).findAll({
            where: {
                [categoryId]: modulecategory.id,
            },
        });

        let subcategoryelement = [];
        let subCategoryId = `${moduleArr[3]}_id`;

        if (subcategories.length > 0) {
            for (let subcategory of subcategories) {
                let subcategorymodels = await eval(Model).findAll({
                    where: {
                        [subCategoryId]: subcategory.id,
                        ...statusFilter // Only filters for Project/Infrastructure
                    },
                    include: [{
                        model: Department,
                        as: "department",
                    }],
                });

                // ... (Reduction and merging logic remains the same)
                const countByName = subcategorymodels.reduce((acc, obj) => {
                    if (obj.department && obj.department.name) {
                        const deptName = obj.department.name;
                        acc[deptName] = (acc[deptName] || 0) + 1;
                    }
                    return acc;
                }, {});

                let existingNames = Object.keys(countByName);
                const filteredData = departments.filter(item => !existingNames.includes(item.name));
                const nameFiltered = filteredData.map((item) => item.name);

                let remainingObj = {};
                nameFiltered.forEach(element => { remainingObj[element] = 0; });
                
                const mergedObj = Object.assign({}, countByName, remainingObj);

                let subcategorymodelobj = {
                    name: subcategory.title,
                    count: subcategorymodels.length,
                    data: departments.map(d => mergedObj[d.name] || 0)
                };

                subcategoryelement.push(subcategorymodelobj);
            }
        }

        const result = {
            title: modulecategory.title,
            series: subcategoryelement,
            departments: [...new Set(departments.map((item) => item.name))].filter(n => n),
            count: modelcount.count,
        };

        return res.apiSuccess({ data: result });

    } catch (error) {
        res.apiError(error);
    }
};
// self.getDepartmentDistributionPerSubCategory = async (req, res) => {

//     let module = req.params.module;
//     let id = req.params.id;

//     try {
//         const moduleArr = mainanalysismodules[module];

//         const Model = moduleArr[0];
//         const CategoryModel = moduleArr[2];
//         const SubCategoryModel = moduleArr[3];
//         let usr = await usrData.userData(req, res);

//         let departments = await self.getChildren(usr.departmentID);

//         let modulecategory = await eval(CategoryModel).findOne({
//             where: {
//                 id: id,
//             },
//         });

//         if(!modulecategory){
//             return res.apiError({
//                 message: `${module} category not found`
//             }, 404)
//         }

//         const categoryId = `${moduleArr[2]}_id`.toLowerCase();
//         let modelcount = await eval(Model).findAndCountAll({
//             where: {
//                 [categoryId]: modulecategory.id,
//             },
//         });

//         let subcategories = await eval(SubCategoryModel).findAll({
//             where: {
//                 [categoryId]: modulecategory.id,
//             },
//         });

//         let subcategoryelement = [];
//         let subCategoryId = `${moduleArr[3]}_id`;

//         if (subcategories.length > 0) {
//             for (let subcategory of subcategories) {
//                 let subcategorymodels = await eval(Model).findAll({
//                     where: {
//                         [subCategoryId]: subcategory.id,
//                     },
//                     include: [{
//                         model: Department,
//                         as: "department",
//                     },],
//                 });

//                 // --- FIX STARTS HERE ---
//                 const countByName = subcategorymodels.reduce((acc, obj) => {
//                     // Check if department association exists to avoid "reading name of null"
//                     if (obj.department && obj.department.name) {
//                         const deptName = obj.department.name;
//                         // Use the name as the key for both lookup and storage
//                         acc[deptName] = (acc[deptName] || 0) + 1;
//                     }
//                     return acc;
//                 }, {});

//                 let existingNames = Object.keys(countByName);

//                 // Identify departments that have 0 records
//                 const filteredData = departments.filter(
//                     (item) => !existingNames.includes(item.name)
//                 );

//                 const nameFiltered = filteredData.map((item) => item.name);

//                 let remainingObj = {};
//                 nameFiltered.forEach((element) => {
//                     remainingObj[element] = 0;
//                 });
                
//                 // Merge found counts with the zero-count departments
//                 const mergedObj = Object.assign({}, countByName, remainingObj);

//                 let subcategorymodelobj = {};
//                 subcategorymodelobj["name"] = subcategory.title;
//                 subcategorymodelobj["count"] = subcategorymodels.length;
                
//                 // Ensure data points match the order of the global 'departments' list
//                 // This ensures the chart bars align with the labels
//                 subcategorymodelobj["data"] = departments.map(d => mergedObj[d.name] || 0);

//                 subcategoryelement.push(subcategorymodelobj);
//                 // --- FIX ENDS HERE ---
//             }
//         }

//         const first = {
//             title: modulecategory.title,
//             series: subcategoryelement,
//             departments: [...new Set(departments.map((item) => item.name))].filter(
//                 (n) => n
//             ),
//             count: modelcount.count,
//         };

//         return res.apiSuccess({
//             data: first
//         });

//     } catch (error) {
//         res.apiError(error);
//     }
// };


self.getProjectGeneralFinancialAnalysis = async (req, res) => {
    try {
        let projecttypes = await ProjectType.findAll();

        let arr = [];
        for (let type of projecttypes) {
            let projects = await Project.findAll({
                where: {
                    projecttype_id: type.id
                }
            });

            let proIDs = projects.map((item) => item.id).filter(n => n);

            //main contract finance

            let maincontractpriceamount = await ProjectFinance.findAll({
                where: {
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            });

            const maincontractpricetotal = maincontractpriceamount.reduce((total, item) => total + item.main_contract_price_amount, 0);



            arr.push({
                id: type.id,
                name: type.title,
                main_contract: maincontractpricetotal
            });


        }

        return res.apiSuccess({
            data: arr
        });

    } catch (error) {
        res.apiError(error);
    }
};

self.getProjectTypeCategoriesFinancialAnalysis = async (req, res) => {
    let { id } = req.params;
    try {
        let projectcategories = await ProjectCategory.findAll({
            where: {
                projecttype_id: id
            }
        });


        let arr = [];

        for (let category of projectcategories) {
            let projects = await Project.findAll({
                where: {
                    projectcategory_id: category.id
                }
            });

            let proIDs = projects.map((item) => item.id).filter(n => n);

            //main contract finance

            let maincontractpriceamount = await ProjectFinance.findAll({
                where: {
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            });

            const maincontractpricetotal = maincontractpriceamount.reduce((total, item) => total + item.main_contract_price_amount, 0);



            arr.push({
                id: category.id,
                name: category.title,
                main_contract: maincontractpricetotal
            });


        }

        return res.json(arr);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
self.getProjectTypeFinancialInformation = async (req, res) => {
    try {

        let { id } = req.params;

        let projects = await Project.findAll({
            where: {
                projecttype_id: id
            }
        });

        let proIDs = projects.map((item) => item.id).filter(n => n);

        let maincontractpriceamount = await ProjectFinance.findAll({
            where: {
                project_id: {
                    [Op.in]: proIDs
                }
            }
        });

        const maincontractpricetotal = maincontractpriceamount.reduce((total, item) => total + item.main_contract_price_amount, 0);


        let variationsupplements = await ProjectVariation.findAll({
            where: {
                project_id: {
                    [Op.in]: proIDs
                }
            }
        });



        const filterSupplementVariations = (type) => variationsupplements.filter((item) => item.type === type);

        const variations = filterSupplementVariations("VARIATION");
        const supplements = filterSupplementVariations("SUPPLEMENT");
        const omissions = filterSupplementVariations("OMISSION");
        // const specials = filterSupplementVariations("SPECIAL");

        const variation_total = variations.reduce((total, item) => total + item.amount, 0);
        const supplement_total = supplements.reduce((total, item) => total + item.amount, 0);
        const omission_total = omissions.reduce((total, item) => total + item.amount, 0);
        // const special_total = specials.reduce((total, item) => total + item.amount, 0);

        let totalcontractamount = maincontractpricetotal + variation_total + supplement_total - omission_total;

        // let data = {
        //         total_contract_amount: totalcontractamount,
        //         main_contract: maincontractpricetotal,
        //         supplement: supplement_total,
        //         variation: variation_total,
        //         omission: omission_total
        //     }

        let data = {
            series: [{ data: [37, 76, 65, 41, 99, 53, 70, 40, 23, 56, 23, 67] }],
            data: [
                {
                    title: 'Main Contract',
                    stats: totalcontractamount
                },
                {
                    title: 'Supplement',
                    stats: supplement_total
                },
                {
                    title: 'Variation',
                    stats: variation_total
                },
                {
                    title: 'Omission',
                    stats: omission_total
                }
            ]
        };

        return res.apiSuccess({
            data
        })
    } catch (error) {
        res.apiError(error);
    }
};

self.getProjectCategoryFinancialInformationDepartments = async (req, res) => {

    let id = req.params.id;

    try {

        let usr = await usrData.userData(req, res);

        let departments = await self.getChildren(usr.departmentID);

        let modulecategory = await ProjectCategory.findOne({
            where: {
                id: id,
            },
        });


        let models = await Project.findAll({
            where: {
                projectcategory_id: modulecategory.id,
            },
        });



        let series = [];
        series = await Promise.all(departments.map((dept) => {
            const departmentprojects = models.filter((model) => model.department_id === dept.id);
            let proIDs = departmentprojects.map((item) => item.id).filter(n => n);

            let maincontractpriceamount = ProjectFinance.findAll({
                where: {
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            });


            const maincontractpricetotal = 0;
            if (maincontractpriceamount.length > 0) {
                maincontractpriceamount.reduce((total, test) => total + test.main_contract_price_amount, 0);
            }


            let variationsupplements = ProjectVariation.findAll({
                where: {
                    project_id: {
                        [Op.in]: proIDs
                    }
                }
            });

            const variations = variationsupplements.length > 0 ? variationsupplements.filter((item) => item.type === "VARIATION") : [];
            const supplements = variationsupplements.length > 0 ? variationsupplements.filter((item) => item.type === "SUPPLEMENT") : [];
            const omissions = variationsupplements.length > 0 ? variationsupplements.filter((item) => item.type === "OMISSION") : [];

            const variation_total = variations.length > 0 ? variations.reduce((total, item) => total + item.amount, 0) : 0;
            const supplement_total = supplements.length > 0 ? supplements.reduce((total, item) => total + item.amount, 0) : 0;
            const omission_total = omissions.length > 0 ? omissions.reduce((total, item) => total + item.amount, 0) : 0;


            return {
                name: dept.name,
                main_contract_price: maincontractpricetotal,
                supplement: supplement_total,
                variation: variation_total,
                omission: omission_total
            };
        }));


        let seriesArr = [
            {
                name: "Main Contract Price",
                data: series.map((item) => item.main_contract_price)
            },
            {
                name: "Supplement",
                data: series.map((item) => item.supplement)
            },
            {
                name: "Variation",
                data: series.map((item) => item.variation)
            },
            {
                name: "Omission",
                data: series.map((item) => item.omission)
            }
        ];



        return res.apiSuccess({
            data: {
                series: seriesArr,
                departments: [...new Set(departments.map((item) => item.name))].filter(
                    (n) => n
                ),

            }
        });
    } catch (error) {
        res.apiError(error);
    }
};


self.getProjectTypeOrCategoryDepartmentStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const { type, entity } = req.query;
        // expected values:
        // ?type=plan|report
        // ?entity=category|type

        const usr = await usrData.userData(req, res);

        if (!['plan', 'report'].includes(type)) {
            return res.apiError('Invalid type. Use ?type=plan or ?type=report');
        }

        if (!['category', 'type'].includes(entity)) {
            return res.apiError('Invalid entity. Use ?entity=category or ?entity=type');
        }

        // ✅ Always start fresh
        const departments = await self.getChildren(usr.departmentID);

        // ✅ Choose model dynamically (ProjectCategory or ProjectType)
        const EntityModel = entity === 'type' ? ProjectType : ProjectCategory;
        const entityField =
            entity === 'type' ? 'projecttype_id' : 'projectcategory_id';

        // ✅ Validate entity existence
        const moduleEntity = await EntityModel.findOne({ where: { id } });
        if (!moduleEntity) {
            return res.apiError(`${entity} not found`);
        }

        // ✅ Fetch related projects
        const projects = await Project.findAll({
            where: { [entityField]: moduleEntity.id },
            attributes: ['id', 'department_id']
        });

        // ✅ Choose DataModel dynamically
        const DataModel = type === 'plan' ? ProjectPlan : ProjectReport;

        // ✅ Prepare results (fresh every call)
        const departmentResults = await Promise.all(
            departments.map(async (dept) => {
                // Filter projects per department
                const departmentProjects = projects.filter(p => p.department_id === dept.id);
                const projectIds = departmentProjects.map(p => p.id);

                if (projectIds.length === 0) {
                    return { name: dept.name, registered: 0, checked: 0, approved: 0, authorized: 0 };
                }

                // Fetch either plans or reports
                const records = await DataModel.findAll({
                    where: { project_id: { [Op.in]: projectIds } },
                    attributes: ['id']
                });

                if (records.length === 0) {
                    return { name: dept.name, registered: 0, checked: 0, approved: 0, authorized: 0 };
                }

                const recordIds = records.map(r => r.id);

                // ✅ Get latest ActionState for each record
                const latestActions = await Promise.all(
                    recordIds.map(async (recordId) => {
                        return await ActionState.findOne({
                            where: { model_id: recordId },
                            order: [['created_at', 'DESC']],
                            attributes: ['action']
                        });
                    })
                );

                // ✅ Count per action type (reset every iteration)
                let registered = 0, checked = 0, approved = 0, authorized = 0;

                for (const action of latestActions) {
                    if (!action) continue;
                    switch (action.action) {
                        case 'REGISTER': registered++; break;
                        case 'CHECK': checked++; break;
                        case 'APPROVE': approved++; break;
                        case 'AUTHORIZE': authorized++; break;
                    }
                }

                return { name: dept.name, registered, checked, approved, authorized };
            })
        );

        // ✅ Chart and series
        const chart = departmentResults.map(d => d.name);
        const series = [
            { name: 'Registered', data: departmentResults.map(d => d.registered) },
            { name: 'Checked', data: departmentResults.map(d => d.checked) },
            { name: 'Approved', data: departmentResults.map(d => d.approved) },
            { name: 'Authorized', data: departmentResults.map(d => d.authorized) }
        ];

        return res.apiSuccess({ data: { chart, series } });

    } catch (error) {
        console.error('Error in getProjectCategoryDepartmentStatus:', error);
        return res.apiError(error.message || 'Failed to load department project status');
    }
};

self.getProjectCategoryProjectPlanDepartments = async (req, res) => {
    try {
        const id = req.params.id;
        const usr = await usrData.userData(req, res);

        // ✅ Always start fresh
        const departments = await self.getChildren(usr.departmentID);

        // return res.json(departments);

        // ✅ Validate category
        const moduleCategory = await ProjectCategory.findOne({ where: { id } });
        if (!moduleCategory) {
            return res.apiError('Project category not found');
        }

        // ✅ Fetch related projects (department_id + id only)
        const projects = await Project.findAll({
            where: { projectcategory_id: moduleCategory.id },
            attributes: ['id', 'department_id']
        });

        // ✅ Prepare results (fresh every call)
        const departmentResults = await Promise.all(
            departments.map(async (dept) => {
                // Filter projects per department
                const departmentProjects = projects.filter(p => p.department_id === dept.id);
                const projectIds = departmentProjects.map(p => p.id);

                if (projectIds.length === 0) {
                    return { name: dept.name, registered: 0, checked: 0, approved: 0, authorized: 0 };
                }

                // Find all project plans for those projects
                const projectPlans = await ProjectPlan.findAll({
                    where: { project_id: { [Op.in]: projectIds } },
                    attributes: ['id']
                });

                if (projectPlans.length === 0) {
                    return { name: dept.name, registered: 0, checked: 0, approved: 0, authorized: 0 };
                }

                const planIds = projectPlans.map(p => p.id);

                // ✅ Get latest ActionState for each plan
                const latestActions = await Promise.all(
                    planIds.map(async (planId) => {
                        return await ActionState.findOne({
                            where: { model_id: planId },
                            order: [['created_at', 'DESC']],
                            attributes: ['action']
                        });
                    })
                );

                // ✅ Count per action type (always reset inside map)
                let registered = 0, checked = 0, approved = 0, authorized = 0;

                for (const action of latestActions) {
                    if (!action) continue;
                    switch (action.action) {
                        case 'REGISTER': registered++; break;
                        case 'CHECK': checked++; break;
                        case 'APPROVE': approved++; break;
                        case 'AUTHORIZE': authorized++; break;
                    }
                }

                return { name: dept.name, registered, checked, approved, authorized };
            })
        );

        // ✅ Chart and series (created new per request — no reuse)
        const chart = departmentResults.map(d => d.name);
        const series = [
            { name: 'Registered', data: departmentResults.map(d => d.registered) },
            { name: 'Checked', data: departmentResults.map(d => d.checked) },
            { name: 'Approved', data: departmentResults.map(d => d.approved) },
            { name: 'Authorized', data: departmentResults.map(d => d.authorized) }
        ];

        // ✅ Return fresh result
        return res.apiSuccess({ data: { chart, series } });

    } catch (error) {
        console.error('Error in getProjectCategoryProjectPlanDepartments:', error);
        return res.apiError(error.message || 'Failed to load project plan status');
    }
};


self.getProjectCategoryProjectReportDepartments = async (req, res) => {
    try {
        const id = req.params.id;
        const usr = await usrData.userData(req, res);

        // ✅ Always start fresh
        const departments = await self.getChildren(usr.departmentID);

        // return res.json(departments);

        // ✅ Validate category
        const moduleCategory = await ProjectCategory.findOne({ where: { id } });
        if (!moduleCategory) {
            return res.apiError('Project category not found');
        }

        // ✅ Fetch related projects (department_id + id only)
        const projects = await Project.findAll({
            where: { projectcategory_id: moduleCategory.id },
            attributes: ['id', 'department_id']
        });

        // ✅ Prepare results (fresh every call)
        const departmentResults = await Promise.all(
            departments.map(async (dept) => {
                // Filter projects per department
                const departmentProjects = projects.filter(p => p.department_id === dept.id);
                const projectIds = departmentProjects.map(p => p.id);

                if (projectIds.length === 0) {
                    return { name: dept.name, registered: 0, checked: 0, approved: 0, authorized: 0 };
                }

                // Find all project plans for those projects
                const projectReports = await ProjectReport.findAll({
                    where: { project_id: { [Op.in]: projectIds } },
                    attributes: ['id']
                });

                if (projectReports.length === 0) {
                    return { name: dept.name, registered: 0, checked: 0, approved: 0, authorized: 0 };
                }

                const reportIds = projectReports.map(p => p.id);

                // ✅ Get latest ActionState for each plan
                const latestActions = await Promise.all(
                    reportIds.map(async (reportId) => {
                        return await ActionState.findOne({
                            where: { model_id: reportId },
                            order: [['created_at', 'DESC']],
                            attributes: ['action']
                        });
                    })
                );

                // ✅ Count per action type (always reset inside map)
                let registered = 0, checked = 0, approved = 0, authorized = 0;

                for (const action of latestActions) {
                    if (!action) continue;
                    switch (action.action) {
                        case 'REGISTER': registered++; break;
                        case 'CHECK': checked++; break;
                        case 'APPROVE': approved++; break;
                        case 'AUTHORIZE': authorized++; break;
                    }
                }

                return { name: dept.name, registered, checked, approved, authorized };
            })
        );

        // ✅ Chart and series (created new per request — no reuse)
        const chart = departmentResults.map(d => d.name);
        const series = [
            { name: 'Registered', data: departmentResults.map(d => d.registered) },
            { name: 'Checked', data: departmentResults.map(d => d.checked) },
            { name: 'Approved', data: departmentResults.map(d => d.approved) },
            { name: 'Authorized', data: departmentResults.map(d => d.authorized) }
        ];

        // ✅ Return fresh result
        return res.apiSuccess({ data: { chart, series } });

    } catch (error) {
        console.error('Error in getProjectCategoryProjectReportDepartments:', error);
        return res.apiError(error.message || 'Failed to load project report status');
    }
};

// self.getProjectCategoryProjectPlanDepartments = async(req, res) => {

//     let id = req.params.id;

//     try {

//         let usr = await usrData.userData(req, res);

//         let departments = await self.getChildren(usr.departmentID);

//         let modulecategory = await ProjectCategory.findOne({
//             where: {
//                 id: id,
//             },
//         });



//         let models = await Project.findAll({
//             where: {
//                 projectcategory_id: modulecategory.id,
//             },
//         });


//         let series = [];

//         for(let dept of departments){
//             let projects = await Project.findAll({
//                 where: {
//                     projectcategory_id: modulecategory.id,
//                     department_id: dept.id
//                 }
//                 });

//             let proIDs = projects.map((item)=> item.id).filter(n=>n);

//             let projectplans = ProjectPlan.findAll({
//                 where: {
//                     project_id: {
//                         [Op.in]: proIDs
//                     }
//                 }
//             });

//             let registered = []
//             let checked = []
//             let approved = []
//             let authorized = []

//             if(projectplans.length > 0){    
//             for(let plan of projectplans){  
//                 const actions =  ActionState.findOne({
//                     where: { model_id: plan.id },
//                     order: [['created_at', 'DESC']]
//                 });

//                 switch(plan.action){ 
//                     case "REGISTER":
//                         registered.push(plan);
//                         break;
//                     case "CHECK":
//                         checked.push(plan);
//                         break;  
//                     case "APPROVE":
//                         approved.push(plan);
//                         break;
//                     case "AUTHORIZE":
//                         authorized.push(plan);
//                         break;
//                 }
//             }
//             }

//             series.push({
//                 name: dept.name,
//                 registered: registered.length,
//                 checked: checked.length,
//                 approved: approved.length,
//                 authorized: authorized.length
//             });


//         }

//         return res.apiSuccess({
//             data: {
//                 series,
//                 departments
//             }
//         });




//         series = await Promise.all(departments.map((dept) => {
//             const departmentprojects = models.filter((model) => model.department_id === dept.id);
//             let proIDs = departmentprojects.map((item)=> item.id).filter(n=>n);

//             let projectplans = ProjectPlan.findAll({
//                 where: {
//                     project_id: {
//                         [Op.in]: proIDs
//                     }
//                 }
//             });

//             return res.json(proIDs)
//             // return projectplans;


//             let registered = []
//             let checked = []
//             let approved = []
//             let authorized = []

//             if(projectplans.length > 0){    
//             for(let plan of projectplans){

//                 const actions =  ActionState.findOne({
//                         where: { model_id: plan.id },
//                         order: [['created_at', 'DESC']]
//                     });


//                 switch(plan.action){
//                     case "REGISTER":
//                         registered.push(plan);
//                         break;
//                     case "CHECK":
//                         checked.push(plan);
//                         break;
//                     case "APPROVE":
//                         approved.push(plan);
//                         break;
//                     case "AUTHORIZE":
//                         authorized.push(plan);
//                         break;
//                 }
//             }
//             }


//             return {
//                 name: dept.name,
//                 registered: registered.length,
//                 checked: checked.length,
//                 approved: approved.length,
//                 authorized: authorized.length
//             };
//             }));


//             let seriesArr = [
//                 {
//                     name: "Registered",
//                     data: series.map((item)=> item.financial_performance)
//                 },
//                 {
//                    name: "Checked",
//                    data: series.map((item)=> item.financial_performance)
//                 },
//                 {
//                     name: "Approved",
//                     data: series.map((item)=> item.varfinancial_performanceiation)
//                 },
//                 {
//                     name: "Authorized",
//                     data: series.map((item)=> item.financial_performance)
//                 }
//             ];



//         return res.apiSuccess({
//             data: {
//                 series: seriesArr,
//                 departments: [...new Set(departments.map((item) => item.name))].filter(
//                     (n) => n
//                 ),

//             }
//         });
//     } catch (error) {
//         res.apiError(error);
//     }
// };
self.getProjectCategoryLocationInformation = async (req, res) => {
    try {

        let { id } = req.params;

        let projects = await Project.findAll({
            where: {
                projectcategory_id: id
            }
        });

        let arr = [];

        for (let pro of projects) {
            let proaddress = await Address.findOne({
                where: {
                    model_id: pro.id
                }
            });
            if (proaddress) {

                arr.push([
                    proaddress.easting,
                    proaddress.northing,
                    pro.id
                ]);
            }
        }


        return res.apiSuccess({
            data: arr
        });


    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

//stakeholder
self.getStakeholderCategoryLocationInformation = async (req, res) => {
    try {

        // let {id} = req.params

        // let stakeholders = await stakeholder.findAll({
        //     where: {
        //         stakeholdercategory_id: id
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

        let { id } = req.params;

        let stakeholders = await Stakeholder.findAll({
            where: {
                stakeholdercategory_id: id
            }
        });

        let arr = [];

        for (let stake of stakeholders) {
            let stakeaddress = await Address.findOne({
                where: {
                    model_id: stake.id
                }
            });
            if (stakeaddress) {

                arr.push([
                    stakeaddress.easting,
                    stakeaddress.northing,
                    stake.id
                ]);
            }
        }

        return res.apiSuccess({
            data: arr
        });
    } catch (error) {
        res.apiError(error);
    }
};


self.getProjectYearlyFinancialPlan = async (req, res) => {
    try {
        let { id, year } = req.params;

        let projects = await Project.findAll({
            where: {
                projecttype_id: id
            }
        });


        let proIDs = projects.map((item) => item.id);



        let plans = await ProjectReport.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }

            }
        });

        let plansArr = await Promise.all(
            plans.map(async (plan) => {
                let action = await ActionState.findOne({
                    where: {
                        model_id: plan.id
                    },
                    order: [["created_at", "DESC"]]
                });

                let temp = plan.toJSON();
                temp.action = action.action;
                return temp;

            })
        );

        let planstatus = ["REGISTER", "CHECK", "APPROVE", "AUTHORIZE"];

        let quarters = [1, 2, 3, 4];

        let statusArr = planstatus.map((status) => {
            let eachStatusArr = plansArr.filter((plan) => plan.action === status);

            let quarterArr = quarters.map((qua) => {
                let each = eachStatusArr.filter((b) => b.quarter === qua.toString());
                return each.length;
            });
            return {
                name: status,
                data: quarterArr
            };
        });

        return res.apiSuccess({
            data: statusArr
        });


    } catch (error) {
        res.apiError(error);
    }
};

self.getProjectYearlyFinancialReport = async (req, res) => {
    try {
        let { id, year } = req.params;

        let projects = await Project.findAll({
            where: {
                projecttype_id: id
            }
        });


        let proIDs = projects.map((item) => item.id);



        let reports = await ProjectReport.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }

            }
        });

        let reportsArr = await Promise.all(
            reports.map(async (report) => {
                let action = await ActionState.findOne({
                    where: {
                        model_id: report.id
                    },
                    order: [["created_at", "DESC"]]
                });

                let temp = report.toJSON();
                temp.action = action.action;
                return temp;

            })
        );

        let reportstatus = ["REGISTER", "CHECK", "APPROVE", "AUTHORIZE"];

        let quarters = [1, 2, 3, 4];

        let statusArr = reportstatus.map((status) => {
            let eachStatusArr = reportsArr.filter((report) => report.action === status);

            let quarterArr = quarters.map((qua) => {
                let each = eachStatusArr.filter((b) => b.quarter === qua.toString());
                return each.length;
            });
            return {
                name: status,
                data: quarterArr
            };
        });

        return res.apiSuccess({
            data: statusArr
        });


    } catch (error) {
        res.apiError(error);
    }
};

self.getProjectYearlyPerformance = async (req, res) => {

    try {

        let { id, attr } = req.params;

        let filter = req.query.filter;
        let year = filter.year

        let projects = [];
        if (id) {
            projects = await Project.findAll({
                where: {
                    projecttype_id: id,
                    department_id: filter.department_id
                }
            });
        } else {
            projects = await Project.findAll({
                where: {
                    department_id: filter.department_id
                }
            });
        }


        if (projects.length === 0) {
            return res.status(404).json({
                message: "Project not found",
            });
        }

        let proIDs = projects.map((item) => item.id);

        let plans = await ProjectPlan.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }
            }
        });

        let reports = await ProjectReport.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }
            }
        });


        let quarters = [1, 2, 3, 4];


        let planned = quarters.map((qua) => {
            let eachArr = plans.filter((plan) => plan.quarter === qua.toString());

            let attrValue = eachArr.reduce((total, item) => total + item[attr], 0);

            return attrValue;
        });

        let actual = quarters.map((qua) => {
            let eachArr = reports.filter((report) => report.quarter === qua.toString());

            let attrValue = eachArr.reduce((total, item) => total + item[attr], 0);

            return attrValue;
        });

        let performanceArr = [
            {
                name: "Planned",
                data: planned
            },
            {
                name: "Actual",
                data: actual
            }
        ];

        return res.apiSuccess({
            data: performanceArr
        });

    } catch (error) {
        res.apiError(error);
    }
};


//cpm integration
// self.getProjectYearlyPerformance = async(req, res) => {

//     try {

//         let {id,year, attr} = req.params;
//         let cpm = req.query.cpm;
//         if(cpm===Boolean(true)){
//             const cpmplans = await apiHelper.getExternalData("plan");
//             const cpmreports = await apiHelper.getExternalData("report");


//             let plans = cpmplans.filter((item) => item.year === year.toString());
//             let reports = cpmreports.filter((item) => item.year === year.toString());

//             let months  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//             let planned = months.map((month) => {
//                 let eachArr = plans.filter((plan)=> plan.month===month.toString());

//                 let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0);

//                 return attrValue;
//             });

//             let actual = months.map((month) => {
//                 let eachArr = reports.filter((report)=> report.month===month.toString());

//                 let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0);

//                 return attrValue;
//             });

//             let performanceArr = [
//                 {
//                     name: "Planned",
//                     data: planned
//                 },
//                 {
//                     name: "Actual",
//                     data: actual
//                 }
//             ];

//             return res.apiSuccess(performanceArr);
//         }else{


//             let projects = await Project.findAll({
//                 where: {
//                     projecttype_id: id
//                 }
//             });


//             let proIDs = projects.map((item)=> item.id);

//             let plans = await ProjectPlan.findAll({
//                 where: {
//                     year: Number(year),
//                     project_id: {
//                         [Op.in]: proIDs
//                     }
//                 }
//             });

//             let reports = await ProjectReport.findAll({
//                 where: {
//                     year: Number(year),
//                     project_id: {
//                         [Op.in]: proIDs
//                     }
//                 }
//             });


//             let quarters  = [1, 2, 3, 4];

//             let planned = quarters.map((qua) => {
//                 let eachArr = plans.filter((plan)=> plan.quarter===qua.toString());

//                 let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0);

//                 return attrValue;
//             });

//             let actual = quarters.map((qua) => {
//                 let eachArr = reports.filter((report)=> report.quarter===qua.toString());

//                 let attrValue = eachArr.reduce((total, item)=> total+item[attr], 0);

//                 return attrValue;
//             });

//             let performanceArr = [
//                 {
//                     name: "Planned",
//                     data: planned
//                 },
//                 {
//                     name: "Actual",
//                     data: actual
//                 }
//             ];

//             return res.apiSuccess({
//                 data: performanceArr
//             });
//         }


//     } catch (error) {
//         res.apiError(error);
//     }
// };

self.getProjectAnnualCostAndScheduleVariances = async (req, res) => {
    try {

        let { id } = req.params;

        let filter = req.query.filter;
        let year = filter.year

        let usr = await usrData.userData(req, res);
        let department_id = filter.department_id ? filter.department_id : usr.departmentID

        let projects = [];
        if (id) {
            projects = await Project.findAll({
                where: {
                    projecttype_id: id,
                    department_id: department_id
                }
            });
        } else {
            projects = await Project.findAll({
                where: {
                    department_id: department_id
                }
            });
        }

        if (projects.length === 0) {
            return res.status(404).json({
                message: "Project not found",
            })
        };


        let proIDs = projects.map((item) => item.id);


        let plans = await ProjectPlan.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }
            }
        });

        let reports = await ProjectReport.findAll({
            where: {
                year: Number(year),
                project_id: {
                    [Op.in]: proIDs
                }
            }
        });

        let quarters = [1, 2, 3, 4];

        let allVariances = quarters.map((qua) => {
            let eachPlannedArr = plans.filter((plan) => plan.quarter === qua.toString());
            let eachReportArr = reports.filter((report) => report.quarter === qua.toString());

            let actualFinance = eachReportArr.reduce((total, item) => total + item.financial_performance, 0);
            let plannedFinance = eachPlannedArr.reduce((total, item) => total + item.financial_performance, 0);
            let actualCost = eachReportArr.reduce((total, item) => total + item.projectexpense, 0);


            let spi = (actualFinance / (plannedFinance === 0 ? 1 : plannedFinance)) * 100;
            let cpi = (actualFinance / (actualCost === 0 ? 1 : actualCost)) * 100;

            let sv = actualFinance - plannedFinance;
            let cv = actualFinance - actualCost;

            return {
                spi, cpi, sv, cv
            };
        });



        let spi = allVariances.map((item) => item.spi);
        let cpi = allVariances.map((item) => item.cpi);


        let sv = allVariances.map((item) => item.sv);
        let cv = allVariances.map((item) => item.cv);

        // let spi_cpi = [
        //     {
        //         name: "spi",
        //         data: spi
        //     },
        //     {
        //         name: "cpi",
        //         data: cpi
        //     }];
        //  let sv_cv = [
        //     {
        //         name: "sv",
        //         data: sv
        //     },
        //     {
        //         name: "cv",
        //         data: cv
        //     }
        // ];


        let data = [
            {
                name: "spi",
                data: spi
            },
            {
                name: "cpi",
                data: cpi
            },
            {
                name: "sv",
                data: sv
            },
            {
                name: "cv",
                data: cv
            }
        ];
        return res.apiSuccess({
            data: data
        });


    } catch (error) {
        res.apiError(error);
    }
};

self.getUserDepartments = async (req, res) => {
    try {
        let usr = await usrData.userData(req, res);
        let departments = await self.getChildren(usr.departmentID);
        return res.apiSuccess({
            data: departments
        });
    } catch (error) {
        res.apiError(error);
    }
};

self.getAllProjectAnnualFinancial = async (req, res) => {
    try {
        let { year, attr } = req.params;
        // let {id,year, attr} = req.params;


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

        const cpmplans = await apiHelper.getExternalData("plan");
        const cpmreports = await apiHelper.getExternalData("report");


        let plans = cpmplans.filter((item) => item.year === year.toString());
        let reports = cpmreports.filter((item) => item.year === year.toString());

        let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        let planned = months.map((month) => {
            let eachArr = plans.filter((plan) => plan.month === month.toString());

            let attrValue = eachArr.reduce((total, item) => total + item[attr], 0);

            return attrValue;
        });

        let actual = months.map((month) => {
            let eachArr = reports.filter((report) => report.month === month.toString());

            let attrValue = eachArr.reduce((total, item) => total + item[attr], 0);

            return attrValue;
        });

        let performanceArr = [
            {
                name: "Planned",
                data: planned
            },
            {
                name: "Actual",
                data: actual
            }
        ];

        return res.apiSuccess({
            data: performanceArr
        });


    } catch (error) {
        res.apiError(error);
    }
};



self.getProjectCategoryMapping = async (req, res) => {
    try {

        let us = req.decoded;
        let type_id = req.params.id;
        let projectcategories = await ProjectCategory.findAll({
            where: {
                projecttype_id: type_id
            }
        });

        let data = [];
        let categories = [];
        for (let category of projectcategories) {
            let projects = await Project.findAndCountAll({
                where: {
                    projectcategory_id: category.id,
                    department_id: us.department_id
                }
            });

            data.push(projects.count);
            categories.push(category.title);
        }

        const sum = data.reduce((acc, num) => acc + num, 0);
        const percentages = data.map(num => (num / sum) * 100);
        let result = {
            data: percentages,
            year: ['2019', '2020', '2021', '2022', '2023'],
            categories: categories
        }
        return res.apiSuccess({
            data: result
        });
    } catch (error) {
        res.apiError(error);
    }
};


self.getStakeholderCategoryMapping = async (req, res) => {
    try {

        let us = req.decoded;
        let type_id = req.params.id;
        let stakeholdercategories = await StakeholderCategory.findAll({
            where: {
                stakeholdertype_id: type_id
            }
        });

        let data = [];
        let categories = [];
        for (let category of stakeholdercategories) {
            let stakeholders = await Stakeholder.findAndCountAll({
                where: {
                    stakeholdercategory_id: category.id,
                    department_id: us.department_id
                }
            });

            data.push(stakeholders.count);
            categories.push(category.title);
        }


        const sum = data.reduce((acc, num) => acc + (Number(num) || 0), 0);
        // return 0 if data is null
        const percentages = data.map(num => {
            const value = Number(num) || 0;
            return sum > 0 ? (value / sum) * 100 : 0;
        });

        let result = {
            data: percentages,
            year: ['2022', '2023', '2024', '2025'],
            categories: categories
        }
        return res.apiSuccess({
            data: result
        });
    } catch (error) {
        res.apiError(error);
    }
};


module.exports = self;