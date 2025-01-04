'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadCharacteristics78D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoadCharacteristics78D.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.STRING,
    number_of_lanes: DataTypes.INTEGER,
    surface_condition: DataTypes.STRING,
    speed_limit: DataTypes.INTEGER,
    road_width: DataTypes.DOUBLE,
    road_markings: DataTypes.STRING,
    shoulder_width: DataTypes.DOUBLE,
    median_type: DataTypes.STRING,
    intersection_type: DataTypes.STRING,
    road_lighting: DataTypes.BOOLEAN,
    pedestrian_facilities: DataTypes.STRING,
    bicycle_facilities: DataTypes.STRING,
    average_daily_traffic: DataTypes.INTEGER,
    road_ownership: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RoadCharacteristics78D',
  });
  return RoadCharacteristics78D;
};