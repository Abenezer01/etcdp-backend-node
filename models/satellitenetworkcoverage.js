'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SatelliteNetworkCoverage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SatelliteNetworkCoverage.belongsTo(models.ProjectMasterData, {
        foreignKey: 'network_infrastructure_type_id',
        as: 'networkInfrastructureType'
      });
      SatelliteNetworkCoverage.belongsTo(models.SatelliteNetwork, {
        foreignKey: 'satellite_network_id',
        as: 'satelliteNetwork'
      });
    }
  }
  SatelliteNetworkCoverage.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    satellite_network_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    network_infrastructure_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    total_coverage_area: DataTypes.DOUBLE,
    coverage_population_no: DataTypes.INTEGER,
    active_users_no: DataTypes.INTEGER,
    average_download_speed: DataTypes.DOUBLE,
    average_upload_speed: DataTypes.DOUBLE,
    signal_strength: DataTypes.DOUBLE,
    others: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SatelliteNetworkCoverage',
    tableName: 'SatelliteNetworkCoverages',
  });
  return SatelliteNetworkCoverage;
};