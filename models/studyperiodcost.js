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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    higher_institute_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    studyfield_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    description: DataTypes.TEXT,
    study_program: DataTypes.STRING,
    studylevel_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    study_period: {
      type: DataTypes.DATE,
      allowNull: false
    },
    study_cost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'studyperiodcost',
  });
  return studyperiodcost;
};