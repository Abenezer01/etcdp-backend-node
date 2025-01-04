'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupportingDocument126F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SupportingDocument126F.init({
    financial_statements: DataTypes.STRING,
    business_registration: DataTypes.STRING,
    project_proposal: DataTypes.STRING,
    quotes_estimates: DataTypes.STRING,
    risk_assessment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SupportingDocument126F',
  });
  return SupportingDocument126F;
};