'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalCompetencyCertification10A4 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalCompetencyCertification10A4.init({
    personal_information_id: DataTypes.UUID,
    competency_parameter_id: DataTypes.UUID,
    certification_title: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProfessionalCompetencyCertification10A4',
      tableName: 'ProfessionalCompetencyCertification10A4s',
  });
  return ProfessionalCompetencyCertification10A4;
};