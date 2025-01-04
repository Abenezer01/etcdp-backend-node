'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeesEducation26E3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeesEducation26E3.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    agelevel_id: DataTypes.UUID,
    educationlevel_id: DataTypes.UUID,
    male: DataTypes.INTEGER,
    female: DataTypes.INTEGER,
    attachment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmployeesEducation26E3',
  });
  return EmployeesEducation26E3;
};