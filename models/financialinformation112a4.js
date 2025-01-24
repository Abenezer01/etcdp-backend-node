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
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    applicationform_id: DataTypes.STRING,
    total_annual_revenue: DataTypes.DOUBLE,
    total_profit: DataTypes.DOUBLE,
    total_assets: DataTypes.DOUBLE,
    total_liabilities: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FinancialInformation112A4',
      tableName: 'FinancialInformation112A4s',
  });
  return FinancialInformation112A4;
};