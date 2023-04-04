"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class projectsubcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectsubcategory.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      projectcategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "projectsubcategory",
    }
  );
  projectsubcategory.associate = (models) => {
    projectsubcategory.belongsTo(models.projectcategory, {
      as: "Subcategories",
      foreignKey: {
        name: "projectcategory_id",
        allowNull: false,
      },
    });
  };
  return projectsubcategory;
};
