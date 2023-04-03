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
    

    Sequelize
} = require('../../models');
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
const {mainanalysismodules} = require('../../config/master')
const { encrypt, decrypt } = require('../../utils/helper')
const Op = Sequelize.Op;

const moment = require('moment')

let self = {};

self.getGeneralAnalysis = async(req, res) => {
    try {

        let  module = req.params.module
        let id = req.params.id

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
                id: id
            }
        })

    
        let stake = await eval(Model).findAndCountAll({
            where: {
                [`${moduleArr[1]}_id`]: moduletype.id
            }

        })

        // let str = `${moduleArr[1]}_id`

        let categories = await eval(CategoryModel).findAll({
            where: {
                [`${moduleArr[1]}_id`]:moduletype.id
            }
        })
    
        let categoryelement = {}

        if(categories.length > 0){

            for(let category of categories){
                let catestake = await eval(Model).findAll({
                    where: {
                        [`${moduleArr[2]}_id`]: category.id
                    }
                })

                categoryelement[category.title] = catestake.length

            }
            
        }
        
        let first = {
            title: moduletype.title,
            list: categoryelement,
            count: stake.count
        }
            
            
        
        return res.status(200).json(first)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.getGeneralAnalysisCategory = async(req, res) => {
    try {

        let  module = req.params.module
        let id = req.params.id


        const moduleArr = mainanalysismodules[module];
        
        const Model = moduleArr[0];
        const CategoryModel = moduleArr[2];
        const SubCategoryModel = moduleArr[3];

    

        let modulecategory = await eval(CategoryModel).findOne({
            where: {
                id: id
            }
        })

        if(!modulecategory){
            return res.status(404).json({
                message: `${module} category not found`
            })
        }

    
        let stake = await eval(Model).findAndCountAll({
            where: {
                [`${moduleArr[2]}_id`]: modulecategory.id
            }

        })

        // let str = `${moduleArr[1]}_id`

        let subcategories = await eval(SubCategoryModel).findAll({
            where: {
                [`${moduleArr[2]}_id`]:modulecategory.id
            }
        })
    
        let subcategoryelement = {}

        if(subcategories.length > 0){

            for(let subcategory of subcategories){
                let catestake = await eval(Model).findAll({
                    where: {
                        [`${moduleArr[3]}_id`]: subcategory.id
                    }
                })

                subcategoryelement[subcategory.title] = catestake.length

            }
            
        }
        
        let first = {
            title: modulecategory.title,
            list: subcategoryelement,
            count: stake.count
        }
            
            
        
        return res.status(200).json(first)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


self.getGeneralAnalysisDepartments = async(req, res) => {
    
    let  module = req.params.module
    let id = req.params.id
   
    try {

        
        const moduleArr = mainanalysismodules[module];

        const Model = moduleArr[0];
        const TypeModel = moduleArr[1];
        const CategoryModel = moduleArr[2];
        let usr = await usrData.userData(req, res)

        let departments = await self.getChildren(usr.departmentID)


        let moduletype = await eval(TypeModel).findOne({
            where: {
                id: id
            }
        })

    
        let stake = await eval(Model).findAndCountAll({
            where: {
                [`${moduleArr[1]}_id`]: moduletype.id
            }

        })

        // let str = `${moduleArr[1]}_id`

        let categories = await eval(CategoryModel).findAll({
            where: {
                [`${moduleArr[1]}_id`]:moduletype.id
            }
        })
    
        let categoryelement = [] 

        if(categories.length > 0){

            for(let category of categories){
                let catestake = await eval(Model).findAll({
                    where: {
                        [`${moduleArr[2]}_id`]: category.id
                    },
                    include: [{
                        model: department,
                        as: "department"
                    }
                ],
                }) 


                const countByName = catestake.reduce((acc, obj) => {
                    const department_id = obj.department_id;
    
                    acc[obj.department.name] = (acc[department_id] || 0) + 1;
                    return acc;
                  }, {});

                //   const filteredData = data.filter(item => !["EtCDP", "TEST"].includes(item.name));
                  let existing = Object.keys(countByName)
                  const filteredData = departments.filter(item => !existing.includes(item.name));
                  const nameFiltered = filteredData.map((item) => item.name)

                  let remainingObj = {};
                  
                  nameFiltered.forEach(element => {
                    remainingObj[element] = 0;
                  });
                  const mergedObj = Object.assign({}, countByName, remainingObj);

                  
                let deptObj = {}

                deptObj["name"] = category.title
                deptObj["count"] = catestake.length 
                deptObj["data"] = Object.keys(mergedObj).length === 0 ? 0 : Object.values(mergedObj)

                categoryelement.push (deptObj) 
            }
            
        }
        
        first = {
            title: moduletype.title,
            series: categoryelement,
            departments:  [...new Set(departments.map((item) => item.name))].filter(n=>n),
            count: stake.count
        }
            
        
        return res.status(200).json(first)
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

let children = []
self.getAllChildren = async(arr) => {

    for (var i = 0; i < arr.length; i++) {
        let dd = await department.findAll({
            where: {
                parent_department_id: arr[i].id
            }
        })
        if (dd.length > 0) {
            children.concat(dd)
            self.getChildren(dd)
        }
    }
    return children;
}


self.getChildren = async(id) => {
    try {
        let parent = await department.findOne({
            where: {
                id: id
            }
        })
        let data = await department.findAll({
            where: {
                parent_department_id: id
            }
        })
        let all = await self.getAllChildren(data)
        Array.prototype.push.apply(all, data);
        all.unshift(parent)
      
        return all;

    } catch (error) {
        return {
            message: error.message
        }
    }
}


self.getGeneralAnalysisDepartmentsByCategory = async(req, res) => {
    
    let  module = req.params.module
    let id = req.params.id
   
    try {

        
        const moduleArr = mainanalysismodules[module];

        const Model = moduleArr[0];
        const CategoryModel = moduleArr[2];
        const SubCategoryModel = moduleArr[3];
        let usr = await usrData.userData(req, res)

        let departments = await self.getChildren(usr.departmentID)


        let modulecategory= await eval(CategoryModel).findOne({
            where: {
                id: id
            }
        })

    
        let stake = await eval(Model).findAndCountAll({
            where: {
                [`${moduleArr[1]}_id`]: modulecategory.id
            }

        })

        let subcategories = await eval(SubCategoryModel).findAll({
            where: {
                [`${moduleArr[1]}_id`]:modulecategory.id
            }
        })
    
        let subcategoryelement = {} 

        if(subcategories.length > 0){

            for(let subcategory of subcategories){
                let catestake = await eval(Model).findAll({
                    where: {
                        [`${moduleArr[3]}_id`]: subcategory.id
                    },
                    include: [{
                        model: department,
                        as: "department"
                    }
                ],
                }) 


                const countByName = catestake.reduce((acc, obj) => {
                    const department_id = obj.department_id;
    
                    acc[obj.department.name] = (acc[department_id] || 0) + 1;
                    return acc;
                  }, {});
                  
                  let existing = Object.keys(countByName)
                  const filteredData = departments.filter(item => !existing.includes(item.name));
                  const nameFiltered = filteredData.map((item) => item.name)

                  let remainingObj = {};
                  
                  nameFiltered.forEach(element => {
                    remainingObj[element] = 0;
                  });
                  const mergedObj = Object.assign({}, countByName, remainingObj);
                  
                let deptObj = {}
                deptObj["count"] = catestake.length 
                deptObj["departments"] = Object.keys(mergedObj).length === 0 ? 0 : Object.values(mergedObj)
                subcategoryelement[subcategory.title] = Object.keys(deptObj).length === 0 ? 0 : deptObj
            }
            
        }
        
        let first = {
            title: modulecategory.title,
            list: subcategoryelement,
            departments: [...new Set(departments.map((item) => item.name))].filter(n=>n),
            count: stake.count
        }
            
            
        
        return res.status(200).json(first)
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getModuleTypesAnalysis = async(req, res) => {
    
    let  module = req.params.module
    try {
        const moduleArr = mainanalysismodules[module];
        const Model = moduleArr[0];

        const TypeModel = moduleArr[1];

        let moduletype = await eval(TypeModel).findAll()
        
        let year = moment().year()
        let last_year = (year-1)
        
        // return res.json(moment().year())


        let arr = await Promise.all(moduletype.map(async(item)=> {
            
                let model = await eval(Model).findAndCountAll({
                    where: {
                        [`${moduleArr[1]}_id`]: item.id
                    }
        
                })

                let this_year_model = await eval(Model).findAndCountAll({
                    where: {
                        [`${moduleArr[1]}_id`]: item.id,
                        createdAt: {
                            [Op.gte]: new Date(year, 0, 1), // Start of the year
                            [Op.lt]: new Date(year + 1, 0, 1), // Start of the next year
                        }
                    }
        
                })
                let last_year_model = await eval(Model).findAndCountAll({
                    where: {
                        [`${moduleArr[1]}_id`]: item.id,
                        createdAt: {
                            [Op.gte]: new Date(last_year, 0, 1), // Start of the year
                            [Op.lt]: new Date(last_year + 1, 0, 1), // Start of the next year
                        }
                    }
        
                })
            
                let temp = item.toJSON()
                temp["total"] = model.count
                temp["this_year"] = this_year_model.count
                temp["last_year"] = last_year_model.count
                return temp
            
            })
        )

        return res.json(arr)
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


self.getModuleEachTypesAnalysis = async(req, res) => {
    
    try {
        let  module = req.params.module
        let id = req.params.id

        const moduleArr = mainanalysismodules[module];
        
        const Model = moduleArr[0];
        const TypeModel = moduleArr[1];

    

        let moduletype = await eval(TypeModel).findOne({
            where: {
                id: id
            }
        })

        const currentYear = moment().year();
        const yearArray = Array.from({ length: 5 }, (_, index) => currentYear - (4 - index));

        const queries = yearArray.map(async (yr) => {
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
            series:  Object.values(obj)
        })
            
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getModuleEachCategoriesAnalysis = async(req, res) => {
    
    try {
        let  module = req.params.module
        let id = req.params.id

        const moduleArr = mainanalysismodules[module];
        
        const Model = moduleArr[0];
        const CategoryModel = moduleArr[2];

    

        let modulecategory = await eval(CategoryModel).findOne({
            where: {
                id: id
            }
        })

        const currentYear = moment().year();
        const yearArray = Array.from({ length: 5 }, (_, index) => currentYear - (4 - index));

        const queries = yearArray.map(async (yr) => {
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
            series:  Object.values(obj)
        })
            
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getCategoriesByTypeId = async(req,res) => {
    try{

        let  module = req.params.module
        let id = req.params.id

        const moduleArr = mainanalysismodules[module];
        const CategoryModel = moduleArr[2];    

        let modulecategories = await eval(CategoryModel).findAll({
            where: {
                [`${moduleArr[1]}_id`]: id,
            }
        })

        return res.json(modulecategories)
    }catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getSubCategoriesByModuleCategoryId = async(req,res) => {
    try{

        let  module = req.params.module
        let id = req.params.id

        const moduleArr = mainanalysismodules[module];
        const SubCategoryModel = moduleArr[3];    

        let modulesubcategories = await eval(SubCategoryModel).findAll({
            where: {
                [`${moduleArr[2]}_id`]: id,
            }
        })

        return res.json(modulesubcategories)
    }catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.getGeneralAnalysisSubCategoryDepartments = async(req, res) => {
    
    let  module = req.params.module
    let id = req.params.id
   
    try {

        const moduleArr = mainanalysismodules[module];

        const Model = moduleArr[0];
        const SubCategoryModel = moduleArr[3];
        
        let usr = await usrData.userData(req, res)

        let departments = await self.getChildren(usr.departmentID)

        let modulesubcategory = await eval(SubCategoryModel).findOne({
            where: {
                id: id
            }
        })

    
        let models = await eval(Model).findAll({
            where: {
                [`${moduleArr[3]}_id`]: modulesubcategory.id
            }

        })

        

        let series = []
        let deptmap = []
        

        for(let dept of departments){

            let value =  models.filter(model=> model.department_id === dept.id)

            if(value.length>0){
            series.push(value.length)

            }else{
                series.push(0)

            }

        }
        
         deptmap= departments.map((item)=> item.name)

         let first = {}

         first.series = series
         first.departments = deptmap

         series = []
         deptmap = []

        return res.json(first)
            
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
module.exports = self;