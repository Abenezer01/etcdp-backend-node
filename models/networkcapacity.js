'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NetworkCapacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NetworkCapacity.init({
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
    telecom_infrastructure_id: {
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
    modelName: 'NetworkCapacity',
    tableName: 'NetworkCapacities',
  });
  return NetworkCapacity;
};