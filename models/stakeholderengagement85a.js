'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderEngagement85A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderEngagement85A.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    meetings_held: DataTypes.STRING,
    stakeholder_feedback_concerns: DataTypes.TEXT,
    public_outreach_initiatives: DataTypes.TEXT,
    lessons_learned: DataTypes.TEXT,
    recommendations_for_future_projects: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'StakeholderEngagement85A',
  });
  return StakeholderEngagement85A;
};