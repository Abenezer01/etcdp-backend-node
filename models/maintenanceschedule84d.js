'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceSchedule84D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaintenanceSchedule84D.init({
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
    frequency_of_maintenance_activities: DataTypes.STRING,
    type_of_maintenance_activity: DataTypes.STRING,
    maintenance_records: DataTypes.TEXT,
    contractor_or_agency_responsible: DataTypes.STRING,
    total_cost_of_work_performed: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MaintenanceSchedule84D',
      tableName: 'MaintenanceSchedule84Ds',
  });
  return MaintenanceSchedule84D;
};