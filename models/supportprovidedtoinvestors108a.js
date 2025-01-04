'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupportProvidedToInvestors108A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SupportProvidedToInvestors108A.init({
    id: DataTypes.STRING,
    investor_name: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    type_of_investor: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    location: DataTypes.STRING,
    support_provided: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'SupportProvidedToInvestors108A',
  });
  return SupportProvidedToInvestors108A;
};