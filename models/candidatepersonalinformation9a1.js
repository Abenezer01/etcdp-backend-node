'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CandidatePersonalInformation9A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CandidatePersonalInformation9A1.init({
    full_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    nationality: DataTypes.STRING,
    gender: DataTypes.STRING,
    id_no: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'CandidatePersonalInformation9A1',
      tableName: 'CandidatePersonalInformation9A1s'
  });
  return CandidatePersonalInformation9A1;
};