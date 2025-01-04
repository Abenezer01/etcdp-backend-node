'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialDetail126D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialDetail126D.init({
    requested_loan_amount: DataTypes.DOUBLE,
    replayment_period: DataTypes.INTEGER,
    interest: DataTypes.DOUBLE,
    estimated_project_cost: DataTypes.DOUBLE,
    other_financial_assistance: DataTypes.DOUBLE,
    required_grant_amount: DataTypes.DOUBLE,
    project_benefits: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'FinancialDetail126D',
  });
  return FinancialDetail126D;
};