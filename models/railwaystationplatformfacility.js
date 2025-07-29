'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayStationPlatformFacility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayStationPlatformFacility.init({
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
    waiting_areas_seating_capacity: DataTypes.BOOLEAN,
    ticketing_facilities_availability: DataTypes.BOOLEAN,
    restrooms_and_amenities_availability: DataTypes.BOOLEAN,
    passenger_information_system: DataTypes.STRING,
    accessibility_features: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,
    sequelize,
    modelName: 'RailwayStationPlatformFacility',
    tableName: 'RailwayStationPlatformFacilities',
  });
  return RailwayStationPlatformFacility;
};