'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayBallastConditionAssessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayBallastConditionAssessment.init({
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
    inspection_dates: DataTypes.DATE,
    ballast_condition_rating: {
      type: DataTypes.ENUM('Excellent', 'Good', 'Fair', 'Poor'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Excellent', // Default value
    },
    fouling_presence: {
      type: DataTypes.ENUM('Fines','Debris','Sediments','Siltation','Other'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Fines', // Default value
    },
    ballast_degradation_indicators: {
      type: DataTypes.ENUM('Breakage','Crack','Other'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Breakage', // Default value
    },
    ballast_quality_testing_method: {
      type: DataTypes.ENUM('Gradation Test','Soundness Test','Compaction Test','Other'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Gradation Test', // Default value
    },
    testing_frequency: DataTypes.INTEGER,
    ballast_resistance: DataTypes.STRING,
    ballast_degradation_rate: {
      type: DataTypes.ENUM('Excellent','Good','Fair','Poor'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Excellent', // Default value
    },
    drainage_performance: {
      type: DataTypes.ENUM('Excellent','Good','Fair','Poor'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Excellent', // Default value
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayBallastConditionAssessment',
    tableName: 'RailwayBallastConditionAssessments',
  });
  return RailwayBallastConditionAssessment;
};