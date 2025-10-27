'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayMaintenanceFacilityEquipmentAndTool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayMaintenanceFacilityEquipmentAndTool.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    facility_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maintenance_equipment_and_tool_available_type: DataTypes.STRING,
    hoists_cranes_and_lifting_equipment: DataTypes.BOOLEAN,
    diagnostic_and_testing_equipment: DataTypes.STRING,
    tools_and_machinery_specific_to_maintenance_activities: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayMaintenanceFacilityEquipmentAndTool',
    tableName: 'RailwayMaintenanceFacilityEquipmentAndTools'
  });
  return RailwayMaintenanceFacilityEquipmentAndTool;
};