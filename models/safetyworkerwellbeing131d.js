'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SafetyWorkerWellbeing131D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SafetyWorkerWellbeing131D.init({
    project_related_research_id: DataTypes.UUID,
    advanced_safety_technologies: DataTypes.TEXT,
    advanced_safety_technologies_impact: DataTypes.TEXT,
    improved_ergonomics: DataTypes.TEXT,
    mental_health_awareness: DataTypes.TEXT,
    skilled_workforce_development: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'SafetyWorkerWellbeing131D',
  });
  return SafetyWorkerWellbeing131D;
};