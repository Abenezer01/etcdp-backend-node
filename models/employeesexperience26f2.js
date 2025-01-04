'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeesExperience26F2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeesExperience26F2.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    experiencelevel_id: DataTypes.UUID,
    male: DataTypes.INTEGER,
    female: DataTypes.INTEGER,
    attachment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmployeesExperience26F2',
  });
  return EmployeesExperience26F2;
};