'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salary16A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Salary16A2.init({
    organization_id: DataTypes.STRING,
    professional_level: DataTypes.STRING,
    study_field_id: DataTypes.STRING,
    education_level_id: DataTypes.STRING,
    department: DataTypes.STRING,
    profession: DataTypes.STRING,
    average_daily_wage: DataTypes.DECIMAL
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'Salary16A2',
      tableName: 'Salary16A2s',
  });
  return Salary16A2;
};