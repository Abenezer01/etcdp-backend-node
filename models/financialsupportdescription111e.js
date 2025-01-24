'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialSupportDescription111E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialSupportDescription111E.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    financial_support_type: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    currency: DataTypes.STRING,
    eligibility_requirements: DataTypes.TEXT,
    application_process: DataTypes.TEXT,
    approval_process: DataTypes.TEXT,
    disbursement_process: DataTypes.TEXT,
    term_and_condition: DataTypes.TEXT,
    reporting_monitoring_requirement: DataTypes.TEXT,
    success_stories: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FinancialSupportDescription111E',
      tableName: 'FinancialSupportDescription111Es',
  });
  return FinancialSupportDescription111E;
};