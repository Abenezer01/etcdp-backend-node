'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeothermalWellData68C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeothermalWellData68C.init({
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
    well_name: DataTypes.STRING,
    depth: DataTypes.DOUBLE,
    well_diameter: DataTypes.DOUBLE,
    drilling_period: DataTypes.STRING,
    temperature_at_bottom_hole: DataTypes.DOUBLE,
    number_of_wells: DataTypes.INTEGER,
    plant_life: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GeothermalWellData68C',
  });
  return GeothermalWellData68C;
};