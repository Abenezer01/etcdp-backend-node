'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataCenterComponentManufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DataCenterComponentManufacturer.belongsTo(models.DataCenter, {
        foreignKey: "data_center_id",
        as: "dataCenter"
      })
    }
  }
  DataCenterComponentManufacturer.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    data_center_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    servers: DataTypes.STRING,
    storage_devices: DataTypes.STRING,
    networking_equipment: DataTypes.STRING,
    cooling_systems: DataTypes.STRING,
    backup_generators: DataTypes.STRING,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'DataCenterComponentManufacturer',
    tableName: 'DataCenterComponentManufacturers',
  });
  return DataCenterComponentManufacturer;
};