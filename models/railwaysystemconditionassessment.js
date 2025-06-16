'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySystemConditionAssessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySystemConditionAssessment.init({
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
    system_condition_rating_or_assessment: DataTypes.STRING,
    defect_presence: DataTypes.BOOLEAN,
    system_performance_indicators: DataTypes.STRING,
    power_supply_systems_and_communication: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwaySystemConditionAssessment',
    tableName: 'RailwaySystemConditionAssessments',
  });
  return RailwaySystemConditionAssessment;
};