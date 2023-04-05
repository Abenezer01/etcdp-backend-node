"use strict";
const { Model } = require("sequelize");
const { encrypt, decrypt } = require("../utils/helper");
module.exports = (sequelize, DataTypes) => {
  class stakeholderemail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stakeholderemail.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: {
        type: DataTypes.UUID,
      },
      stakeholder_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const encryptedValue = this.getDataValue("email");
          const decryptedValue = decrypt(encryptedValue);
          return decryptedValue;
        },
        set(value) {
          const encryptedValue = encrypt(value);
          this.setDataValue("email", encryptedValue);
        },
      },
      is_primary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "stakeholderemail",
    }
  );
  return stakeholderemail;
};
