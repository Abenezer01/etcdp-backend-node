'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySubBallastConditionAssessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySubBallastConditionAssessment.init({
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
    sub_ballast_material_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    inspection_dates: DataTypes.DATE,
    sub_ballast_condition_rating: DataTypes.STRING,
    cracking_observations: DataTypes.STRING,
    erosion_issues: DataTypes.STRING,
    unwanted_vegetation_presence: DataTypes.STRING,
    testing_frequency_per_year: DataTypes.INTEGER,
    sub_ballast_resistance: DataTypes.STRING,
    sub_ballast_degradation_rate: DataTypes.STRING,
    drainage_performance: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwaySubBallastConditionAssessment',
    tableName: 'RailwaySubBallastConditionAssessments',
  });
  return RailwaySubBallastConditionAssessment;
};