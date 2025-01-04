'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SafetyAndCompliance98F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SafetyAndCompliance98F.init({
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
    safety_measure_protocol: DataTypes.STRING,
    compliance_with_standard: DataTypes.STRING,
    recorded_accident: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'SafetyAndCompliance98F',
  });
  return SafetyAndCompliance98F;
};