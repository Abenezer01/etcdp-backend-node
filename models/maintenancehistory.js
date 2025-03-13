'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaintenanceHistory.init({
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
    road_segment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_maintenance_date: DataTypes.DATE,
    maintenance_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    maintenance_cost: DataTypes.DOUBLE,
    severity_level_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    suggested_repair_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    recommended_action_urgency_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MaintenanceHistory',
    tableName: 'MaintenanceHistories',
  });
  return MaintenanceHistory;
};