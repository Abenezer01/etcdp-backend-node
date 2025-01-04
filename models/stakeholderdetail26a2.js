'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderDetail26A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderDetail26A2.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    paidup_capital: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    license_issued_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'StakeholderDetail26A2',
  });
  return StakeholderDetail26A2;
};