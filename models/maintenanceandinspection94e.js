'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceAndInspection94E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaintenanceAndInspection94E.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    maintenance_activity: DataTypes.STRING,
    frequency: DataTypes.STRING,
    method: DataTypes.STRING,
    recent_maintenance_record: DataTypes.STRING,
    maintenance_record_dates: DataTypes.STRING,
    inspection_reports: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MaintenanceAndInspection94E',
  });
  return MaintenanceAndInspection94E;
};