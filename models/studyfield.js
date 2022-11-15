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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    study_program: {
      type: DataTypes.STRING,
      allowNull: false
    },
    studylevel_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'studyfield',
  });
  return studyfield;
};