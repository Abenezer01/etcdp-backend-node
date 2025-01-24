'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AirPortInformation104D1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AirPortInformation104D1.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    type: DataTypes.STRING,
    average_flights_per_day: DataTypes.INTEGER,
    average_passengers_per_day: DataTypes.INTEGER,
    cargo_capacity: DataTypes.DOUBLE,
    terminal_area: DataTypes.DOUBLE,
    vip_terminal: DataTypes.BOOLEAN,
    guard_house: DataTypes.BOOLEAN,
    visitors_sheds: DataTypes.BOOLEAN,
    apron_floodlights: DataTypes.BOOLEAN,
    taxiway_lights: DataTypes.BOOLEAN,
    information_signs: DataTypes.BOOLEAN,
    car_parks: DataTypes.BOOLEAN
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'AirPortInformation104D1',
      tableName: 'AirPortInformation104D1s',
  });
  return AirPortInformation104D1;
};