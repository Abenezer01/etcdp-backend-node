'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InfrastructureAndUtilities102E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InfrastructureAndUtilities102E.init({
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
    rail_tracks_and_turnouts_within_the_facility: DataTypes.STRING,
    fueling_and_refueling_facilities: DataTypes.STRING,
    compressed_air_systems: DataTypes.STRING,
    electrical_power_supply_and_distribution: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InfrastructureAndUtilities102E',
  });
  return InfrastructureAndUtilities102E;
};