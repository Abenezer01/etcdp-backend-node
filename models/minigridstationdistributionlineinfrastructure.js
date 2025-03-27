'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MiniGridStationDistributionLineInfrastructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MiniGridStationDistributionLineInfrastructure.init({
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
    distribution_line_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    distribution_line_material_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    distribution_line_conductor_size: DataTypes.DOUBLE,
    voltage_level: DataTypes.DOUBLE,
    topology: {
      type: DataTypes.ENUM('Radial', 'Ring'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Radial', // Default value
    },
    switching_station_connection: DataTypes.BOOLEAN,
    station_name: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MiniGridStationDistributionLineInfrastructure',
    tableName: 'MiniGridStationDistributionLineInfrastructures',
  });
  return MiniGridStationDistributionLineInfrastructure;
};