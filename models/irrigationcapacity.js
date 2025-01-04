"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IrrigationCapacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  IrrigationCapacity.init(
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
      designed_irrigation_capacity: DataTypes.DOUBLE,
      actual_irrigation_capacity: DataTypes.DOUBLE,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "IrrigationCapacity",
      tableName: "irrigationcapacities"
    }
  );
  return IrrigationCapacity;
};
