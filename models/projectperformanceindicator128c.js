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
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProjectPerformanceIndicator128C',
      tableName: 'ProjectPerformanceIndicator128Cs',
  });
  return ProjectPerformanceIndicator128C;
};