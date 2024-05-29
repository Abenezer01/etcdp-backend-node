"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ConstructionResourceQuantityPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionResourceQuantityPrice.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      resourcetype_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      resourcecategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      resourcesubcategory_id: DataTypes.UUID,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      item_specification: DataTypes.STRING,
      measurement_unit: DataTypes.STRING,
      stock_quantity: DataTypes.INTEGER,
      unit_price: DataTypes.DOUBLE,
      data_source_id: DataTypes.UUID,
      data_source_description: DataTypes.TEXT,
      source_address: DataTypes.STRING,
      file_id: DataTypes.DOUBLE,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ConstructionResourceQuantityPrice",
      tableName: "constructionresourcequantityprices"
    }
  );
  return ConstructionResourceQuantityPrice;
};
