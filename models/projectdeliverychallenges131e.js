'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectDeliveryChallenges131E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectDeliveryChallenges131E.init({
    project_related_research_id: DataTypes.UUID,
    risk_management: DataTypes.TEXT,
    collaboration_communication: DataTypes.TEXT,
    dispute_resolution: DataTypes.TEXT,
    client_satisfaction: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ProjectDeliveryChallenges131E',
  });
  return ProjectDeliveryChallenges131E;
};