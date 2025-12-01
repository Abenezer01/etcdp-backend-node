"use strict";
const { Model } = require("sequelize");
const cipherHelper = require("../controllers/utils/cipher-helper");


module.exports = (sequelize, DataTypes) => {
  class UserEmail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserEmail.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  UserEmail.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: {
        type: DataTypes.UUID,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
          const encryptedValue = this.getDataValue("email");
          const decryptedValue = cipherHelper.decrypt(encryptedValue);
          return decryptedValue;
        },
        set(value) {
          const encryptedValue = cipherHelper.encrypt(value);
          this.setDataValue("email", encryptedValue);
        },
      },
      is_primary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "UserEmail",
      tableName: "useremails"
    }
  );
  return UserEmail;
};
