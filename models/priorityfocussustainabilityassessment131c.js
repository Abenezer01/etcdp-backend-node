'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PriorityFocusSustainabilityAssessment131C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PriorityFocusSustainabilityAssessment131C.init({
    project_related_research_id: DataTypes.UUID,
    sustainable_materials_practices: DataTypes.BOOLEAN,
    sustainable_materials_practices_description: DataTypes.TEXT,
    circular_economy_principles: DataTypes.BOOLEAN,
    circular_economy_principles_description: DataTypes.TEXT,
    low_impact_construction_techniques: DataTypes.BOOLEAN,
    low_impact_construction_techniques_description: DataTypes.TEXT,
    building_lifecycle_assessment: DataTypes.BOOLEAN,
    building_lifecycle_assessment_description: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'PriorityFocusSustainabilityAssessment131C',
      tableName: 'PriorityFocusSustainabilityAssessment131Cs',
  });
  return PriorityFocusSustainabilityAssessment131C;
};