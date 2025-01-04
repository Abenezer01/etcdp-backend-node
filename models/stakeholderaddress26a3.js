'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderAddress26A3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderAddress26A3.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    sub_city: DataTypes.STRING,
    woreda: DataTypes.STRING,
    house_no: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StakeholderAddress26A3',
  });
  return StakeholderAddress26A3;
};