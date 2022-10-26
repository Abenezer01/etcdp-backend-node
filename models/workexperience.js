'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workexperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workexperience.init({
    parent_id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    year: DataTypes.INTEGER,
    domain: DataTypes.STRING,
    gender: DataTypes.STRING,
    experience_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'workexperience',
  });
  return workexperience;
};