'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SegmentCoordinate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SegmentCoordinate.belongsTo(models.RoadSegment, {
        foreignKey: "road_segment_id",
        as: "roadSegment",
      });
    }
  }
  SegmentCoordinate.init({
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
    road_segment_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    start_x: DataTypes.DOUBLE,
    start_y: DataTypes.DOUBLE,
    end_x: DataTypes.DOUBLE,
    end_y: DataTypes.DOUBLE
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SegmentCoordinate',
    tableName: 'SegmentCoordinates',
  });
  return SegmentCoordinate;
};