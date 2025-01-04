'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StructuralInformation79A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StructuralInformation79A2.init({
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
    culvert_type: DataTypes.STRING,
    culvert_barrel_length: DataTypes.DOUBLE,
    culvert_height: DataTypes.DOUBLE,
    no_of_openings_barrel: DataTypes.INTEGER,
    opening_width_composition: DataTypes.DOUBLE,
    total_culvert_width_diameter: DataTypes.DOUBLE,
    distance_between_barrels: DataTypes.DOUBLE,
    head_wall_length: DataTypes.DOUBLE,
    pier_type: DataTypes.STRING,
    pier_height: DataTypes.DOUBLE,
    abutment_type: DataTypes.STRING,
    abutment_average_height: DataTypes.DOUBLE,
    end_wall_type_inlet: DataTypes.STRING,
    end_wall_type_outlet: DataTypes.STRING,
    wing_wall_average_length: DataTypes.DOUBLE,
    paved_water_way_type: DataTypes.STRING,
    soil_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StructuralInformation79A2',
  });
  return StructuralInformation79A2;
};