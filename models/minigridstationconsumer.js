'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MiniGridStationConsumer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MiniGridStationConsumer.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    mini_grid_station_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    residential: DataTypes.INTEGER,
    commercial: DataTypes.INTEGER,
    productive_industrial: DataTypes.INTEGER,
    health_centers: DataTypes.INTEGER,
    schools: DataTypes.INTEGER,
    street_lighting: DataTypes.INTEGER,
    other: DataTypes.INTEGER,
    expected_electricity_sales: DataTypes.DOUBLE,
    electricity_tariff: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MiniGridStationConsumer',
    tableName: 'MiniGridStationConsumers',
  });
  return MiniGridStationConsumer;
};