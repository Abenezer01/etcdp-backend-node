'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member18A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member18A2.init({
    professional_association_id: DataTypes.UUID,
    age_group_id: DataTypes.UUID,
    education_level_id: DataTypes.UUID,
    gender: DataTypes.STRING,
    proficiency_level: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'Member18A2',
      tableName: 'Member18A2s',
  });
  return Member18A2;
};