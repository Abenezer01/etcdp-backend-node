'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionMineralLocation118A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionMineralLocation118A2.init({
    id: DataTypes.UUID,
    mineral_resource_id: DataTypes.UUID,
    region: DataTypes.STRING,
    zone: DataTypes.STRING,
    city: DataTypes.STRING,
    woreda: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'ConstructionMineralLocation118A2',
  });
  return ConstructionMineralLocation118A2;
};