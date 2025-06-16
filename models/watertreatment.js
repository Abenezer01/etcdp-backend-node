'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WaterTreatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WaterTreatment.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    general_dam_information_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    system_main_component: DataTypes.STRING,
    design_period: DataTypes.INTEGER,
    total_water_supply_production_capacity: DataTypes.DOUBLE,
    maximum_population_at_projection_period: DataTypes.INTEGER,
    per_capita_water_demand: DataTypes.DOUBLE,
    maximum_pipe_size: DataTypes.DOUBLE,
    minimum_pipe_size: DataTypes.DOUBLE,
    total_water_supply_pipe_length: DataTypes.DOUBLE,
    reservoirs_number: DataTypes.INTEGER,
    total_reservoir_capacity: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'WaterTreatment',
    tableName: 'WaterTreatments',
  });
  return WaterTreatment;
};