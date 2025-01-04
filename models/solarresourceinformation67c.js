'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SolarResourceInformation67C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SolarResourceInformation67C.init({
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
    annual_solar_radiation: DataTypes.DOUBLE,
    solar_panel_efficiency: DataTypes.DOUBLE,
    annual_energy_production: DataTypes.DOUBLE,
    plant_life: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SolarResourceInformation67C',
  });
  return SolarResourceInformation67C;
};