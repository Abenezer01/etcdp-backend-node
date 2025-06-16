'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElectricGridControlCenterData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ElectricGridControlCenterData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    mini_grid_station_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    installation_year: DataTypes.INTEGER,
    control_system_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    communication_links_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    energy_management_system_capability: DataTypes.BOOLEAN,
    remote_control_capability: DataTypes.BOOLEAN,
    average_measured_data_reliability: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ElectricGridControlCenterData',
    tableName: 'ElectricGridControlCenterData',
  });
  return ElectricGridControlCenterData;
};