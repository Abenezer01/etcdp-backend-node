"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DocumentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DocumentType.hasMany(models.DocumentCategory, {
        foreignKey: "documenttype_id",
        as: "documentcategories",
    });
        
    DocumentType.hasMany(models.DocumentSubCategory, {
            foreignKey: "documenttype_id",
            as: "documentsubcategories",
    });
    }
  }
  DocumentType.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      flag: {
        type: DataTypes.STRING,
      },
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "DocumentType",
      tableName: "documenttypes"
    }
  );
  
  return DocumentType;
};
