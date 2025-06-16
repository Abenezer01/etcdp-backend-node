'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayTrackGeometryData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayTrackGeometryData.init({
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
    alignment: DataTypes.STRING,
    gradient: DataTypes.DOUBLE,
    curvature_radius: DataTypes.DOUBLE,
    cant: DataTypes.STRING,
    track_gauge: DataTypes.STRING,
    cross_level: DataTypes.STRING,
    track_surface_profile: DataTypes.STRING,
    twist: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayTrackGeometryData',
    tableName: 'RailwayTrackGeometryData',
  });
  return RailwayTrackGeometryData;
};