'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicantInformation113A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApplicantInformation113A.init({
    id: DataTypes.STRING,
    full_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.STRING,
    nationality: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    email_address: DataTypes.STRING,
    id_passport_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ApplicantInformation113A',
  });
  return ApplicantInformation113A;
};