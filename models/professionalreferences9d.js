'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalReferences9D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalReferences9D.init({
    candidate_personal_information_id: DataTypes.UUID,
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProfessionalReferences9D',
      tableName: 'ProfessionalReferences9Ds',
  });
  return ProfessionalReferences9D;
};