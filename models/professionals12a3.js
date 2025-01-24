'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professionals12A3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Professionals12A3.init({
    organization_id: DataTypes.STRING,
    training_id: DataTypes.STRING,
    age_group_id: DataTypes.STRING,
    type: DataTypes.STRING,
    gender: DataTypes.STRING,
    profession: DataTypes.STRING,
    proficiency_level: DataTypes.STRING,
    nationality: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'Professionals12A3',
      tableName: 'Professionals12A3s',
  });
  return Professionals12A3;
};