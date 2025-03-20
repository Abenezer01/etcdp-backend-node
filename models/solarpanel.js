'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SolarPanel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SolarPanel.init({
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
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    solar_panel_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    solar_panels_number: DataTypes.INTEGER,
    each_solar_panel_capacity: DataTypes.DOUBLE,
    inverter_manufacturer: DataTypes.STRING,
    inverter_model: DataTypes.STRING,
    inverters_number: DataTypes.INTEGER,
    other_equipment: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SolarPanel',
    tableName: 'SolarPanels',
  });
  return SolarPanel;
};