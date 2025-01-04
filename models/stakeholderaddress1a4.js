'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderAddress1A4 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderAddress1A4.init({
    stakeholder_id: DataTypes.STRING,
    region: DataTypes.STRING,
    zone: DataTypes.STRING,
    city: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'StakeholderAddress1A4',
  });
  return StakeholderAddress1A4;
};