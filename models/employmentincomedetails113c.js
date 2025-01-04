'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmploymentIncomeDetails113C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmploymentIncomeDetails113C.init({
    id: DataTypes.STRING,
    applicantinformation_id: DataTypes.STRING,
    current_employer: DataTypes.STRING,
    employment_type: DataTypes.STRING,
    job_title: DataTypes.STRING,
    monthly_income: DataTypes.DOUBLE,
    additional_sources_of_income: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'EmploymentIncomeDetails113C',
  });
  return EmploymentIncomeDetails113C;
};