'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WasteWater90D1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WasteWater90D1.init({
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
    conveyance_system: DataTypes.STRING,
    total_sewer_length: DataTypes.DOUBLE,
    max_sewer_size: DataTypes.DOUBLE,
    min_sewer_size: DataTypes.DOUBLE,
    max_sewer_flowrate: DataTypes.DOUBLE,
    wastewater_treatment_type: DataTypes.STRING,
    design_period: DataTypes.INTEGER,
    max_population_projection: DataTypes.INTEGER,
    wastewater_treatment_capacity: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'WasteWater90D1',
  });
  return WasteWater90D1;
};