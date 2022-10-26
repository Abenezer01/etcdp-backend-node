'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class totalemployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  totalemployee.init({
    parent_id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    year: DataTypes.INTEGER,
    domain: DataTypes.STRING,
    department_id: DataTypes.UUID,
    nationality: DataTypes.STRING,
    gender: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'totalemployee',
  });
  return totalemployee;
};