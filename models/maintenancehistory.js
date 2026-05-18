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

      MaintenanceHistory.belongsTo(models.RoadSegment, {
        foreignKey: "road_segment_id",
        as: "roadSegment",
      });

      MaintenanceHistory.belongsTo(models.ProjectMasterData, {
        foreignKey: "maintenance_type_id",
        as: "maintenanceType",
      });
      MaintenanceHistory.belongsTo(models.ProjectMasterData, {
        foreignKey: "severity_level_id",
        as: "severityLevel",
      });

      MaintenanceHistory.belongsTo(models.ProjectMasterData, {
        foreignKey: "suggested_repair_id",
        as: "suggestedRepair",
      });

      MaintenanceHistory.belongsTo(models.ProjectMasterData, {
        foreignKey: "recommended_action_urgency_id",
        as: "recommendedActionUrgency",
      });

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
    road_segment_id: {
      type: DataTypes.UUID,
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