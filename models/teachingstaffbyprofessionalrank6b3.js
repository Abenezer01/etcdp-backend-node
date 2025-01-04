'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeachingStaffByProfessionalRank6B3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeachingStaffByProfessionalRank6B3.init({
    department: DataTypes.STRING,
    study_program: DataTypes.STRING,
    professional_rank_id: DataTypes.UUID,
    male: DataTypes.DOUBLE,
    female: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'TeachingStaffByProfessionalRank6B3',
  });
  return TeachingStaffByProfessionalRank6B3;
};