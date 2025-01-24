'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MinigridConsumers72D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MinigridConsumers72D.init({
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
    residential: DataTypes.INTEGER,
    commercial: DataTypes.INTEGER,
    productive_industrial: DataTypes.INTEGER,
    health_centers: DataTypes.INTEGER,
    schools: DataTypes.INTEGER,
    street_lighting: DataTypes.INTEGER,
    expected_electricity_sales: DataTypes.INTEGER,
    electricity_tariff: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MinigridConsumers72D',
      tableName: 'MinigridConsumers72Ds',
  });
  return MinigridConsumers72D;
};