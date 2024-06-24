"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StakeholderType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderType.init(
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
      revision_no: {
        type: DataTypes.INTEGER,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "StakeholderType",
      tableName: "stakeholdertypes"
    }
  );
  StakeholderType.associate = function (models) {
    // associations can be defined here
    StakeholderType.hasMany(models.StakeholderCategory, {
      foreignKey: "stakeholdertype_id",
      as: "stakecategories",
    });
  };
  return StakeholderType;
};
