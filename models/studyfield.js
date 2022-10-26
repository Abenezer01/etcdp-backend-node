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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    study_program: DataTypes.STRING,
    study_level: DataTypes.STRING,
    revision_no: DataTypes.INTEGER,
    revision_no: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'studyfield',
  });
  return studyfield;
};