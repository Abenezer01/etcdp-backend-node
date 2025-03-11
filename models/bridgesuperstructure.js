'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeSuperStructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BridgeSuperStructure.init({
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
    bridge_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bridge_structure_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    span_number: DataTypes.INTEGER,
    span_composition: DataTypes.STRING,
    total_span_length: DataTypes.DOUBLE,
    carriage_width: DataTypes.DOUBLE,
    side_walk_width: DataTypes.DOUBLE,
    lane_number: DataTypes.INTEGER,
    span_support_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    deck_slab_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    girder_number: DataTypes.INTEGER,
    girder_depth: DataTypes.DOUBLE,
    girder_spacing: DataTypes.DOUBLE,
    girder_width: DataTypes.DOUBLE
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'BridgeSuperStructure',
    tableName: 'BridgeSuperStructures',
  });
  return BridgeSuperStructure;
};