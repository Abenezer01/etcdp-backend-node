'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResearchBudget127C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResearchBudget127C.init({
    research_innovation_work_id: DataTypes.UUID,
    currency: DataTypes.UUID,
    amount: DataTypes.DOUBLE,
    finance_source: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ResearchBudget127C',
  });
  return ResearchBudget127C;
};