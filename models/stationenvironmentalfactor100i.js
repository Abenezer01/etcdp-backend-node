'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StationEnvironmentalFactor100I extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StationEnvironmentalFactor100I.init({
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
    compliance_measures: DataTypes.TEXT,
    noise_vibration_control_measure: DataTypes.TEXT,
    sustainable_design_features: DataTypes.TEXT,
    visual_document: DataTypes.STRING,
    assessment_recorder: DataTypes.STRING,
    assessment_date: DataTypes.DATE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'StationEnvironmentalFactor100I',
      tableName: 'StationEnvironmentalFactor100Is',
  });
  return StationEnvironmentalFactor100I;
};