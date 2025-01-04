'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupportGeneralInformation111C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SupportGeneralInformation111C.init({
    id: DataTypes.STRING,
    financial_support_program_name: DataTypes.STRING,
    institution: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SupportGeneralInformation111C',
  });
  return SupportGeneralInformation111C;
};