'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projectsubcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectsubcategory.init({
    parent_id: DataTypes.UUID,
    category_id: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'projectsubcategory',
  });
  return projectsubcategory;
};