'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SatelliteInfrastructureAge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SatelliteInfrastructureAge.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    satellite_network_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    satellite: DataTypes.INTEGER,
    ground_stations: DataTypes.INTEGER,
    modems: DataTypes.INTEGER,
    routers: DataTypes.INTEGER,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SatelliteInfrastructureAge',
    tableName: 'SatelliteInfrastructureAges',
  });
  return SatelliteInfrastructureAge;
};