"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectSubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProjectSubCategory.belongsTo(models.ProjectCategory, {
        as: "projectsubcategories",
        foreignKey: "projectcategory_id",
      });

      ProjectSubCategory.hasMany(models.Project, {
        foreignKey: "projectsubcategory_id",
        as: "projects",
      });
    }
  }
  ProjectSubCategory.init(
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
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "ProjectSubCategory",
      tableName: "projectsubcategories"
    }
  );
  return ProjectSubCategory;
};
