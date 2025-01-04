'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WindResourceInformation66C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WindResourceInformation66C.init({
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
    wind_speed_at_hub_height: DataTypes.DOUBLE,
    weibull_shape_factor: DataTypes.DOUBLE,
    annual_energy_production: DataTypes.DOUBLE,
    plant_life: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WindResourceInformation66C',
  });
  return WindResourceInformation66C;
};