"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notification.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subject: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      notifiable_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      notifiable_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      data: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      read_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "notification",
    }
  );
  return notification;
};
