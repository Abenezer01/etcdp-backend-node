'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialInformation113D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialInformation113D.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    applicantinformation_id: DataTypes.UUID,
    bank_name: DataTypes.STRING,
    account_number: DataTypes.STRING,
    bank_statements: DataTypes.STRING,
    total_monthly_expenses: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FinancialInformation113D',
      tableName: 'FinancialInformation113Ds',
  });
  return FinancialInformation113D;
};