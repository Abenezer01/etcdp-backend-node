'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayPowerSupplyEnvironmentalAndOtherFactor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayPowerSupplyEnvironmentalAndOtherFactor.init({
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
    railway_station_platform_layout_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    environmental_compliance_measures: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayPowerSupplyEnvironmentalAndOtherFactor',
    tableName: 'RailwayPowerSupplyEnvironmentalAndOtherFactors'
  });
  return RailwayPowerSupplyEnvironmentalAndOtherFactor;
};