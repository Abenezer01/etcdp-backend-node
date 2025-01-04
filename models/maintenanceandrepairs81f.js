'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceAndRepairs81F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaintenanceAndRepairs81F.init({
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
    routine_maintenance_activities: DataTypes.STRING,
    repairs_rehabilitation_history: DataTypes.STRING,
    maintenance_records: DataTypes.TEXT,
    emergency_response_plans: DataTypes.STRING,
    incident_reports: DataTypes.TEXT,
    previous_maintenance_contracts: DataTypes.STRING,
    maintenance_budget: DataTypes.DOUBLE,
    inspection_reports: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MaintenanceAndRepairs81F',
  });
  return MaintenanceAndRepairs81F;
};