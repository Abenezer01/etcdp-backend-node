"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DocumentSubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DocumentSubCategory.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      documenttype_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      documentcategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      revision_no: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "DocumentSubCategory",
      tableName: "documentsubcategories"
    }
  );
  // DocumentSubCategory.associate = function(models) {

  //     DocumentSubCategory.belongsTo(models.StakeholderCategory)
  // };
  return DocumentSubCategory;
};
