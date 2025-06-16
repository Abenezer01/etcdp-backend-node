'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayFasteningSystemConditionAssessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayFasteningSystemConditionAssessment.init({
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
    inspection_date: DataTypes.DATE,
    fastening_system_condition_rating: DataTypes.STRING,
    defect_presence: DataTypes.STRING,
    fastening_system_stability_and_alignment: DataTypes.STRING,
    rail_fastening_model_number: DataTypes.STRING,
    rail_fastening_needed_quantity: DataTypes.INTEGER,
    rail_fastening_expected_lifespan: DataTypes.INTEGER,
    rail_fastening_availability: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayFasteningSystemConditionAssessment',
    tableName: 'RailwayFasteningSystemConditionAssessments',
  });
  return RailwayFasteningSystemConditionAssessment;
};