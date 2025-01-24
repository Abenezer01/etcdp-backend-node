'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectMilestone55B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectMilestone55B.init({
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
    title: DataTypes.STRING,
    planned_start_date: DataTypes.DATE,
    planned_end_date: DataTypes.DATE,
    actual_start_date: DataTypes.DATE,
    actual_end_date: DataTypes.DATE,
    completion_status: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProjectMilestone55B',
      tableName: 'ProjectMilestone55Bs',
  });
  return ProjectMilestone55B;
};