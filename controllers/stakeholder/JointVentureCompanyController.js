const { JointVentureCompany, Project, ProjectJointVentureCompany, Sequelize } = require("../../models");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();

const paginationHelper = require("../utils/pagination-helper");
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");
let self = {};

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(JointVentureCompany, req);

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
  getRecordById(JointVentureCompany, req, res);
};

self.save = async (req, res) => {
  saveRecord(JointVentureCompany, req, res);
};

self.update = async (req, res) => {
  updateRecord(JointVentureCompany, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(JointVentureCompany, req, res);
};


self.getJointVentureCompanyProjects = async(req, res) => {

    let {id} = req.params;

    try {

        let data = await Project.findAll({
            include: [{
                model: ProjectJointVentureCompany,
                as: 'projectJointVentureCompany',
                where: { stakeholder_id: id },
                attributes: [] // We don't need attributes from the join table itself
            }],
            // If you only want projects directly associated with the stakeholder,
            // and not projects that might have other stakeholderprojects entries,
            // you might need to adjust the include or add a distinct clause.
            // For a simple join, this should work.
        });


        res.apiSuccess({
          data: data
        });

  } catch (error) {
    res.apiError(error);
  }
}

module.exports = self;
