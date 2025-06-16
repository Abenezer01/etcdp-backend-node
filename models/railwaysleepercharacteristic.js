'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySleeperCharacteristic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySleeperCharacteristic.init({
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
    railway_line_section_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sleeper_type: DataTypes.STRING,
    sleeper_size_and_dimensions: DataTypes.DOUBLE,
    sleepers_distance_between_pairs: DataTypes.STRING,
    sleeper_material_specification: DataTypes.STRING,
    sleeper_spacing: DataTypes.STRING,
    spacing_between: DataTypes.DOUBLE,
    sleeper_shape: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwaySleeperCharacteristic',
    tableName: 'RailwaySleeperCharacteristics',
  });
  return RailwaySleeperCharacteristic;
};