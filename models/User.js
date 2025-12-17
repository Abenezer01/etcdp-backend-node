"use strict";
const {Model } = require("sequelize");
const cipherHelper = require("../controllers/utils/cipher-helper");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.UserEmail, {
        foreignKey: "user_id",
        as: "useremails"
      });
      User.hasMany(models.UserPhone, {
        foreignKey: "user_id",
        as: "userphones"
      });
      User.hasMany(models.ActionState, {
        foreignKey: "model_id",
        as: "users",
      });
      User.hasMany(models.UserPosition, {
        foreignKey: "user_id",
        as: "positions",
      });

      User.hasMany(models.RefreshToken, {
        foreignKey: 'user_id',
        as: 'refreshTokens', // You can retrieve all tokens like: user.getRefreshTokens()
        onDelete: 'CASCADE'
    });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const encryptedValue = this.getDataValue("first_name");
          const decryptedValue = cipherHelper.decrypt(encryptedValue);
          return decryptedValue;
        },
        set(value) {
          const encryptedValue = cipherHelper.encrypt(value);
          this.setDataValue("first_name", encryptedValue);
        },
      },
      middle_name: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const encryptedValue = this.getDataValue("middle_name");
          const decryptedValue = cipherHelper.decrypt(encryptedValue);
          return decryptedValue;
        },
        set(value) {
          const encryptedValue = cipherHelper.encrypt(value);
          this.setDataValue("middle_name", encryptedValue);
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const encryptedValue = this.getDataValue("last_name");
          const decryptedValue = cipherHelper.decrypt(encryptedValue);
          return decryptedValue;
        },
        set(value) {
          const encryptedValue = cipherHelper.encrypt(value);
          this.setDataValue("last_name", encryptedValue);
        },
      },
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      marital_status: DataTypes.BOOLEAN,
      partner_name: DataTypes.STRING,
      birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      refresh_token: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
      stakeholder_id: DataTypes.UUID,
      lang: DataTypes.STRING,
      is_activated: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      full_name: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.first_name + " " + this.middle_name + " " + this.last_name;
        },
      },
      name: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.first_name + " " + this.middle_name;
        },
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "User",
      tableName: "users"
    }
  );
  return User;
};
