'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElectricPowerDetail65A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ElectricPowerDetail65A2.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    finance_modulity: DataTypes.STRING,
    total_investment: DataTypes.DOUBLE,
    total_cost: DataTypes.DOUBLE,
    lcoe: DataTypes.DOUBLE,
    stuff_number: DataTypes.INTEGER,
    work_accident_number: DataTypes.INTEGER,
    safety_measures_implemented: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ElectricPowerDetail65A2',
      tableName: 'ElectricPowerDetail65A2s',
  });
  return ElectricPowerDetail65A2;
};