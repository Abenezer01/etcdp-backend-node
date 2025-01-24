'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InsuranceCoverageInstitution115A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InsuranceCoverageInstitution115A.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    institution_name: DataTypes.STRING,
    insurance_products: DataTypes.TEXT,
    institution_address: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    website: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    email_address: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'InsuranceCoverageInstitution115A',
      tableName: 'InsuranceCoverageInstitution115As',
  });
  return InsuranceCoverageInstitution115A;
};