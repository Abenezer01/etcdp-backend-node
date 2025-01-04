'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NetworkCoverageAndPerformance60E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NetworkCoverageAndPerformance60E.init({
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
    total_coverage_area: DataTypes.DOUBLE,
    population_coverage: DataTypes.DOUBLE,
    number_of_active_users: DataTypes.INTEGER,
    average_download_speed: DataTypes.DOUBLE,
    average_upload_speed: DataTypes.DOUBLE,
    signal_strength: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'NetworkCoverageAndPerformance60E',
  });
  return NetworkCoverageAndPerformance60E;
};