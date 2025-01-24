'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectStatus49A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectStatus49A.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_status_id: DataTypes.STRING,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    status_id: DataTypes.STRING,
    description: DataTypes.TEXT,
    reason: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProjectStatus49A',
      tableName: 'ProjectStatus49As',
  });
  return ProjectStatus49A;
};