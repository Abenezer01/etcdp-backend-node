"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StakeholderCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StakeholderCategory.hasMany(models.StakeholderSubCategory, {
        foreignKey: "stakecategory_id",
      });
    }
  }
  StakeholderCategory.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      file_id: DataTypes.UUID,
      stakeholdertype_id: DataTypes.UUID,
      revision_no: {
        type: DataTypes.INTEGER,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "StakeholderCategory",
      tableName: "stakecategories"
    }
  );
  // StakeholderCategory.associate = function(models) {
  //     // associations can be defined here

  // }
  return StakeholderCategory;
};
