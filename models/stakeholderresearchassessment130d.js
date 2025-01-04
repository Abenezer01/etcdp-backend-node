'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderResearchAssessment130D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderResearchAssessment130D.init({
    project_related_research_id: DataTypes.UUID,
    focus_of_research: DataTypes.STRING,
    sustainability: DataTypes.BOOLEAN,
    social_impact: DataTypes.TEXT,
    public_safety: DataTypes.BOOLEAN,
    long_term_performance: DataTypes.BOOLEAN,
    user_experience: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'StakeholderResearchAssessment130D',
  });
  return StakeholderResearchAssessment130D;
};