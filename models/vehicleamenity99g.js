'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleAmenity99G extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VehicleAmenity99G.init({
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
    seating_capacity: DataTypes.INTEGER,
    passenger_amenities: DataTypes.STRING,
    accessibility_features: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VehicleAmenity99G',
  });
  return VehicleAmenity99G;
};