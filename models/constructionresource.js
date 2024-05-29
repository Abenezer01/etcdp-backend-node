"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ConstructionResource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ConstructionResource.belongsTo(models.resource, {
        foreignKey: "resource_id",
      });
    }
  }
  ConstructionResource.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      resource_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      used_quantity: DataTypes.DOUBLE,
      unit_price: DataTypes.DOUBLE,
      period_from: DataTypes.DATE,
      period_until: DataTypes.DATE,
      data_source: DataTypes.STRING,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ConstructionResource",
      tableName: "constructionresources"
    }
  );

  return ConstructionResource;
};
