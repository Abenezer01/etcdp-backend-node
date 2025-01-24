'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HydrologicalInformation65C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HydrologicalInformation65C.init({
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
    water_source: DataTypes.STRING,
    catchment_area: DataTypes.DOUBLE,
    elevation_change: DataTypes.DOUBLE,
    head: DataTypes.DOUBLE,
    total_inflow: DataTypes.DOUBLE,
    active_storage_volume: DataTypes.DOUBLE,
    water_stored: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'HydrologicalInformation65C',
      tableName: 'HydrologicalInformation65Cs',
  });
  return HydrologicalInformation65C;
};