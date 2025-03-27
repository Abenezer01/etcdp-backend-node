'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubstationTransformerAndSwitchGearData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubstationTransformerAndSwitchGearData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    transmission_line_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transformers_number: DataTypes.INTEGER,
    transformer_type: DataTypes.STRING,
    transformer_capacity: DataTypes.DOUBLE,
    input_voltage_level: DataTypes.DOUBLE,
    output_voltage_level: DataTypes.DOUBLE,
    switchgear_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    circuit_breaker_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    other_equipment: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SubstationTransformerAndSwitchGearData',
    tableName: 'SubstationTransformerAndSwitchGearData',
  });
  return SubstationTransformerAndSwitchGearData;
};