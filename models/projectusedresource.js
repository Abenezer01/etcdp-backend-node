"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectUsedResource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectUsedResource.init(
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
      type: DataTypes.STRING,
      resourcecategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      resouresubcategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      item_specification: DataTypes.STRING,
      measurement_unit: DataTypes.STRING,
      quantity: DataTypes.DOUBLE,
      unit_price: DataTypes.DOUBLE,
      period_from: DataTypes.DATE,
      period_until: DataTypes.DATE,
      data_source_id: DataTypes.UUID,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProjectUsedResource",
      tableName: "projectusedresources"
    }
  );
  return ProjectUsedResource;
};
