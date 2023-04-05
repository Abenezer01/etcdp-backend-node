"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class documentcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      documentcategory.hasMany(models.documentsubcategory, {
        foreignKey: "documentcategory_Id",
        as: "documentsubcategories",
      });
      // documentcategory.belongsTo(models.document, {
      //     foreignKey: 'documentcategory_Id',
      //     as: 'documentsubcategories',
      // });
    }
  }
  documentcategory.init(
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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "documentcategory",
    }
  );
  // documentcategory.associate = function(models) {
  //     // associations can be defined here

  // }
  return documentcategory;
};
