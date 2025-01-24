'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CandidateEducationProfessionalExperience9A3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CandidateEducationProfessionalExperience9A3.init({
    candidate_personal_information_id: DataTypes.UUID,
    total_years_professional_experience: DataTypes.UUID,
    previous_employment: DataTypes.STRING,
    employee_organization_name: DataTypes.STRING,
    responsibilities_held: DataTypes.STRING,
    job_titles: DataTypes.STRING,
    years_of_employment: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'CandidateEducationProfessionalExperience9A3',
      tableName: 'CandidateEducationProfessionalExperience9A3s'
  });
  return CandidateEducationProfessionalExperience9A3;
};