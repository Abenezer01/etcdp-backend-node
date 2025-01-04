'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FundedInvestor107C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FundedInvestor107C.init({
    financial_aid_investment_opportunity_id: DataTypes.UUID,
    name_of_investor: DataTypes.STRING,
    type_of_investor: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FundedInvestor107C',
  });
  return FundedInvestor107C;
};