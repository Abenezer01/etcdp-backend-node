'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SafetyAndHealth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SafetyAndHealth.init({
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
    hazard_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    potential_impact_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    risk_level_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    immediate_action_taken: DataTypes.TEXT,
    incident_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    incident_time: DataTypes.DATE,
    medicare_required: DataTypes.BOOLEAN,
    total_injury_number: DataTypes.INTEGER,
    incident_reported_by: DataTypes.STRING,
    personal_protective_equipment_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    personal_protective_equipment_condition_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    trained_on_equipment_usage: DataTypes.BOOLEAN,
    training_hours_number: DataTypes.INTEGER,
    weather_condition_during_incident_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    injury_severity_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    fatality_number: DataTypes.INTEGER,
    recommendation: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SafetyAndHealth',
    tableName: 'SafetyAndHealths',
  });
  return SafetyAndHealth;
};