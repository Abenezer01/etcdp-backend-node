'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayVehicleOperationalPerformance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayVehicleOperationalPerformance.init({
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
    fuel_or_energy_consumption: DataTypes.STRING,
    mileage_or_operating_hours: DataTypes.STRING,
    reliability_and_availability: DataTypes.STRING,
    performance_indicators: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RailwayVehicleOperationalPerformance',
  });
  return RailwayVehicleOperationalPerformance;
};