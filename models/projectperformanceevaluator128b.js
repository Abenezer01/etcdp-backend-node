'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectPerformanceEvaluator128B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectPerformanceEvaluator128B.init({
    project_id: DataTypes.UUID,
    full_name: DataTypes.STRING,
    position_role: DataTypes.STRING,
    organization_name: DataTypes.STRING,
    department: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProjectPerformanceEvaluator128B',
  });
  return ProjectPerformanceEvaluator128B;
};