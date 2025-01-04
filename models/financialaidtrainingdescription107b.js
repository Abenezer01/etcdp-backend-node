'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialAidTrainingDescription107B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialAidTrainingDescription107B.init({
    financial_aid_investment_opportunity_id: DataTypes.UUID,
    type_of_financial_aid: DataTypes.STRING,
    eligibility_requirements: DataTypes.STRING,
    duration_of_funding: DataTypes.STRING,
    application_process: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FinancialAidTrainingDescription107B',
  });
  return FinancialAidTrainingDescription107B;
};