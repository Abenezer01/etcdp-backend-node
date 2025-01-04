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
    sequelize,
    modelName: 'AssociationMembership9C',
  });
  return AssociationMembership9C;
};