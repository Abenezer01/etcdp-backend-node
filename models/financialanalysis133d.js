'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialAnalysis133D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialAnalysis133D.init({
    project_id: DataTypes.UUID,
    estimated_project_costs: DataTypes.TEXT,
    financing_plan: DataTypes.TEXT,
    projected_revenue: DataTypes.TEXT,
    profitability_analysis: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'FinancialAnalysis133D',
  });
  return FinancialAnalysis133D;
};