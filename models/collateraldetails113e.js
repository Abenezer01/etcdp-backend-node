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
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    applicantinformation_id: DataTypes.UUID,
    collateral_type: DataTypes.STRING,
    collateral_value: DataTypes.DOUBLE,
    ownership_documentation: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'CollateralDetails113E',
      tableName: 'CollateralDetails113Es'
  });
  return CollateralDetails113E;
};