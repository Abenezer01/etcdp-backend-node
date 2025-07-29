'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayStationPlatformPassengerFlowAndCapacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayStationPlatformPassengerFlowAndCapacity.init({
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
    railway_station_platform_layout_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    passenger_flow_during_peak_hour: DataTypes.STRING,
    minimum_passenger_flow: DataTypes.STRING,
    capacity_assessment: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,
    sequelize,
    modelName: 'RailwayStationPlatformPassengerFlowAndCapacity',
    tableName: 'RailwayStationPlatformPassengerFlowAndCapacities',
  });
  return RailwayStationPlatformPassengerFlowAndCapacity;
};