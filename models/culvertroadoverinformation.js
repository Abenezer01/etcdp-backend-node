'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CulvertRoadOverInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CulvertRoadOverInformation.init({
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
    carriage_way_width: DataTypes.DOUBLE,
    side_walk_width: DataTypes.DOUBLE,
    lane_number: DataTypes.INTEGER,
    head_wall_to_head_wall: DataTypes.DOUBLE,
    average_fill_height: DataTypes.DOUBLE,
    guard_rail_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    parapet_length: DataTypes.DOUBLE
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'CulvertRoadOverInformation',
    tableName: 'CulvertRoadOverInformations',
  });
  return CulvertRoadOverInformation;
};