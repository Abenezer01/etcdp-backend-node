'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BroadcastingInfrastructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BroadcastingInfrastructure.belongsTo(models.Project, {
        foreignKey: 'project_id',
        as: 'project'
      });
    
      // Relationship with BroadcastingInfrastructureType
      BroadcastingInfrastructure.belongsTo(models.ProjectMasterData, {
        foreignKey: 'broadcasting_infrastructure_type_id',
        as: 'infrastructureType'
      });
    }
  }
  BroadcastingInfrastructure.init({
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
    broadcasting_infrastructure_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    broadcasting_network: DataTypes.BOOLEAN,
    antennas: DataTypes.BOOLEAN,
    transmitters: DataTypes.BOOLEAN,
    towers: DataTypes.BOOLEAN,
    cables: DataTypes.BOOLEAN,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'BroadcastingInfrastructure',
    tableName: 'BroadcastingInfrastructures',
  });
  return BroadcastingInfrastructure;
};