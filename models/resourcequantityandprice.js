"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResourceQuantityAndPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ResourceQuantityAndPrice.belongsTo(models.detailresourcetype, {
        foreignKey: "detailresourcetype_id",
      });
      ResourceQuantityAndPrice.belongsTo(models.resourcebrand, {
        foreignKey: "resourcebrand_id",
      });
    }
  }
  ResourceQuantityAndPrice.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      resource_id: DataTypes.UUID,
      detailresourcetype_id: DataTypes.UUID,
      resourcebrand_id: DataTypes.UUID,
      project_id: DataTypes.UUID,
      quantity: DataTypes.DOUBLE,
      unit_price: DataTypes.DOUBLE,
      store_address: DataTypes.STRING,
      date: DataTypes.DATE,
      datasource: DataTypes.STRING,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ResourceQuantityAndPrice",
      tableName: "resourcequantityandprices"
    }
  );
  // ResourceQuantityAndPrice.associate = function(models) {

  // }
  return ResourceQuantityAndPrice;
};
