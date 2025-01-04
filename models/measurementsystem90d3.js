'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeasurementSystem90D3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MeasurementSystem90D3.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    flow_measurement_available: DataTypes.BOOLEAN,
    level_measurement_available: DataTypes.BOOLEAN,
    gas_pressure_measurement_available: DataTypes.BOOLEAN,
    sludge_measurement_available: DataTypes.BOOLEAN,
    water_quality_measurement_available: DataTypes.BOOLEAN,
    effluent_quality_measures: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MeasurementSystem90D3',
  });
  return MeasurementSystem90D3;
};