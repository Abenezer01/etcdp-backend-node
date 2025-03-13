'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NetworkCoverage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NetworkCoverage.init({
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
    network_infrastructure_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    total_coverage_area: DataTypes.DOUBLE,
    coverage_population_number: DataTypes.INTEGER,
    active_users_number: DataTypes.INTEGER,
    average_download_speed: DataTypes.DOUBLE,
    average_upload_speed: DataTypes.DOUBLE,
    signal_strength: DataTypes.DOUBLE,
    others: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,    
    sequelize,
    modelName: 'NetworkCoverage',
    tableName: 'NetworkCoverages',
  });
  return NetworkCoverage;
};