'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnvironmentalConsiderations83A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnvironmentalConsiderations83A.init({
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
    energy_efficiency: DataTypes.STRING,
    water_management: DataTypes.STRING,
    emissions_reduction: DataTypes.STRING,
    noise_reduction: DataTypes.STRING,
    vegetation_and_landscaping: DataTypes.STRING,
    waste_management: DataTypes.STRING,
    number_of_households_displaced: DataTypes.INTEGER,
    amount_of_compensations_paid: DataTypes.DOUBLE,
    environmental_permissions_obtained: DataTypes.BOOLEAN,
    mitigation_measures_for_environmental_impact: DataTypes.STRING,
    soil_erosion_control_measures_implemented: DataTypes.STRING,
    vegetation_management: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EnvironmentalConsiderations83A',
      tableName: 'EnvironmentalConsiderations83As',
  });
  return EnvironmentalConsiderations83A;
};