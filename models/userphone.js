"use strict";
const { Model } = require("sequelize");
const { decrypt, encrypt } = require("../utils/helper");
const cipherHelper = require("../controllers/utils/cipher-helper");

module.exports = (sequelize, DataTypes) => {
  class UserPhone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserPhone.init(
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
        allowNull: false,
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
          const encryptedValue = this.getDataValue("phone");
          const decryptedValue = cipherHelper.decrypt(encryptedValue);
          return decryptedValue;
        },
        set(value) {
          const encryptedValue = cipherHelper.encrypt(value);
          this.setDataValue("phone", encryptedValue);
        },
      },
      is_primary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "UserPhone",
      tableName: "userphones"
    }
  );
  return UserPhone;
};
