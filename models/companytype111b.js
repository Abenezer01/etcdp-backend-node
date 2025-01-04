'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyType111B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyType111B.init({
    id: DataTypes.STRING,
    company_id: DataTypes.STRING,
    title: DataTypes.STRING,
    financial_support: DataTypes.STRING,
    foreign_currency_endorsement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CompanyType111B',
  });
  return CompanyType111B;
};