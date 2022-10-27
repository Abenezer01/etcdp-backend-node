'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class constructionresourcequantityprice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  constructionresourcequantityprice.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    type: DataTypes.STRING,
    resourcecategory_id: DataTypes.UUID,
    resourcesubcategory_id: DataTypes.UUID,
    name: DataTypes.STRING,
    item_specification: DataTypes.STRING,
    measurement_unit: DataTypes.STRING,
    stock_quantity: DataTypes.INTEGER,
    unit_price: DataTypes.DOUBLE,
    data_source_id: DataTypes.UUID,
    description: DataTypes.TEXT,
    source_address: DataTypes.STRING,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'constructionresourcequantityprice',
  });
  return constructionresourcequantityprice;
};