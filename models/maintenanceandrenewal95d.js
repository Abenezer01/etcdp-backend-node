'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceAndRenewal95D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaintenanceAndRenewal95D.init({
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
    maintenance_activity: DataTypes.STRING,
    renewal_history: DataTypes.STRING,
    recent_maintenance_activity: DataTypes.TEXT,
    inspection_report: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MaintenanceAndRenewal95D',
  });
  return MaintenanceAndRenewal95D;
};