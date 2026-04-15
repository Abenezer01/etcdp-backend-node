'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ThermalBiomassIncinerationData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ThermalBiomassIncinerationData.init({
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
    type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    fuel_source_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    heat_rate_at_max_capacity: DataTypes.DOUBLE,
    remark: DataTypes.TEXT,
    
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ThermalBiomassIncinerationData',
    tableName: 'ThermalBiomassIncinerationData'
  });
  return ThermalBiomassIncinerationData;
};