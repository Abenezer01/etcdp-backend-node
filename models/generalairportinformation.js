'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeneralAirportInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeneralAirportInformation.init({
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    airport_type: {
      type: DataTypes.ENUM('International', 'Domestic', 'Both'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'International', // Default value
    },
    average_flights_number: DataTypes.INTEGER,
    average_passengers_number: DataTypes.INTEGER,
    cargo_capacity: DataTypes.DOUBLE,
    runway_length: DataTypes.DOUBLE,
    runway_surface_type_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'GeneralAirportInformation',
    tableName: 'GeneralAirportInformations',
  });
  return GeneralAirportInformation;
};