'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DamReservoirCharacteristic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DamReservoirCharacteristic.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    general_dam_information_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    full_reservoir_volume: DataTypes.DOUBLE,
    dead_storage_volume: DataTypes.DOUBLE,
    live_storage_volume: DataTypes.DOUBLE,
    reservoir_area: DataTypes.DOUBLE,
    fetch_length: DataTypes.DOUBLE,
    inflow_design_flood: DataTypes.DOUBLE,
    dam_instrumentation_availability: DataTypes.BOOLEAN,
    embedded_instrument_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'DamReservoirCharacteristic',
    tableName: 'DamReservoirCharacteristics',
  });
  return DamReservoirCharacteristic;
};