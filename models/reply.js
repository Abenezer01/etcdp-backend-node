"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Reply.belongsTo(models.User, {
        foreignKey: "creator_id",
        as: "user"
      });
    }
  }
  Reply.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      actionstate_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      creator_id: {
        type: DataTypes.UUID,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      is_authorized: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Reply",
      tableName: "replies"
      
    }
  );

  
  return Reply;
};
