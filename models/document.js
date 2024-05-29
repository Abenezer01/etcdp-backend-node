"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Document.belongsTo(models.image, {
      //     foreignKey: 'image_id',
      // });
      Document.belongsTo(models.documenttype, {
        //as: "documenttype",
        foreignKey: "documenttype_id",
      });
      Document.belongsTo(models.documentcategory, {
        // as: "documentcategory",
        foreignKey: "documentcategory_id",
      });
      Document.belongsTo(models.documentsubcategory, {
        //as: "documentsubcategory",
        foreignKey: "documentsubcategory_id",
      });
      Document.belongsTo(models.department, {
        as: "department",
        foreignKey: "department_id",
      });
    }
  }
  Document.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      department_id: DataTypes.UUID,
      documenttype_id: DataTypes.UUID,
      documentcategory_id: DataTypes.UUID,
      documentsubcategory_id: DataTypes.UUID,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      author: DataTypes.STRING,
      edition: DataTypes.STRING,
      publication_date: DataTypes.DATE,
      isbn: DataTypes.INTEGER,
      copy_right_notice: DataTypes.STRING,
      attachement: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Document",
    }
  );
  // Document.associate = function(models) {
  //     // Document.belongsTo(models.address, {
  //     //     as: "address",
  //     //     foreignKey: "address_id"
  //     // })

  // }
  return Document;
};
