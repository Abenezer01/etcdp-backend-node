'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayMaintenanceFacilityScheduleAndProcedure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayMaintenanceFacilityScheduleAndProcedure.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    facility_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maintenance_schedules_and_routines_availability: DataTypes.BOOLEAN,
    procedures_for_planned_and_preventive_maintenance_availability: DataTypes.BOOLEAN,
    documentation_and_record_keeping_practices_availability: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayMaintenanceFacilityScheduleAndProcedure',
    tableName: 'RailwayMaintenanceFacilityScheduleAndProcedures'
  });
  return RailwayMaintenanceFacilityScheduleAndProcedure;
};