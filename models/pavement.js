'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pavement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pavement.init({
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
    tangent_length: DataTypes.DOUBLE,
    curve_length: DataTypes.DOUBLE,
    road_length_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    road_pavement_thickness: DataTypes.DOUBLE,
    paved_road_surface_width: DataTypes.DOUBLE
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'Pavement',
    tableName: 'Pavements',
  });
  return Pavement;
};