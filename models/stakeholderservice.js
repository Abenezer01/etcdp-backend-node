"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class stakeholderservice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stakeholderservice.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      stakeholder_id: DataTypes.UUID,
      construction_related_service_id: DataTypes.UUID,
      unit_price: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "stakeholderservice",
    }
  );
  stakeholderservice.associate = function (models) {
    stakeholderservice.belongsTo(models.constructionrelatedservice, {
      as: "constructionrelatedservice",
      foreignKey: "construction_related_service_id",
      constraints: false,
      attribute: ["description", "title"],
    });
  };
  return stakeholderservice;
};
