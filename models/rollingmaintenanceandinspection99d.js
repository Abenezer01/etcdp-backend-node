'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RollingMaintenanceAndInspection99D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RollingMaintenanceAndInspection99D.init({
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
    maintenance_record: DataTypes.STRING,
    inspection_date: DataTypes.DATE,
    interval_and_schedule: DataTypes.STRING,
    recent_maintenance_activity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RollingMaintenanceAndInspection99D',
  });
  return RollingMaintenanceAndInspection99D;
};