'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CurrentMarketPrice120A3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CurrentMarketPrice120A3.init({
    material_type: DataTypes.UUID,
    material_category: DataTypes.UUID,
    quantity_required: DataTypes.INTEGER,
    measurement_unit_id: DataTypes.UUID,
    cost_per_unit: DataTypes.DOUBLE,
    market_location: DataTypes.STRING,
    supplier_name: DataTypes.STRING,
    lead_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CurrentMarketPrice120A3',
  });
  return CurrentMarketPrice120A3;
};