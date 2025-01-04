'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvestorAddress107D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InvestorAddress107D.init({
    investor_id: DataTypes.UUID,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    sub_city: DataTypes.STRING,
    woreda: DataTypes.STRING,
    kebele: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InvestorAddress107D',
  });
  return InvestorAddress107D;
};