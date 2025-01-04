'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleSpecifications99C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VehicleSpecifications99C.init({
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
    dimensions: DataTypes.DOUBLE,
    weight_and_load_capacity: DataTypes.DOUBLE,
    maximum_speed: DataTypes.DOUBLE,
    brake_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VehicleSpecifications99C',
  });
  return VehicleSpecifications99C;
};