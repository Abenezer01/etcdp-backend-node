'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElectricSmartMetersRatingsData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ElectricSmartMetersRatingsData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    electric_smart_meters_data_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active_reactive: {
      type: DataTypes.ENUM('Active', 'Reactive', 'Both'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Active', // Default value
    },
    kwh_kvarh_rating: DataTypes.DOUBLE,
    phase: {
      type: DataTypes.ENUM('Three Phase', 'Single Phase'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Three Phase', // Default value
    },
    maximum_current_rating: DataTypes.DOUBLE,
    other: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ElectricSmartMetersRatingsData',
    tableName: 'ElectricSmartMetersRatingsData',
  });
  return ElectricSmartMetersRatingsData;
};