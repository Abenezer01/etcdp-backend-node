'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PumpInformation92D4 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PumpInformation92D4.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    borehold_id: DataTypes.UUID,
    pump_type: DataTypes.STRING,
    pump_position: DataTypes.STRING,
    water_temperature: DataTypes.DOUBLE,
    water_quality: DataTypes.DOUBLE,
    water_quality_reason: DataTypes.STRING,
    wellhead_availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PumpInformation92D4',
  });
  return PumpInformation92D4;
};