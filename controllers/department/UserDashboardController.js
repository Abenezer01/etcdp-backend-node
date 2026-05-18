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

self.getProjectCategorySplit = async (req, res) => {
    try {
        const { department_id } = req.query.filter || {};

        // Build query conditions
        const whereCondition = {};
        if (department_id && department_id !== 'ALL') {
            whereCondition.department_id = department_id;
        }

        let categories = await ProjectCategory.findAll();

        // return res.json(categories)
        let arr = await Promise.all(
            categories.map(async (item) => {
                // Fetch subcategories and count projects for each
                let subcategories = await ProjectSubCategory.findAll({
                    where: { projectcategory_id: item.id },
                    attributes: ['id', 'title'],
                    include: [{
                        model: Project,
                        as: 'projects',
                        attributes: [],
                        where: whereCondition,
                        required: false
                    }],
                    group: ['ProjectSubCategory.id'],
                    attributes: {
                        include: [
                            [Sequelize.fn('COUNT', Sequelize.col('projects.id')), 'value']
                        ]
                    }
                });
        
        return {
                category_id: item.id,
                category: item.title,
                subcategories: subcategories.map(sub => ({
                    id: sub.id,
                    subcategory: sub.title,
                    value: parseInt(sub.getDataValue('value'), 10) || 0
                }))
            }
            })
        );


        return res.apiSuccess({data:arr});

    } catch (error) {
        res.apiError(error);
    }
};

self.getContractorsSplit = async (req, res) => {
    try {
        const { department_id } = req.query.filter || {};

        // Build query conditions
        const whereCondition = {};
        if (department_id && department_id !== 'ALL') {
            whereCondition.department_id = department_id;
        }

        let categories = await StakeholderCategory.findAll({
            where: {
                stakeholdertype_id : "5df23dca-46e9-4ea0-ad72-e4653bc37ff1"
            }
        });

        // return res.json(categories)
        let arr = await Promise.all(
            categories.map(async (item) => {
                // Fetch subcategories and count projects for each
                let subcategories = await StakeholderSubCategory.findAll({
                    where: { stakeholdercategory_id: item.id },
                    attributes: ['id', 'title'],
                    include: [{
                        model: Stakeholder,
                        as: 'stakeholders',
                        attributes: [],
                        where: whereCondition,
                        required: false
                    }],
                    group: ['StakeholderSubCategory.id'],
                    attributes: {
                        include: [
                            [Sequelize.fn('COUNT', Sequelize.col('stakeholders.id')), 'value']
                        ]
                    }
                });

                // return subcategories;
        
        return {
                category_id: item.id,
                category: item.title,
                subcategories: subcategories.map(sub => ({
                    id: sub.id,
                    subcategory: sub.title,
                    value: parseInt(sub.getDataValue('value'), 10) || 0
                }))
            }
            })
        );


        return res.apiSuccess({data:arr});

    } catch (error) {
        res.apiError(error);
    }
};



self.getContractorsGradeSplit = async (req, res) => {
    try {
        const { department_id } = req.query.filter || {};
        let subcategoryId = req.params.id;

        // Build query conditions
        const whereCondition = {};
        if (department_id && department_id !== 'ALL') {
            whereCondition.department_id = department_id;
        }
        whereCondition.projectsubcategory_id = subcategoryId;

        // Fetch projects under the subcategory and group by contractor grade
        // Assuming 'contractor_grade' is a field in the Project model
        const gradeStats = await Project.findAll({
            where: whereCondition,
            attributes: [
                ['grade', 'label'],
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'value']
            ],
            group: ['grade'],
            raw: true
        });

        return res.json(gradeStats)

        const payload = gradeStats.map(stat => ({
            label: stat.label || 'Unknown',
            value: parseInt(stat.value, 10) || 0
        }));

        return res.apiSuccess({
            data: payload
        });

    } catch (error) {
        res.apiError(error);
    }
};




module.exports = self;