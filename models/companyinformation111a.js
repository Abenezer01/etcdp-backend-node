'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyInformation111A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyInformation111A.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    business_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CompanyInformation111A',
  });
  return CompanyInformation111A;
};