'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class graduates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  graduates.init({
    parent_id: DataTypes.UUID,
    higher_institute: DataTypes.STRING,
    study_field_title: DataTypes.STRING,
    description: DataTypes.TEXT,
    study_program: DataTypes.STRING,
    study_level: DataTypes.STRING,
    study_period: DataTypes.STRING,
    gender: DataTypes.STRING,
    age_id: DataTypes.UUID,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'graduates',
  });
  return graduates;
};