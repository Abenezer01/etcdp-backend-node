'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Salary.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: {
      type: DataTypes.UUID
    },
    resource_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    min_pay: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    max_pay: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    salary_type: DataTypes.STRING,
    year: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Salary',
  });
  return Salary;
};