'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaterialProductionCapacity29B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaterialProductionCapacity29B.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    item: DataTypes.STRING,
    unit: DataTypes.STRING,
    year: DataTypes.INTEGER,
    annual_quantity: DataTypes.DOUBLE,
    average_unit_price: DataTypes.DOUBLE,
    total_annual_amount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'MaterialProductionCapacity29B',
  });
  return MaterialProductionCapacity29B;
};