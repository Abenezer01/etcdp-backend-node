'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElectricSmartMetersPerformanceData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ElectricSmartMetersPerformanceData.init({
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
    maintenance_frequency_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    average_meter_lifespan: DataTypes.INTEGER,
    average_meter_accuracy: DataTypes.DOUBLE,
    safety_problems_encountered: DataTypes.STRING,
    work_accidents_number: DataTypes.INTEGER,
    on_site_safety_regulation_implemented: DataTypes.BOOLEAN,
    other: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ElectricSmartMetersPerformanceData',
    tableName: 'ElectricSmartMetersPerformanceData',
  });
  return ElectricSmartMetersPerformanceData;
};