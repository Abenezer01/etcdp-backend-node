'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayMaintenanceFacilityInfrastructureAndUtility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayMaintenanceFacilityInfrastructureAndUtility.init({
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
    rail_tracks_and_turnout_availability: DataTypes.BOOLEAN,
    fueling_and_refueling_facility_availability: DataTypes.BOOLEAN,
    compressed_air_system_availability: DataTypes.BOOLEAN,
    remarks: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayMaintenanceFacilityInfrastructureAndUtility',
    tableName: 'RailwayMaintenanceFacilityInfrastructureAndUtilities'
  });
  return RailwayMaintenanceFacilityInfrastructureAndUtility;
};