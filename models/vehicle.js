'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vehicle.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    vehicle_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plate_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand_name: DataTypes.STRING,
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: DataTypes.INTEGER,
    chassis_number: DataTypes.STRING,
    engine_number: DataTypes.STRING,
    capacity: DataTypes.STRING,
    purpose: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    current_situation: DataTypes.STRING,
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,
    sequelize,
    modelName: 'Vehicle',
    tableName: 'Vehicles',
  });
  return Vehicle;
};