'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayBallastMaintenanceAndRenewal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayBallastMaintenanceAndRenewal.init({
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
    railway_line_section_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scheduled_maintenance_activities: {
      type: DataTypes.ENUM('Tamping', 'Cleaning', 'Routine Maintenance', 'Corrective Maintenance', 'Other'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Tamping', // Default value
    },
    recent_maintenance_dates: DataTypes.DATE,
    inspection_reports_findings: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayBallastMaintenanceAndRenewal',
    tableName: 'RailwayBallastMaintenanceAndRenewals',
  });
  return RailwayBallastMaintenanceAndRenewal;
};