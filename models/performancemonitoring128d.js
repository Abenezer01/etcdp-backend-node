'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PerformanceMonitoring128D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PerformanceMonitoring128D.init({
    project_id: DataTypes.UUID,
    continuous_process: DataTypes.TEXT,
    identified_issues: DataTypes.TEXT,
    maintain_communication: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'PerformanceMonitoring128D',
      tableName: 'PerformanceMonitoring128Ds',
  });
  return PerformanceMonitoring128D;
};