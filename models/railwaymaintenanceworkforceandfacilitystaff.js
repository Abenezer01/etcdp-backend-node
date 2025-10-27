'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayMaintenanceWorkforceAndFacilityStaff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayMaintenanceWorkforceAndFacilityStaff.init({
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
    maintenance_personnel_number: DataTypes.INTEGER,
    staff_facilities: DataTypes.BOOLEAN,
    training_facilities_and_resources: DataTypes.BOOLEAN,
    trainers_instructors_number: DataTypes.INTEGER,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayMaintenanceWorkforceAndFacilityStaff',
    tableName: 'RailwayMaintenanceWorkforceAndFacilityStaffs'
  });
  return RailwayMaintenanceWorkforceAndFacilityStaff;
};