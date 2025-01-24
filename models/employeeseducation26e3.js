'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeesEducation26E3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeesEducation26E3.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    stakeholder_id: DataTypes.UUID,
    agelevel_id: DataTypes.UUID,
    educationlevel_id: DataTypes.UUID,
    male: DataTypes.INTEGER,
    female: DataTypes.INTEGER,
    attachment: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EmployeesEducation26E3',
      tableName: 'EmployeesEducation26E3s',
  });
  return EmployeesEducation26E3;
};