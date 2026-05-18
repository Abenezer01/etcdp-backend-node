'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadMaintenanceActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoadMaintenanceActivity.belongsTo(models.RoadSegment, {
        foreignKey: 'road_segment_id',
        as: 'roadSegment'
      })
      RoadMaintenanceActivity.belongsTo(models.ProjectMasterData, {
        foreignKey: 'maintenance_frequency_id',
        as: 'maintenanceFrequency'
      })
      RoadMaintenanceActivity.belongsTo(models.ProjectMasterData, {
        foreignKey: 'maintenance_type_id',
        as: 'maintenanceType'
      })
    }
  }
  RoadMaintenanceActivity.init({
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
    maintenance_frequency_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    maintenance_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    consultant: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RoadMaintenanceActivity',
    tableName: 'RoadMaintenanceActivities',
  });
  return RoadMaintenanceActivity;
};