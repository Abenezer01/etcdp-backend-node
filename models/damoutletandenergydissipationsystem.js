'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DamOutletAndEnergyDissipationSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DamOutletAndEnergyDissipationSystem.init({
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
    intake_tower_top_elevation: DataTypes.DOUBLE,
    outlet_diameter: DataTypes.DOUBLE,
    outlet_discharge: DataTypes.DOUBLE,
    trash_racks_availability: DataTypes.BOOLEAN,
    energy_dissipation_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    bottom_outlet_availability: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'DamOutletAndEnergyDissipationSystem',
    tableName: 'DamOutletAndEnergyDissipationSystems',
  });
  return DamOutletAndEnergyDissipationSystem;
};