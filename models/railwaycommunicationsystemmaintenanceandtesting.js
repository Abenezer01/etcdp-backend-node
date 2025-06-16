'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayCommunicationSystemMaintenanceAndTesting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayCommunicationSystemMaintenanceAndTesting.init({
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
    inspections: DataTypes.BOOLEAN,
    recent_maintenance_records_and_dates: DataTypes.STRING,
    testing_and_verification_procedures_prepared: DataTypes.BOOLEAN,
    maintenance_contracts_or_agreements_made: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayCommunicationSystemMaintenanceAndTesting',
    tableName: 'RailwayCommunicationSystemMaintenanceAndTestings',
  });
  return RailwayCommunicationSystemMaintenanceAndTesting;
};