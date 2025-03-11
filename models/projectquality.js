'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectQuality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectQuality.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: {
      type: DataTypes.UUID,
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    major_quality_problem_encountered: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    measures_taken: DataTypes.TEXT,
    lesson_learned: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    modelName: 'ProjectQuality',
    tableName: 'ProjectQualities'
  });
  return ProjectQuality;
};