"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WaterIrrigationDam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  WaterIrrigationDam.init(
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
      dam_volume: DataTypes.DOUBLE,
      total_capacity: DataTypes.DOUBLE,
      active_capacity: DataTypes.DOUBLE,
      inactive_capacity: DataTypes.DOUBLE,
      catchment_area: DataTypes.DOUBLE,
      surface_area: DataTypes.DOUBLE,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "WaterIrrigationDam",
      tableName: "waterirrigationdams"
    }
  );
  return WaterIrrigationDam;
};
