'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreditFacilityApplicantInformation112A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CreditFacilityApplicantInformation112A1.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    full_name: DataTypes.STRING,
    company_name: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    email_address: DataTypes.STRING,
    business_address: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'CreditFacilityApplicantInformation112A1',
      tableName: 'CreditFacilityApplicantInformation112A1s',
  });
  return CreditFacilityApplicantInformation112A1;
};