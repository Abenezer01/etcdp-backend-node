'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContractorResearchAssessment130C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContractorResearchAssessment130C.init({
    project_related_research_id: DataTypes.UUID,
    focus_of_research: DataTypes.STRING,
    cost_savings_potential: DataTypes.BOOLEAN,
    schedule_optimization: DataTypes.BOOLEAN,
    risk_mitigation_strategies: DataTypes.TEXT,
    safety_improvements: DataTypes.BOOLEAN,
    ease_of_implementation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContractorResearchAssessment130C',
  });
  return ContractorResearchAssessment130C;
};