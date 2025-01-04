'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupportingDocument112B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SupportingDocument112B.init({
    id: DataTypes.STRING,
    applicationform_id: DataTypes.STRING,
    document_type: DataTypes.STRING,
    attachment: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SupportingDocument112B',
  });
  return SupportingDocument112B;
};