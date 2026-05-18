'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MobileNetworkCapacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MobileNetworkCapacity.belongsTo(models.ProjectMasterData, { 
        foreignKey: 'network_type_id',
        as: 'networkType'
      })

    }
  }
  MobileNetworkCapacity.init({
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
    mobile_network_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    network_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    total_bandwidth: {
      type: DataTypes.DOUBLE
    },
    users_number: {
      type: DataTypes.INTEGER
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MobileNetworkCapacity',
    tableName: 'MobileNetworkCapacities',
  });
  return MobileNetworkCapacity;
};