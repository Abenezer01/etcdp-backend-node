'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TelecomInfrastructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TelecomInfrastructure.init({
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
    mobile_network_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    cables: DataTypes.INTEGER,
    wires: DataTypes.INTEGER,
    routers: DataTypes.INTEGER,
    switches: DataTypes.INTEGER,
    hubs: DataTypes.INTEGER,
    repeaters: DataTypes.INTEGER,
    antennas: DataTypes.INTEGER,
    towers: DataTypes.INTEGER,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'TelecomInfrastructure',
    tableName: 'TelecomInfrastructures',
  });
  return TelecomInfrastructure;
};