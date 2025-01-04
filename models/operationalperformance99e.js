'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OperationalPerformance99E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OperationalPerformance99E.init({
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
    fuel_consumption: DataTypes.DOUBLE,
    mileage: DataTypes.DOUBLE,
    reliability_and_availability_data: DataTypes.TEXT,
    performance_indicator: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OperationalPerformance99E',
  });
  return OperationalPerformance99E;
};