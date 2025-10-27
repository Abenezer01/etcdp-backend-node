'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayMaintenanceFacilityTypeAndPurpose extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayMaintenanceFacilityTypeAndPurpose.init({
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
    maintenance_facility_type: DataTypes.STRING,
    maintenance_activities_conducted: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayMaintenanceFacilityTypeAndPurpose',
    tableName: 'RailwayMaintenanceFacilityTypeAndPurposes'
  });
  return RailwayMaintenanceFacilityTypeAndPurpose;
};