'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CollateralDetails113E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CollateralDetails113E.init({
    id: DataTypes.UUID,
    applicantinformation_id: DataTypes.UUID,
    collateral_type: DataTypes.STRING,
    collateral_value: DataTypes.DOUBLE,
    ownership_documentation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CollateralDetails113E',
  });
  return CollateralDetails113E;
};