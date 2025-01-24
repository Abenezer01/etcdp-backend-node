'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectRelatedResearch130A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectRelatedResearch130A1.init({
    project_id: DataTypes.STRING,
    title: DataTypes.STRING,
    reference_id: DataTypes.INTEGER,
    institution: DataTypes.STRING,
    fund_source: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    research_report_date: DataTypes.DATE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProjectRelatedResearch130A1',
      tableName: 'ProjectRelatedResearch130A1s',
  });
  return ProjectRelatedResearch130A1;
};