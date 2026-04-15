'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IntersectionAndDriveway extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IntersectionAndDriveway.init({
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
    number_of_intersections: {
      type: DataTypes.INTEGER
    },
    intersection_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    driveway_access_point_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    similar_for_all: {
      type: DataTypes.BOOLEAN
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'IntersectionAndDriveway',
    tableName: 'IntersectionAndDriveways',
  });
  return IntersectionAndDriveway;
};