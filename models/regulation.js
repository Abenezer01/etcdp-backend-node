'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class regulation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  regulation.init({
    parent_id: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    prepared_by: DataTypes.STRING,
    effective_date_from: DataTypes.DATE,
    effective_upto: DataTypes.DATE,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'regulation',
  });
  return regulation;
};