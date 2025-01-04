'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StationSafety100F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StationSafety100F.init({
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
    emergency_exit: DataTypes.STRING,
    evacuation_plan: DataTypes.TEXT,
    fire_safety_measure: DataTypes.STRING,
    surveillance_systems: DataTypes.STRING,
    crowd_management: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StationSafety100F',
  });
  return StationSafety100F;
};