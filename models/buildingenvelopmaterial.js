"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BuildingEnvelopMaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BuildingEnvelopMaterial.init(
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
      exterior_walls: DataTypes.STRING,
      roof_assembly: DataTypes.STRING,
      exterior_windows: DataTypes.STRING,
      exterior_doors: DataTypes.STRING,
      shading_components: DataTypes.STRING,
      file_id: DataTypes.STRING,
      remark: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "BuildingEnvelopMaterial",
      tableName: "buildingenvelopmaterials",

      timestamps: true,
    }
  );
  return BuildingEnvelopMaterial;
};
