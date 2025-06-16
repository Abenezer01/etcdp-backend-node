'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TerminalAndFacilityData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TerminalAndFacilityData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    general_airport_information_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vip_terminal: DataTypes.BOOLEAN,
    guard_house: DataTypes.BOOLEAN,
    visitors_sheds: DataTypes.BOOLEAN,
    terminal_area: DataTypes.DOUBLE,
    car_parks: DataTypes.BOOLEAN,
    apron_flood_lights: DataTypes.BOOLEAN,
    taxi_way_lights: DataTypes.BOOLEAN,
    information_signs: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'TerminalAndFacilityData',
    tableName: 'TerminalAndFacilityData',
  });
  return TerminalAndFacilityData;
};