'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayBallastMaterialSpecification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayBallastMaterialSpecification.init({
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
    specific_gravity: DataTypes.DOUBLE,
    porosity: DataTypes.DOUBLE,
    water_absorption: DataTypes.DOUBLE,
    shape: DataTypes.STRING,
    average_particle_length: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayBallastMaterialSpecification',
    tableName: 'RailwayBallastMaterialSpecifications',
  });
  return RailwayBallastMaterialSpecification;
};