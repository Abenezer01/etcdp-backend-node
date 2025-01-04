'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalInformation10A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalInformation10A1.init({
    candidate_personal_information_id: DataTypes.UUID,
    full_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    nationality: DataTypes.STRING,
    gender: DataTypes.STRING,
    id_no: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PersonalInformation10A1',
  });
  return PersonalInformation10A1;
};