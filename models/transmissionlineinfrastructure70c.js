'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransmissionLineInfrastructure70C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransmissionLineInfrastructure70C.init({
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
    conductor_type: DataTypes.STRING,
    conductor_size: DataTypes.DOUBLE,
    tower_foundation_type: DataTypes.STRING,
    number_of_conductors_per_phase: DataTypes.STRING,
    insulator_type: DataTypes.STRING,
    tower_type: DataTypes.STRING,
    other_equipment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TransmissionLineInfrastructure70C',
  });
  return TransmissionLineInfrastructure70C;
};