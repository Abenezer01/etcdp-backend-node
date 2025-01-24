'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvestmentDecision133E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InvestmentDecision133E.init({
    project_id: DataTypes.UUID,
    is_feasible_investment: DataTypes.BOOLEAN,
    justification_for_decision: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'InvestmentDecision133E',
      tableName: 'InvestmentDecision133Es',
  });
  return InvestmentDecision133E;
};