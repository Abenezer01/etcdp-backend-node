'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContractorInformation114A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContractorInformation114A.init({
    id: DataTypes.UUID,
    contractor_name: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    email_address: DataTypes.STRING,
    company_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContractorInformation114A',
  });
  return ContractorInformation114A;
};