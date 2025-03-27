'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransmissionLineEquipmentData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransmissionLineEquipmentData.init({
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
    insulator_type: DataTypes.STRING,
    ground_wire_type: DataTypes.STRING,
    fiber_optics_number: DataTypes.INTEGER,
    opgw_uts: DataTypes.DOUBLE,
    opgw_weight: DataTypes.DOUBLE,
    owner_operator: DataTypes.STRING,
    tower_grounding: DataTypes.STRING,
    tower_circuit_arrangement: DataTypes.STRING,
    other_equipment: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'TransmissionLineEquipmentData',
    tableName: 'TransmissionLineEquipmentData',
  });
  return TransmissionLineEquipmentData;
};