'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeSuperStructure80A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BridgeSuperStructure80A2.init({
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
    bridge_structure_type: DataTypes.STRING,
    no_of_span: DataTypes.INTEGER,
    span_composition: DataTypes.STRING,
    total_span_length: DataTypes.DOUBLE,
    carriage_way_width: DataTypes.DOUBLE,
    side_walk_width: DataTypes.DOUBLE,
    no_of_lane: DataTypes.INTEGER,
    span_support_type: DataTypes.STRING,
    deck_slab_type: DataTypes.STRING,
    slab_thickness: DataTypes.DOUBLE,
    no_of_girder_box: DataTypes.INTEGER,
    depth_of_girder_box: DataTypes.DOUBLE,
    spacing_of_girder: DataTypes.DOUBLE,
    width_of_girder_box: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'BridgeSuperStructure80A2',
  });
  return BridgeSuperStructure80A2;
};