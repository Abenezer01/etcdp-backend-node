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
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    stakeholder_id: DataTypes.UUID,
    item: DataTypes.STRING,
    unit: DataTypes.STRING,
    year: DataTypes.INTEGER,
    annual_quantity: DataTypes.DOUBLE,
    average_unit_price: DataTypes.DOUBLE,
    total_annual_amount: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MaterialProductionCapacity29B',
      tableName: 'MaterialProductionCapacity29Bs',
  });
  return MaterialProductionCapacity29B;
};