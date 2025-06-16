'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DamMonitoringAndInstrumentation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DamMonitoringAndInstrumentation.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    general_dam_information_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    is_monitoring_instruments_calibrated: DataTypes.BOOLEAN,
    gallery_availability: DataTypes.BOOLEAN,
    meteorological_data_collection_instruments_availability: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'DamMonitoringAndInstrumentation',
    tableName: 'DamMonitoringAndInstrumentations',
  });
  return DamMonitoringAndInstrumentation;
};