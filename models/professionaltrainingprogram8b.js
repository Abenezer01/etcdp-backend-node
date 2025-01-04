'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalTrainingProgram8B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalTrainingProgram8B.init({
    program_name: DataTypes.STRING,
    qualification_required: DataTypes.STRING,
    duration: DataTypes.STRING,
    average_trainees_per_year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProfessionalTrainingProgram8B',
  });
  return ProfessionalTrainingProgram8B;
};