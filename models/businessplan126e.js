'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessPlan126E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BusinessPlan126E.init({
    summary: DataTypes.TEXT,
    project_details: DataTypes.TEXT,
    market_analysis: DataTypes.TEXT,
    financial_projection: DataTypes.TEXT,
    risk_assessment: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'BusinessPlan126E',
      tableName: 'BusinessPlan126Es'
  });
  return BusinessPlan126E;
};