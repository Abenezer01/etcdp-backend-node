'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayTrackData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayTrackData.init({
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
    railway_track_infrastructure_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    track_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    track_gauge_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    track_length: DataTypes.DOUBLE,
    rail_type_and_size: DataTypes.STRING,
    sleepers_type_and_spacing: DataTypes.STRING,
    fastening_systems: DataTypes.STRING,
    ballast_type_and_depth: DataTypes.STRING,
    track_connection_method: DataTypes.STRING,
    track_type: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayTrackData',
    tableName: 'RailwayTrackData',
  });
  return RailwayTrackData;
};