'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingFinancialDescription107E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrainingFinancialDescription107E.init({
    id: DataTypes.STRING,
    financial_aid_investment_opportunity_id: DataTypes.STRING,
    amount_of_investment_funding_provided: DataTypes.DOUBLE,
    construction_related_activities_of_interest: DataTypes.TEXT,
    previous_construction_related_investments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TrainingFinancialDescription107E',
  });
  return TrainingFinancialDescription107E;
};