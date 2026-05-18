'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BroadcastingNetworkCapacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BroadcastingNetworkCapacity.belongsTo(models.BroadcastingInfrastructure, {
        foreignKey: 'broadcasting_infrastructure_id',
        as: 'broadcastingInfrastructure'
      });
      BroadcastingNetworkCapacity.belongsTo(models.ProjectMasterData, {
        foreignKey: 'network_type_id',
        as: 'networkType'
      });
    }
  }
  BroadcastingNetworkCapacity.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    broadcasting_infrastructure_id: {
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
    modelName: 'BroadcastingNetworkCapacity',
    tableName: 'BroadcastingNetworkCapacities',
  });
  return BroadcastingNetworkCapacity;
};