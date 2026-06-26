'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectJointVentureCompany extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProjectJointVentureCompany.belongsTo(models.Stakeholder, {
        foreignKey: "stakeholder_id",
        as: "stakeholder"
      });
      ProjectJointVentureCompany.belongsTo(models.JointVentureCompany, {
        foreignKey: "joint_venture_company_id",
        as: "jointVentureCompany"
      });

      ProjectJointVentureCompany.belongsTo(models.Project, {
        foreignKey: "project_id",
        as: "project"
      });
    }
  }
  ProjectJointVentureCompany.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    joint_venture_company_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: DataTypes.TEXT,
    remark: DataTypes.STRING,
    revision_no: DataTypes.INTEGER,
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,   
    sequelize,
    modelName: 'ProjectJointVentureCompany',
    tableName: 'ProjectJointVentureCompanies',
  });
  return ProjectJointVentureCompany;
};