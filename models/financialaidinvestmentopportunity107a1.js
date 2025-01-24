'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialAidInvestmentOpportunity107A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialAidInvestmentOpportunity107A1.init({
    financial_aid_name: DataTypes.STRING,
    provider: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FinancialAidInvestmentOpportunity107A1',
      tableName: 'FinancialAidInvestmentOpportunity107A1s',
  });
  return FinancialAidInvestmentOpportunity107A1;
};