"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResourceWorkExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResourceWorkExperience.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      workexperience_id: DataTypes.UUID,
      resource_id: DataTypes.UUID,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ResourceWorkExperience",
      tableName: "resourceworkexperiences"
    }
  );
  ResourceWorkExperience.associate = function (models) {
    ResourceWorkExperience.belongsTo(models.ExperienceLevel, {
      as: "workexperience",
      foreignKey: "workexperience_id",
    });
  };
  return ResourceWorkExperience;
};
