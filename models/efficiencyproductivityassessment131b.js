'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EfficiencyProductivityAssessment131B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EfficiencyProductivityAssessment131B.init({
    project_related_research_id: DataTypes.UUID,
    automation_and_robotics: DataTypes.BOOLEAN,
    automation_and_robotics_impact: DataTypes.BOOLEAN,
    digital_project_management: DataTypes.BOOLEAN,
    digital_project_management_impact: DataTypes.BOOLEAN,
    modular_construction: DataTypes.BOOLEAN,
    modular_construction_impact: DataTypes.TEXT,
    lean_construction_practices: DataTypes.BOOLEAN,
    lean_construction_impact: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EfficiencyProductivityAssessment131B',
      tableName: 'EfficiencyProductivityAssessment131Bs',
  });
  return EfficiencyProductivityAssessment131B;
};