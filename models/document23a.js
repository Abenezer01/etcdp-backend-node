'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document23A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Document23A.init({
    stakeholder_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    prepared_by: DataTypes.STRING,
    effective_start_date: DataTypes.DATE,
    effective_end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Document23A',
  });
  return Document23A;
};