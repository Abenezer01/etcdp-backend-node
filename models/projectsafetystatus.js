'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectSafetyStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectSafetyStatus.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: {
      type: DataTypes.UUID
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    no_of_fatal_injuries: DataTypes.INTEGER,
    no_of_major_injuries: DataTypes.INTEGER,
    no_of_minor_injuries: DataTypes.INTEGER,
    measures_taken: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lesson_learned: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    modelName: 'ProjectSafetyStatus',
    tableName: 'ProjectSafetyStatuses',
  });
  return ProjectSafetyStatus;
};