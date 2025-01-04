'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectPerformanceIndicator128C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectPerformanceIndicator128C.init({
    project_id: DataTypes.UUID,
    schedule: DataTypes.TEXT,
    cost: DataTypes.TEXT,
    quality: DataTypes.TEXT,
    safety: DataTypes.TEXT,
    performance_measure: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ProjectPerformanceIndicator128C',
  });
  return ProjectPerformanceIndicator128C;
};