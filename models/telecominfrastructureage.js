'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TelecomInfrastructureAge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TelecomInfrastructureAge.belongsTo(models.TelecomInfrastructure, {
        foreignKey: 'telecom_infrastructure_id',
        as: 'telecomInfrastructure'
      });
    }
  }
  TelecomInfrastructureAge.init({
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
    cables: DataTypes.BOOLEAN,
    wires: DataTypes.BOOLEAN,
    routers: DataTypes.BOOLEAN,
    switches: DataTypes.BOOLEAN,
    hubs: DataTypes.BOOLEAN,
    repeaters: DataTypes.BOOLEAN,
    antennas: DataTypes.BOOLEAN,
    towers: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'TelecomInfrastructureAge',
    tableName: 'TelecomInfrastructureAges',
  });
  return TelecomInfrastructureAge;
};