'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GraduatedStudentInForeignCountry5A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GraduatedStudentInForeignCountry5A.init({
    stakeholder_id: DataTypes.UUID,
    study_level_id: DataTypes.UUID,
    study_program_id: DataTypes.UUID,
    study_field_id: DataTypes.UUID,
    age_group_id: DataTypes.UUID,
    male: DataTypes.STRING,
    female: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GraduatedStudentInForeignCountry5A',
  });
  return GraduatedStudentInForeignCountry5A;
};