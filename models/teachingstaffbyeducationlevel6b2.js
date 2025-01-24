'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeachingStaffByEducationLevel6B2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeachingStaffByEducationLevel6B2.init({
    department: DataTypes.STRING,
    study_program: DataTypes.STRING,
    study_level_id: DataTypes.UUID,
    male: DataTypes.DOUBLE,
    female: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TeachingStaffByEducationLevel6B2',
      tableName: 'TeachingStaffByEducationLevel6B2s',
  });
  return TeachingStaffByEducationLevel6B2;
};