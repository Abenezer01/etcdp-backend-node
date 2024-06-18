"use strict";
const { Model } = require("sequelize");
const CipherHelper = require('../controllers/utils/cipher-helper')
module.exports = (sequelize, DataTypes) => {
  class StakeholderEmail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      StakeholderEmail.belongsTo(models.Stakeholder, {
        as: "stakeholder",
        foreignKey: "stakeholder_id",
      });
    }
  }
  StakeholderEmail.init(
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
          const decryptedValue = CipherHelper.decrypt(encryptedValue);
          return decryptedValue;
        },
        set(value) {
          const encryptedValue = CipherHelper.encrypt(value);
          this.setDataValue("email", encryptedValue);
        },
      },
      is_primary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "StakeholderEmail",
      tableName: "stakeholderemails"
    }
  );
  return StakeholderEmail;
};
