"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Resource.belongsTo(models.Department, {
        as: "department",
        foreignKey: "department_id",
      });
      Resource.belongsTo(models.Image, {
        foreignKey: "image_id",
      });
      Resource.belongsTo(models.ResourceType, {
        as: "resourcetype",
        foreignKey: "resourcetype_id",
      });
      Resource.belongsTo(models.ResourceCategory, {
        as: "resourcecategory",
        foreignKey: "resourcecategory_id",
      });
      Resource.belongsTo(models.ResourceSubCategory, {
        as: "resourcesubcategory",
        foreignKey: "resourcesubcategory_id",
      });
    }
  }
  Resource.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      department_id: DataTypes.UUID,
      resourcetype_id: DataTypes.UUID,
      resourcecategory_id: DataTypes.UUID,
      resourcesubcategory_id: DataTypes.UUID,
      measurement_unit: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image_id: DataTypes.UUID,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Resource",
      tableName: "resources"
    }
  );

  return Resource;
};
