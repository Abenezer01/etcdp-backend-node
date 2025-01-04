'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PerformanceEvaluation128E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PerformanceEvaluation128E.init({
    project_id: DataTypes.UUID,
    periodic_assessment: DataTypes.TEXT,
    analysis_trend: DataTypes.TEXT,
    lesson_learned: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'PerformanceEvaluation128E',
  });
  return PerformanceEvaluation128E;
};