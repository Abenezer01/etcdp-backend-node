'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElectricDistributionTransformerType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ElectricDistributionTransformerType.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    mini_grid_station_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transformer_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    cooling_type: {
      type: DataTypes.ENUM('Oil Immersed', 'Dry type'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Oil Immersed', // Default value
    },
    transformer_power_rating: DataTypes.DOUBLE,
    lifetime: DataTypes.INTEGER,
    protection_installed_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    safety_problems_encountered_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    work_accidents_number: DataTypes.INTEGER,
    on_site_safety_regulation_implemented: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ElectricDistributionTransformerType',
    tableName: 'ElectricDistributionTransformerTypes',
  });
  return ElectricDistributionTransformerType;
};