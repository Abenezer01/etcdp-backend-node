'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoanDetails113B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LoanDetails113B.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    applicantinformation_id: DataTypes.STRING,
    loan_type: DataTypes.STRING,
    loan_amount_requested: DataTypes.DOUBLE,
    loan_purpose: DataTypes.STRING,
    repayment_term: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'LoanDetails113B',
      tableName: 'LoanDetails113Bs',
  });
  return LoanDetails113B;
};