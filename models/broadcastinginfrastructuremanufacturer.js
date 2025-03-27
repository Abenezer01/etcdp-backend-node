'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BroadcastingInfrastructureManufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BroadcastingInfrastructureManufacturer.belongsTo(models.BroadcastingInfrastructure, {
        foreignKey: "broadcasting_infrastructure_id",
        as: "broadcastinginfrastructure"
      })
    }
  }
  BroadcastingInfrastructureManufacturer.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    broadcasting_infrastructure_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    antennas: DataTypes.STRING,
    transmitters: DataTypes.STRING,
    towers: DataTypes.STRING,
    cables: DataTypes.STRING,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'BroadcastingInfrastructureManufacturer',
    tableName: 'BroadcastingInfrastructureManufacturers',
  });
  return BroadcastingInfrastructureManufacturer;
};