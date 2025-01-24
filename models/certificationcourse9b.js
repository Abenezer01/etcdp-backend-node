'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CertificationCourse9B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CertificationCourse9B.init({
    candidate_personal_information_id: DataTypes.UUID,
    certificate_name: DataTypes.UUID,
    duration: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'CertificationCourse9B',
      tableName: 'CertificationCourse9Bs'
  });
  return CertificationCourse9B;
};