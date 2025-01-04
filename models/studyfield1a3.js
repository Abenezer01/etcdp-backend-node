'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudyField1A3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudyField1A3.init({
    study_level_id: DataTypes.STRING,
    study_program_id: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    average_admission_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudyField1A3',
  });
  return StudyField1A3;
};