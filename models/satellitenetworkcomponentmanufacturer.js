'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SatelliteNetworkComponentManufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SatelliteNetworkComponentManufacturer.init({
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
    satellite: DataTypes.STRING,
    ground_stations: DataTypes.STRING,
    modems: DataTypes.STRING,
    routers: DataTypes.STRING,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SatelliteNetworkComponentManufacturer',
    tableName: 'SatelliteNetworkComponentManufacturers',
  });
  return SatelliteNetworkComponentManufacturer;
};