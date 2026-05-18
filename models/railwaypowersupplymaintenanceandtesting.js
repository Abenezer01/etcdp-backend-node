'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayPowerSupplyMaintenanceAndTesting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RailwayPowerSupplyMaintenanceAndTesting.belongsTo(models.RailwayStationPlatformLayout, {
        foreignKey: 'railway_station_platform_layout_id',
        as: 'railwayStationPlatformLayout'
      });
    }
  }
  RailwayPowerSupplyMaintenanceAndTesting.init({
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
    railway_station_platform_layout_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    maintenance_schedules_and_activities: DataTypes.BOOLEAN,
    testing_and_commissioning_procedures: DataTypes.BOOLEAN,
    recent_maintenance_records_date: DataTypes.DATE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayPowerSupplyMaintenanceAndTesting',
    tableName: 'RailwayPowerSupplyMaintenanceAndTestings'
  });
  return RailwayPowerSupplyMaintenanceAndTesting;
};