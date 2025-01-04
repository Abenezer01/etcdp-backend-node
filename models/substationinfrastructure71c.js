'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubstationInfrastructure71C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubstationInfrastructure71C.init({
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
    number_of_transformers: DataTypes.INTEGER,
    input_voltage_level: DataTypes.DOUBLE,
    transformer_type: DataTypes.STRING,
    output_voltage_level: DataTypes.DOUBLE,
    transformer_capacity: DataTypes.DOUBLE,
    switchgear_type: DataTypes.STRING,
    other_equipment: DataTypes.STRING,
    circuit_breaker_type: DataTypes.STRING,
    substation_layout_arrangement: DataTypes.STRING,
    is_equipped_with_standby_diesel_generator: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SubstationInfrastructure71C',
  });
  return SubstationInfrastructure71C;
};