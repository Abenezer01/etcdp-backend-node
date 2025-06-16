'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElectricSmartMetersData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ElectricSmartMetersData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    mini_grid_station_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner_operator: DataTypes.STRING,
    facility_type: {
      type: DataTypes.ENUM('Oil Immersed', 'Dry Type'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Oil Immersed', // Default value
    },
    service_area: DataTypes.DOUBLE,
    manufacturer: DataTypes.STRING,
    model_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    smart_meter_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    installation_year: DataTypes.INTEGER,
    smart_meters_installed_number: DataTypes.INTEGER,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ElectricSmartMetersData',
    tableName: 'ElectricSmartMetersData',
  });
  return ElectricSmartMetersData;
};