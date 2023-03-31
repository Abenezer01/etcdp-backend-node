'use strict';
const {
  Model
} = require('sequelize');
const { decrypt, encrypt } = require('../utils/helper');
module.exports = (sequelize, DataTypes) => {
  class userphone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userphone.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: {
      type: DataTypes.UUID
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    phone: {
      type: DataTypes.UUID,
      allowNull: false,
      get() {
        const encryptedValue = this.getDataValue("phone");
        const decryptedValue = decrypt(encryptedValue);
        return decryptedValue;
      },
      set(value) {
          const encryptedValue = encrypt(value);
          this.setDataValue('phone', encryptedValue);
      }
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'userphone',
  });
  return userphone;
};