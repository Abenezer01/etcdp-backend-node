"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // document.belongsTo(models.image, {
      //     foreignKey: 'image_id',
      // });
      document.belongsTo(models.documenttype, {
        //as: "documenttype",
        foreignKey: "documenttype_id",
      });
      document.belongsTo(models.documentcategory, {
        // as: "documentcategory",
        foreignKey: "documentcategory_id",
      });
      document.belongsTo(models.documentsubcategory, {
        //as: "documentsubcategory",
        foreignKey: "documentsubcategory_id",
      });
      document.belongsTo(models.department, {
        as: "department",
        foreignKey: "department_id",
      });
    }
  }
  document.init(
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
      modelName: "document",
    }
  );
  // document.associate = function(models) {
  //     // document.belongsTo(models.address, {
  //     //     as: "address",
  //     //     foreignKey: "address_id"
  //     // })

  // }
  return document;
};
