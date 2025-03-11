'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrafficVolume extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrafficVolume.init({
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
      allowNull: false,
    },
    count_location_coordinate_x: DataTypes.DOUBLE,
    count_location_coordinate_y: DataTypes.DOUBLE,
    count_time: DataTypes.DATE,
    count_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    lane_number: DataTypes.INTEGER,
    vehicle_number_per_hour: DataTypes.INTEGER,
    average_daily_traffic_volume: DataTypes.INTEGER,
    corridor_importance_level: DataTypes.INTEGER
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'TrafficVolume',
    tableName: 'TrafficVolumes',
    
  });
  return TrafficVolume;
};