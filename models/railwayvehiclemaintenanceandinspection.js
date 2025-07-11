'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayVehicleMaintenanceAndInspection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayVehicleMaintenanceAndInspection.init({
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
    railway_vehicle_identification_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    maintenance_history_records: DataTypes.TEXT,
    vehicle_weight_and_load_capacity: DataTypes.STRING,
    maximum_speed: DataTypes.DOUBLE,
    braking_system_type: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayVehicleMaintenanceAndInspection',
    tableName: 'RailwayVehicleMaintenanceAndInspections',
  });
  return RailwayVehicleMaintenanceAndInspection;
};