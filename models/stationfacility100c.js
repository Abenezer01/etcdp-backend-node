'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StationFacility100C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StationFacility100C.init({
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
    waiting_area: DataTypes.STRING,
    seating_capacity: DataTypes.INTEGER,
    ticketing_facility: DataTypes.INTEGER,
    restrooms: DataTypes.INTEGER,
    accessibility_features: DataTypes.STRING,
    passenger_information_system: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StationFacility100C',
  });
  return StationFacility100C;
};