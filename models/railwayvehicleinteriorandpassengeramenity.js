'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayVehicleInteriorAndPassengerAmenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayVehicleInteriorAndPassengerAmenity.init({
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
    seating_capacity: DataTypes.INTEGER,
    passenger_amenities_availability: DataTypes.STRING,
    accessibility_features_for_passengers_with_disabilities: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayVehicleInteriorAndPassengerAmenity',
    tableName: 'RailwayVehicleInteriorAndPassengerAmenities',
  });
  return RailwayVehicleInteriorAndPassengerAmenity;
};