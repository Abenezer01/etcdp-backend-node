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
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    project_detail_id: DataTypes.UUID,
    guarantee_purpose: DataTypes.TEXT,
    specific_requirements_criteria: DataTypes.TEXT,
    project_contract_guidelines: DataTypes.STRING,
    contractors_financial_statements: DataTypes.STRING,
    bank_or_insurance_company_documents: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'AdditionalInformation114F',
      tableName: 'AdditionalInformation114Fs',
  });
  return AdditionalInformation114F;
};