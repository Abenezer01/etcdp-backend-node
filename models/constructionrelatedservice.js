"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ConstructionRelatedService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  ConstructionRelatedService.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      type_of_service: DataTypes.STRING,
      specification_detail: DataTypes.STRING,
      unit_of_measurement: DataTypes.STRING,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "ConstructionRelatedService",
      tableName: "constructionrelatedservices"
    }
  );
  return ConstructionRelatedService;
};
