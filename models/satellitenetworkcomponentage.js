'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SatelliteNetworkComponentAge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SatelliteNetworkComponentAge.belongsTo(models.SatelliteNetwork, {
        foreignKey: "satellite_network_id",
        as: "satelliteNetwork"
      });
    }
  }
  SatelliteNetworkComponentAge.init({
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
    satellite_network_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    cell_towers: DataTypes.INTEGER,
    antennas: DataTypes.INTEGER,
    base_stations: DataTypes.INTEGER,
    repeaters: DataTypes.INTEGER,
    switches: DataTypes.INTEGER,
    others: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SatelliteNetworkComponentAge',
    tableName: 'SatelliteNetworkComponentAges',
  });
  return SatelliteNetworkComponentAge;
};