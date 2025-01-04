'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WaterLevelInformation92D3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WaterLevelInformation92D3.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    borehold_id: DataTypes.UUID,
    static_water_level: DataTypes.DOUBLE,
    dynamic_water_level: DataTypes.DOUBLE,
    maximum_drawdown_depth: DataTypes.DOUBLE,
    safe_yield: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'WaterLevelInformation92D3',
  });
  return WaterLevelInformation92D3;
};