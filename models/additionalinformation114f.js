'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdditionalInformation114F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdditionalInformation114F.init({
    id: DataTypes.UUID,
    project_detail_id: DataTypes.UUID,
    guarantee_purpose: DataTypes.TEXT,
    specific_requirements_criteria: DataTypes.TEXT,
    project_contract_guidelines: DataTypes.STRING,
    contractors_financial_statements: DataTypes.STRING,
    bank_or_insurance_company_documents: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdditionalInformation114F',
  });
  return AdditionalInformation114F;
};