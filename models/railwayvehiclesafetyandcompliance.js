'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayVehicleSafetyAndCompliance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayVehicleSafetyAndCompliance.init({
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
    safety_features_and_systems: DataTypes.STRING,
    comply_with_regulatory_standards_and_certifications: DataTypes.BOOLEAN,
    incident_records_number: DataTypes.INTEGER,
    action_taken_to_accidents: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayVehicleSafetyAndCompliance',
    tableName: 'RailwayVehicleSafetyAndCompliances',
  });
  return RailwayVehicleSafetyAndCompliance;
};