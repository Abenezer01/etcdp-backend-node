'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrafficAndLoad81E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrafficAndLoad81E.init({
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
    aadt: DataTypes.DOUBLE,
    design_load_capacity: DataTypes.DOUBLE,
    truck_traffic_percentage: DataTypes.DOUBLE,
    overweight_oversize_permits: DataTypes.BOOLEAN,
    traffic_surveillance_systems: DataTypes.STRING,
    traffic_flow_patterns: DataTypes.STRING,
    historical_traffic_data: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TrafficAndLoad81E',
  });
  return TrafficAndLoad81E;
};