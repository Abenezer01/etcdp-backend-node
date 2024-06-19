"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectType.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "ProjectType",
      tableName: "projecttypes"
    }
  );
  ProjectType.associate = function (models) {
    // associations can be defined here
    ProjectType.hasMany(models.ProjectCategory, {
      foreignKey: "projecttype_id",
      as: "Projectcategories",
    });
    models.ProjectCategory.associate = function (models) {
      // associations can be defined here
      ProjectCategory.hasMany(models.ProjectSubCategory, {
        foreignKey: "projectcategory_id",
        as: "Projectsubcategories",
      });
    };
  };
  return ProjectType;
};
