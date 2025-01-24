'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssociationMembership9C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AssociationMembership9C.init({
    candidate_personal_information_id: DataTypes.UUID,
    membership_length: DataTypes.STRING,
    position_held: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'AssociationMembership9C',
      tableName: 'AssociationMembership9Cs'
  });
  return AssociationMembership9C;
};