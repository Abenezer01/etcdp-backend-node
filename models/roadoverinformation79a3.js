'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadOverInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoadOverInformation.init({
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
    carriage_way_width: DataTypes.DOUBLE,
    side_walk_width: DataTypes.DOUBLE,
    no_of_lane: DataTypes.INTEGER,
    head_wall_to_head_wall: DataTypes.DOUBLE,
    average_fill_height: DataTypes.DOUBLE,
    guard_rail_parapet_material_type: DataTypes.STRING,
    parapet_length: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'RoadOverInformation79A3',
      tableName: 'RoadOverInformation79A3s',
  });
  return RoadOverInformation;
};