'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SatelliteNetworkCapacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SatelliteNetworkCapacity.belongsTo(models.SatelliteNetwork, {
        foreignKey: "satellite_network_id",
        as: "satelliteNetwork"
      });

      SatelliteNetworkCapacity.belongsTo(models.ProjectMasterData, {
        foreignKey: "network_type_id",
        as: "networkType"
      });
    }
  }
  SatelliteNetworkCapacity.init({
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
    network_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    network_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    total_bandwidth: DataTypes.DOUBLE,
    users_number: DataTypes.INTEGER,
    remark: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SatelliteNetworkCapacity',
    tableName: 'SatelliteNetworkCapacities'
  });
  return SatelliteNetworkCapacity;
};