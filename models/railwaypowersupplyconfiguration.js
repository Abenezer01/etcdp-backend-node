'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayPowerSupplyConfiguration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RailwayPowerSupplyConfiguration.belongsTo(models.ProjectMasterData, {
        foreignKey: 'power_supply_system_type_id',
        as: 'powerSupplySystemType'
      });
    }
  }
  RailwayPowerSupplyConfiguration.init({
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
    power_supply_system_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    voltage_level_and_frequency: DataTypes.STRING,
    power_supply_capacity_and_load_requirements: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayPowerSupplyConfiguration',
    tableName: 'RailwayPowerSupplyConfigurations',
  });
  return RailwayPowerSupplyConfiguration;
};