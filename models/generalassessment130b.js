'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeneralAssessment130B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeneralAssessment130B.init({
    project_related_research_id: DataTypes.UUID,
    relevance_to_industry_needs: DataTypes.TEXT,
    potential_impact: DataTypes.TEXT,
    methodology_soundness: DataTypes.TEXT,
    feasibility_and_applicability: DataTypes.TEXT,
    dissemination_plan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'GeneralAssessment130B',
  });
  return GeneralAssessment130B;
};