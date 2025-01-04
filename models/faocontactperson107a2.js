'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FAOContactPerson107A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FAOContactPerson107A2.init({
    financial_aid_investment_opportunity_id: DataTypes.UUID,
    full_name: DataTypes.STRING,
    position_role: DataTypes.STRING,
    organization_name: DataTypes.STRING,
    department: DataTypes.STRING,
    email_address: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FAOContactPerson107A2',
  });
  return FAOContactPerson107A2;
};