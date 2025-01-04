'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderEmployeeData26D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderEmployeeData26D.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    type: DataTypes.STRING,
    male: DataTypes.INTEGER,
    female: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StakeholderEmployeeData26D',
  });
  return StakeholderEmployeeData26D;
};