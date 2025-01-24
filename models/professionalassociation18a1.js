'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalAssociation18A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalAssociation18A1.init({
    name: DataTypes.STRING,
    establishment_date: DataTypes.DATE,
    membership_fee: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProfessionalAssociation18A1',
      tableName: 'ProfessionalAssociation18A1s',
  });
  return ProfessionalAssociation18A1;
};