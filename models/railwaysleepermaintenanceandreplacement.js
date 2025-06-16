'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySleeperMaintenanceAndReplacement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySleeperMaintenanceAndReplacement.init({
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
    railway_line_section_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scheduled_maintenance_activities: DataTypes.STRING,
    recent_maintenance_date: DataTypes.DATE,
    inspection_reports: DataTypes.STRING,
    sleeper_replacement_history: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwaySleeperMaintenanceAndReplacement',
    tableName: 'RailwaySleeperMaintenanceAndReplacements',
  });
  return RailwaySleeperMaintenanceAndReplacement;
};