'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SatelliteNetwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SatelliteNetwork.init({
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
    satellite_network_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    satellite: DataTypes.BOOLEAN,
    ground_stations: DataTypes.BOOLEAN,
    modems: DataTypes.BOOLEAN,
    routers: DataTypes.BOOLEAN,
    others: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SatelliteNetwork',
    tableName: 'SatelliteNetworks',
  });
  return SatelliteNetwork;
};