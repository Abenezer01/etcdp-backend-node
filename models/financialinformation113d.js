'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialInformation113D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialInformation113D.init({
    id: DataTypes.UUID,
    applicantinformation_id: DataTypes.UUID,
    bank_name: DataTypes.STRING,
    account_number: DataTypes.STRING,
    bank_statements: DataTypes.STRING,
    total_monthly_expenses: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'FinancialInformation113D',
  });
  return FinancialInformation113D;
};