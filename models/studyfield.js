'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studyfield extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  studyfield.init({
    parent_id: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    study_program: DataTypes.STRING,
    study_level: DataTypes.STRING,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'studyfield',
  });
  return studyfield;
};