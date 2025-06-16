'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayBallastMaterialData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayBallastMaterialData.init({
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
    ballast_material_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    particle_size_distribution_grading: DataTypes.STRING,
    ballast_used_quantity: DataTypes.DOUBLE,
    ballast_source_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ballast_material_size: DataTypes.DOUBLE,
    ballast_layer_thickness: DataTypes.DOUBLE,
    compaction_method_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayBallastMaterialData',
    tableName: 'RailwayBallastMaterialData',
  });
  return RailwayBallastMaterialData;
};