'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySubBallastMaterialTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySubBallastMaterialTest.init({
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
    testing_method_used: DataTypes.STRING,
    sampling_method: DataTypes.STRING,
    sample_size: DataTypes.DOUBLE,
    material_source: DataTypes.STRING,
    sieve_analysis_results: DataTypes.STRING,
    supplier: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwaySubBallastMaterialTest',
    tableName: 'RailwaySubBallastMaterialTests',
  });
  return RailwaySubBallastMaterialTest;
};