'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studyperiodcost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  studyperiodcost.init({
    parent_id: DataTypes.UUID,
    higher_institute: DataTypes.STRING,
    study_field_title: DataTypes.STRING,
    description: DataTypes.TEXT,
    study_program: DataTypes.STRING,
    study_level: DataTypes.STRING,
    study_period: DataTypes.STRING,
    study_cost: DataTypes.DOUBLE,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'studyperiodcost',
  });
  return studyperiodcost;
};