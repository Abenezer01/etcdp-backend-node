'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SegmentGeometry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SegmentGeometry.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    road_segment_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    carriage_way_width: DataTypes.DOUBLE,
    lane_width: DataTypes.DOUBLE,
    shoulder_width: DataTypes.DOUBLE,
    cross_section_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    grade_percentage: DataTypes.DOUBLE,
    elevation_change: DataTypes.DOUBLE,
    cross_slope_percentage: DataTypes.DOUBLE,
    property_access_control: DataTypes.BOOLEAN,
    similar_for_all_lane: DataTypes.BOOLEAN
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SegmentGeometry',
    tableName: 'SegmentGeometries'
  });
  return SegmentGeometry;
};