'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionMineralResource118A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionMineralResource118A1.init({
    id: DataTypes.UUID,
    mineral_type: DataTypes.STRING,
    estimated_reserve: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'ConstructionMineralResource118A1',
  });
  return ConstructionMineralResource118A1;
};