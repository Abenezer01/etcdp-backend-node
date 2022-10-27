'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resourcesubcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  resourcesubcategory.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    category_id: DataTypes.UUID,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    measurement_unit: DataTypes.STRING,
    description: DataTypes.TEXT,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'resourcesubcategory',
  });
  return resourcesubcategory;
};