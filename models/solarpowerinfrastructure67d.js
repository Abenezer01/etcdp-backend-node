'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SolarPowerInfrastructure67D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SolarPowerInfrastructure67D.init({
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
    solar_panel_manufacturer: DataTypes.STRING,
    solar_panel_model: DataTypes.STRING,
    solar_panel_type: DataTypes.STRING,
    number_of_solar_panels: DataTypes.INTEGER,
    capacity_of_each_solar_panel: DataTypes.DOUBLE,
    inverter_manufacturer: DataTypes.STRING,
    inverter_model: DataTypes.STRING,
    number_of_inverters: DataTypes.INTEGER,
    other_equipment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SolarPowerInfrastructure67D',
  });
  return SolarPowerInfrastructure67D;
};