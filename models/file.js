'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class file extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  file.init({
    parent_id: DataTypes.UUID,
    fileable_id: DataTypes.UUID,
    fileable_type: DataTypes.STRING,
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    url: DataTypes.TEXT,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    extension: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'file',
  });
  return file;
};