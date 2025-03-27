'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransmissionLineConductorAndTowerData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransmissionLineConductorAndTowerData.init({
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
    conductor_type: DataTypes.STRING,
    conductor_code_name_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    strands_number: DataTypes.INTEGER,
    conductor_size: DataTypes.DOUBLE,
    conductors_per_phase_number: DataTypes.INTEGER,
    tower_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    tower_height: DataTypes.DOUBLE,
    conductor_diameter: DataTypes.DOUBLE,
    each_strand_diameter: DataTypes.DOUBLE,
    tower_foundation_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    other_equipment: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'TransmissionLineConductorAndTowerData',
    tableName: 'TransmissionLineConductorAndTowerData',
  });
  return TransmissionLineConductorAndTowerData;
};