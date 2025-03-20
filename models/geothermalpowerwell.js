'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeothermalPowerWell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeothermalPowerWell.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    depth: DataTypes.DOUBLE,
    well_diameter: DataTypes.DOUBLE,
    drilling_period: DataTypes.DATE,
    temperature_at_bottom_hole: DataTypes.DOUBLE,
    wells_number: DataTypes.INTEGER,
    wells_name: DataTypes.STRING,
    plant_life: DataTypes.INTEGER,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'GeothermalPowerWell',
    tableName: 'GeothermalPowerWells',
  });
  return GeothermalPowerWell;
};