"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TurbineInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TurbineInfo.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      turbine_type: DataTypes.STRING,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detail: DataTypes.TEXT,
      generating_capacity: DataTypes.STRING,
      designed_quantity: DataTypes.STRING,
      installed_quantity: DataTypes.STRING,
      functional_quantity: DataTypes.STRING,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "TurbineInfo",
      tableName: "turbineinfos"
    }
  );
  return TurbineInfo;
};
