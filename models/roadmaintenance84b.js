'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadMaintenance84B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoadMaintenance84B.init({
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
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    weather_conditions: DataTypes.STRING,
    pavement_type: DataTypes.STRING,
    pavement_condition: DataTypes.STRING,
    length_of_road_segment: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'RoadMaintenance84B',
  });
  return RoadMaintenance84B;
};