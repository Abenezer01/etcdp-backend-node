'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeGeotechnicalInformation81D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BridgeGeotechnicalInformation81D.init({
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
    soil_rock_type: DataTypes.STRING,
    seismic_design_criteria: DataTypes.STRING,
    retaining_walls: DataTypes.BOOLEAN,
    geological_hazards: DataTypes.STRING,
    geotechnical_reports: DataTypes.TEXT,
    groundwater_conditions: DataTypes.STRING,
    soil_bearing_capacity: DataTypes.DOUBLE,
    slope_stability_assessment: DataTypes.STRING,
    foundation_design: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'BridgeGeotechnicalInformation81D',
      tableName: 'BridgeGeotechnicalInformation81Ds'
  });
  return BridgeGeotechnicalInformation81D;
};