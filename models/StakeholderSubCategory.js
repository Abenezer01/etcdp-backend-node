"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StakeholderSubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderSubCategory.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      stakecategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      stakeholdertype_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      file_id: DataTypes.UUID,
      revision_no: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "StakeholderSubCategory",
    }
  );
  // StakeholderSubCategory.associate = function(models) {

  //     StakeholderSubCategory.belongsTo(models.stakecategory)
  // };
  return StakeholderSubCategory;
};
