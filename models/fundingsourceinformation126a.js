'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FundingSourceInformation126A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FundingSourceInformation126A.init({
    funding_organization: DataTypes.STRING,
    funding_program: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    contact_phone: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FundingSourceInformation126A',
      tableName: 'FundingSourceInformation126As',
  });
  return FundingSourceInformation126A;
};