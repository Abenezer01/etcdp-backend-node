'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicantDetail126B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApplicantDetail126B.init({
    applicant_name: DataTypes.STRING,
    company_name: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ApplicantDetail126B',
      tableName: 'ApplicantDetail126Bs',
  });
  return ApplicantDetail126B;
};