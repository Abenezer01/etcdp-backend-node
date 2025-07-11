'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayCommunicationSystemSafetyAndCompliance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayCommunicationSystemSafetyAndCompliance.init({
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
    safety_measures_and_protocols_done: DataTypes.BOOLEAN,
    compliance_with_signaling_and_communication_standards: DataTypes.BOOLEAN,
    incident_or_accident_records: DataTypes.BOOLEAN,
    incident_date: DataTypes.DATE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayCommunicationSystemSafetyAndCompliance',
    tableName: 'RailwayCommunicationSystemSafetyAndCompliances',
  });
  return RailwayCommunicationSystemSafetyAndCompliance;
};