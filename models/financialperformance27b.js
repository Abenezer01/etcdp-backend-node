'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialPerformance27B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialPerformance27B.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    stakeholder_id: DataTypes.UUID,
    year: DataTypes.INTEGER,
    construction_income: DataTypes.DOUBLE,
    expenses: DataTypes.DOUBLE,
    gross_profit_loss: DataTypes.DOUBLE,
    non_current_assets: DataTypes.DOUBLE,
    current_assets: DataTypes.DOUBLE,
    capital_reserves: DataTypes.DOUBLE,
    non_current_liabilities: DataTypes.DOUBLE,
    current_liabilities: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FinancialPerformance27B',
      tableName: 'FinancialPerformance27Bs',
  });
  return FinancialPerformance27B;
};