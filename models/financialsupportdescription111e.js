'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialSupportDescription111E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialSupportDescription111E.init({
    id: DataTypes.STRING,
    financial_support_type: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    currency: DataTypes.STRING,
    eligibility_requirements: DataTypes.TEXT,
    application_process: DataTypes.TEXT,
    approval_process: DataTypes.TEXT,
    disbursement_process: DataTypes.TEXT,
    term_and_condition: DataTypes.TEXT,
    reporting_monitoring_requirement: DataTypes.TEXT,
    success_stories: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'FinancialSupportDescription111E',
  });
  return FinancialSupportDescription111E;
};