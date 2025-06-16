'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayTrackMaintenanceAndInspection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayTrackMaintenanceAndInspection.init({
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
    scheduled_maintenance_activity_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    maintenance_method: DataTypes.STRING,
    track_maintenance_frequency_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    recent_maintenance_date: DataTypes.DATE,
    inspection_reports_and_findings: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayTrackMaintenanceAndInspection',
    tableName: 'RailwayTrackMaintenanceAndInspections',
  });
  return RailwayTrackMaintenanceAndInspection;
};