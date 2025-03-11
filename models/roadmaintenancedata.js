'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadMaintenanceData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoadMaintenanceData.init({
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
    maintenance_start_date: DataTypes.DATE,
    maintenance_end_date: DataTypes.DATE,
    weather_condition: DataTypes.STRING,
    pavement_condition: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RoadMaintenanceData',
    tableName: 'RoadMaintenanceData',
  });
  return RoadMaintenanceData;
};