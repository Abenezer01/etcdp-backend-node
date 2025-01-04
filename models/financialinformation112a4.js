'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialInformation112A4 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialInformation112A4.init({
    id: DataTypes.STRING,
    applicationform_id: DataTypes.STRING,
    total_annual_revenue: DataTypes.DOUBLE,
    total_profit: DataTypes.DOUBLE,
    total_assets: DataTypes.DOUBLE,
    total_liabilities: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'FinancialInformation112A4',
  });
  return FinancialInformation112A4;
};