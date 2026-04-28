"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProjectStatus.belongsTo(models.ProjectMasterData, {
        as: "status",
        foreignKey: "status_id",
      });

      ProjectStatus.belongsTo(models.Project, {
        foreignKey: "project_id",
        as: "project"
      });

    }
  }
  ProjectStatus.init(
    {
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
      status_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "ProjectStatus",
      tableName: "projectstatuses"
    }
  );
  return ProjectStatus;
};
