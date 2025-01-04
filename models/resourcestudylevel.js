"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResourceStudyLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ResourceStudyLevel.belongsTo(models.StudyLevel, {
        as: "studylevel",
        foreignKey: "studylevel_id",
      });
    }
  }
  ResourceStudyLevel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      studylevel_id: DataTypes.UUID,
      resource_id: DataTypes.UUID,
      description: DataTypes.STRING,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "ResourceStudyLevel",
      tableName: "resourcestudylevels"
    }
  );

  return ResourceStudyLevel;
};
