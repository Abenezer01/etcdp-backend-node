'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataCenter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DataCenter.belongsTo(models.ProjectMasterData, {
        foreignKey: "data_center_type_id",
        as: "dataDenterType"
      })
    }
  }
  DataCenter.init({
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
    name: {
      type: DataTypes.STRING
    },
    data_center_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    servers: DataTypes.BOOLEAN,
    storage_devices: DataTypes.BOOLEAN,
    networking_equipment: DataTypes.BOOLEAN,
    cooling_systems: DataTypes.BOOLEAN,
    backup_generators: DataTypes.BOOLEAN,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'DataCenter',
    tableName: 'DataCenters'
  });
  return DataCenter;
};