'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdditionalInformation112E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdditionalInformation112E.init({
    id: DataTypes.STRING,
    applicationform_id: DataTypes.STRING,
    business_description: DataTypes.TEXT,
    equipment_contribution: DataTypes.TEXT,
    date: DataTypes.DATE,
    declaration: DataTypes.TEXT,
    signature: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdditionalInformation112E',
  });
  return AdditionalInformation112E;
};