'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BallastConditionAssessment95C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BallastConditionAssessment95C.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    inspection_dates: DataTypes.DATE,
    ballast_condition_rating: DataTypes.STRING,
    presence_of_fouling: DataTypes.STRING,
    ballast_degradation_indicators: DataTypes.STRING,
    ballast_quality_testing_method: DataTypes.STRING,
    testing_frequency: DataTypes.STRING,
    ballast_resistance: DataTypes.DOUBLE,
    ballast_degradation_rate: DataTypes.DOUBLE,
    drainage_performance: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'BallastConditionAssessment95C',
      tableName: 'BallastConditionAssessment95Cs'
  });
  return BallastConditionAssessment95C;
};