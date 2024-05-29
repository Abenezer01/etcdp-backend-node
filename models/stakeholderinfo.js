"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StakeholderInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderInfo.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      stakeholder_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      capital: DataTypes.STRING,
      general_manager: DataTypes.STRING,
      description: DataTypes.TEXT,
      file_id: DataTypes.UUID,
      revision_no: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "StakeholderInfo",
    }
  );
  return StakeholderInfo;
};
