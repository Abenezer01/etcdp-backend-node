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
      Resource.belongsTo(models.ResourceType, {
        as: "resourceType",
        foreignKey: "resourcetype_id",
      });
      Resource.belongsTo(models.ResourceCategory, {
        as: "resourceCategory",
        foreignKey: "resourcecategory_id",
      });
      Resource.belongsTo(models.ResourceSubCategory, {
        as: "resourceSubCategory",
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
      resourcetype_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      resourcecategory_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      resourcesubcategory_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity_measurement_unit_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      quality_measurement_unit_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      remark: DataTypes.TEXT,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Resource",
      tableName: "Resources"
    }
  );

  return Resource;
};
