'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySubBallastMaintenanceAndRenewal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySubBallastMaintenanceAndRenewal.init({
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
    scheduled_maintenance_activities: DataTypes.STRING,
    sub_ballast_renewal_history: DataTypes.TEXT,
    recent_maintenance_dates: DataTypes.DATE,
    inspection_reports_findings: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwaySubBallastMaintenanceAndRenewal',
    tableName: 'RailwaySubBallastMaintenanceAndRenewals',
  });
  return RailwaySubBallastMaintenanceAndRenewal;
};