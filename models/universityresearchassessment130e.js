'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UniversityResearchAssessment130E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UniversityResearchAssessment130E.init({
    project_related_research_id: DataTypes.UUID,
    focus_of_research: DataTypes.STRING,
    originality_and_innovation: DataTypes.BOOLEAN,
    theoretical_significance: DataTypes.BOOLEAN,
    contribution_to_knowledge: DataTypes.TEXT,
    research_methodology_rigor: DataTypes.BOOLEAN,
    potential_for_further_research: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UniversityResearchAssessment130E',
  });
  return UniversityResearchAssessment130E;
};