'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayMaintenanceEnvironmentalAndOtherFactor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayMaintenanceEnvironmentalAndOtherFactor.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    facility_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    environmental_compliance_measures: DataTypes.STRING,
    noise_reduction_measures: DataTypes.STRING,
    sustainable_design_features: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayMaintenanceEnvironmentalAndOtherFactor',
    tableName: 'RailwayMaintenanceEnvironmentalAndOtherFactors'
  });
  return RailwayMaintenanceEnvironmentalAndOtherFactor;
};