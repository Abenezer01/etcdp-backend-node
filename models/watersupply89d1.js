'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WaterSupply89D1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WaterSupply89D1.init({
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
    source_of_water: DataTypes.STRING,
    dam_name: DataTypes.STRING,
    design_period: DataTypes.INTEGER,
    total_water_supply_capacity: DataTypes.DOUBLE,
    max_population_projection: DataTypes.INTEGER,
    per_capita_water_demand: DataTypes.DOUBLE,
    max_pipe_size: DataTypes.DOUBLE,
    min_pipe_size: DataTypes.DOUBLE,
    total_pipe_length: DataTypes.DOUBLE,
    num_reservoirs: DataTypes.INTEGER,
    total_reservoir_capacity: DataTypes.DOUBLE,
    treatment_plant_available: DataTypes.BOOLEAN,
    water_treatment_plant_capacity: DataTypes.DOUBLE,
    water_supply_operation_system: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'WaterSupply89D1',
      tableName: 'WaterSupply89D1s',
  });
  return WaterSupply89D1;
};