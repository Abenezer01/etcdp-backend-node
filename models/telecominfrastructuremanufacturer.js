'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TelecomInfrastructureManufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TelecomInfrastructureManufacturer.init({
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
    cables: DataTypes.STRING,
    wires: DataTypes.STRING,
    routers: DataTypes.STRING,
    switches: DataTypes.STRING,
    hubs: DataTypes.STRING,
    repeaters: DataTypes.STRING,
    antennas: DataTypes.STRING,
    towers: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'TelecomInfrastructureManufacturer',
    tableName: 'TelecomInfrastructureManufacturers',
  });
  return TelecomInfrastructureManufacturer;
};