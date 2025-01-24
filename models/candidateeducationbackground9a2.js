'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CandidateEducationBackground9A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CandidateEducationBackground9A2.init({
    candidate_personal_information_id: DataTypes.UUID,
    level_of_study: DataTypes.STRING,
    field_of_study: DataTypes.STRING,
    institution_attended: DataTypes.STRING,
    duration_of_study: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'CandidateEducationBackground9A2',
      tableName: 'CandidateEducationBackground9A2s'
  });
  return CandidateEducationBackground9A2;
};