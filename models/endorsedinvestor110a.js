'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EndorsedInvestor110A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EndorsedInvestor110A.init({
    id: DataTypes.STRING,
    organization_name: DataTypes.STRING,
    website: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'EndorsedInvestor110A',
  });
  return EndorsedInvestor110A;
};