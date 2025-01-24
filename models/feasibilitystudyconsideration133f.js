'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeasibilityStudyConsideration133F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FeasibilityStudyConsideration133F.init({
    project_id: DataTypes.UUID,
    sustainability_considerations: DataTypes.TEXT,
    regulations_and_permits: DataTypes.TEXT,
    project_team: DataTypes.TEXT,
    exit_strategy: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FeasibilityStudyConsideration133F',
      tableName: 'FeasibilityStudyConsideration133Fs',
  });
  return FeasibilityStudyConsideration133F;
};