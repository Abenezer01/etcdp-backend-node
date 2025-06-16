'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySubBallastMaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySubBallastMaterial.init({
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
    sub_ballast_material_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    layer_thickness: DataTypes.DOUBLE,
    layer_depth: DataTypes.DOUBLE,
    density: DataTypes.DOUBLE,
    moisture_content: DataTypes.DOUBLE,
    method_used_for_compaction: DataTypes.STRING,
    compaction_density: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwaySubBallastMaterial',
    tableName: 'RailwaySubBallastMaterials',
  });
  return RailwaySubBallastMaterial;
};