'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupportGrantFundRNDProjects125A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SupportGrantFundRNDProjects125A1.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    duration_in_months: DataTypes.INTEGER,
    total_budget: DataTypes.DOUBLE,
    funding_agency_name: DataTypes.STRING,
    grant_type: DataTypes.STRING,
    grant_amount: DataTypes.DOUBLE,
    approval_date: DataTypes.DATE,
    project_lead_name: DataTypes.STRING,
    objectives: DataTypes.TEXT,
    expected_outcomes: DataTypes.TEXT,
    evaluation_criteria: DataTypes.TEXT,
    project_progress_updates: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'SupportGrantFundRNDProjects125A1',
      tableName: 'SupportGrantFundRNDProjects125A1s',
  });
  return SupportGrantFundRNDProjects125A1;
};