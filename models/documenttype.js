"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class documenttype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  documenttype.init(
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
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "documenttype",
    }
  );
  documenttype.associate = function (models) {
    // associations can be defined here
    // documenttype.hasMany(models.projectcategory, {
    //     foreignKey: 'documenttype_id',
    //     as: 'Projectcategories',
    // }, );
    // models.projectcategory.associate = function(models) {
    //     // associations can be defined here
    //     projectcategory.hasMany(models.projectsubcategory, {
    //         foreignKey: 'category_id',
    //         as: 'Projectsubcategories',
    //     });
    // }
  };
  return documenttype;
};
