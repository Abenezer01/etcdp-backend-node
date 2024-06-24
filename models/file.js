"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` File will call this method automatically.
     */
    static associate(/* models*/) {
      // File.hasOne(models.projectplan, {
      //     foreignKey: "file_id"
      // })
      // define association here
    }
  }
  File.init(
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
      url: DataTypes.TEXT,
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      extension: DataTypes.STRING,
      reference_id: DataTypes.UUID,
      size: DataTypes.DOUBLE,
      revision_no: {
        type: DataTypes.INTEGER,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "File",
      tableName: "files"
    }
  );
  return File;
};
