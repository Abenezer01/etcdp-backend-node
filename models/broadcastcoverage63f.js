'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BroadcastCoverage63F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BroadcastCoverage63F.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    total_coverage_area: DataTypes.DOUBLE,
    population_coverage: DataTypes.DOUBLE,
    number_of_active_users: DataTypes.INTEGER,
    signal_strength: DataTypes.DOUBLE,
    audio_visual_quality: DataTypes.STRING,
    interference: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'BroadcastCoverage63F',
  });
  return BroadcastCoverage63F;
};