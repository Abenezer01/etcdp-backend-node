'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class electrictower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  electrictower.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    transmissionline_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    overall_length: DataTypes.DOUBLE,
    embedded_length: DataTypes.DOUBLE,
    columns: DataTypes.INTEGER,
    braces: DataTypes.INTEGER,
    beam_cross_arms: DataTypes.INTEGER,
    brace_cross_arm: DataTypes.INTEGER,
    elasticity_modulus: DataTypes.INTEGER,
    poission_ratio: DataTypes.DOUBLE,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'electrictower',
  });
  return electrictower;
};