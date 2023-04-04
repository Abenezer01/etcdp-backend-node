"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class resourcecategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  resourcecategory.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      resourcetype_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "resourcecategory",
    }
  );
  resourcecategory.associate = function (models) {
    // associations can be defined here
    resourcecategory.hasMany(models.resourcesubcategory, {
      foreignKey: "resourcecategory_Id",
      as: "resourcesubcategories",
    });
  };
  return resourcecategory;
};
